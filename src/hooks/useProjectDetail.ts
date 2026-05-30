import { useState } from "react";
import { getProjectBySlug } from "../services/portfolioApi";
import type { ProjectOverview } from "../types/api";

type UseProjectDetailResult = {
  project: ProjectOverview | null;
  isLoading: boolean;
  error: string | null;
  loadProject: (slug: string) => Promise<void>;
  clearProject: () => void;
};

export function useProjectDetail(): UseProjectDetailResult {
  const [project, setProject] = useState<ProjectOverview | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadProject(slug: string) {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getProjectBySlug(slug);
      setProject(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load project detail",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function clearProject() {
    setProject(null);
    setError(null);
  }

  return {
    project,
    isLoading,
    error,
    loadProject,
    clearProject,
  };
}