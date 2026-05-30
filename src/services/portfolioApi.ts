import { apiGet, apiPost } from "../lib/api";
import type {
  AnalyticsPayload,
  PortfolioSegment,
  Profile,
  Project,
  QueuedAnalyticsResponse,
  SegmentOption,
  SkillGroup,
  Achievement,
  Education,
  Experience,
  ProjectOverview,
} from "../types/api";

export async function getProfile() {
  return apiGet<Profile>("/api/v1/profile");
}

export async function getSegments() {
  return apiGet<SegmentOption[]>("/api/v1/segments");
}

export async function getProjectsBySegment(segment: PortfolioSegment) {
  return apiGet<Project[]>(`/api/v1/projects?view=${segment}`);
}

export async function getSkills() {
  return apiGet<SkillGroup[]>("/api/v1/skills");
}

export async function getEducation() {
  return apiGet<Education[]>("/api/v1/education");
}

export async function getAchievements() {
  return apiGet<Achievement[]>("/api/v1/achievements");
}

export async function getExperiences() {
  return apiGet<Experience[]>("/api/v1/experiences");
}

export async function getAllProjects() {
  return apiGet<ProjectOverview[]>("/api/v1/projects/all?page=1&limit=10");
}

export async function getProjectBySlug(slug: string) {
  return apiGet<ProjectOverview>(`/api/v1/projects/${slug}`);
}

export async function trackSegmentClick(
  segment: PortfolioSegment,
  source: "hero_segment_control" | "floating_segment_switcher",
) {
  return apiPost<AnalyticsPayload, QueuedAnalyticsResponse>("/api/v1/analytics", {
    event_type: "segment_click",
    segment,
    metadata: {
      source,
    },
  });
}