UPDATE projects
SET
    project_type = 'B2B SaaS',
    live_url = NULL,
    github_url = NULL,
    tech_stack = ARRAY[
        'Vite',
        'React',
        'TypeScript',
        'SWC',
        'Tailwind CSS',
        'React Router v6',
        'Workflow System',
        'Real-Time Notification'
    ],
    description = 'A B2B SaaS platform focused on document workflow management and smart prioritization. Built with Vite, React, TypeScript, SWC, Tailwind CSS, and React Router v6. Designed around modular frontend architecture, role-based dashboard systems, workflow management features, toast notifications, and scalable UI feedback architecture.'
WHERE slug = 'docuflow';

UPDATE projects
SET
    project_type = 'Gov-Tech',
    live_url = 'https://oke-ntb.kemenkumham.go.id/laporit/',
    github_url = NULL,
    tech_stack = ARRAY[
        'Full-Stack Web System',
        'Database Design',
        'Workflow Automation',
        'Regional Reporting',
        'IT Issue Tracking',
        'Peresean Integration'
    ],
    description = 'A full-stack web system developed to streamline IT issue reporting and tracking for Kemenkum NTB. Built to improve workflow efficiency, reduce manual handling processes, and support regional service integration such as Peresean.'
WHERE slug = 'it-ticketing-kemenkum-ntb';

UPDATE projects
SET
    project_type = 'AI/Computer Vision',
    live_url = 'https://ecovision-beta.vercel.app/',
    github_url = NULL,
    tech_stack = ARRAY[
        'Machine Learning',
        'Computer Vision',
        'AI Classification',
        'Decision Support System',
        'Real-Time Classification',
        'Vercel'
    ],
    description = 'An AI-powered decision support system for real-time waste classification. Built with a machine learning model for environmental use cases and designed with a user-friendly interface for practical deployment.'
WHERE slug = 'ecovision';