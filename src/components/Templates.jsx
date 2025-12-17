import { useState, useMemo } from 'react';
import {
    Search,
    Copy,
    Check,
    X,
    Code,
    FileText,
    Briefcase,
    TestTube,
    Settings,
    Star,
    Lightbulb,
    Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { templates, bestPractices, dosAndDonts, roles } from '../data/templates';

const iconMap = {
    Code,
    FileText,
    Briefcase,
    TestTube,
    Settings,
    Zap
};

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button className="btn btn--primary" onClick={handleCopy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

function TemplateCard({ template, onSelect }) {
    const { t } = useLanguage();

    return (
        <div className="template-card" onClick={() => onSelect(template)}>
            <div className="template-card__header">
                <h3 className="template-card__title">{t(template.title)}</h3>
                {template.popular && (
                    <span className="template-card__badge">
                        <Star size={12} fill="currentColor" />
                        Popular
                    </span>
                )}
            </div>
            <p className="template-card__desc">{t(template.description)}</p>
        </div>
    );
}

function TemplateModal({ template, onClose }) {
    const { t } = useLanguage();

    if (!template) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className="modal">
                <div className="modal__header">
                    <div>
                        <h2 className="modal__title">{t(template.title)}</h2>
                        <p className="modal__subtitle">{t(template.description)}</p>
                    </div>
                    <button className="modal__close" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>
                <div className="modal__body">
                    <pre className="modal__code">{template.template}</pre>
                </div>
                <div className="modal__footer">
                    <button className="btn btn--ghost" onClick={onClose}>
                        {t({ vi: 'Đóng', en: 'Close', ja: '閉じる' })}
                    </button>
                    <CopyButton text={template.template} />
                </div>
            </div>
        </div>
    );
}

function TemplatesSection({ selectedRole, setSelectedRole, searchQuery, setSearchQuery }) {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const { t } = useLanguage();

    const filteredTemplates = useMemo(() => {
        const roleTemplates = templates[selectedRole] || [];
        if (!searchQuery) return roleTemplates;
        return roleTemplates.filter(tmp => {
            const title = typeof tmp.title === 'string' ? tmp.title : (tmp.title.en || tmp.title.vi || '');
            const desc = typeof tmp.description === 'string' ? tmp.description : (tmp.description.en || tmp.description.vi || '');
            return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                desc.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [selectedRole, searchQuery]);

    return (
        <>
            <div className="templates__hero">
                <h2 className="templates__title">
                    Prompt Templates
                    <span> {t({
                        vi: 'cho Software Development',
                        en: 'for Software Development',
                        ja: 'ソフトウェア開発向け'
                    })}</span>
                </h2>
                <p className="templates__subtitle">
                    {t({
                        vi: 'Tăng hiệu quả làm việc với AI qua các templates đã được thử nghiệm thực tế. Copy, customize, và sử dụng ngay.',
                        en: 'Boost productivity with AI using battle-tested templates. Copy, customize, and use immediately.',
                        ja: '実戦テスト済みのテンプレートでAIとの作業効率を向上。コピー、カスタマイズ、すぐに使用。'
                    })}
                </p>
            </div>

            <div className="search">
                <Search size={20} className="search__icon" />
                <input
                    type="text"
                    className="search__input"
                    placeholder={t({
                        vi: 'Tìm template...',
                        en: 'Search templates...',
                        ja: 'テンプレートを検索...'
                    })}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="role-tabs">
                {roles.map(role => {
                    const Icon = iconMap[role.icon];
                    return (
                        <button
                            key={role.id}
                            className={`role-tab ${selectedRole === role.id ? 'role-tab--active' : ''}`}
                            onClick={() => setSelectedRole(role.id)}
                        >
                            <Icon size={18} />
                            {role.name}
                        </button>
                    );
                })}
            </div>

            <div className="template-grid">
                {filteredTemplates.map(template => (
                    <TemplateCard
                        key={template.id}
                        template={template}
                        onSelect={setSelectedTemplate}
                    />
                ))}
            </div>

            {filteredTemplates.length === 0 && (
                <div className="empty">
                    <div className="empty__icon">🔍</div>
                    <p>{t({
                        vi: 'Không tìm thấy template phù hợp',
                        en: 'No matching templates found',
                        ja: '一致するテンプレートが見つかりません'
                    })}</p>
                </div>
            )}

            <TemplateModal
                template={selectedTemplate}
                onClose={() => setSelectedTemplate(null)}
            />
        </>
    );
}

function BestPracticesSection() {
    const { t } = useLanguage();

    return (
        <div className="practices">
            <div className="guide-framework">
                <h3 className="guide-framework__title">🎓 GUIDE Framework</h3>
                <div className="guide-framework__items">
                    {[
                        {
                            letter: 'G',
                            title: { vi: 'Give context đầy đủ', en: 'Give full context', ja: '完全なコンテキストを提供' },
                            desc: { vi: 'Background, constraints, requirements, code, errors', en: 'Background, constraints, requirements, code, errors', ja: '背景、制約、要件、コード、エラー' }
                        },
                        {
                            letter: 'U',
                            title: { vi: 'Understand output trước khi dùng', en: 'Understand output before using', ja: '使用前に出力を理解' },
                            desc: { vi: 'Đọc và hiểu code được generate', en: 'Read and understand generated code', ja: '生成されたコードを読んで理解する' }
                        },
                        {
                            letter: 'I',
                            title: { vi: 'Iterate và refine', en: 'Iterate and refine', ja: '反復と改善' },
                            desc: { vi: 'Provide feedback cụ thể, build incrementally', en: 'Provide specific feedback, build incrementally', ja: '具体的なフィードバックを提供、段階的に構築' }
                        },
                        {
                            letter: 'D',
                            title: { vi: 'Decide - bạn quyết định cuối cùng', en: 'Decide - you make the final call', ja: '決定 - あなたが最終決定' },
                            desc: { vi: 'AI suggests, you decide', en: 'AI suggests, you decide', ja: 'AIは提案し、あなたが決定' }
                        },
                        {
                            letter: 'E',
                            title: { vi: 'Evaluate kết quả thực tế', en: 'Evaluate actual results', ja: '実際の結果を評価' },
                            desc: { vi: 'Test in real environment, monitor issues', en: 'Test in real environment, monitor issues', ja: '実環境でテスト、問題を監視' }
                        }
                    ].map(item => (
                        <div key={item.letter} className="guide-framework__item">
                            <span className="guide-framework__letter">{item.letter}</span>
                            <div className="guide-framework__content">
                                <h4>{t(item.title)}</h4>
                                <p>{t(item.desc)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="patterns">
                <h3 className="patterns__title">📝 Prompt Patterns</h3>
                {bestPractices.map((practice, idx) => (
                    <div key={idx} className="pattern-card">
                        <div className="pattern-card__header">
                            <h4 className="pattern-card__title">{practice.title}</h4>
                            <CopyButton text={practice.example} />
                        </div>
                        <p className="pattern-card__desc">{t(practice.description)}</p>
                        <pre className="pattern-card__code">{practice.example}</pre>
                    </div>
                ))}
            </div>

            <div className="dos-donts">
                <div className="dos-donts__column dos-donts__column--do">
                    <h3 className="dos-donts__title">✅ DO's</h3>
                    <div className="dos-donts__items">
                        {dosAndDonts.dos.map((item, idx) => (
                            <div key={idx} className="dos-donts__item">
                                <Check size={18} className="dos-donts__item-icon" />
                                <div>
                                    <p className="dos-donts__item-title">{t(item.title)}</p>
                                    <p className="dos-donts__item-desc">{t(item.desc)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dos-donts__column dos-donts__column--dont">
                    <h3 className="dos-donts__title">❌ DON'Ts</h3>
                    <div className="dos-donts__items">
                        {dosAndDonts.donts.map((item, idx) => (
                            <div key={idx} className="dos-donts__item">
                                <X size={18} className="dos-donts__item-icon" />
                                <div>
                                    <p className="dos-donts__item-title">{t(item.title)}</p>
                                    <p className="dos-donts__item-desc">{t(item.desc)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Templates() {
    const [activeTab, setActiveTab] = useState('templates');
    const [selectedRole, setSelectedRole] = useState('developer');
    const [searchQuery, setSearchQuery] = useState('');
    const { t } = useLanguage();

    return (
        <section className="templates">
            <div className="section-tabs">
                <button
                    className={`section-tab ${activeTab === 'templates' ? 'section-tab--active' : ''}`}
                    onClick={() => setActiveTab('templates')}
                >
                    <FileText size={18} style={{ marginRight: '0.5rem' }} />
                    Templates
                </button>
                <button
                    className={`section-tab ${activeTab === 'practices' ? 'section-tab--active' : ''}`}
                    onClick={() => setActiveTab('practices')}
                >
                    <Lightbulb size={18} style={{ marginRight: '0.5rem' }} />
                    Best Practices
                </button>
            </div>

            {activeTab === 'templates' && (
                <TemplatesSection
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            )}

            {activeTab === 'practices' && <BestPracticesSection />}
        </section>
    );
}
