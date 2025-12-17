export const templates = {
    developer: [
        {
            id: 'dev-1',
            title: {
                vi: 'Debug Error Analysis',
                en: 'Debug Error Analysis',
                ja: 'デバッグエラー分析'
            },
            description: {
                vi: 'Phân tích và fix errors với context đầy đủ',
                en: 'Analyze and fix errors with full context',
                ja: 'フルコンテキストでエラーを分析・修正'
            },
            popular: true,
            template: `CONTEXT:
Language: [language]
Framework: [framework]
Environment: [dev/staging/prod]

ERROR MESSAGE:
\`\`\`
[Paste full error message/stack trace]
\`\`\`

RELEVANT CODE:
\`\`\`[language]
[Paste code causing error]
\`\`\`

WHAT I'VE TRIED:
- [Attempt 1]
- [Attempt 2]

TASK:
1. Analyze root cause
2. Explain why this error occurs
3. Suggest fix(es) with code example
4. Recommend prevention for the future`
        },
        {
            id: 'dev-2',
            title: {
                vi: 'Code Explanation',
                en: 'Code Explanation',
                ja: 'コード説明'
            },
            description: {
                vi: 'Hiểu code từ codebase mới hoặc legacy',
                en: 'Understand code from new or legacy codebase',
                ja: '新規またはレガシーコードベースのコードを理解'
            },
            popular: true,
            template: `CONTEXT:
Language: [language]
Framework: [framework if applicable]
Purpose: I need to understand this code

CODE:
\`\`\`[language]
[Paste code here]
\`\`\`

TASK:
1. Explain high-level what this code does
2. Walk through each important part
3. Explain logic and flow
4. Point out patterns used
5. Highlight potential issues (if any)`
        },
        {
            id: 'dev-3',
            title: {
                vi: 'Unit Test Generation',
                en: 'Unit Test Generation',
                ja: 'ユニットテスト生成'
            },
            description: {
                vi: 'Generate unit tests với coverage đầy đủ',
                en: 'Generate unit tests with full coverage',
                ja: 'フルカバレッジでユニットテストを生成'
            },
            popular: true,
            template: `CONTEXT:
Language: [language]
Testing framework: [Jest/JUnit/pytest/etc]
Code to test: [function/class/module]

CODE:
\`\`\`[language]
[Paste code to test]
\`\`\`

TASK:
Generate unit tests covering:
1. Happy path cases
2. Edge cases (null, empty, boundary values)
3. Error cases
4. Mock setup (if there are dependencies)

REQUIREMENTS:
- Follow [AAA/Given-When-Then] pattern
- Descriptive test names
- Comments explaining each test's purpose`
        },
        {
            id: 'dev-4',
            title: {
                vi: 'Code Refactoring',
                en: 'Code Refactoring',
                ja: 'コードリファクタリング'
            },
            description: {
                vi: 'Cải thiện code quality và maintainability',
                en: 'Improve code quality and maintainability',
                ja: 'コード品質と保守性を改善'
            },
            template: `CONTEXT:
Language: [language]
Current issues: [code smells/performance/readability]
Constraints: [don't change public API/backward compatible/etc]

CODE:
\`\`\`[language]
[Paste code to refactor]
\`\`\`

TASK:
1. Identify issues in the code
2. Suggest refactoring with explanations
3. Provide refactored code
4. Explain benefits of changes
5. Note any breaking changes

⚠️ IMPORTANT:
- Preserve existing functionality
- Explain each change
- I will review carefully before applying`
        },
        {
            id: 'dev-5',
            title: {
                vi: 'API Design',
                en: 'API Design',
                ja: 'API設計'
            },
            description: {
                vi: 'Thiết kế REST API endpoints',
                en: 'Design REST API endpoints',
                ja: 'REST APIエンドポイント設計'
            },
            template: `CONTEXT:
Service: [service name]
Purpose: [describe purpose]
Consumers: [internal/external/both]
Authentication: [method]

REQUIREMENTS:
[Describe API requirements]

TASK:
Design REST API with:
1. Endpoints (method + path)
2. Request/Response schemas
3. Error responses
4. Pagination strategy (if needed)
5. Versioning approach

OUTPUT FORMAT:
- OpenAPI-style documentation
- Example requests/responses`
        },
        {
            id: 'dev-6',
            title: {
                vi: 'Database Query Optimization',
                en: 'Database Query Optimization',
                ja: 'データベースクエリ最適化'
            },
            description: {
                vi: 'Tối ưu queries chậm',
                en: 'Optimize slow queries',
                ja: '遅いクエリを最適化'
            },
            template: `CONTEXT:
Database: [MySQL/PostgreSQL/MongoDB/etc]
Table/Collection: [name]
Current issue: [slow query/high CPU/etc]

CURRENT QUERY:
\`\`\`sql
[Paste query]
\`\`\`

TABLE STRUCTURE:
\`\`\`sql
[Paste schema or describe]
\`\`\`

INDEXES:
[List existing indexes]

TASK:
1. Analyze query performance issues
2. Suggest optimizations
3. Recommend indexes
4. Provide optimized query
5. Explain improvements`
        }
    ],
    ba: [
        {
            id: 'ba-1',
            title: {
                vi: 'Requirements Analysis',
                en: 'Requirements Analysis',
                ja: '要件分析'
            },
            description: {
                vi: 'Phân tích và làm rõ requirements',
                en: 'Analyze and clarify requirements',
                ja: '要件を分析・明確化'
            },
            popular: true,
            template: `CONTEXT:
I am a BA analyzing requirements for [feature/project].
Domain: [domain]
Stakeholders: [list]

RAW REQUIREMENTS:
[Paste requirements from stakeholder]

TASK:
1. Summarize main requirements
2. Identify gaps and ambiguities
3. List clarification questions for stakeholder
4. Suggest user stories format

FORMAT:
- Summary: short bullet points
- Gaps: numbered list with explanation
- Questions: grouped by topic
- User Stories: As a [user], I want [action], so that [benefit]`
        },
        {
            id: 'ba-2',
            title: {
                vi: 'User Story Writing',
                en: 'User Story Writing',
                ja: 'ユーザーストーリー作成'
            },
            description: {
                vi: 'Viết user stories với acceptance criteria',
                en: 'Write user stories with acceptance criteria',
                ja: '受け入れ基準付きユーザーストーリーを作成'
            },
            popular: true,
            template: `CONTEXT:
Feature: [feature name]
Epic: [epic name if applicable]
User type: [end user/admin/system]

REQUIREMENTS:
[Describe requirements]

TASK:
Write user stories with:
1. Short title
2. Description: As a [user], I want [action], so that [benefit]
3. Acceptance Criteria (Given-When-Then)
4. Edge cases
5. Dependencies

CONSTRAINTS:
- Each story should be completable in 1-3 days
- Independent and testable
- Don't include technical implementation`
        },
        {
            id: 'ba-3',
            title: {
                vi: 'Gap Analysis',
                en: 'Gap Analysis',
                ja: 'ギャップ分析'
            },
            description: {
                vi: 'So sánh current state và desired state',
                en: 'Compare current state and desired state',
                ja: '現状とあるべき姿を比較'
            },
            template: `CONTEXT:
Current state: [describe current]
Desired state: [describe desired]
Domain: [domain]

TASK:
Perform gap analysis:
1. List differences between current and desired
2. Categorize gaps: Process/Technology/People/Data
3. Assess impact of each gap: High/Medium/Low
4. Suggest actions to close each gap
5. Prioritize actions

OUTPUT:
| Gap | Category | Impact | Suggested Action | Priority |`
        },
        {
            id: 'ba-4',
            title: {
                vi: 'Use Case Documentation',
                en: 'Use Case Documentation',
                ja: 'ユースケースドキュメント'
            },
            description: {
                vi: 'Document use cases chi tiết',
                en: 'Document detailed use cases',
                ja: '詳細なユースケースをドキュメント化'
            },
            template: `CONTEXT:
Use case name: [name]
System: [system name]
Primary actor: [actor]

DESCRIPTION:
[Brief description]

TASK:
Document use case with:
1. Use Case ID & Name
2. Primary Actor
3. Stakeholders & Interests
4. Preconditions
5. Main Success Scenario (numbered steps)
6. Extensions/Alternative Flows
7. Postconditions
8. Business Rules
9. Special Requirements

FORMAT: Structured document`
        }
    ],
    pmpo: [
        {
            id: 'pm-1',
            title: {
                vi: 'Product Research & Comparison',
                en: 'Product Research & Comparison',
                ja: '製品調査・比較'
            },
            description: {
                vi: 'So sánh solutions và đưa ra recommendations',
                en: 'Compare solutions and provide recommendations',
                ja: 'ソリューションを比較・推奨を提供'
            },
            popular: true,
            template: `CONTEXT:
I am a Product Manager researching [product/feature name].
Target market: [describe market]
Constraints: [budget/timeline/resources]

TASK:
1. Compare similar solutions in the market
2. Analyze pros/cons of each solution
3. Recommend the most suitable solution

FORMAT:
- Comparison table
- Pros/Cons for each option
- Recommendation with reasoning`
        },
        {
            id: 'pm-2',
            title: {
                vi: 'PRD Draft',
                en: 'PRD Draft',
                ja: 'PRDドラフト'
            },
            description: {
                vi: 'Draft Product Requirements Document',
                en: 'Draft Product Requirements Document',
                ja: '製品要件ドキュメントのドラフト'
            },
            template: `CONTEXT:
I need to write a PRD for [feature name].
Product: [product name]
Target users: [describe users]
Business goal: [goal]

TASK:
Help me draft PRD including:
1. Problem Statement
2. Proposed Solution
3. User Stories
4. Success Metrics
5. Out of Scope
6. Open Questions

CONSTRAINTS:
- Concise and clear
- Focus on "What" and "Why", not "How"
- Avoid technical implementation details`
        },
        {
            id: 'pm-3',
            title: {
                vi: 'Feature Prioritization',
                en: 'Feature Prioritization',
                ja: '機能優先順位付け'
            },
            description: {
                vi: 'Prioritize features với framework',
                en: 'Prioritize features with framework',
                ja: 'フレームワークで機能を優先順位付け'
            },
            template: `CONTEXT:
I have a list of features to prioritize for [quarter/sprint].
Team capacity: [X story points/sprints]
Business priorities: [list priorities]

FEATURES LIST:
[Paste feature list]

TASK:
Help me prioritize using:
1. Apply framework [RICE/MoSCoW/Value vs Effort]
2. Explain reasoning for top priorities
3. Identify dependencies
4. Suggest grouping/sequencing

OUTPUT:
- Prioritization table
- Reasoning for top 5
- Recommendations`
        }
    ],
    qa: [
        {
            id: 'qa-1',
            title: {
                vi: 'Test Cases from Requirements',
                en: 'Test Cases from Requirements',
                ja: '要件からテストケース作成'
            },
            description: {
                vi: 'Generate test cases từ requirements',
                en: 'Generate test cases from requirements',
                ja: '要件からテストケースを生成'
            },
            popular: true,
            template: `CONTEXT:
Feature: [feature name]
Priority: [high/medium/low]
Test type: [functional/integration/e2e]

REQUIREMENTS:
[Paste requirements/user story]

ACCEPTANCE CRITERIA:
[Paste ACs if available]

TASK:
Generate test cases with:
1. Test Case ID
2. Title
3. Preconditions
4. Test Steps
5. Expected Results
6. Test Data
7. Priority

COVERAGE:
- Positive cases
- Negative cases
- Boundary cases
- Edge cases`
        },
        {
            id: 'qa-2',
            title: {
                vi: 'Playwright Automation Script',
                en: 'Playwright Automation Script',
                ja: 'Playwright自動化スクリプト'
            },
            description: {
                vi: 'Generate Playwright test scripts',
                en: 'Generate Playwright test scripts',
                ja: 'Playwrightテストスクリプトを生成'
            },
            template: `CONTEXT:
Framework: Playwright
Language: [TypeScript/JavaScript]
Page/Feature: [description]

TEST SCENARIO:
[Describe what to test]

PAGE STRUCTURE:
[Paste relevant HTML or describe elements]

TASK:
Generate Playwright test script with:
1. Page Object (if needed)
2. Test setup/teardown
3. Test steps
4. Assertions
5. Error handling
6. Comments

BEST PRACTICES:
- Use data-testid selectors when possible
- Proper wait strategies
- Descriptive test names`
        },
        {
            id: 'qa-3',
            title: {
                vi: 'API Test Cases',
                en: 'API Test Cases',
                ja: 'APIテストケース'
            },
            description: {
                vi: 'Generate API test scenarios',
                en: 'Generate API test scenarios',
                ja: 'APIテストシナリオを生成'
            },
            template: `CONTEXT:
API: [endpoint]
Method: [GET/POST/PUT/DELETE]
Purpose: [description]

API SPEC:
\`\`\`json
[Paste API spec/example]
\`\`\`

TASK:
Generate API test cases covering:
1. Success scenarios (200, 201)
2. Client errors (400, 401, 403, 404)
3. Server errors (500)
4. Input validation
5. Edge cases
6. Performance considerations

FORMAT:
| ID | Scenario | Request | Expected Response | Priority |`
        }
    ],
    techlead: [
        {
            id: 'tl-1',
            title: {
                vi: 'Architecture Review',
                en: 'Architecture Review',
                ja: 'アーキテクチャレビュー'
            },
            description: {
                vi: 'Review và đánh giá architecture',
                en: 'Review and evaluate architecture',
                ja: 'アーキテクチャをレビュー・評価'
            },
            popular: true,
            template: `CONTEXT:
System: [system name]
Current state: [brief description]
Proposed change: [what's being proposed]

ARCHITECTURE:
[Describe or paste architecture diagram description]

REQUIREMENTS:
- Scale: [expected load]
- Performance: [latency/throughput requirements]
- Availability: [uptime requirements]

TASK:
Review architecture and provide:
1. Strengths of current approach
2. Potential issues/risks
3. Scalability concerns
4. Security considerations
5. Alternative approaches
6. Recommendations with tradeoffs`
        },
        {
            id: 'tl-2',
            title: {
                vi: 'Technical Decision (ADR)',
                en: 'Technical Decision (ADR)',
                ja: '技術的決定 (ADR)'
            },
            description: {
                vi: 'Document architectural decisions',
                en: 'Document architectural decisions',
                ja: 'アーキテクチャ決定を文書化'
            },
            template: `CONTEXT:
Decision: [what needs to be decided]
Stakeholders: [who's affected]
Timeline: [when decision needed]

BACKGROUND:
[Context and why decision is needed]

OPTIONS:
1. [Option 1]
2. [Option 2]
3. [Option 3]

TASK:
Help me document ADR (Architecture Decision Record) with:
1. Title
2. Status
3. Context
4. Decision
5. Consequences (positive & negative)
6. Alternatives Considered
7. References`
        },
        {
            id: 'tl-3',
            title: {
                vi: 'Incident Post-mortem',
                en: 'Incident Post-mortem',
                ja: 'インシデント事後分析'
            },
            description: {
                vi: 'Structure post-mortem document',
                en: 'Structure post-mortem document',
                ja: '事後分析ドキュメントの構成'
            },
            template: `CONTEXT:
Incident: [brief description]
Date/Time: [when]
Duration: [how long]
Impact: [who/what affected]
Severity: [P1/P2/P3]

TIMELINE:
[What happened when]

TASK:
Help structure post-mortem:
1. Executive Summary
2. Impact Assessment
3. Timeline of Events
4. Root Cause Analysis (5 Whys)
5. What Went Well
6. What Went Wrong
7. Action Items (preventive & detective)
8. Lessons Learned

TONE: Blameless, focused on learning`
        }
    ]
};

