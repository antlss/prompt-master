export const promptTree = {
    id: 'root',
    label: '🏗️ PROMPT ARCHITECTURE',
    type: 'root',
    shortDescription: {
        vi: 'Cấu trúc hoàn chỉnh của một prompt hiệu quả',
        en: 'Complete structure of an effective prompt',
        ja: '効果的なプロンプトの完全な構造'
    },
    details: {
        definition: {
            vi: 'Một prompt hiệu quả không chỉ là câu hỏi đơn thuần - nó là một cấu trúc giao tiếp được thiết kế để truyền tải đầy đủ thông tin cần thiết cho AI.',
            en: 'An effective prompt is not just a simple question - it is a communication structure designed to convey all necessary information to the AI.',
            ja: '効果的なプロンプトは単なる質問ではありません。AIに必要な情報をすべて伝えるために設計されたコミュニケーション構造です。'
        },
        purpose: {
            vi: [
                'Giống như việc brief một đồng nghiệp mới',
                'Prompt cần trả lời: Ai? Làm gì? Trong hoàn cảnh nào? Với ràng buộc gì? Output như thế nào?'
            ],
            en: [
                'Like briefing a new colleague',
                'Prompt needs to answer: Who? What? In what context? With what constraints? What output format?'
            ],
            ja: [
                '新しい同僚にブリーフィングするように',
                'プロンプトは答える必要があります：誰が？何を？どのような状況で？どのような制約で？どのような出力形式で？'
            ]
        },
        keyTakeaways: {
            vi: [
                'CONTEXT giảm ambiguity → AI không phải đoán',
                'ROLE định hình perspective → Output phù hợp với audience',
                'TASK phải specific → Action verbs + criteria rõ ràng',
                'REQUIREMENTS vs CONSTRAINTS = Cần có vs Không được có',
                'INPUT biến abstract → practical',
                'FORMAT tiết kiệm thời gian reformatting',
                'EXAMPLES powerful hơn words',
                'NOTES/WARNINGS prevent costly mistakes'
            ],
            en: [
                'CONTEXT reduces ambiguity → AI doesn\'t have to guess',
                'ROLE shapes perspective → Output fits the audience',
                'TASK must be specific → Clear action verbs + criteria',
                'REQUIREMENTS vs CONSTRAINTS = Must have vs Must not have',
                'INPUT transforms abstract → practical',
                'FORMAT saves time reformatting',
                'EXAMPLES are more powerful than words',
                'NOTES/WARNINGS prevent costly mistakes'
            ],
            ja: [
                'CONTEXTは曖昧さを減らす → AIが推測する必要がない',
                'ROLEは視点を形成する → 出力が対象者に適合',
                'TASKは具体的でなければならない → 明確なアクション動詞＋基準',
                'REQUIREMENTS vs CONSTRAINTS = 必須 vs 禁止',
                'INPUTは抽象を実践的なものに変換',
                'FORMATは再フォーマットの時間を節約',
                'EXAMPLESは言葉より強力',
                'NOTES/WARNINGSはコストのかかるミスを防ぐ'
            ]
        }
    },
    children: []
};

