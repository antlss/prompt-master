import { useState } from 'react';
import { Code, Layers, FileText, Lightbulb, Star } from 'lucide-react';
import PromptBody from './components/PromptBody';
import Templates from './components/Templates';

function App() {
    const [activeSection, setActiveSection] = useState('prompt-body');

    return (
        <div className="app">
            <header className="header">
                <div className="header__logo">
                    <div className="header__logo-icon">
                        <Layers size={24} />
                    </div>
                    <div>
                        <h1 className="header__title">Prompt Master</h1>
                        <p className="header__subtitle">Architecture Visualizer & Templates</p>
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
                </nav>
            </header>

            <main className="main">
                {activeSection === 'prompt-body' && <PromptBody />}
                {activeSection === 'templates' && <Templates />}
            </main>
        </div>
    );
}

export default App;
