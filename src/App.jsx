import { useState } from 'react';
import { Layers, FileText, Globe, ChevronDown, Wand2, Palette, Sun, Moon } from 'lucide-react';
import { LanguageProvider, useLanguage, languages } from './contexts/LanguageContext';
import { ThemeProvider, useTheme, themes } from './contexts/ThemeContext';
import PromptBody from './components/PromptBody';
import Templates from './components/Templates';
import PromptBuilder from './components/PromptBuilder';

function ThemeSwitcher() {
    const { currentTheme, theme, setTheme, toggleMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const brandGroups = {
        'Google': ['google-dark', 'google-light'],
        'Apple': ['apple-dark', 'apple-light'],
        'Claude': ['claude-dark', 'claude-light']
    };

    return (
        <div className="theme-switcher">
            <button
                className="theme-switcher__btn"
                onClick={() => setIsOpen(!isOpen)}
                title="Change theme"
            >
                <Palette size={18} />
                <span className="theme-switcher__current">
                    {theme?.mode === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                </span>
                <ChevronDown size={16} className={isOpen ? 'rotate' : ''} />
            </button>

            {isOpen && (
                <div className="theme-switcher__dropdown">
                    {Object.entries(brandGroups).map(([brand, themeIds]) => (
                        <div key={brand} className="theme-switcher__group">
                            <div className="theme-switcher__group-title">{brand}</div>
                            {themeIds.map(themeId => {
                                const t = themes[themeId];
                                return (
                                    <button
                                        key={themeId}
                                        className={`theme-switcher__option ${currentTheme === themeId ? 'active' : ''}`}
                                        onClick={() => {
                                            setTheme(themeId);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <span className="theme-switcher__option-icon">
                                            {t.mode === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                                        </span>
                                        <span>{t.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

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

                <div className="header__actions">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
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
        <ThemeProvider>
            <LanguageProvider>
                <AppContent />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
