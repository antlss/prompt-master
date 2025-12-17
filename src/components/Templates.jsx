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
    Lightbulb
} from 'lucide-react';
import { templates, bestPractices, dosAndDonts, roles } from '../data/templates';

const iconMap = {
    Code,
    FileText,
    Briefcase,
    TestTube,
    Settings
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
    return (
        <div className="template-card" onClick={() => onSelect(template)}>
            <div className="template-card__header">
                <h3 className="template-card__title">{template.title}</h3>
                {template.popular && (
                    <span className="template-card__badge">
                        <Star size={12} fill="currentColor" />
                        Popular
                    </span>
                )}
            </div>
            <p className="template-card__desc">{template.description}</p>
        </div>
    );
}

function TemplateModal({ template, onClose }) {
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
                        <h2 className="modal__title">{template.title}</h2>
                        <p className="modal__subtitle">{template.description}</p>
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
                        Close
                    </button>
                    <CopyButton text={template.template} />
                </div>
            </div>
        </div>
    );
}

function TemplatesSection({ selectedRole, setSelectedRole, searchQuery, setSearchQuery }) {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const filteredTemplates = useMemo(() => {
        const roleTemplates = templates[selectedRole] || [];
        if (!searchQuery) return roleTemplates;
        return roleTemplates.filter(t =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [selectedRole, searchQuery]);

    return (
        <>
            <div className="templates__hero">
                <h2 className="templates__title">
                    Prompt Templates
                    <span> cho Software Development</span>
                </h2>
                <p className="templates__subtitle">
                    Tăng hiệu quả làm việc với AI qua các templates đã được thử nghiệm thực tế.
                    Copy, customize, và sử dụng ngay.
                </p>
            </div>

            <div className="search">
                <Search size={20} className="search__icon" />
                <input
                    type="text"
                    className="search__input"
                    placeholder="Tìm template..."
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
                    <p>Không tìm thấy template phù hợp</p>
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
    return (
        <div className="practices">
            <div className="guide-framework">
                <h3 className="guide-framework__title">🎓 GUIDE Framework</h3>
                <div className="guide-framework__items">
                    {[
                        { letter: 'G', title: 'Give context đầy đủ', desc: 'Background, constraints, requirements, code, errors' },
                        { letter: 'U', title: 'Understand output trước khi dùng', desc: 'Đọc và hiểu code được generate' },
                        { letter: 'I', title: 'Iterate và refine', desc: 'Provide feedback cụ thể, build incrementally' },
                        { letter: 'D', title: 'Decide - bạn quyết định cuối cùng', desc: 'AI suggests, you decide' },
                        { letter: 'E', title: 'Evaluate kết quả thực tế', desc: 'Test in real environment, monitor issues' }
                    ].map(item => (
                        <div key={item.letter} className="guide-framework__item">
                            <span className="guide-framework__letter">{item.letter}</span>
                            <div className="guide-framework__content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
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
                        <p className="pattern-card__desc">{practice.description}</p>
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
                                    <p className="dos-donts__item-title">{item.title}</p>
                                    <p className="dos-donts__item-desc">{item.desc}</p>
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
                                    <p className="dos-donts__item-title">{item.title}</p>
                                    <p className="dos-donts__item-desc">{item.desc}</p>
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
