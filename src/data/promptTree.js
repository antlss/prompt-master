export const promptTree = {
    id: 'root',
    label: '🏗️ KIẾN TRÚC PROMPT',
    type: 'root',
    shortDescription: 'Cấu trúc hoàn chỉnh của một prompt hiệu quả',
    details: {
        definition: 'Một prompt hiệu quả không chỉ là câu hỏi đơn thuần - nó là một cấu trúc giao tiếp được thiết kế để truyền tải đầy đủ thông tin cần thiết cho AI.',
        purpose: [
            'Giống như việc brief một đồng nghiệp mới',
            'Prompt cần trả lời: Ai? Làm gì? Trong hoàn cảnh nào? Với ràng buộc gì? Output như thế nào?'
        ],
        keyTakeaways: [
            'CONTEXT giảm ambiguity → AI không phải đoán',
            'ROLE định hình perspective → Output phù hợp với audience',
            'TASK phải specific → Action verbs + criteria rõ ràng',
            'REQUIREMENTS vs CONSTRAINTS = Cần có vs Không được có',
            'INPUT biến abstract → practical',
            'FORMAT tiết kiệm thời gian reformatting',
            'EXAMPLES powerful hơn words',
            'NOTES/WARNINGS prevent costly mistakes'
        ]
    },
    children: []
};

