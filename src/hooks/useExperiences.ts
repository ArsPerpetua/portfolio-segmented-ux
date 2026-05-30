import { useEffect, useState } from "react";
import { getExperiences } from "../services/portfolioApi";
import type { Experience } from "../types/api";

type UseExperiencesResult = {
  experiences: Experience[];
  isLoading: boolean;
  error: string | null;
};

export function useExperiences(): UseExperiencesResult {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadExperiences() {
      try {
        const response = await getExperiences();

        if (isMounted) {
          setExperiences(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load experiences",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadExperiences();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    experiences,
    isLoading,
    error,
  };
}