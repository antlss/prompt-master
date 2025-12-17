import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    'google-dark': {
        id: 'google-dark',
        name: 'Google Dark',
        brand: 'Google',
        mode: 'dark',
        icon: '🌙'
    },
    'google-light': {
        id: 'google-light',
        name: 'Google Light',
        brand: 'Google',
        mode: 'light',
        icon: '☀️'
    },
    'apple-dark': {
        id: 'apple-dark',
        name: 'Apple Dark',
        brand: 'Apple',
        mode: 'dark',
        icon: '🌙'
    },
    'apple-light': {
        id: 'apple-light',
        name: 'Apple Light',
        brand: 'Apple',
        mode: 'light',
        icon: '☀️'
    },
    'claude-dark': {
        id: 'claude-dark',
        name: 'Claude Dark',
        brand: 'Claude',
        mode: 'dark',
        icon: '🌙'
    },
    'claude-light': {
        id: 'claude-light',
        name: 'Claude Light',
        brand: 'Claude',
        mode: 'light',
        icon: '☀️'
    }
};

const DEFAULT_THEME = 'claude-dark';

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || DEFAULT_THEME;
        }
        return DEFAULT_THEME;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const setTheme = (themeId) => {
        if (themes[themeId]) {
            setCurrentTheme(themeId);
        }
    };

    const toggleMode = () => {
        const current = themes[currentTheme];
        if (!current) return;

        const newMode = current.mode === 'dark' ? 'light' : 'dark';
        const newThemeId = `${current.brand.toLowerCase()}-${newMode}`;
        if (themes[newThemeId]) {
            setCurrentTheme(newThemeId);
        }
    };

    const value = {
        currentTheme,
        theme: themes[currentTheme],
        themes,
        setTheme,
        toggleMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