export const primaryNodes = [
    {
        id: 'context',
        label: '1️⃣ CONTEXT',
        type: 'primary',
        shortDescription: 'Bối cảnh - Mô tả tình huống, hoàn cảnh, môi trường',
        details: {
            definition: 'Phần mô tả tình huống, hoàn cảnh, môi trường mà nhiệm vụ đang diễn ra.',
            question: 'Chuyện gì đang xảy ra?',
            purpose: [
                'Cung cấp background information để AI hiểu "bức tranh lớn"',
                'Giúp AI định vị mình trong situation cụ thể',
                'Loại bỏ ambiguity (sự mơ hồ) trong việc hiểu yêu cầu'
            ],
            valueTable: {
                headers: ['Không có CONTEXT', 'Có CONTEXT'],
                rows: [
                    ['AI đưa ra generic advice', 'AI đưa ra specific advice cho situation'],
                    ['Phải hỏi lại nhiều lần', 'Giảm số lượng iterations'],
                    ['Output có thể không applicable', 'Output directly applicable'],
                    ['AI dùng assumptions', 'AI dùng facts']
                ]
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
            commonInfo: [
                'Technical stack: Language, framework, version',
                'Environment: Dev/staging/production',
                'Domain: Banking, e-commerce, healthcare',
                'Team/Project: Size, maturity, constraints',
                'Timeline: Urgent? Long-term?',
                'Previous attempts: What\'s been tried'
            ]
        }
    },
    {
        id: 'task',
        label: '3️⃣ TASK',
        type: 'primary',
        shortDescription: 'Nhiệm vụ - Cụ thể những gì cần làm',
        details: {
            definition: 'Phần mô tả cụ thể những gì cần làm - là "verb" của prompt.',
            question: 'Cần làm gì?',
            purpose: [
                'Nói rõ action cần thực hiện',
                'Định nghĩa scope của công việc',
                'Set expectations về deliverable'
            ],
            valueTable: {
                headers: ['TASK không rõ', 'TASK rõ ràng'],
                rows: [
                    ['Help me with this code', 'Refactor this code to follow SOLID principles, specifically Single Responsibility'],
                    ['Make it better', 'Optimize for readability by: extracting methods, improving naming, adding comments'],
                    ['Fix the bug', 'Identify the root cause of the null pointer exception and provide a fix with explanation']
                ]
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
            commonInfo: [
                'Analysis: Analyze, Evaluate, Compare, Assess, Review, Examine',
                'Creation: Create, Generate, Write, Build, Design, Develop',
                'Transformation: Refactor, Convert, Translate, Optimize, Simplify',
                'Explanation: Explain, Describe, Clarify, Summarize, Break down',
                'Problem-solving: Fix, Debug, Solve, Troubleshoot, Resolve',
                'Decision: Recommend, Suggest, Advise, Propose, Prioritize'
            ]
        }
    },
    {
        id: 'output',
        label: '7️⃣ OUTPUT',
        type: 'primary',
        shortDescription: 'Định dạng đầu ra - Cấu trúc response mong muốn',
        details: {
            definition: 'Phần specify cấu trúc, format, style của response mong muốn.',
            question: 'Trả lời như thế nào?',
            purpose: [
                'Control structure của output',
                'Ensure output usable immediately',
                'Reduce need for reformatting'
            ],
            valueTable: {
                headers: ['Không specify FORMAT', 'Có specify FORMAT'],
                rows: [
                    ['AI tự quyết định format', 'Output đúng như mong đợi'],
                    ['Có thể quá dài hoặc quá ngắn', 'Copy-paste được ngay'],
                    ['Có thể không match với use case', 'Không cần reformat trước khi dùng']
                ]
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
            commonInfo: [
                'Bullet points: Lists, steps, features',
                'Numbered list: Sequential steps, ranked items',
                'Table: Comparisons, structured data',
                'Code block: Code output',
                'JSON/YAML: Structured data, configs',
                'Markdown: Documentation',
                'Diagram (Mermaid): Flows, architecture'
            ]
        }
    }
];

export const secondaryNodes = [
    {
        id: 'role',
        label: '2️⃣ ROLE',
        type: 'secondary',
        shortDescription: 'Vai trò - Persona, expertise, góc nhìn của AI',
        details: {
            definition: 'Phần định nghĩa persona, expertise, góc nhìn mà AI nên adopt khi trả lời.',
            question: 'Tôi đang nói chuyện với ai?',
            purpose: [
                'Frame cách AI approach vấn đề',
                'Activate domain knowledge cụ thể',
                'Định hình tone, depth, perspective của response'
            ],
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
            commonInfo: [
                'Khi cần expertise cụ thể (security, performance, architecture)',
                'Khi muốn perspective đặc biệt (beginner-friendly, executive summary)',
                'Khi cần domain knowledge (banking, healthcare, legal)',
                'Khi muốn tone cụ thể (formal, casual, educational)'
            ]
        }
    },
    {
        id: 'constraints',
        label: '5️⃣ CONSTRAINTS',
        type: 'secondary',
        shortDescription: 'Ràng buộc - Giới hạn, điều không được làm',
        details: {
            definition: 'Phần định nghĩa giới hạn, boundaries, điều không được làm.',
            question: 'Có giới hạn gì không?',
            purpose: [
                'Set boundaries cho solution',
                'Prevent unwanted approaches',
                'Ensure compatibility với existing system'
            ],
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
            commonInfo: [
                'Technical: "No external libraries", "Must use Java 8", "PostgreSQL only"',
                'Compatibility: "Backward compatible", "Support legacy browsers"',
                'Scope: "Don\'t modify other files", "Focus only on this function"',
                'Style: "Follow existing code style", "Use camelCase"',
                'Time/Resource: "Quick fix only", "No major refactoring"',
                'Security: "No hardcoded secrets", "Sanitize all inputs"'
            ]
        }
    },
    {
        id: 'format',
        label: '7️⃣ FORMAT',
        type: 'secondary',
        shortDescription: 'Định dạng - Style và structure cụ thể',
        details: {
            definition: 'Chi tiết về format, style của output mong muốn.',
            question: 'Trình bày như thế nào?',
            purpose: [
                'Specify exact structure',
                'Control length và detail level',
                'Match với intended use case'
            ],
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
            commonInfo: [
                'Length control: "2-3 sentences", "max 500 words"',
                'Structure: "numbered list", "table format"',
                'Code style: "with inline comments", "TypeScript types"',
                'Audience: "non-technical", "for senior developers"'
            ]
        }
    }
];

export const tertiaryNodes = [
    {
        id: 'background',
        label: '9️⃣ BACKGROUND',
        type: 'tertiary',
        shortDescription: 'Nền tảng - Thông tin bổ sung, lịch sử',
        details: {
            definition: 'Phần cung cấp thông tin bổ sung, lịch sử, context mở rộng không trực tiếp liên quan đến task nhưng giúp AI hiểu better.',
            question: 'Tại sao lại như vậy?',
            purpose: [
                'Provide historical context',
                'Explain why things are the way they are',
                'Give additional information that might be relevant'
            ],
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
            commonInfo: [
                'CONTEXT: Current situation (đang xảy ra gì)',
                'BACKGROUND: History/reasons (tại sao lại như vậy)'
            ]
        }
    },
    {
        id: 'requirements',
        label: '4️⃣ REQUIREMENTS',
        type: 'tertiary',
        shortDescription: 'Yêu cầu - Điều kiện output cần đáp ứng',
        details: {
            definition: 'Phần liệt kê các điều kiện, tiêu chí mà output cần đáp ứng.',
            question: 'Output cần đạt được gì?',
            purpose: [
                'Định nghĩa quality criteria cho output',
                'Specify functional requirements',
                'Set acceptance criteria'
            ],
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
            commonInfo: [
                'REQUIREMENTS: Những gì output cần có (positive)',
                'CONSTRAINTS: Những gì output không được có/phải tuân theo (limiting)'
            ]
        }
    },
    {
        id: 'examples',
        label: '8️⃣ EXAMPLES',
        type: 'tertiary',
        shortDescription: 'Ví dụ - Sample input-output pairs',
        details: {
            definition: 'Phần cung cấp sample input-output pairs để AI học pattern.',
            question: 'Giống như thế này?',
            purpose: [
                'Demonstrate expected format/style',
                'Reduce ambiguity về output',
                'Enable few-shot learning'
            ],
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
            commonInfo: [
                'Đủ examples (2-3 là tốt nhất)',
                'Diverse examples - Cover different cases',
                'Representative examples - Typical cho use case',
                'Khi custom format không phải standard',
                'Khi cần match existing style',
                'Khi show input → output mapping'
            ]
        }
    }
];

export const specialNodes = [
    {
        id: 'input',
        label: '6️⃣ INPUT',
        type: 'special',
        shortDescription: 'Dữ liệu đầu vào - Code, text, errors',
        details: {
            definition: 'Phần chứa raw data, code, text, errors mà AI cần xử lý.',
            question: 'Làm việc với cái gì?',
            purpose: [
                'Provide actual material để AI làm việc',
                'Cho AI thấy real situation, không phải abstract',
                'Enable specific, actionable output'
            ],
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
            commonInfo: [
                'CODE: Debug, review, refactor',
                'ERROR: Debug, troubleshoot',
                'DATA: Transform, analyze',
                'DOCUMENT: Summarize, extract',
                'REQUIREMENTS: Analyze, implement',
                'CONFIG: Debug, setup'
            ]
        }
    },
    {
        id: 'notes',
        label: '🔟 NOTES/WARNINGS',
        type: 'special',
        shortDescription: 'Lưu ý quan trọng - Cảnh báo, edge cases',
        details: {
            definition: 'Phần highlight thông tin critical, cảnh báo, edge cases cần chú ý đặc biệt.',
            question: 'Có gì cần đặc biệt chú ý?',
            purpose: [
                'Highlight thông tin quan trọng',
                'Warn về pitfalls có thể gặp',
                'Emphasize điều không được bỏ qua'
            ],
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
            commonInfo: [
                '⚠️ WARNING: Breaking changes, dangerous operations',
                '🔴 IMPORTANT: Must-follow rules',
                '📝 NOTE: Additional context',
                '💡 TIP: Helpful suggestions',
                '⚠️ CAUTION: Potential issues'
            ]
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
