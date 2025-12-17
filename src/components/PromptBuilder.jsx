import { useState, useMemo, useCallback } from 'react';
import {
    Wand2,
    Copy,
    Check,
    RotateCcw,
    ChevronDown,
    Code,
    FileText,
    Briefcase,
    TestTube,
    Settings,
    Sparkles,
    Eye,
    Edit3
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { templates, roles } from '../data/templates';

const iconMap = {
    Code,
    FileText,
    Briefcase,
    TestTube,
    Settings
};

function extractPlaceholders(template) {
    const regex = /\[([^\]]+)\]/g;
    const placeholders = [];
    let match;
    while ((match = regex.exec(template)) !== null) {
        const placeholder = match[1];
        if (!placeholders.includes(placeholder)) {
            placeholders.push(placeholder);
        }
    }
    return placeholders;
}

function formatPlaceholderLabel(placeholder) {
    return placeholder
        .replace(/\//g, ' / ')
        .replace(/\s+/g, ' ')
        .trim();
}

function isMultilineField(placeholder) {
    const multilineKeywords = [
        'code', 'error', 'paste', 'describe', 'list', 'requirements',
        'message', 'stack', 'trace', 'diff', 'changes', 'feedback',
        'spec', 'schema', 'structure', 'html', 'json', 'sql', 'config'
    ];
    const lowerPlaceholder = placeholder.toLowerCase();
    return multilineKeywords.some(keyword => lowerPlaceholder.includes(keyword));
}

function TemplateSelector({ selectedTemplate, onSelect, selectedRole, onRoleChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const roleTemplates = templates[selectedRole] || [];

    return (
        <div className="builder__selector">
            <div className="builder__selector-header">
                <h3 className="builder__selector-title">
                    <Sparkles size={18} />
                    {t({
                        vi: 'Chọn Template',
                        en: 'Select Template',
                        ja: 'テンプレートを選択'
                    })}
                </h3>
            </div>

            <div className="builder__role-tabs">
                {roles.map(role => {
                    const Icon = iconMap[role.icon];
                    return (
                        <button
                            key={role.id}
                            className={`builder__role-tab ${selectedRole === role.id ? 'builder__role-tab--active' : ''}`}
                            onClick={() => onRoleChange(role.id)}
                        >
                            <Icon size={16} />
                            <span>{role.name}</span>
                        </button>
                    );
                })}
            </div>

            <div className="builder__template-dropdown">
                <button
                    className="builder__dropdown-trigger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>
                        {selectedTemplate
                            ? t(selectedTemplate.title)
                            : t({
                                vi: 'Chọn một template...',
                                en: 'Select a template...',
                                ja: 'テンプレートを選択...'
                            })
                        }
                    </span>
                    <ChevronDown size={18} className={isOpen ? 'rotate' : ''} />
                </button>

                {isOpen && (
                    <div className="builder__dropdown-menu">
                        {roleTemplates.map(template => (
                            <button
                                key={template.id}
                                className={`builder__dropdown-item ${selectedTemplate?.id === template.id ? 'builder__dropdown-item--active' : ''}`}
                                onClick={() => {
                                    onSelect(template);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="builder__dropdown-item-title">{t(template.title)}</span>
                                <span className="builder__dropdown-item-desc">{t(template.description)}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function BuilderForm({ placeholders, values, onChange }) {
    const { t } = useLanguage();

    if (placeholders.length === 0) {
        return (
            <div className="builder__form-empty">
                <Edit3 size={32} />
                <p>{t({
                    vi: 'Chọn template để bắt đầu điền thông tin',
                    en: 'Select a template to start filling in information',
                    ja: 'テンプレートを選択して情報入力を開始'
                })}</p>
            </div>
        );
    }

    return (
        <div className="builder__form">
            <h3 className="builder__form-title">
                <Edit3 size={18} />
                {t({
                    vi: 'Điền thông tin',
                    en: 'Fill in Details',
                    ja: '詳細を入力'
                })}
            </h3>
            <div className="builder__fields">
                {placeholders.map((placeholder, index) => {
                    const isMultiline = isMultilineField(placeholder);
                    const fieldId = `field-${index}`;

                    return (
                        <div key={placeholder} className="builder__field">
                            <label htmlFor={fieldId} className="builder__field-label">
                                {formatPlaceholderLabel(placeholder)}
                            </label>
                            {isMultiline ? (
                                <textarea
                                    id={fieldId}
                                    className="builder__field-textarea"
                                    placeholder={`Enter ${formatPlaceholderLabel(placeholder)}...`}
                                    value={values[placeholder] || ''}
                                    onChange={(e) => onChange(placeholder, e.target.value)}
                                    rows={4}
                                />
                            ) : (
                                <input
                                    id={fieldId}
                                    type="text"
                                    className="builder__field-input"
                                    placeholder={`Enter ${formatPlaceholderLabel(placeholder)}...`}
                                    value={values[placeholder] || ''}
                                    onChange={(e) => onChange(placeholder, e.target.value)}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function PreviewPanel({ template, values, placeholders }) {
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();

    const generatedPrompt = useMemo(() => {
        if (!template) return '';

        let result = template.template;
        placeholders.forEach(placeholder => {
            const value = values[placeholder];
            const regex = new RegExp(`\\[${placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]`, 'g');
            if (value && value.trim()) {
                result = result.replace(regex, value);
            }
        });
        return result;
    }, [template, values, placeholders]);

    const filledCount = useMemo(() => {
        return placeholders.filter(p => values[p] && values[p].trim()).length;
    }, [placeholders, values]);

    const handleCopy = useCallback(async () => {
        await navigator.clipboard.writeText(generatedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [generatedPrompt]);

    if (!template) {
        return (
            <div className="builder__preview builder__preview--empty">
                <Eye size={32} />
                <p>{t({
                    vi: 'Preview sẽ hiển thị ở đây',
                    en: 'Preview will appear here',
                    ja: 'プレビューがここに表示されます'
                })}</p>
            </div>
        );
    }

    return (
        <div className="builder__preview">
            <div className="builder__preview-header">
                <h3 className="builder__preview-title">
                    <Eye size={18} />
                    {t({
                        vi: 'Preview Prompt',
                        en: 'Preview Prompt',
                        ja: 'プロンプトプレビュー'
                    })}
                </h3>
                <span className="builder__preview-progress">
                    {filledCount}/{placeholders.length} {t({
                        vi: 'đã điền',
                        en: 'filled',
                        ja: '入力済み'
                    })}
                </span>
            </div>

            <div className="builder__preview-content">
                <pre className="builder__preview-code">{generatedPrompt}</pre>
            </div>

            <div className="builder__preview-actions">
                <button
                    className="btn btn--primary btn--lg"
                    onClick={handleCopy}
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied
                        ? t({ vi: 'Đã copy!', en: 'Copied!', ja: 'コピー済み!' })
                        : t({ vi: 'Copy Prompt', en: 'Copy Prompt', ja: 'コピー' })
                    }
                </button>
            </div>
        </div>
    );
}

export default function PromptBuilder() {
    const [selectedRole, setSelectedRole] = useState('developer');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [values, setValues] = useState({});
    const { t } = useLanguage();

    const placeholders = useMemo(() => {
        if (!selectedTemplate) return [];
        return extractPlaceholders(selectedTemplate.template);
    }, [selectedTemplate]);

    const handleTemplateSelect = useCallback((template) => {
        setSelectedTemplate(template);
        setValues({});
    }, []);

    const handleRoleChange = useCallback((role) => {
        setSelectedRole(role);
        setSelectedTemplate(null);
        setValues({});
    }, []);

    const handleValueChange = useCallback((placeholder, value) => {
        setValues(prev => ({
            ...prev,
            [placeholder]: value
        }));
    }, []);

    const handleReset = useCallback(() => {
        setValues({});
    }, []);

    return (
        <section className="builder">
            <div className="builder__hero">
                <h2 className="builder__title">
                    <Wand2 size={28} />
                    Prompt Builder
                </h2>
                <p className="builder__subtitle">
                    {t({
                        vi: 'Chọn template, điền thông tin của bạn, và tạo prompt hoàn chỉnh để sử dụng với AI',
                        en: 'Select a template, fill in your details, and generate a complete prompt for AI',
                        ja: 'テンプレートを選択し、詳細を入力して、AI用の完全なプロンプトを生成'
                    })}
                </p>
            </div>

            <div className="builder__container">
                <div className="builder__sidebar">
                    <TemplateSelector
                        selectedTemplate={selectedTemplate}
                        onSelect={handleTemplateSelect}
                        selectedRole={selectedRole}
                        onRoleChange={handleRoleChange}
                    />

                    <BuilderForm
                        placeholders={placeholders}
                        values={values}
                        onChange={handleValueChange}
                    />

                    {selectedTemplate && (
                        <button className="builder__reset-btn" onClick={handleReset}>
                            <RotateCcw size={16} />
                            {t({ vi: 'Reset form', en: 'Reset form', ja: 'フォームをリセット' })}
                        </button>
                    )}
                </div>

                <div className="builder__main">
                    <PreviewPanel
                        template={selectedTemplate}
                        values={values}
                        placeholders={placeholders}
                    />
                </div>
            </div>
        </section>
    );
}