export const bestPractices = [
    {
        title: 'Context + Task + Format',
        description: {
            vi: 'Pattern cơ bản cho hầu hết các tasks',
            en: 'Basic pattern for most tasks',
            ja: 'ほとんどのタスクに使える基本パターン'
        },
        example: `CONTEXT:
[Describe situation, background, constraints]

TASK:
[Describe specifically what to do]

FORMAT:
[Specify desired output format]`
    },
    {
        title: 'Role + Goal + Constraints',
        description: {
            vi: 'Khi cần expertise cụ thể',
            en: 'When specific expertise is needed',
            ja: '特定の専門知識が必要な場合'
        },
        example: `ROLE:
Act as [specific role] with expertise in [domain].

GOAL:
Help me [specific objective].

CONSTRAINTS:
- [Constraint 1]
- [Constraint 2]`
    },
    {
        title: 'Step-by-step',
        description: {
            vi: 'Cho complex problems và debugging',
            en: 'For complex problems and debugging',
            ja: '複雑な問題とデバッグ向け'
        },
        example: `CONTEXT:
[Background]

TASK:
[Complex task]

APPROACH:
Please work through this step by step:
1. First, [step 1]
2. Then, [step 2]
3. Finally, [step 3]

Show your reasoning at each step.`
    },
    {
        title: 'Few-shot (Examples)',
        description: {
            vi: 'Khi cần specific format/style',
            en: 'When specific format/style is needed',
            ja: '特定のフォーマット/スタイルが必要な場合'
        },
        example: `TASK: [Describe task]

EXAMPLES:
Input: [example input 1]
Output: [example output 1]

Input: [example input 2]
Output: [example output 2]

NOW:
Input: [your actual input]
Output:`
    }
];

