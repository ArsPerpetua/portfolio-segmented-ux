CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(120) NOT NULL UNIQUE,
    title VARCHAR(180) NOT NULL,
    category VARCHAR(120) NOT NULL,
    summary TEXT NOT NULL,
    description TEXT NOT NULL,
    tech_stack TEXT[] NOT NULL DEFAULT '{}',
    sort_order INT NOT NULL DEFAULT 0,
    is_featured BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS project_segments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    segment VARCHAR(40) NOT NULL CHECK (segment IN ('enterprise', 'startup', 'freelance')),
    segment_title VARCHAR(180) NOT NULL,
    segment_description TEXT NOT NULL,
    segment_highlights TEXT[] NOT NULL DEFAULT '{}',
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(project_id, segment)
);

CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type VARCHAR(80) NOT NULL,
    segment VARCHAR(40) CHECK (segment IN ('enterprise', 'startup', 'freelance')),
    metadata JSONB NOT NULL DEFAULT '{}',
    ip_address VARCHAR(80),
    user_agent TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_project_segments_segment
ON project_segments(segment);

CREATE INDEX IF NOT EXISTS idx_project_segments_project_id
ON project_segments(project_id);

CREATE INDEX IF NOT EXISTS idx_analytics_events_event_type
ON analytics_events(event_type);

CREATE INDEX IF NOT EXISTS idx_analytics_events_segment
ON analytics_events(segment);

CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at
ON analytics_events(created_at);