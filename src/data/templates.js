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
        },
        {
            id: 'dev-7',
            title: {
                vi: 'Code Review',
                en: 'Code Review',
                ja: 'コードレビュー'
            },
            description: {
                vi: 'Review code để tìm bugs, issues và cải thiện',
                en: 'Review code to find bugs, issues and improvements',
                ja: 'バグ、問題、改善点を見つけるコードレビュー'
            },
            popular: true,
            template: `CONTEXT:
Language: [language]
Framework: [framework]
Type: [PR review/Full codebase review/Specific module]
Focus areas: [security/performance/readability/all]

CODE TO REVIEW:
\`\`\`[language]
[Paste code here]
\`\`\`

TASK:
Review this code and provide:
1. Critical Issues (bugs, security vulnerabilities)
2. Code Quality Issues (naming, structure, complexity)
3. Performance Concerns
4. Best Practice Violations
5. Suggestions for Improvement

OUTPUT FORMAT:
- Severity: 🔴 Critical / 🟡 Warning / 🔵 Info
- Location: file/line reference
- Issue: description
- Suggestion: how to fix`
        },
        {
            id: 'dev-8',
            title: {
                vi: 'Security Audit',
                en: 'Security Audit',
                ja: 'セキュリティ監査'
            },
            description: {
                vi: 'Phân tích bảo mật và tìm lỗ hổng',
                en: 'Security analysis and vulnerability detection',
                ja: 'セキュリティ分析と脆弱性検出'
            },
            template: `CONTEXT:
Application type: [web/mobile/API/backend]
Language/Framework: [language/framework]
Authentication: [method used]
Data sensitivity: [PII/financial/healthcare/general]

CODE/CONFIG TO AUDIT:
\`\`\`[language]
[Paste code or config here]
\`\`\`

TASK:
Perform security audit checking for:
1. OWASP Top 10 vulnerabilities
2. Authentication/Authorization issues
3. Input validation problems
4. Sensitive data exposure
5. Security misconfigurations

OUTPUT FORMAT:
| Vulnerability | Severity | Location | Description | Remediation |
Include CVSS score estimation if applicable.`
        },
        {
            id: 'dev-9',
            title: {
                vi: 'Documentation Generation',
                en: 'Documentation Generation',
                ja: 'ドキュメント生成'
            },
            description: {
                vi: 'Tạo documentation từ code',
                en: 'Generate documentation from code',
                ja: 'コードからドキュメントを生成'
            },
            template: `CONTEXT:
Language: [language]
Documentation type: [API docs/README/JSDoc/inline comments]
Audience: [developers/end-users/both]

CODE:
\`\`\`[language]
[Paste code here]
\`\`\`

TASK:
Generate documentation including:
1. Overview/Purpose
2. Installation/Setup (if applicable)
3. Usage examples
4. API reference (functions, parameters, return values)
5. Error handling

REQUIREMENTS:
- Clear and concise language
- Include code examples
- Follow [JSDoc/Sphinx/Swagger] format
- Suitable for [audience level]`
        },
        {
            id: 'dev-10',
            title: {
                vi: 'Git Commit Message',
                en: 'Git Commit Message',
                ja: 'Gitコミットメッセージ'
            },
            description: {
                vi: 'Viết commit message theo chuẩn Conventional Commits',
                en: 'Write commit messages following Conventional Commits',
                ja: 'Conventional Commitsに従ったコミットメッセージ'
            },
            template: `CONTEXT:
Changes made: [describe what was changed]
Files affected: [list main files]
Related issue: [issue/ticket number if any]

DIFF/CHANGES:
\`\`\`diff
[Paste git diff or describe changes]
\`\`\`

TASK:
Generate a commit message following Conventional Commits format:
- type: feat/fix/docs/style/refactor/test/chore
- scope: component/module affected
- description: imperative mood, lowercase

OUTPUT FORMAT:
\`\`\`
<type>(<scope>): <description>

[optional body - what and why]

[optional footer - breaking changes, issue refs]
\`\`\`

Provide 2-3 options if the changes are complex.`
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
        },
        {
            id: 'pm-4',
            title: {
                vi: 'Release Notes',
                en: 'Release Notes',
                ja: 'リリースノート'
            },
            description: {
                vi: 'Viết release notes chuyên nghiệp',
                en: 'Write professional release notes',
                ja: 'プロフェッショナルなリリースノート'
            },
            template: `CONTEXT:
Product: [product name]
Version: [version number]
Release date: [date]
Audience: [internal/external/both]

CHANGES IN THIS RELEASE:
Features:
- [Feature 1]
- [Feature 2]

Bug Fixes:
- [Fix 1]
- [Fix 2]

Improvements:
- [Improvement 1]

TASK:
Write release notes including:
1. Version header with date
2. Highlights summary (2-3 sentences)
3. New Features (with brief descriptions)
4. Improvements
5. Bug Fixes
6. Known Issues (if any)
7. Breaking Changes (if any)
8. Upgrade instructions (if needed)

OUTPUT FORMAT:
Professional release notes suitable for [audience].
Tone: [technical/user-friendly/marketing]`
        },
        {
            id: 'pm-5',
            title: {
                vi: 'User Feedback Analysis',
                en: 'User Feedback Analysis',
                ja: 'ユーザーフィードバック分析'
            },
            description: {
                vi: 'Phân tích và tổng hợp feedback người dùng',
                en: 'Analyze and synthesize user feedback',
                ja: 'ユーザーフィードバックを分析・統合'
            },
            popular: true,
            template: `CONTEXT:
Product: [product name]
Feedback source: [app reviews/surveys/support tickets/interviews]
Time period: [date range]
Sample size: [number of feedback items]

FEEDBACK DATA:
[Paste feedback samples or summary]

TASK:
Analyze this feedback and provide:
1. Executive Summary (key insights)
2. Sentiment breakdown (positive/negative/neutral %)
3. Top themes/categories (with frequency)
4. Critical issues requiring immediate attention
5. Feature requests ranked by demand
6. Actionable recommendations

OUTPUT FORMAT:
- Summary table
- Detailed analysis by category
- Priority matrix (Impact vs Frequency)
- Recommended next steps`
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
        },
        {
            id: 'qa-4',
            title: {
                vi: 'Bug Report',
                en: 'Bug Report',
                ja: 'バグレポート'
            },
            description: {
                vi: 'Viết bug report chi tiết và chuẩn',
                en: 'Write detailed and standardized bug reports',
                ja: '詳細で標準化されたバグレポート'
            },
            popular: true,
            template: `CONTEXT:
Application: [application name]
Environment: [dev/staging/production]
Version: [app version]
Browser/Device: [if applicable]

BUG DESCRIPTION:
[Describe what happened]

STEPS TO REPRODUCE:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED RESULT:
[What should happen]

ACTUAL RESULT:
[What actually happened]

TASK:
Help me create a comprehensive bug report including:
1. Clear, descriptive title
2. Severity assessment (Critical/High/Medium/Low)
3. Priority recommendation
4. Root cause hypothesis
5. Suggested fix (if obvious)
6. Related test cases to add

OUTPUT FORMAT:
Standard bug report template with all fields filled.`
        },
        {
            id: 'qa-5',
            title: {
                vi: 'Test Plan',
                en: 'Test Plan',
                ja: 'テスト計画'
            },
            description: {
                vi: 'Viết test plan chuyên nghiệp',
                en: 'Write professional test plans',
                ja: 'プロフェッショナルなテスト計画'
            },
            template: `CONTEXT:
Project/Feature: [name]
Release date: [date]
Testing scope: [full regression/feature testing/smoke]
Team size: [number of testers]
Available time: [days/hours]

REQUIREMENTS:
[Paste or summarize requirements]

TASK:
Create a test plan including:
1. Test Objectives
2. Scope (In-scope / Out-of-scope)
3. Test Strategy (types of testing)
4. Test Environment requirements
5. Entry/Exit Criteria
6. Test Deliverables
7. Resource & Schedule
8. Risk Assessment & Mitigation

OUTPUT FORMAT:
Professional test plan document structure.`
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
    ],
    tasks: [
        {
            id: 'task-1',
            title: {
                vi: 'Research & Discovery',
                en: 'Research & Discovery',
                ja: 'リサーチ＆発見'
            },
            description: {
                vi: 'Nghiên cứu công nghệ, tools hoặc solutions mới',
                en: 'Research new technologies, tools or solutions',
                ja: '新しい技術、ツール、ソリューションをリサーチ'
            },
            popular: true,
            template: `CONTEXT:
I need to research [topic/technology/tool] for [project/purpose].
Current knowledge level: [beginner/intermediate/advanced]
Time available: [hours/days]

RESEARCH GOALS:
- [Goal 1: e.g., Understand core concepts]
- [Goal 2: e.g., Compare with alternatives]
- [Goal 3: e.g., Evaluate for our use case]

CONSTRAINTS:
- Must work with: [existing stack/requirements]
- Budget: [if applicable]
- Timeline: [deadline]

TASK:
1. Provide overview of [topic]
2. List key features/capabilities
3. Compare with alternatives (pros/cons table)
4. Evaluate fit for my use case
5. Recommend learning resources
6. Suggest next steps

OUTPUT FORMAT:
- Executive summary (2-3 sentences)
- Detailed findings by section
- Comparison table
- Recommendations with reasoning`
        },
        {
            id: 'task-2',
            title: {
                vi: 'Deep Analysis',
                en: 'Deep Analysis',
                ja: '深層分析'
            },
            description: {
                vi: 'Phân tích sâu vấn đề, code hoặc hệ thống',
                en: 'Deep analysis of problems, code or systems',
                ja: '問題、コード、システムの深層分析'
            },
            popular: true,
            template: `CONTEXT:
Subject to analyze: [code/system/problem/data]
Purpose: [understand/optimize/debug/improve]
Scope: [specific area or full system]

SUBJECT:
\`\`\`
[Paste code, data, or describe system]
\`\`\`

ANALYSIS REQUIREMENTS:
- Depth level: [surface/detailed/exhaustive]
- Focus areas: [performance/security/maintainability/logic]

TASK:
Perform comprehensive analysis:
1. High-level overview
2. Component breakdown
3. Identify patterns and anti-patterns
4. Find potential issues/risks
5. Assess quality (1-10 with criteria)
6. Provide actionable insights

OUTPUT FORMAT:
- Summary findings
- Detailed analysis by component
- Issues table (Issue | Severity | Location | Recommendation)
- Quality scorecard
- Priority recommendations`
        },
        {
            id: 'task-3',
            title: {
                vi: 'System Design',
                en: 'System Design',
                ja: 'システム設計'
            },
            description: {
                vi: 'Thiết kế kiến trúc hệ thống hoặc features',
                en: 'Design system architecture or features',
                ja: 'システムアーキテクチャまたは機能を設計'
            },
            popular: true,
            template: `CONTEXT:
Project: [project name]
Type: [new system/new feature/refactor existing]
Scale: [users/requests per second/data volume]

REQUIREMENTS:
Functional:
- [Requirement 1]
- [Requirement 2]

Non-functional:
- Performance: [latency/throughput targets]
- Availability: [uptime requirement]
- Scalability: [growth expectations]

CONSTRAINTS:
- Tech stack: [required technologies]
- Budget: [infrastructure budget]
- Team: [team size and skills]
- Timeline: [deadline]

TASK:
Design system architecture including:
1. High-level architecture diagram (describe in text/mermaid)
2. Component breakdown with responsibilities
3. Data flow and storage design
4. API contracts (key endpoints)
5. Technology choices with justification
6. Scalability strategy
7. Failure handling and recovery
8. Security considerations

OUTPUT FORMAT:
- Architecture overview
- Component diagrams (Mermaid syntax)
- Decision rationale for key choices
- Trade-offs acknowledged`
        },
        {
            id: 'task-4',
            title: {
                vi: 'Debug & Troubleshoot',
                en: 'Debug & Troubleshoot',
                ja: 'デバッグ＆トラブルシューティング'
            },
            description: {
                vi: 'Debug issues khó và troubleshoot hệ thống',
                en: 'Debug difficult issues and troubleshoot systems',
                ja: '難しい問題をデバッグ、システムをトラブルシューティング'
            },
            template: `CONTEXT:
System/Application: [name]
Environment: [dev/staging/production]
Issue started: [when]
Frequency: [always/intermittent/rare]

SYMPTOMS:
- [Symptom 1]
- [Symptom 2]

ERROR LOGS:
\`\`\`
[Paste relevant logs/errors]
\`\`\`

WHAT I'VE CHECKED:
- [Check 1]: [result]
- [Check 2]: [result]

RECENT CHANGES:
- [Change 1]
- [Change 2]

TASK:
Help me troubleshoot this issue:
1. Analyze symptoms and logs
2. Hypothesize root causes (ranked by likelihood)
3. Suggest diagnostic steps to confirm
4. Provide potential fixes for each hypothesis
5. Recommend prevention measures

OUTPUT FORMAT:
- Initial assessment
- Hypothesis table (Cause | Likelihood | How to verify)
- Step-by-step debugging guide
- Fix recommendations`
        },
        {
            id: 'task-5',
            title: {
                vi: 'Fix Bug',
                en: 'Fix Bug',
                ja: 'バグ修正'
            },
            description: {
                vi: 'Tìm và fix bug với hướng dẫn chi tiết',
                en: 'Find and fix bugs with detailed guidance',
                ja: '詳細なガイダンスでバグを見つけて修正'
            },
            template: `CONTEXT:
Language: [language]
Framework: [framework]
Component: [module/file/function]

BUG DESCRIPTION:
- Expected behavior: [what should happen]
- Actual behavior: [what happens instead]
- Steps to reproduce:
  1. [Step 1]
  2. [Step 2]

CODE:
\`\`\`[language]
[Paste relevant code]
\`\`\`

ERROR (if any):
\`\`\`
[Error message/stack trace]
\`\`\`

TASK:
1. Identify the bug location
2. Explain root cause
3. Provide fix with code
4. Explain why the fix works
5. Suggest test cases to verify
6. Recommend ways to prevent similar bugs

REQUIREMENTS:
- Minimal changes (don't refactor unnecessarily)
- Maintain backward compatibility
- Add comments explaining the fix`
        },
        {
            id: 'task-6',
            title: {
                vi: 'Code Refactoring',
                en: 'Code Refactoring',
                ja: 'コードリファクタリング'
            },
            description: {
                vi: 'Refactor code để improve quality',
                en: 'Refactor code to improve quality',
                ja: '品質向上のためにコードをリファクタリング'
            },
            popular: true,
            template: `CONTEXT:
Language: [language]
Framework: [framework]
Codebase age: [new/mature/legacy]
Test coverage: [none/partial/good]

CODE TO REFACTOR:
\`\`\`[language]
[Paste code]
\`\`\`

REFACTORING GOALS:
- [x] Improve readability
- [x] Reduce complexity
- [ ] Improve performance
- [ ] Apply design patterns
- [ ] Other: [specify]

CONSTRAINTS:
- Don't change: [public API/behavior/etc]
- Must maintain: [backward compatibility/tests passing]
- Time budget: [quick fix/thorough refactor]

TASK:
1. Identify code smells and issues
2. Propose refactoring strategy
3. Provide refactored code
4. Explain each change and why
5. Highlight any breaking changes
6. Suggest tests to verify

OUTPUT FORMAT:
- Issues identified (with line references)
- Refactored code
- Change log (what changed and why)
- Before/after comparison`
        },
        {
            id: 'task-7',
            title: {
                vi: 'Code Review',
                en: 'Code Review',
                ja: 'コードレビュー'
            },
            description: {
                vi: 'Review code chuyên sâu với feedback chi tiết',
                en: 'In-depth code review with detailed feedback',
                ja: '詳細なフィードバック付き深層コードレビュー'
            },
            popular: true,
            template: `CONTEXT:
Language: [language]
Framework: [framework]
PR/Change type: [feature/bugfix/refactor]
Author level: [junior/mid/senior]

CODE TO REVIEW:
\`\`\`[language]
[Paste code]
\`\`\`

REVIEW FOCUS:
- [ ] Correctness (bugs, logic errors)
- [ ] Security (vulnerabilities, data handling)
- [ ] Performance (efficiency, scalability)
- [ ] Maintainability (readability, structure)
- [ ] Best practices (patterns, conventions)
- [ ] Tests (coverage, quality)

TASK:
Perform thorough code review:
1. Summary assessment (approve/needs changes)
2. Critical issues (must fix)
3. Suggestions (nice to have)
4. Good practices observed
5. Questions for the author

OUTPUT FORMAT:
For each issue:
- 🔴 CRITICAL / 🟡 SUGGESTION / 🟢 PRAISE
- Location: [file:line]
- Issue: [description]
- Suggestion: [how to improve]
- Code example (if applicable)`
        },
        {
            id: 'task-8',
            title: {
                vi: 'Performance Optimization',
                en: 'Performance Optimization',
                ja: 'パフォーマンス最適化'
            },
            description: {
                vi: 'Tối ưu hóa performance cho code hoặc queries',
                en: 'Optimize performance for code or queries',
                ja: 'コードまたはクエリのパフォーマンスを最適化'
            },
            template: `CONTEXT:
Type: [code/query/API/page load]
Language/Database: [language/database]
Current performance: [current metrics]
Target performance: [target metrics]

CODE/QUERY TO OPTIMIZE:
\`\`\`[language]
[Paste code or query]
\`\`\`

PROFILING DATA (if available):
- Slowest operations: [list]
- Memory usage: [amount]
- Call frequency: [times/second]

CONSTRAINTS:
- Can't change: [external APIs/database schema/etc]
- Must maintain: [accuracy/behavior]

TASK:
1. Analyze performance bottlenecks
2. Identify optimization opportunities
3. Provide optimized version
4. Estimate improvement (%)
5. List trade-offs of optimizations
6. Suggest monitoring approach

OUTPUT FORMAT:
- Analysis summary
- Bottleneck identification
- Optimized code with comments
- Expected improvements
- Trade-offs table`
        },
        {
            id: 'task-9',
            title: {
                vi: 'Migration Planning',
                en: 'Migration Planning',
                ja: '移行計画'
            },
            description: {
                vi: 'Lên kế hoạch migration cho hệ thống hoặc data',
                en: 'Plan migration for systems or data',
                ja: 'システムまたはデータの移行を計画'
            },
            template: `CONTEXT:
Migration type: [database/framework/cloud/API version]
From: [current state]
To: [target state]
Timeline: [deadline]
Downtime tolerance: [zero/minimal/acceptable window]

CURRENT STATE:
- Technology: [current tech]
- Data volume: [size]
- Dependencies: [list]
- Users/Traffic: [numbers]

TARGET STATE:
- Technology: [target tech]
- New features: [if any]
- Requirements: [list]

TASK:
Create migration plan including:
1. Risk assessment
2. Pre-migration checklist
3. Step-by-step migration process
4. Rollback strategy
5. Data validation approach
6. Testing strategy
7. Communication plan
8. Post-migration verification

OUTPUT FORMAT:
- Executive summary
- Risk matrix
- Detailed timeline
- Runbook with specific commands
- Rollback procedures`
        },
        {
            id: 'task-10',
            title: {
                vi: 'Write Documentation',
                en: 'Write Documentation',
                ja: 'ドキュメント作成'
            },
            description: {
                vi: 'Viết documentation chất lượng cao',
                en: 'Write high-quality documentation',
                ja: '高品質なドキュメントを作成'
            },
            template: `CONTEXT:
Doc type: [README/API docs/User guide/Architecture doc]
Audience: [developers/end-users/stakeholders]
Technical level: [beginner/intermediate/advanced]

SUBJECT:
[Describe what to document or paste code]

EXISTING DOCS (if any):
[Link or paste existing content]

REQUIREMENTS:
- Length: [brief/comprehensive]
- Include: [examples/diagrams/API reference]
- Tone: [formal/casual/technical]

TASK:
Write documentation including:
1. Clear introduction/overview
2. Prerequisites (if applicable)
3. Installation/Setup guide
4. Usage examples (with code)
5. Configuration options
6. Troubleshooting section
7. FAQ (common questions)

OUTPUT FORMAT:
- Markdown format
- Code blocks with syntax highlighting
- Proper headings hierarchy
- Links to related resources`
        },
        {
            id: 'task-11',
            title: {
                vi: 'Test Strategy',
                en: 'Test Strategy',
                ja: 'テスト戦略'
            },
            description: {
                vi: 'Xây dựng chiến lược testing toàn diện',
                en: 'Build comprehensive testing strategy',
                ja: '包括的なテスト戦略を構築'
            },
            template: `CONTEXT:
Project/Feature: [name]
Type: [new feature/refactor/bug fix]
Criticality: [low/medium/high/critical]
Deadline: [date]

FEATURE DESCRIPTION:
[Describe the feature or change]

ACCEPTANCE CRITERIA:
- [AC 1]
- [AC 2]

EXISTING TESTS:
- Unit tests: [none/some/good coverage]
- Integration tests: [status]
- E2E tests: [status]

TASK:
Create test strategy including:
1. Test scope and objectives
2. Test types needed (unit/integration/E2E/performance)
3. Test cases for each type
4. Edge cases and boundary conditions
5. Test data requirements
6. Mocking/stubbing strategy
7. CI/CD integration
8. Coverage targets

OUTPUT FORMAT:
- Strategy overview
- Test case table by type
- Priority matrix
- Implementation timeline`
        },
        {
            id: 'task-12',
            title: {
                vi: 'Project Planning',
                en: 'Project Planning',
                ja: 'プロジェクト計画'
            },
            description: {
                vi: 'Lập kế hoạch cho dự án hoặc feature',
                en: 'Plan projects or features',
                ja: 'プロジェクトまたは機能を計画'
            },
            template: `CONTEXT:
Project/Feature: [name]
Type: [new project/new feature/improvement]
Team size: [number of people]
Duration: [estimated timeframe]

GOALS:
- Primary goal: [main objective]
- Success metrics: [how to measure success]

REQUIREMENTS:
[List main requirements]

CONSTRAINTS:
- Budget: [if applicable]
- Timeline: [hard deadline?]
- Resources: [limitations]
- Dependencies: [external dependencies]

TASK:
Create project plan including:
1. Scope definition (in/out of scope)
2. Work breakdown structure (WBS)
3. Task dependencies
4. Timeline with milestones
5. Resource allocation
6. Risk assessment and mitigation
7. Communication plan
8. Success criteria

OUTPUT FORMAT:
- Executive summary
- WBS table with estimates
- Gantt chart (text representation)
- Risk matrix
- RACI matrix (if team involved)`
        },
        {
            id: 'task-13',
            title: {
                vi: 'Root Cause Analysis',
                en: 'Root Cause Analysis',
                ja: '根本原因分析'
            },
            description: {
                vi: 'Phân tích nguyên nhân gốc rễ của vấn đề',
                en: 'Analyze root cause of problems',
                ja: '問題の根本原因を分析'
            },
            template: `CONTEXT:
Problem: [describe the issue]
Impact: [who/what is affected]
First occurred: [when]
Frequency: [one-time/recurring]
Severity: [low/medium/high/critical]

SYMPTOMS:
- [Symptom 1]
- [Symptom 2]
- [Symptom 3]

TIMELINE OF EVENTS:
- [Time]: [Event]
- [Time]: [Event]

DATA/LOGS:
\`\`\`
[Relevant data or logs]
\`\`\`

TASK:
Perform root cause analysis:
1. Problem statement (clear, specific)
2. Impact assessment
3. 5 Whys analysis
4. Fishbone diagram (describe categories)
5. Contributing factors
6. Root cause identification
7. Corrective actions (short-term)
8. Preventive actions (long-term)

OUTPUT FORMAT:
- Problem summary
- 5 Whys chain
- Root cause statement
- Action items with owners and deadlines`
        },
        {
            id: 'task-14',
            title: {
                vi: 'Learning & Explanation',
                en: 'Learning & Explanation',
                ja: '学習＆説明'
            },
            description: {
                vi: 'Học concept mới với giải thích chi tiết',
                en: 'Learn new concepts with detailed explanations',
                ja: '詳細な説明で新しい概念を学習'
            },
            popular: true,
            template: `CONTEXT:
Topic: [concept/technology/pattern to learn]
Current level: [beginner/intermediate/advanced]
Background: [relevant experience]
Learning goal: [what I want to achieve]

SPECIFIC QUESTIONS:
1. [Question 1]
2. [Question 2]

TIME AVAILABLE:
[How much time to dedicate]

TASK:
Explain this topic including:
1. What it is (simple definition)
2. Why it matters (real-world importance)
3. How it works (mechanism/process)
4. When to use it (use cases)
5. When NOT to use it (anti-patterns)
6. Practical example (with code if applicable)
7. Common mistakes to avoid
8. Next steps for deeper learning

OUTPUT FORMAT:
- ELI5 explanation first
- Then detailed technical explanation
- Code examples with comments
- Resources for further learning`
        },
        {
            id: 'task-15',
            title: {
                vi: 'Brainstorming & Ideas',
                en: 'Brainstorming & Ideas',
                ja: 'ブレインストーミング＆アイデア'
            },
            description: {
                vi: 'Generate ideas và solutions sáng tạo',
                en: 'Generate creative ideas and solutions',
                ja: '創造的なアイデアとソリューションを生成'
            },
            template: `CONTEXT:
Challenge: [problem or opportunity]
Domain: [industry/area]
Constraints: [limitations to consider]
Goal: [what we want to achieve]

BACKGROUND:
[Relevant context and information]

CURRENT APPROACHES:
- [Existing solution 1]
- [Existing solution 2]

WHAT WE'VE TRIED:
- [Attempt 1]: [result]
- [Attempt 2]: [result]

TASK:
Help brainstorm solutions:
1. Generate 10+ diverse ideas
2. Include both conventional and unconventional approaches
3. Consider different perspectives (user, business, technical)
4. Identify quick wins vs long-term solutions
5. Evaluate feasibility of top ideas
6. Suggest combinations or hybrids
7. Recommend next steps for top 3

OUTPUT FORMAT:
- Ideas list (numbered, brief description each)
- Categorized by type (quick win/medium/moonshot)
- Evaluation matrix for top ideas
- Recommended action plan`
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
    },
    {
        title: 'Chain of Thought',
        description: {
            vi: 'Cho các vấn đề cần suy luận logic',
            en: 'For problems requiring logical reasoning',
            ja: '論理的推論が必要な問題向け'
        },
        example: `CONTEXT:
[Describe the problem or situation]

TASK:
[What needs to be solved/decided]

APPROACH:
Think through this problem step by step:
1. First, identify the key factors
2. Then, analyze each factor
3. Consider pros and cons
4. Draw conclusions based on analysis

REQUIREMENTS:
- Show your reasoning process
- Explain each step of your thinking
- Arrive at a clear conclusion/recommendation

OUTPUT:
Provide your analysis with clear reasoning chain.`
    },
    {
        title: 'Iterative Refinement',
        description: {
            vi: 'Cải thiện output qua nhiều vòng lặp',
            en: 'Improve output through multiple iterations',
            ja: '複数のイテレーションで出力を改善'
        },
        example: `CONTEXT:
[Background information]

INITIAL OUTPUT:
[Paste previous AI response or draft]

FEEDBACK:
What to improve:
- [Specific issue 1]
- [Specific issue 2]

What to keep:
- [Good aspect 1]
- [Good aspect 2]

TASK:
Refine the output based on my feedback.
Keep the good parts, fix the issues mentioned.

CONSTRAINTS:
- Maintain overall structure
- Only modify what's mentioned in feedback
- Explain what you changed and why`
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
    { id: 'techlead', name: 'Tech Lead', icon: 'Settings', color: 'pink' },
    { id: 'tasks', name: 'Tasks', icon: 'Zap', color: 'amber' }
];
