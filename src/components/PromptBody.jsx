import { useState } from 'react';
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
    if (!node) {
        return (
            <div className="detail-panel">
                <div className="detail-panel__empty">
                    <div className="detail-panel__empty-icon">👆</div>
                    <p>Chọn một thành phần trên cây để xem chi tiết</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>
                        Nhấp vào bất kỳ node nào để tìm hiểu về vai trò của nó trong prompt
                    </p>
                </div>
            </div>
        );
    }

    const { details } = node;

    return (
        <div className="detail-panel">
            <div className="detail-panel__header">
                <h2 className="detail-panel__title">{node.label}</h2>
            </div>

            <div className="detail-panel__content">
                {details.definition && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">📝 Định nghĩa</h3>
                        <p className="detail-panel__text">{details.definition}</p>
                    </section>
                )}

                {details.question && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">❓ Câu hỏi cần trả lời</h3>
                        <p className="detail-panel__text" style={{ fontStyle: 'italic', color: 'var(--color-primary-light)' }}>
                            "{details.question}"
                        </p>
                    </section>
                )}

                {details.purpose && details.purpose.length > 0 && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">🎯 Mục đích</h3>
                        <ul className="detail-panel__list">
                            {details.purpose.map((item, idx) => (
                                <li key={idx} className="detail-panel__list-item">{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {details.valueTable && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">⚖️ Giá trị đem lại</h3>
                        <table className="value-table">
                            <thead>
                                <tr>
                                    {details.valueTable.headers.map((header, idx) => (
                                        <th key={idx}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {details.valueTable.rows.map((row, idx) => (
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
                        <h3 className="detail-panel__section-title">💡 Ví dụ</h3>
                        {details.examples.map((example, idx) => (
                            <div key={idx} className={`example example--${example.type}`}>
                                <div className="example__header">
                                    {example.type === 'bad' ? '❌ Không nên' : '✅ Nên làm'}
                                </div>
                                <pre className="example__code">{example.content}</pre>
                            </div>
                        ))}
                    </section>
                )}

                {details.commonInfo && details.commonInfo.length > 0 && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">📋 Thông tin thường có</h3>
                        <ul className="detail-panel__list">
                            {details.commonInfo.map((item, idx) => (
                                <li key={idx} className="detail-panel__list-item">{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {details.keyTakeaways && details.keyTakeaways.length > 0 && (
                    <section className="detail-panel__section">
                        <h3 className="detail-panel__section-title">🔑 Key Takeaways</h3>
                        <ul className="detail-panel__list">
                            {details.keyTakeaways.map((item, idx) => (
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
