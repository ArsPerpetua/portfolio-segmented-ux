export type PortfolioSegment = "enterprise" | "startup" | "freelance";

export type Profile = {
  full_name: string;
  short_name: string;
  headline: string;
  role: string;
  summary: string;
  academic_proof: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
};

export type SegmentOption = {
  id: PortfolioSegment;
  label: string;
  short_label: string;
  headline: string;
  description: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  project_type: string;
  summary: string;
  description: string;
  tech_stack: string[];
  live_url: string | null;
  github_url: string | null;
  segment: PortfolioSegment;
  segment_title: string;
  segment_description: string;
  segment_highlights: string[];
  segment_sort_order: number;
  project_sort_order: number;
};

export type ProjectOverview = {
  id: string;
  slug: string;
  title: string;
  category: string;
  project_type: string;
  summary: string;
  description: string;
  tech_stack: string[];
  live_url: string | null;
  github_url: string | null;
  is_featured: boolean;
  sort_order: number;
};

export type SkillGroup = {
  id: string;
  category: string;
  skills: string[];
  sort_order: number;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  highlights: string[];
  sort_order: number;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  sort_order: number;
};

export type Experience = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  sort_order: number;
};

export type AnalyticsPayload = {
  event_type: "segment_click";
  segment: PortfolioSegment;
  metadata?: Record<string, unknown>;
};

export type QueuedAnalyticsResponse = {
  queued: boolean;
};