export const dosAndDonts = {
    dos: [
        {
            title: { vi: 'Cung cấp Context đầy đủ', en: 'Provide full context', ja: '完全なコンテキストを提供' },
            desc: { vi: 'Background, constraints, code, errors', en: 'Background, constraints, code, errors', ja: '背景、制約、コード、エラー' }
        },
        {
            title: { vi: 'Chia nhỏ tasks', en: 'Break down tasks', ja: 'タスクを分割' },
            desc: { vi: 'Thay vì "build website", hãy "create ProductCard component"', en: 'Instead of "build website", use "create ProductCard component"', ja: '「ウェブサイト構築」ではなく「ProductCardコンポーネント作成」' }
        },
        {
            title: { vi: 'Specify output format', en: 'Specify output format', ja: '出力形式を指定' },
            desc: { vi: 'Nói rõ muốn nhận output như thế nào', en: 'Clearly state how you want the output', ja: '出力の形式を明確に述べる' }
        },
        {
            title: { vi: 'Iterate và refine', en: 'Iterate and refine', ja: '反復と改善' },
            desc: { vi: 'Feedback → Adjust → Improve', en: 'Feedback → Adjust → Improve', ja: 'フィードバック → 調整 → 改善' }
        },
        {
            title: { vi: 'Review trước khi dùng', en: 'Review before using', ja: '使用前にレビュー' },
            desc: { vi: 'Hiểu code trước khi commit', en: 'Understand code before committing', ja: 'コミット前にコードを理解' }
        }
    ],
    donts: [
        {
            title: { vi: 'Blind copy/paste', en: 'Blind copy/paste', ja: '盲目的なコピペ' },
            desc: { vi: '25% suggestions có lỗi logic', en: '25% of suggestions have logic errors', ja: '提案の25%にロジックエラーあり' }
        },
        {
            title: { vi: 'Over-reliance', en: 'Over-reliance', ja: '過度の依存' },
            desc: { vi: 'Không để mất kỹ năng cốt lõi', en: 'Don\'t lose core skills', ja: 'コアスキルを失わないように' }
        },
        {
            title: { vi: 'Vague prompts', en: 'Vague prompts', ja: '曖昧なプロンプト' },
            desc: { vi: '"Fix this" → AI đoán mò', en: '"Fix this" → AI guesses', ja: '「これを直して」→ AIは推測' }
        },
        {
            title: { vi: 'Skip testing', en: 'Skip testing', ja: 'テストを省略' },
            desc: { vi: '"Looks good" ≠ works correctly', en: '"Looks good" ≠ works correctly', ja: '「良さそう」≠ 正しく動作' }
        }
    ]
};

export const roles = [
    { id: 'developer', name: 'Developer', icon: 'Code', color: 'emerald' },
    { id: 'ba', name: 'BA', icon: 'FileText', color: 'blue' },
    { id: 'pmpo', name: 'PM/PO', icon: 'Briefcase', color: 'purple' },
    { id: 'qa', name: 'QA', icon: 'TestTube', color: 'orange' },
    { id: 'techlead', name: 'Tech Lead', icon: 'Settings', color: 'pink' }
];
