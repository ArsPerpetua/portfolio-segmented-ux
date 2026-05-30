import { useEffect, useState } from "react";
import { getProjectsBySegment } from "../services/portfolioApi";
import type { Project } from "../types/api";
import type { PortfolioSegment } from "../types/portfolio";

type UseProjectsResult = {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
};

export function useProjects(activeSegment: PortfolioSegment): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getProjectsBySegment(activeSegment);

        if (isMounted) {
          setProjects(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load projects",
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
  }, [activeSegment]);

  return {
    projects,
    isLoading,
    error,
  };
}