export const primaryNodes = [
    {
        id: 'context',
        label: '1️⃣ CONTEXT',
        type: 'primary',
        shortDescription: {
            vi: 'Bối cảnh - Mô tả tình huống, hoàn cảnh, môi trường',
            en: 'Context - Describes situation, circumstances, environment',
            ja: 'コンテキスト - 状況、環境の説明'
        },
        details: {
            definition: {
                vi: 'Phần mô tả tình huống, hoàn cảnh, môi trường mà nhiệm vụ đang diễn ra.',
                en: 'Section describing the situation, circumstances, and environment where the task is taking place.',
                ja: 'タスクが行われている状況、環境を説明するセクション。'
            },
            question: {
                vi: 'Chuyện gì đang xảy ra?',
                en: 'What is happening?',
                ja: '何が起こっていますか？'
            },
            purpose: {
                vi: [
                    'Cung cấp background information để AI hiểu "bức tranh lớn"',
                    'Giúp AI định vị mình trong situation cụ thể',
                    'Loại bỏ ambiguity (sự mơ hồ) trong việc hiểu yêu cầu'
                ],
                en: [
                    'Provide background information so AI understands the "big picture"',
                    'Help AI position itself in a specific situation',
                    'Remove ambiguity in understanding requirements'
                ],
                ja: [
                    'AIが「全体像」を理解するための背景情報を提供',
                    'AIが特定の状況に位置づけられるようにする',
                    '要件理解における曖昧さを排除'
                ]
            },
            valueTable: {
                headers: {
                    vi: ['Không có CONTEXT', 'Có CONTEXT'],
                    en: ['Without CONTEXT', 'With CONTEXT'],
                    ja: ['CONTEXTなし', 'CONTEXTあり']
                },
                rows: {
                    vi: [
                        ['AI đưa ra generic advice', 'AI đưa ra specific advice cho situation'],
                        ['Phải hỏi lại nhiều lần', 'Giảm số lượng iterations'],
                        ['Output có thể không applicable', 'Output directly applicable'],
                        ['AI dùng assumptions', 'AI dùng facts']
                    ],
                    en: [
                        ['AI gives generic advice', 'AI gives specific advice for the situation'],
                        ['Must ask multiple times', 'Reduces number of iterations'],
                        ['Output may not be applicable', 'Output directly applicable'],
                        ['AI uses assumptions', 'AI uses facts']
                    ],
                    ja: [
                        ['AIは一般的なアドバイスを提供', 'AIは状況に特化したアドバイスを提供'],
                        ['何度も質問が必要', 'イテレーション回数を削減'],
                        ['出力が適用できない可能性', '出力が直接適用可能'],
                        ['AIは仮定を使用', 'AIは事実を使用']
                    ]
                }
            },
            examples: [
                {
                    type: 'bad',
                    content: 'Fix this bug in my code'
                },
                {
                    type: 'good',
                    content: `CONTEXT:
- Language: TypeScript, React 18
- Environment: Production
- This is an authentication module handling OAuth 2.0
- The bug appeared after upgrading from React 17
- Only affects Safari browser`
                }
            ],
            commonInfo: {
                vi: [
                    'Technical stack: Language, framework, version',
                    'Environment: Dev/staging/production',
                    'Domain: Banking, e-commerce, healthcare',
                    'Team/Project: Size, maturity, constraints',
                    'Timeline: Urgent? Long-term?',
                    'Previous attempts: What\'s been tried'
                ],
                en: [
                    'Technical stack: Language, framework, version',
                    'Environment: Dev/staging/production',
                    'Domain: Banking, e-commerce, healthcare',
                    'Team/Project: Size, maturity, constraints',
                    'Timeline: Urgent? Long-term?',
                    'Previous attempts: What\'s been tried'
                ],
                ja: [
                    '技術スタック：言語、フレームワーク、バージョン',
                    '環境：開発/ステージング/本番',
                    'ドメイン：銀行、eコマース、ヘルスケア',
                    'チーム/プロジェクト：規模、成熟度、制約',
                    'タイムライン：緊急？長期？',
                    '過去の試み：何を試したか'
                ]
            }
        }
    },
    {
        id: 'task',
        label: '3️⃣ TASK',
        type: 'primary',
        shortDescription: {
            vi: 'Nhiệm vụ - Cụ thể những gì cần làm',
            en: 'Task - Specifically what needs to be done',
            ja: 'タスク - 具体的に何をすべきか'
        },
        details: {
            definition: {
                vi: 'Phần mô tả cụ thể những gì cần làm - là "verb" của prompt.',
                en: 'Section describing specifically what needs to be done - the "verb" of the prompt.',
                ja: '具体的に何をすべきかを説明するセクション - プロンプトの「動詞」。'
            },
            question: {
                vi: 'Cần làm gì?',
                en: 'What needs to be done?',
                ja: '何をする必要がありますか？'
            },
            purpose: {
                vi: [
                    'Nói rõ action cần thực hiện',
                    'Định nghĩa scope của công việc',
                    'Set expectations về deliverable'
                ],
                en: [
                    'Clearly state the action to be performed',
                    'Define the scope of work',
                    'Set expectations for deliverables'
                ],
                ja: [
                    '実行するアクションを明確に述べる',
                    '作業の範囲を定義',
                    '成果物の期待を設定'
                ]
            },
            valueTable: {
                headers: {
                    vi: ['TASK không rõ', 'TASK rõ ràng'],
                    en: ['Unclear TASK', 'Clear TASK'],
                    ja: ['不明確なTASK', '明確なTASK']
                },
                rows: {
                    vi: [
                        ['Help me with this code', 'Refactor this code to follow SOLID principles, specifically Single Responsibility'],
                        ['Make it better', 'Optimize for readability by: extracting methods, improving naming, adding comments'],
                        ['Fix the bug', 'Identify the root cause of the null pointer exception and provide a fix with explanation']
                    ],
                    en: [
                        ['Help me with this code', 'Refactor this code to follow SOLID principles, specifically Single Responsibility'],
                        ['Make it better', 'Optimize for readability by: extracting methods, improving naming, adding comments'],
                        ['Fix the bug', 'Identify the root cause of the null pointer exception and provide a fix with explanation']
                    ],
                    ja: [
                        ['このコードを手伝って', 'SOLID原則、特に単一責任に従ってこのコードをリファクタリング'],
                        ['改善して', 'メソッドの抽出、命名の改善、コメントの追加で可読性を最適化'],
                        ['バグを修正して', 'NullPointerExceptionの根本原因を特定し、説明付きの修正を提供']
                    ]
                }
            },
            examples: [
                {
                    type: 'good',
                    content: `TASK:
1. ANALYZE the error message and identify root cause
2. EXPLAIN why this error occurs in this specific context
3. PROVIDE 2-3 alternative solutions with tradeoffs
4. RECOMMEND the best solution for production environment`
                }
            ],
            commonInfo: {
                vi: [
                    'Analysis: Analyze, Evaluate, Compare, Assess, Review, Examine',
                    'Creation: Create, Generate, Write, Build, Design, Develop',
                    'Transformation: Refactor, Convert, Translate, Optimize, Simplify',
                    'Explanation: Explain, Describe, Clarify, Summarize, Break down',
                    'Problem-solving: Fix, Debug, Solve, Troubleshoot, Resolve',
                    'Decision: Recommend, Suggest, Advise, Propose, Prioritize'
                ],
                en: [
                    'Analysis: Analyze, Evaluate, Compare, Assess, Review, Examine',
                    'Creation: Create, Generate, Write, Build, Design, Develop',
                    'Transformation: Refactor, Convert, Translate, Optimize, Simplify',
                    'Explanation: Explain, Describe, Clarify, Summarize, Break down',
                    'Problem-solving: Fix, Debug, Solve, Troubleshoot, Resolve',
                    'Decision: Recommend, Suggest, Advise, Propose, Prioritize'
                ],
                ja: [
                    '分析: Analyze, Evaluate, Compare, Assess, Review, Examine',
                    '作成: Create, Generate, Write, Build, Design, Develop',
                    '変換: Refactor, Convert, Translate, Optimize, Simplify',
                    '説明: Explain, Describe, Clarify, Summarize, Break down',
                    '問題解決: Fix, Debug, Solve, Troubleshoot, Resolve',
                    '決定: Recommend, Suggest, Advise, Propose, Prioritize'
                ]
            }
        }
    },
    {
        id: 'output',
        label: '7️⃣ OUTPUT',
        type: 'primary',
        shortDescription: {
            vi: 'Định dạng đầu ra - Cấu trúc response mong muốn',
            en: 'Output Format - Desired response structure',
            ja: '出力形式 - 望ましいレスポンス構造'
        },
        details: {
            definition: {
                vi: 'Phần specify cấu trúc, format, style của response mong muốn.',
                en: 'Section specifying the structure, format, and style of the desired response.',
                ja: '望ましいレスポンスの構造、形式、スタイルを指定するセクション。'
            },
            question: {
                vi: 'Trả lời như thế nào?',
                en: 'How to respond?',
                ja: 'どのように回答すべきか？'
            },
            purpose: {
                vi: [
                    'Control structure của output',
                    'Ensure output usable immediately',
                    'Reduce need for reformatting'
                ],
                en: [
                    'Control the structure of output',
                    'Ensure output is immediately usable',
                    'Reduce the need for reformatting'
                ],
                ja: [
                    '出力の構造を制御',
                    '出力がすぐに使用可能であることを確保',
                    '再フォーマットの必要性を削減'
                ]
            },
            valueTable: {
                headers: {
                    vi: ['Không specify FORMAT', 'Có specify FORMAT'],
                    en: ['Without FORMAT specified', 'With FORMAT specified'],
                    ja: ['FORMAT指定なし', 'FORMAT指定あり']
                },
                rows: {
                    vi: [
                        ['AI tự quyết định format', 'Output đúng như mong đợi'],
                        ['Có thể quá dài hoặc quá ngắn', 'Copy-paste được ngay'],
                        ['Có thể không match với use case', 'Không cần reformat trước khi dùng']
                    ],
                    en: [
                        ['AI decides format itself', 'Output exactly as expected'],
                        ['May be too long or too short', 'Can copy-paste immediately'],
                        ['May not match the use case', 'No reformatting needed before use']
                    ],
                    ja: [
                        ['AIが形式を自己決定', '期待通りの出力'],
                        ['長すぎるか短すぎる可能性', 'すぐにコピー＆ペースト可能'],
                        ['ユースケースに合わない可能性', '使用前の再フォーマット不要']
                    ]
                }
            },
            examples: [
                {
                    type: 'good',
                    content: `OUTPUT FORMAT:
1. Executive Summary (2-3 sentences, non-technical)
2. Technical Analysis
   - Root cause (bullet points)
   - Impact assessment (High/Medium/Low)
3. Recommended Solution
   - Code changes (with inline comments)
   - Migration steps (numbered)
4. Alternatives Considered (table: Option | Pros | Cons)
5. Risks & Mitigations (bullet points)`
                }
            ],
            commonInfo: {
                vi: [
                    'Bullet points: Lists, steps, features',
                    'Numbered list: Sequential steps, ranked items',
                    'Table: Comparisons, structured data',
                    'Code block: Code output',
                    'JSON/YAML: Structured data, configs',
                    'Markdown: Documentation',
                    'Diagram (Mermaid): Flows, architecture'
                ],
                en: [
                    'Bullet points: Lists, steps, features',
                    'Numbered list: Sequential steps, ranked items',
                    'Table: Comparisons, structured data',
                    'Code block: Code output',
                    'JSON/YAML: Structured data, configs',
                    'Markdown: Documentation',
                    'Diagram (Mermaid): Flows, architecture'
                ],
                ja: [
                    'Bullet points: リスト、ステップ、機能',
                    'Numbered list: 順序付きステップ、ランク付きアイテム',
                    'Table: 比較、構造化データ',
                    'Code block: コード出力',
                    'JSON/YAML: 構造化データ、設定',
                    'Markdown: ドキュメント',
                    'Diagram (Mermaid): フロー、アーキテクチャ'
                ]
            }
        }
    }
];

