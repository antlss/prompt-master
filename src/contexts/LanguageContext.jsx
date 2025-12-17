import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const languages = {
    vi: { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    en: { code: 'en', name: 'English', flag: '🇺🇸' },
    ja: { code: 'ja', name: '日本語', flag: '🇯🇵' }
};

export function LanguageProvider({ children }) {
    const [currentLang, setCurrentLang] = useState('vi');

    const value = {
        currentLang,
        setCurrentLang,
        t: (translations) => translations[currentLang] || translations.vi || translations.en
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
