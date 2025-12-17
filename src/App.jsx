import { useState } from 'react';
import { Layers, FileText, Globe, ChevronDown, Wand2 } from 'lucide-react';
import { LanguageProvider, useLanguage, languages } from './contexts/LanguageContext';
import PromptBody from './components/PromptBody';
import Templates from './components/Templates';
import PromptBuilder from './components/PromptBuilder';

function LanguageSwitcher() {
    const { currentLang, setCurrentLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lang-switcher">
            <button
                className="lang-switcher__btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Globe size={18} />
                <span>{languages[currentLang].flag}</span>
                <span className="lang-switcher__name">{languages[currentLang].name}</span>
                <ChevronDown size={16} className={isOpen ? 'rotate' : ''} />
            </button>

            {isOpen && (
                <div className="lang-switcher__dropdown">
                    {Object.values(languages).map(lang => (
                        <button
                            key={lang.code}
                            className={`lang-switcher__option ${currentLang === lang.code ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentLang(lang.code);
                                setIsOpen(false);
                            }}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function AppContent() {
    const [activeSection, setActiveSection] = useState('prompt-body');
    const { t } = useLanguage();

    return (
        <div className="app">
            <header className="header">
                <div className="header__logo">
                    <div className="header__logo-icon">
                        <Layers size={24} />
                    </div>
                    <div>
                        <h1 className="header__title">Prompt Master</h1>
                        <p className="header__subtitle">{t({
                            vi: 'Trực quan hóa cấu trúc & Templates',
                            en: 'Architecture Visualizer & Templates',
                            ja: 'アーキテクチャビジュアライザー & テンプレート'
                        })}</p>
                    </div>
                </div>

                <nav className="header__nav">
                    <button
                        className={`header__nav-btn ${activeSection === 'prompt-body' ? 'header__nav-btn--active' : ''}`}
                        onClick={() => setActiveSection('prompt-body')}
                    >
                        <Layers size={18} />
                        <span>Prompt Body</span>
                    </button>
                    <button
                        className={`header__nav-btn ${activeSection === 'templates' ? 'header__nav-btn--active' : ''}`}
                        onClick={() => setActiveSection('templates')}
                    >
                        <FileText size={18} />
                        <span>Templates</span>
                    </button>
                    <button
                        className={`header__nav-btn ${activeSection === 'builder' ? 'header__nav-btn--active' : ''}`}
                        onClick={() => setActiveSection('builder')}
                    >
                        <Wand2 size={18} />
                        <span>Builder</span>
                    </button>
                </nav>

                <LanguageSwitcher />
            </header>

            <main className="main">
                {activeSection === 'prompt-body' && <PromptBody />}
                {activeSection === 'templates' && <Templates />}
                {activeSection === 'builder' && <PromptBuilder />}
            </main>
        </div>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