export const secondaryNodes = [
    {
        id: 'role',
        label: '2️⃣ ROLE',
        type: 'secondary',
        shortDescription: {
            vi: 'Vai trò - Persona, expertise, góc nhìn của AI',
            en: 'Role - Persona, expertise, perspective of AI',
            ja: 'ロール - AIのペルソナ、専門知識、視点'
        },
        details: {
            definition: {
                vi: 'Phần định nghĩa persona, expertise, góc nhìn mà AI nên adopt khi trả lời.',
                en: 'Section defining the persona, expertise, and perspective AI should adopt when responding.',
                ja: '回答時にAIが採用すべきペルソナ、専門知識、視点を定義するセクション。'
            },
            question: {
                vi: 'Tôi đang nói chuyện với ai?',
                en: 'Who am I talking to?',
                ja: '誰と話していますか？'
            },
            purpose: {
                vi: [
                    'Frame cách AI approach vấn đề',
                    'Activate domain knowledge cụ thể',
                    'Định hình tone, depth, perspective của response'
                ],
                en: [
                    'Frame how AI approaches the problem',
                    'Activate specific domain knowledge',
                    'Shape the tone, depth, and perspective of the response'
                ],
                ja: [
                    'AIが問題にアプローチする方法を構築',
                    '特定のドメイン知識を活性化',
                    'レスポンスのトーン、深さ、視点を形成'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `ROLE:
Act as a senior software architect with 15+ years of experience 
in distributed systems. You have expertise in:
- Microservices architecture
- Event-driven design
- High-availability systems
- Banking/Financial domain

Approach problems with a focus on scalability, maintainability,
and long-term technical health.`
                }
            ],
            commonInfo: {
                vi: [
                    'Khi cần expertise cụ thể (security, performance, architecture)',
                    'Khi muốn perspective đặc biệt (beginner-friendly, executive summary)',
                    'Khi cần domain knowledge (banking, healthcare, legal)',
                    'Khi muốn tone cụ thể (formal, casual, educational)'
                ],
                en: [
                    'When specific expertise is needed (security, performance, architecture)',
                    'When a special perspective is wanted (beginner-friendly, executive summary)',
                    'When domain knowledge is needed (banking, healthcare, legal)',
                    'When a specific tone is wanted (formal, casual, educational)'
                ],
                ja: [
                    '特定の専門知識が必要な場合（セキュリティ、パフォーマンス、アーキテクチャ）',
                    '特別な視点が必要な場合（初心者向け、エグゼクティブサマリー）',
                    'ドメイン知識が必要な場合（銀行、ヘルスケア、法律）',
                    '特定のトーンが必要な場合（フォーマル、カジュアル、教育的）'
                ]
            }
        }
    },
    {
        id: 'constraints',
        label: '5️⃣ CONSTRAINTS',
        type: 'secondary',
        shortDescription: {
            vi: 'Ràng buộc - Giới hạn, điều không được làm',
            en: 'Constraints - Limits, what not to do',
            ja: '制約 - 制限、してはいけないこと'
        },
        details: {
            definition: {
                vi: 'Phần định nghĩa giới hạn, boundaries, điều không được làm.',
                en: 'Section defining limits, boundaries, and what not to do.',
                ja: '制限、境界、してはいけないことを定義するセクション。'
            },
            question: {
                vi: 'Có giới hạn gì không?',
                en: 'Are there any limits?',
                ja: '制限はありますか？'
            },
            purpose: {
                vi: [
                    'Set boundaries cho solution',
                    'Prevent unwanted approaches',
                    'Ensure compatibility với existing system'
                ],
                en: [
                    'Set boundaries for the solution',
                    'Prevent unwanted approaches',
                    'Ensure compatibility with existing systems'
                ],
                ja: [
                    'ソリューションの境界を設定',
                    '望ましくないアプローチを防止',
                    '既存システムとの互換性を確保'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `CONSTRAINTS:
- No new dependencies
- Must maintain backward compatibility
- Support IE11
- Changes must be minimal (<50 lines)`
                }
            ],
            commonInfo: {
                vi: [
                    'Technical: "No external libraries", "Must use Java 8", "PostgreSQL only"',
                    'Compatibility: "Backward compatible", "Support legacy browsers"',
                    'Scope: "Don\'t modify other files", "Focus only on this function"',
                    'Style: "Follow existing code style", "Use camelCase"',
                    'Time/Resource: "Quick fix only", "No major refactoring"',
                    'Security: "No hardcoded secrets", "Sanitize all inputs"'
                ],
                en: [
                    'Technical: "No external libraries", "Must use Java 8", "PostgreSQL only"',
                    'Compatibility: "Backward compatible", "Support legacy browsers"',
                    'Scope: "Don\'t modify other files", "Focus only on this function"',
                    'Style: "Follow existing code style", "Use camelCase"',
                    'Time/Resource: "Quick fix only", "No major refactoring"',
                    'Security: "No hardcoded secrets", "Sanitize all inputs"'
                ],
                ja: [
                    'Technical: "外部ライブラリ禁止", "Java 8を使用", "PostgreSQLのみ"',
                    'Compatibility: "後方互換性", "レガシーブラウザをサポート"',
                    'Scope: "他のファイルを変更しない", "この関数のみに集中"',
                    'Style: "既存のコードスタイルに従う", "camelCaseを使用"',
                    'Time/Resource: "クイックフィックスのみ", "大規模リファクタリング禁止"',
                    'Security: "ハードコードされた秘密禁止", "すべての入力をサニタイズ"'
                ]
            }
        }
    },
    {
        id: 'format',
        label: '7️⃣ FORMAT',
        type: 'secondary',
        shortDescription: {
            vi: 'Định dạng - Style và structure cụ thể',
            en: 'Format - Specific style and structure',
            ja: 'フォーマット - 具体的なスタイルと構造'
        },
        details: {
            definition: {
                vi: 'Chi tiết về format, style của output mong muốn.',
                en: 'Details about the desired output format and style.',
                ja: '望ましい出力形式とスタイルの詳細。'
            },
            question: {
                vi: 'Trình bày như thế nào?',
                en: 'How to present?',
                ja: 'どのように提示しますか？'
            },
            purpose: {
                vi: [
                    'Specify exact structure',
                    'Control length và detail level',
                    'Match với intended use case'
                ],
                en: [
                    'Specify exact structure',
                    'Control length and detail level',
                    'Match the intended use case'
                ],
                ja: [
                    '正確な構造を指定',
                    '長さと詳細レベルを制御',
                    '意図したユースケースに一致'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `FORMAT:
- Summary: 2-3 sentences
- Root cause: bullet points
- Solution: code block with comments
- Tradeoffs: table comparing options`
                }
            ],
            commonInfo: {
                vi: [
                    'Length control: "2-3 sentences", "max 500 words"',
                    'Structure: "numbered list", "table format"',
                    'Code style: "with inline comments", "TypeScript types"',
                    'Audience: "non-technical", "for senior developers"'
                ],
                en: [
                    'Length control: "2-3 sentences", "max 500 words"',
                    'Structure: "numbered list", "table format"',
                    'Code style: "with inline comments", "TypeScript types"',
                    'Audience: "non-technical", "for senior developers"'
                ],
                ja: [
                    'Length control: "2-3文", "最大500語"',
                    'Structure: "番号付きリスト", "テーブル形式"',
                    'Code style: "インラインコメント付き", "TypeScript型"',
                    'Audience: "非技術者向け", "シニア開発者向け"'
                ]
            }
        }
    }
];

