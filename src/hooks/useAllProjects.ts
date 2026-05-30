import { useEffect, useState } from "react";
import { getAllProjects } from "../services/portfolioApi";
import type { ProjectOverview } from "../types/api";

type UseAllProjectsResult = {
  projects: ProjectOverview[];
  isLoading: boolean;
  error: string | null;
};

export function useAllProjects(): UseAllProjectsResult {
  const [projects, setProjects] = useState<ProjectOverview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const response = await getAllProjects();

        if (isMounted) {
          setProjects(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load all projects",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    projects,
    isLoading,
    error,
  };
}