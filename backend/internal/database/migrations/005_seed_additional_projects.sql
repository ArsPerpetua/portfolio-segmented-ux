INSERT INTO projects (
    slug,
    title,
    category,
    project_type,
    summary,
    description,
    tech_stack,
    live_url,
    github_url,
    sort_order,
    is_featured
)
VALUES
(
    'influencer-agency-platform',
    'Influencer Agency Platform',
    'Business Workflow Platform',
    'Full-Stack Web Application',
    'A Django-based platform for influencer agency business workflow management.',
    'A full-stack web application built and deployed using Django and Railway. The system includes authentication, data management, and backend workflow features designed to support real-world business operations.',
    ARRAY['Django', 'Railway', 'Authentication', 'Data Management', 'Backend System'],
    'https://web-production-7525e.up.railway.app/',
    NULL,
    4,
    FALSE
),
(
    'decision-support-ecommerce-selection',
    'Decision Support System - E-Commerce Selection',
    'Decision Support System',
    'Data-Driven Web Application',
    'A Streamlit-based decision support system for e-commerce selection using AHP and SAW methods.',
    'An interactive decision support system built with Streamlit to automate ranking and recommendation processes using AHP and SAW methods.',
    ARRAY['Streamlit', 'AHP', 'SAW', 'Decision Support System', 'Recommendation System'],
    'https://spk-ecommerce-wiwin.streamlit.app/',
    NULL,
    5,
    FALSE
),
(
    'lentera-financial-service-portal',
    'LENTERA - Financial Service Portal',
    'Public Service Portal',
    'Government Service Web Portal',
    'A financial service portal for KPPN Mataram to streamline reporting and service workflows.',
    'A web-based portal built to improve financial service workflows, reporting efficiency, and public service processes. Developed using Laravel and structured database design.',
    ARRAY['Laravel', 'Structured Database Design', 'Service Portal', 'Reporting Workflow'],
    'https://lenteraverakppnmataram-tech.github.io/lentera-website/',
    NULL,
    6,
    FALSE
),
(
    'decision-support-student-ranking',
    'Decision Support System - Student Ranking',
    'Decision Support System',
    'Ranking Automation System',
    'A student ranking system using AHP, MOORA, and ARAS methods.',
    'A decision support system designed to automate student performance evaluation and ranking using AHP, MOORA, and ARAS methods with a data-driven approach.',
    ARRAY['AHP', 'MOORA', 'ARAS', 'Decision Support System', 'Ranking System'],
    NULL,
    'https://github.com/ArsPerpetua/spk-siswa-berprestasi',
    7,
    FALSE
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    project_type = EXCLUDED.project_type,
    summary = EXCLUDED.summary,
    description = EXCLUDED.description,
    tech_stack = EXCLUDED.tech_stack,
    live_url = EXCLUDED.live_url,
    github_url = EXCLUDED.github_url,
    sort_order = EXCLUDED.sort_order,
    is_featured = EXCLUDED.is_featured,
    updated_at = NOW();