export const tertiaryNodes = [
    {
        id: 'background',
        label: '9️⃣ BACKGROUND',
        type: 'tertiary',
        shortDescription: {
            vi: 'Nền tảng - Thông tin bổ sung, lịch sử',
            en: 'Background - Additional information, history',
            ja: '背景 - 追加情報、履歴'
        },
        details: {
            definition: {
                vi: 'Phần cung cấp thông tin bổ sung, lịch sử, context mở rộng không trực tiếp liên quan đến task nhưng giúp AI hiểu better.',
                en: 'Section providing additional information, history, and extended context not directly related to the task but helps AI understand better.',
                ja: 'タスクに直接関係しないが、AIの理解を助ける追加情報、履歴、拡張コンテキストを提供するセクション。'
            },
            question: {
                vi: 'Tại sao lại như vậy?',
                en: 'Why is it like this?',
                ja: 'なぜこのようになっていますか？'
            },
            purpose: {
                vi: [
                    'Provide historical context',
                    'Explain why things are the way they are',
                    'Give additional information that might be relevant'
                ],
                en: [
                    'Provide historical context',
                    'Explain why things are the way they are',
                    'Give additional information that might be relevant'
                ],
                ja: [
                    '歴史的なコンテキストを提供',
                    'なぜそうなっているのかを説明',
                    '関連する可能性のある追加情報を提供'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `BACKGROUND:
- This query was written 5 years ago when we had 10K users
- We now have 2M users
- Previous attempts to optimize failed because of ORM limitations
- We recently upgraded to PostgreSQL 15 from 12
- The table has no indexes currently (legacy decision due to write-heavy workload)
- Business is now read-heavy, so indexing is acceptable`
                }
            ],
            commonInfo: {
                vi: [
                    'CONTEXT: Current situation (đang xảy ra gì)',
                    'BACKGROUND: History/reasons (tại sao lại như vậy)'
                ],
                en: [
                    'CONTEXT: Current situation (what is happening)',
                    'BACKGROUND: History/reasons (why it is like this)'
                ],
                ja: [
                    'CONTEXT: 現在の状況（何が起こっているか）',
                    'BACKGROUND: 履歴/理由（なぜこのようになっているか）'
                ]
            }
        }
    },
    {
        id: 'requirements',
        label: '4️⃣ REQUIREMENTS',
        type: 'tertiary',
        shortDescription: {
            vi: 'Yêu cầu - Điều kiện output cần đáp ứng',
            en: 'Requirements - Conditions output must meet',
            ja: '要件 - 出力が満たすべき条件'
        },
        details: {
            definition: {
                vi: 'Phần liệt kê các điều kiện, tiêu chí mà output cần đáp ứng.',
                en: 'Section listing the conditions and criteria that output must meet.',
                ja: '出力が満たすべき条件と基準を列挙するセクション。'
            },
            question: {
                vi: 'Output cần đạt được gì?',
                en: 'What should the output achieve?',
                ja: '出力は何を達成すべきか？'
            },
            purpose: {
                vi: [
                    'Định nghĩa quality criteria cho output',
                    'Specify functional requirements',
                    'Set acceptance criteria'
                ],
                en: [
                    'Define quality criteria for output',
                    'Specify functional requirements',
                    'Set acceptance criteria'
                ],
                ja: [
                    '出力の品質基準を定義',
                    '機能要件を指定',
                    '受け入れ基準を設定'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `REQUIREMENTS:
Functional:
- Support pagination with limit/offset
- Return total count in response
- Filter by date range
- Sort by multiple fields

Non-functional:
- Response time < 200ms for 1000 records
- Handle concurrent requests safely
- Follow RESTful conventions

Code quality:
- Include error handling
- Add TypeScript types
- Write unit tests for edge cases`
                }
            ],
            commonInfo: {
                vi: [
                    'REQUIREMENTS: Những gì output cần có (positive)',
                    'CONSTRAINTS: Những gì output không được có/phải tuân theo (limiting)'
                ],
                en: [
                    'REQUIREMENTS: What output must have (positive)',
                    'CONSTRAINTS: What output must not have/must follow (limiting)'
                ],
                ja: [
                    'REQUIREMENTS: 出力が持つべきもの（肯定的）',
                    'CONSTRAINTS: 出力が持ってはならない/従うべきもの（制限的）'
                ]
            }
        }
    },
    {
        id: 'examples',
        label: '8️⃣ EXAMPLES',
        type: 'tertiary',
        shortDescription: {
            vi: 'Ví dụ - Sample input-output pairs',
            en: 'Examples - Sample input-output pairs',
            ja: '例 - サンプル入出力ペア'
        },
        details: {
            definition: {
                vi: 'Phần cung cấp sample input-output pairs để AI học pattern.',
                en: 'Section providing sample input-output pairs for AI to learn patterns.',
                ja: 'AIがパターンを学習するためのサンプル入出力ペアを提供するセクション。'
            },
            question: {
                vi: 'Giống như thế này?',
                en: 'Like this?',
                ja: 'このように？'
            },
            purpose: {
                vi: [
                    'Demonstrate expected format/style',
                    'Reduce ambiguity về output',
                    'Enable few-shot learning'
                ],
                en: [
                    'Demonstrate expected format/style',
                    'Reduce ambiguity about output',
                    'Enable few-shot learning'
                ],
                ja: [
                    '期待される形式/スタイルを示す',
                    '出力に関する曖昧さを減らす',
                    'Few-shot学習を可能にする'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `EXAMPLES:
Input: calculateTax()
Output: // Calculates tax amount based on income bracket

Input: validateUserInput()  
Output: // Validates user input and returns error messages if invalid

Input: fetchUserData()
Output: // Fetches user data from API and handles errors

NOW:
Input: processPayment()
Output:`
                }
            ],
            commonInfo: {
                vi: [
                    'Đủ examples (2-3 là tốt nhất)',
                    'Diverse examples - Cover different cases',
                    'Representative examples - Typical cho use case',
                    'Khi custom format không phải standard',
                    'Khi cần match existing style',
                    'Khi show input → output mapping'
                ],
                en: [
                    'Enough examples (2-3 is best)',
                    'Diverse examples - Cover different cases',
                    'Representative examples - Typical for use case',
                    'When custom format is not standard',
                    'When needing to match existing style',
                    'When showing input → output mapping'
                ],
                ja: [
                    '十分な例（2-3が最適）',
                    '多様な例 - 異なるケースをカバー',
                    '代表的な例 - ユースケースに典型的',
                    'カスタム形式が標準でない場合',
                    '既存のスタイルに合わせる必要がある場合',
                    '入力→出力マッピングを示す場合'
                ]
            }
        }
    }
];

