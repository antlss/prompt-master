import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
    promptTree,
    primaryNodes,
    secondaryNodes,
    tertiaryNodes,
    specialNodes,
    getNodeById
} from '../data/promptTree';

function TreeNode({ node, selectedId, onSelect }) {
    const isSelected = selectedId === node.id;

    return (
        <button
            className={`tree-node tree-node--${node.type} ${isSelected ? 'tree-node--selected' : ''}`}
            onClick={() => onSelect(node.id)}
        >
            <span className="tree-node__icon">{node.label.split(' ')[0]}</span>
            <span>{node.label.split(' ').slice(1).join(' ')}</span>
        </button>
    );
}

function DetailPanel({ node }) {
    const { t } = useLanguage();

    if (!node) {
        return (
            <div className="detail-panel">
                <div className="detail-panel__empty">
                    <div className="detail-panel__empty-icon">👆</div>
                    <p>{t({
                        vi: 'Chọn một thành phần trên cây để xem chi tiết',
                        en: 'Select a component on the tree to view details',
                        ja: 'ツリー上のコンポーネントを選択して詳細を表示'
                    })}</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>
                        {t({
                            vi: 'Nhấp vào bất kỳ node nào để tìm hiểu về vai trò của nó trong prompt',
                            en: 'Click on any node to learn about its role in the prompt',
                            ja: 'ノードをクリックして、プロンプトにおける役割を学ぶ'
                        })}
                    </p>
                </div>
            </div>
        );
    }

    const { details } = node;

    const getValue = (obj) => {
        if (!obj) return null;
        if (typeof obj === 'string') return obj;
        return t(obj);
    };

    const getArray = (obj) => {
        if (!obj) return [];
        if (Array.isArray(obj)) return obj;
        return t(obj) || [];
    };

    return (
        <div className="detail-panel">
            <div className="detail-panel__header">
                <h2 className="detail-panel__title">{node.label}</h2>
            </div>

            <div className="detail-panel__content">
                {details.definition && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">📝 {t({
                            vi: 'Định nghĩa',
                            en: 'Definition',
                            ja: '定義'
                        })}</h3>
                        <p className="detail-panel__text">{getValue(details.definition)}</p>
                    </section>
                )}

                {details.question && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">❓ {t({
                            vi: 'Câu hỏi cần trả lời',
                            en: 'Question to answer',
                            ja: '答えるべき質問'
                        })}</h3>
                        <p className="detail-panel__text" style={{ fontStyle: 'italic', color: 'var(--color-primary-light)' }}>
                            "{getValue(details.question)}"
                        </p>
                    </section>
                )}

                {details.purpose && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">🎯 {t({
                            vi: 'Mục đích',
                            en: 'Purpose',
                            ja: '目的'
                        })}</h3>
                        <ul className="detail-panel__list">
                            {getArray(details.purpose).map((item, idx) => (
                                <li key={idx} className="detail-panel__list-item">{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {details.valueTable && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">⚖️ {t({
                            vi: 'Giá trị đem lại',
                            en: 'Value provided',
                            ja: '提供される価値'
                        })}</h3>
                        <table className="value-table">
                            <thead>
                                <tr>
                                    {getArray(details.valueTable.headers).map((header, idx) => (
                                        <th key={idx}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {getArray(details.valueTable.rows).map((row, idx) => (
                                    <tr key={idx}>
                                        {row.map((cell, cellIdx) => (
                                            <td key={cellIdx}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}

                {details.examples && details.examples.length > 0 && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">💡 {t({
                            vi: 'Ví dụ',
                            en: 'Examples',
                            ja: '例'
                        })}</h3>
                        {details.examples.map((example, idx) => (
                            <div key={idx} className={`example example--${example.type}`}>
                                <div className="example__header">
                                    {example.type === 'bad'
                                        ? t({ vi: '❌ Không nên', en: '❌ Don\'t', ja: '❌ 避けるべき' })
                                        : t({ vi: '✅ Nên làm', en: '✅ Do', ja: '✅ すべき' })
                                    }
                                </div>
                                <pre className="example__code">{example.content}</pre>
                            </div>
                        ))}
                    </section>
                )}

                {details.commonInfo && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">📋 {t({
                            vi: 'Thông tin thường có',
                            en: 'Common information',
                            ja: '一般的な情報'
                        })}</h3>
                        <ul className="detail-panel__list">
                            {getArray(details.commonInfo).map((item, idx) => (
                                <li key={idx} className="detail-panel__list-item">{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {details.keyTakeaways && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">🔑 Key Takeaways</h3>
                        <ul className="detail-panel__list">
                            {getArray(details.keyTakeaways).map((item, idx) => (
                                <li key={idx} className="detail-panel__list-item">{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}

export default function PromptBody() {
    const [selectedId, setSelectedId] = useState(null);

    const selectedNode = selectedId ? getNodeById(selectedId) : null;

    return (
        <section className="prompt-body">
            <div className="prompt-body__tree">
                <div className="tree">
                    {/* Root Node */}
                    <div className="tree__layer">
                        <TreeNode
                            node={promptTree}
                            selectedId={selectedId}
                            onSelect={setSelectedId}
                        />
                    </div>

                    {/* Primary Layer */}
                    <div className="tree__layer tree__layer--primary">
                        {primaryNodes.map(node => (
                            <TreeNode
                                key={node.id}
                                node={node}
                                selectedId={selectedId}
                                onSelect={setSelectedId}
                            />
                        ))}
                    </div>

                    {/* Secondary Layer */}
                    <div className="tree__layer tree__layer--secondary">
                        {secondaryNodes.map(node => (
                            <TreeNode
                                key={node.id}
                                node={node}
                                selectedId={selectedId}
                                onSelect={setSelectedId}
                            />
                        ))}
                    </div>

                    {/* Tertiary Layer */}
                    <div className="tree__layer tree__layer--tertiary">
                        {tertiaryNodes.map(node => (
                            <TreeNode
                                key={node.id}
                                node={node}
                                selectedId={selectedId}
                                onSelect={setSelectedId}
                            />
                        ))}
                    </div>

                    {/* Special Nodes */}
                    <div className="tree__layer tree__layer--special">
                        {specialNodes.map(node => (
                            <TreeNode
                                key={node.id}
                                node={node}
                                selectedId={selectedId}
                                onSelect={setSelectedId}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <aside className="prompt-body__detail">
                <DetailPanel node={selectedNode} />
            </aside>
        </section>
    );
}
