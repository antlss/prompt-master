export const templates = {
    developer: [
        {
            id: 'dev-1',
            title: 'Debug Error Analysis',
            description: 'Phân tích và fix errors với context đầy đủ',
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
[Paste code gây lỗi]
\`\`\`

WHAT I'VE TRIED:
- [Attempt 1]
- [Attempt 2]

TASK:
1. Analyze root cause
2. Explain tại sao error xảy ra
3. Suggest fix(es) với code example
4. Recommend cách prevent tương lai`
        },
        {
            id: 'dev-2',
            title: 'Code Explanation',
            description: 'Hiểu code từ codebase mới hoặc legacy',
            popular: true,
            template: `CONTEXT:
Language: [language]
Framework: [framework nếu có]
Purpose: Tôi cần hiểu đoạn code này

CODE:
\`\`\`[language]
[Paste code here]
\`\`\`

TASK:
1. Giải thích high-level đoạn code này làm gì
2. Walk through từng phần quan trọng
3. Explain logic và flow
4. Point out patterns được sử dụng
5. Highlight potential issues (nếu có)`
        },
        {
            id: 'dev-3',
            title: 'Unit Test Generation',
            description: 'Generate unit tests với coverage đầy đủ',
            popular: true,
            template: `CONTEXT:
Language: [language]
Testing framework: [Jest/JUnit/pytest/etc]
Code to test: [function/class/module]

CODE:
\`\`\`[language]
[Paste code cần test]
\`\`\`

TASK:
Generate unit tests covering:
1. Happy path cases
2. Edge cases (null, empty, boundary values)
3. Error cases
4. Mock setup (nếu có dependencies)

REQUIREMENTS:
- Follow [AAA/Given-When-Then] pattern
- Descriptive test names
- Comments explaining each test's purpose`
        },
        {
            id: 'dev-4',
            title: 'Code Refactoring',
            description: 'Cải thiện code quality và maintainability',
            template: `CONTEXT:
Language: [language]
Current issues: [code smells/performance/readability]
Constraints: [không đổi public API/backward compatible/etc]

CODE:
\`\`\`[language]
[Paste code cần refactor]
\`\`\`

TASK:
1. Identify các issues trong code
2. Suggest refactoring với explanations
3. Provide refactored code
4. Explain benefits của changes
5. Note any breaking changes

⚠️ IMPORTANT:
- Preserve existing functionality
- Explain mỗi change
- Tôi sẽ review kỹ trước khi apply`
        },
        {
            id: 'dev-5',
            title: 'API Design',
            description: 'Thiết kế REST API endpoints',
            template: `CONTEXT:
Service: [service name]
Purpose: [mô tả purpose]
Consumers: [internal/external/both]
Authentication: [method]

REQUIREMENTS:
[Describe API requirements]

TASK:
Design REST API với:
1. Endpoints (method + path)
2. Request/Response schemas
3. Error responses
4. Pagination strategy (nếu cần)
5. Versioning approach

OUTPUT FORMAT:
- OpenAPI-style documentation
- Example requests/responses`
        },
        {
            id: 'dev-6',
            title: 'Database Query Optimization',
            description: 'Tối ưu queries chậm',
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
[Paste schema hoặc describe]
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
            title: 'Requirements Analysis',
            description: 'Phân tích và làm rõ requirements',
            popular: true,
            template: `CONTEXT:
Tôi là BA đang phân tích requirements cho [feature/project].
Domain: [domain]
Stakeholders: [list]

RAW REQUIREMENTS:
[Paste requirements từ stakeholder]

TASK:
1. Tóm tắt requirements chính
2. Identify gaps và ambiguities
3. List câu hỏi clarification cần hỏi stakeholder
4. Suggest user stories format

FORMAT:
- Summary: bullet points ngắn gọn
- Gaps: numbered list với explanation
- Questions: grouped by topic
- User Stories: As a [user], I want [action], so that [benefit]`
        },
        {
            id: 'ba-2',
            title: 'User Story Writing',
            description: 'Viết user stories với acceptance criteria',
            popular: true,
            template: `CONTEXT:
Feature: [tên feature]
Epic: [epic name nếu có]
User type: [end user/admin/system]

REQUIREMENTS:
[Mô tả requirements]

TASK:
Viết user stories với:
1. Title ngắn gọn
2. Description: As a [user], I want [action], so that [benefit]
3. Acceptance Criteria (Given-When-Then)
4. Edge cases
5. Dependencies

CONSTRAINTS:
- Mỗi story nên completable trong 1-3 days
- Independent và testable
- Không include technical implementation`
        },
        {
            id: 'ba-3',
            title: 'Gap Analysis',
            description: 'So sánh current state và desired state',
            template: `CONTEXT:
Current state: [mô tả hiện tại]
Desired state: [mô tả mong muốn]
Domain: [domain]

TASK:
Perform gap analysis:
1. List differences giữa current và desired
2. Categorize gaps: Process/Technology/People/Data
3. Assess impact của mỗi gap: High/Medium/Low
4. Suggest actions để close each gap
5. Prioritize actions

OUTPUT:
| Gap | Category | Impact | Suggested Action | Priority |`
        },
        {
            id: 'ba-4',
            title: 'Use Case Documentation',
            description: 'Document use cases chi tiết',
            template: `CONTEXT:
Use case name: [tên]
System: [system name]
Primary actor: [actor]

DESCRIPTION:
[Brief description]

TASK:
Document use case với:
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
            title: 'Product Research & Comparison',
            description: 'So sánh solutions và đưa ra recommendations',
            popular: true,
            template: `CONTEXT:
Tôi là Product Manager đang nghiên cứu [tên sản phẩm/tính năng].
Thị trường mục tiêu: [mô tả thị trường]
Constraints: [budget/timeline/resources]

TASK:
1. So sánh các giải pháp tương tự trên thị trường
2. Phân tích pros/cons của mỗi giải pháp
3. Recommend giải pháp phù hợp nhất

FORMAT:
- Bảng so sánh
- Pros/Cons cho mỗi option
- Recommendation với reasoning`
        },
        {
            id: 'pm-2',
            title: 'PRD Draft',
            description: 'Draft Product Requirements Document',
            template: `CONTEXT:
Tôi cần viết PRD cho tính năng [tên tính năng].
Product: [tên sản phẩm]
Target users: [mô tả users]
Business goal: [mục tiêu]

TASK:
Giúp tôi draft PRD bao gồm:
1. Problem Statement
2. Proposed Solution
3. User Stories
4. Success Metrics
5. Out of Scope
6. Open Questions

CONSTRAINTS:
- Ngắn gọn, súc tích
- Focus vào "What" và "Why", không phải "How"
- Tránh technical implementation details`
        },
        {
            id: 'pm-3',
            title: 'Feature Prioritization',
            description: 'Prioritize features với framework',
            template: `CONTEXT:
Tôi có danh sách features cần prioritize cho [quarter/sprint].
Team capacity: [X story points/sprints]
Business priorities: [list priorities]

FEATURES LIST:
[Paste danh sách features]

TASK:
Giúp tôi prioritize bằng:
1. Apply framework [RICE/MoSCoW/Value vs Effort]
2. Explain reasoning cho top priorities
3. Identify dependencies
4. Suggest grouping/sequencing

OUTPUT:
- Bảng prioritization
- Reasoning cho top 5
- Recommendations`
        }
    ],
    qa: [
        {
            id: 'qa-1',
            title: 'Test Cases from Requirements',
            description: 'Generate test cases từ requirements',
            popular: true,
            template: `CONTEXT:
Feature: [feature name]
Priority: [high/medium/low]
Test type: [functional/integration/e2e]

REQUIREMENTS:
[Paste requirements/user story]

ACCEPTANCE CRITERIA:
[Paste ACs nếu có]

TASK:
Generate test cases với:
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
            title: 'Playwright Automation Script',
            description: 'Generate Playwright test scripts',
            template: `CONTEXT:
Framework: Playwright
Language: [TypeScript/JavaScript]
Page/Feature: [description]

TEST SCENARIO:
[Describe what to test]

PAGE STRUCTURE:
[Paste relevant HTML hoặc describe elements]

TASK:
Generate Playwright test script với:
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
            title: 'API Test Cases',
            description: 'Generate API test scenarios',
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
            title: 'Architecture Review',
            description: 'Review và đánh giá architecture',
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
Review architecture và provide:
1. Strengths của current approach
2. Potential issues/risks
3. Scalability concerns
4. Security considerations
5. Alternative approaches
6. Recommendations với tradeoffs`
        },
        {
            id: 'tl-2',
            title: 'Technical Decision (ADR)',
            description: 'Document architectural decisions',
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
Help me document ADR (Architecture Decision Record) với:
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
            title: 'Incident Post-mortem',
            description: 'Structure post-mortem document',
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
        description: 'Pattern cơ bản cho hầu hết các tasks',
        example: `CONTEXT:
[Mô tả situation, background, constraints]

TASK:
[Mô tả cụ thể cần làm gì]

FORMAT:
[Specify output format mong muốn]`
    },
    {
        title: 'Role + Goal + Constraints',
        description: 'Khi cần expertise cụ thể',
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
        description: 'Cho complex problems và debugging',
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
        description: 'Khi cần specific format/style',
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
        { title: 'Cung cấp Context đầy đủ', desc: 'Background, constraints, code, errors' },
        { title: 'Chia nhỏ tasks', desc: 'Thay vì "build website", hãy "create ProductCard component"' },
        { title: 'Specify output format', desc: 'Nói rõ muốn nhận output như thế nào' },
        { title: 'Iterate và refine', desc: 'Feedback → Adjust → Improve' },
        { title: 'Review trước khi dùng', desc: 'Hiểu code trước khi commit' }
    ],
    donts: [
        { title: 'Blind copy/paste', desc: '25% suggestions có lỗi logic' },
        { title: 'Over-reliance', desc: 'Không để mất kỹ năng cốt lõi' },
        { title: 'Vague prompts', desc: '"Fix this" → AI đoán mò' },
        { title: 'Skip testing', desc: '"Looks good" ≠ works correctly' }
    ]
};

export const roles = [
    { id: 'developer', name: 'Developer', icon: 'Code', color: 'emerald' },
    { id: 'ba', name: 'BA', icon: 'FileText', color: 'blue' },
    { id: 'pmpo', name: 'PM/PO', icon: 'Briefcase', color: 'purple' },
    { id: 'qa', name: 'QA', icon: 'TestTube', color: 'orange' },
    { id: 'techlead', name: 'Tech Lead', icon: 'Settings', color: 'pink' }
];
