import { useEffect, useState } from "react";
import { getSkills } from "../services/portfolioApi";
import type { SkillGroup } from "../types/api";

type UseSkillsResult = {
  skills: SkillGroup[];
  isLoading: boolean;
  error: string | null;
};

export function useSkills(): UseSkillsResult {
  const [skills, setSkills] = useState<SkillGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadSkills() {
      try {
        const response = await getSkills();

        if (isMounted) {
          setSkills(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load skills");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadSkills();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    skills,
    isLoading,
    error,
  };
}