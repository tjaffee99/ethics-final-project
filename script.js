// Data structures
const progressMetrics = [
    { label: 'Project Completion', value: '35%' },
    { label: 'Budget Utilized', value: '72%' },
    { label: 'Timeline Progress', value: '45%' },
    { label: 'Risk Assessment', value: '85%' }
];

const stakeholders = [
    { title: 'Taxpayers', description: 'Provide funding and directly impacted by financial management', icon: 'dollar-sign' },
    { title: 'Construction Workers', description: 'Subject to working conditions and safety concerns', icon: 'building-2' },
    { title: 'Engineering Firms', description: 'Responsible for design and construction implementation', icon: 'activity' },
    { title: 'Government Entities', description: 'Control funding, regulations, and project approvals', icon: 'shield' },
    { title: 'Future Riders', description: 'Benefit from economic and environmental advantages', icon: 'users' }
];

const ethicalIssues = [
    { title: 'Transparency', description: 'Lack of clear communication about costs and delays', color: 'bg-red-50' },
    { title: 'Worker Treatment', description: 'High-pressure conditions and inadequate safety measures', color: 'bg-yellow-50' },
    { title: 'Financial Ethics', description: 'Mismanagement of taxpayer funds and value delivery', color: 'bg-orange-50' },
    { title: 'Political Influence', description: 'Opposition delaying progress and conflicts of interest', color: 'bg-purple-50' }
];

const solutions = [
    { 
        title: 'Construction Phase Review', 
        description: 'Break into manageable milestones with realistic timelines',
        icon: 'activity',
        color: 'bg-blue-50'
    },
    { 
        title: 'Issue Mitigation', 
        description: 'Conduct thorough research and implement oversight',
        icon: 'shield',
        color: 'bg-green-50'
    },
    { 
        title: 'Enhanced Communication', 
        description: 'Develop transparent budget and public updates',
        icon: 'line-chart',
        color: 'bg-indigo-50'
    }
];

const lessons = [
    { title: 'Stakeholder Transparency', description: 'Clear communication is crucial for maintaining public trust', color: 'bg-blue-50' },
    { title: 'Pre-Planning Importance', description: 'Thorough research needed before large-scale infrastructure projects', color: 'bg-green-50' },
    { title: 'Ethical Accountability', description: 'Prioritize ethical considerations despite external pressures', color: 'bg-purple-50' },
    { title: 'Project Management', description: 'Flexible and proactive approaches reduce delays and overruns', color: 'bg-pink-50' }
];

// Initialize Lucide icons
lucide.createIcons();

// Populate Progress Metrics
document.getElementById('progress-metrics').innerHTML = progressMetrics.map(metric => `
    <div class="p-4 bg-gray-50 rounded-lg">
        <div class="text-2xl font-bold text-blue-600">${metric.value}</div>
        <div class="text-sm text-gray-600">${metric.label}</div>
    </div>
`).join('');

// Create and populate stakeholders section
document.getElementById('stakeholders-section').innerHTML = `
    <div class="card-header">
        <div class="flex items-center gap-2 text-xl font-semibold">
            <i data-lucide="users" class="h-6 w-6 text-blue-600"></i>
            Key Stakeholders
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        ${stakeholders.map(item => `
            <div class="p-6 border rounded-xl bg-white hover-card">
                <i data-lucide="${item.icon}" class="h-8 w-8 text-blue-600 mb-3"></i>
                <h3 class="font-semibold mb-2 text-lg">${item.title}</h3>
                <p class="text-gray-600">${item.description}</p>
            </div>
        `).join('')}
    </div>
`;

// Create and populate ethical issues section
document.getElementById('ethical-issues-section').innerHTML = `
    <div class="card-header">
        <div class="flex items-center gap-2 text-xl font-semibold">
            <i data-lucide="alert-circle" class="h-6 w-6 text-red-600"></i>
            Ethical Issues
        </div>
    </div>
    <div class="space-y-4 p-6">
        ${ethicalIssues.map(issue => `
            <div class="issue-card ${issue.color}">
                <h3 class="font-semibold mb-2 text-lg">${issue.title}</h3>
                <p class="text-gray-700">${issue.description}</p>
            </div>
        `).join('')}
    </div>
`;

// Create and populate solutions section
document.getElementById('solutions-section').innerHTML = `
    <div class="card-header">
        <div class="flex items-center gap-2 text-xl font-semibold">
            <i data-lucide="target" class="h-6 w-6 text-green-600"></i>
            Proposed Solutions
        </div>
    </div>
    <div class="space-y-4 p-6">
        ${solutions.map(solution => `
            <div class="issue-card ${solution.color}">
                <div class="flex items-start gap-4">
                    <i data-lucide="${solution.icon}" class="h-6 w-6 text-blue-600 mt-1"></i>
                    <div>
                        <h3 class="font-semibold mb-2 text-lg">${solution.title}</h3>
                        <p class="text-gray-700">${solution.description}</p>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>
`;

// Create and populate lessons learned section
document.getElementById('lessons-section').innerHTML = `
    <div class="card-header">
        <div class="flex items-center gap-2 text-xl font-semibold">
            <i data-lucide="trending-up" class="h-6 w-6 text-purple-600"></i>
            Key Lessons Learned
        </div>
    </div>
    <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${lessons.map(lesson => `
                <div class="issue-card ${lesson.color}">
                    <h3 class="font-semibold mb-2 text-lg">${lesson.title}</h3>
                    <p class="text-gray-700">${lesson.description}</p>
                </div>
            `).join('')}
        </div>
    </div>
`;

// Reinitialize icons after dynamic content is added
lucide.createIcons();