export const specialNodes = [
    {
        id: 'input',
        label: '6️⃣ INPUT',
        type: 'special',
        shortDescription: {
            vi: 'Dữ liệu đầu vào - Code, text, errors',
            en: 'Input Data - Code, text, errors',
            ja: '入力データ - コード、テキスト、エラー'
        },
        details: {
            definition: {
                vi: 'Phần chứa raw data, code, text, errors mà AI cần xử lý.',
                en: 'Section containing raw data, code, text, and errors that AI needs to process.',
                ja: 'AIが処理する必要のある生データ、コード、テキスト、エラーを含むセクション。'
            },
            question: {
                vi: 'Làm việc với cái gì?',
                en: 'Work with what?',
                ja: '何を作業しますか？'
            },
            purpose: {
                vi: [
                    'Provide actual material để AI làm việc',
                    'Cho AI thấy real situation, không phải abstract',
                    'Enable specific, actionable output'
                ],
                en: [
                    'Provide actual material for AI to work with',
                    'Show AI the real situation, not abstract',
                    'Enable specific, actionable output'
                ],
                ja: [
                    'AIが作業するための実際の素材を提供',
                    '抽象的ではなく実際の状況を示す',
                    '具体的で実行可能な出力を可能にする'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `INPUT:
\`\`\`java
public class UserService {
    private UserRepository repo;
    
    public User getUser(String id) {
        return repo.findById(id).getName(); // NPE here
    }
}
\`\`\`

ERROR:
\`\`\`
java.lang.NullPointerException
    at UserService.getUser(UserService.java:7)
\`\`\``
                }
            ],
            commonInfo: {
                vi: [
                    'CODE: Debug, review, refactor',
                    'ERROR: Debug, troubleshoot',
                    'DATA: Transform, analyze',
                    'DOCUMENT: Summarize, extract',
                    'REQUIREMENTS: Analyze, implement',
                    'CONFIG: Debug, setup'
                ],
                en: [
                    'CODE: Debug, review, refactor',
                    'ERROR: Debug, troubleshoot',
                    'DATA: Transform, analyze',
                    'DOCUMENT: Summarize, extract',
                    'REQUIREMENTS: Analyze, implement',
                    'CONFIG: Debug, setup'
                ],
                ja: [
                    'CODE: デバッグ、レビュー、リファクタリング',
                    'ERROR: デバッグ、トラブルシューティング',
                    'DATA: 変換、分析',
                    'DOCUMENT: 要約、抽出',
                    'REQUIREMENTS: 分析、実装',
                    'CONFIG: デバッグ、セットアップ'
                ]
            }
        }
    },
    {
        id: 'notes',
        label: '🔟 NOTES/WARNINGS',
        type: 'special',
        shortDescription: {
            vi: 'Lưu ý quan trọng - Cảnh báo, edge cases',
            en: 'Important Notes - Warnings, edge cases',
            ja: '重要な注意事項 - 警告、エッジケース'
        },
        details: {
            definition: {
                vi: 'Phần highlight thông tin critical, cảnh báo, edge cases cần chú ý đặc biệt.',
                en: 'Section highlighting critical information, warnings, and edge cases requiring special attention.',
                ja: '重要な情報、警告、特別な注意が必要なエッジケースを強調するセクション。'
            },
            question: {
                vi: 'Có gì cần đặc biệt chú ý?',
                en: 'Anything requiring special attention?',
                ja: '特別な注意が必要なものはありますか？'
            },
            purpose: {
                vi: [
                    'Highlight thông tin quan trọng',
                    'Warn về pitfalls có thể gặp',
                    'Emphasize điều không được bỏ qua'
                ],
                en: [
                    'Highlight important information',
                    'Warn about potential pitfalls',
                    'Emphasize what cannot be ignored'
                ],
                ja: [
                    '重要な情報を強調',
                    '潜在的な落とし穴について警告',
                    '無視できないことを強調'
                ]
            },
            examples: [
                {
                    type: 'good',
                    content: `⚠️ IMPORTANT:
- This function is called by 50+ other modules - DO NOT change signature
- The weird null check on line 15 is intentional - handles legacy data
- Performance is critical here - avoid any additional database calls
- This code handles PII - ensure no logging of sensitive data`
                }
            ],
            commonInfo: {
                vi: [
                    '⚠️ WARNING: Breaking changes, dangerous operations',
                    '🔴 IMPORTANT: Must-follow rules',
                    '📝 NOTE: Additional context',
                    '💡 TIP: Helpful suggestions',
                    '⚠️ CAUTION: Potential issues'
                ],
                en: [
                    '⚠️ WARNING: Breaking changes, dangerous operations',
                    '🔴 IMPORTANT: Must-follow rules',
                    '📝 NOTE: Additional context',
                    '💡 TIP: Helpful suggestions',
                    '⚠️ CAUTION: Potential issues'
                ],
                ja: [
                    '⚠️ WARNING: 破壊的変更、危険な操作',
                    '🔴 IMPORTANT: 必須ルール',
                    '📝 NOTE: 追加コンテキスト',
                    '💡 TIP: 役立つ提案',
                    '⚠️ CAUTION: 潜在的な問題'
                ]
            }
        }
    }
];

export const allNodes = [
    promptTree,
    ...primaryNodes,
    ...secondaryNodes,
    ...tertiaryNodes,
    ...specialNodes
];

export const getNodeById = (id) => allNodes.find(node => node.id === id);
