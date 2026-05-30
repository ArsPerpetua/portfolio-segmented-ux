INSERT INTO projects (
    slug,
    title,
    category,
    summary,
    description,
    tech_stack,
    sort_order,
    is_featured
)
VALUES
(
    'docuflow',
    'DocuFlow',
    'B2B SaaS',
    'Document Workflow & Smart Prioritization System.',
    'A B2B SaaS document workflow platform built with Vite, React, TypeScript, and Tailwind. Designed around modular architecture, structured approval flows, smart prioritization, and real-time notification experience.',
    ARRAY['Vite', 'React', 'TypeScript', 'Tailwind', 'Workflow System', 'Real-Time Notification'],
    1,
    TRUE
),
(
    'it-ticketing-kemenkum-ntb',
    'IT Ticketing System - Kemenkum NTB',
    'Gov-Tech',
    'IT issue reporting and bureaucratic workflow automation system.',
    'A government technology system for IT issue reporting and workflow automation, integrating regional services such as Peresean. Designed to transform manual processes into measurable and trackable digital operations.',
    ARRAY['Workflow Automation', 'Regional Reporting', 'Gov-Tech', 'Peresean Integration'],
    2,
    TRUE
),
(
    'ecovision',
    'EcoVision',
    'AI/Computer Vision',
    'AI-based decision support system for real-time waste classification.',
    'An AI-powered decision support application for real-time waste classification using machine learning and computer vision models.',
    ARRAY['Python', 'Machine Learning', 'Computer Vision', 'Decision Support'],
    3,
    TRUE
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    summary = EXCLUDED.summary,
    description = EXCLUDED.description,
    tech_stack = EXCLUDED.tech_stack,
    sort_order = EXCLUDED.sort_order,
    is_featured = EXCLUDED.is_featured,
    updated_at = NOW();

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'enterprise',
    'Enterprise workflow platform for structured document operations.',
    'DocuFlow helps teams manage document approval, prioritization, and notification flows with modular SaaS architecture.',
    ARRAY['Document Workflow', 'Smart Prioritization', 'Real-Time Notification'],
    2
FROM projects p
WHERE p.slug = 'docuflow'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'startup',
    'SaaS product foundation built for fast-moving teams.',
    'DocuFlow demonstrates a product-ready SaaS interface using Vite, React, TypeScript, and Tailwind with modular workflow architecture.',
    ARRAY['Vite', 'React', 'TypeScript', 'SaaS Architecture'],
    1
FROM projects p
WHERE p.slug = 'docuflow'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'freelance',
    'Clean workflow interface for document handling and team productivity.',
    'DocuFlow is positioned as a polished dashboard experience for document workflows, prioritization, and collaboration.',
    ARRAY['Dashboard UX', 'Workflow UI', 'React'],
    2
FROM projects p
WHERE p.slug = 'docuflow'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'enterprise',
    'Gov-Tech system for operational clarity and regional reporting.',
    'A structured IT issue reporting and bureaucratic workflow automation system integrating regional services like Peresean to transform manual processes into measurable digital operations.',
    ARRAY['Workflow Automation', 'Regional Reporting', 'Peresean Integration'],
    1
FROM projects p
WHERE p.slug = 'it-ticketing-kemenkum-ntb'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'startup',
    'Internal product for workflow tracking and reporting.',
    'The IT Ticketing System shows how complex operational processes can be simplified into a practical internal product with measurable workflow tracking.',
    ARRAY['Internal Product', 'Workflow Tracking', 'Reporting'],
    3
FROM projects p
WHERE p.slug = 'it-ticketing-kemenkum-ntb'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'freelance',
    'Custom internal tool for issue reporting and workflow visibility.',
    'A custom web application for issue reporting, operational visibility, and regional service integration.',
    ARRAY['Custom App', 'Admin Workflow', 'Operational Tool'],
    3
FROM projects p
WHERE p.slug = 'it-ticketing-kemenkum-ntb'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'enterprise',
    'AI decision support system for classification-driven operations.',
    'EcoVision applies machine learning and computer vision to support real-time waste classification and decision-making workflows.',
    ARRAY['Machine Learning', 'Computer Vision', 'Decision Support'],
    3
FROM projects p
WHERE p.slug = 'ecovision'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'startup',
    'Real-time AI product feature for practical classification use cases.',
    'EcoVision demonstrates how machine learning can become a usable product feature through real-time classification and clear user experience.',
    ARRAY['AI Feature', 'Real-Time Classification', 'ML Product'],
    2
FROM projects p
WHERE p.slug = 'ecovision'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;

INSERT INTO project_segments (
    project_id,
    segment,
    segment_title,
    segment_description,
    segment_highlights,
    sort_order
)
SELECT
    p.id,
    'freelance',
    'Polished AI-powered application experience for real-time classification.',
    'EcoVision is positioned as an interactive AI application for waste classification, computer vision, and decision support.',
    ARRAY['AI App', 'Computer Vision', 'Interactive UX'],
    1
FROM projects p
WHERE p.slug = 'ecovision'
ON CONFLICT (project_id, segment) DO UPDATE SET
    segment_title = EXCLUDED.segment_title,
    segment_description = EXCLUDED.segment_description,
    segment_highlights = EXCLUDED.segment_highlights,
    sort_order = EXCLUDED.sort_order;