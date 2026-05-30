import { useEffect, useState } from "react";
import { getAchievements, getEducation } from "../services/portfolioApi";
import type { Achievement, Education } from "../types/api";

type UseCredentialsResult = {
  education: Education[];
  achievements: Achievement[];
  isLoading: boolean;
  error: string | null;
};

export function useCredentials(): UseCredentialsResult {
  const [education, setEducation] = useState<Education[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadCredentials() {
      try {
        const [educationResponse, achievementsResponse] = await Promise.all([
          getEducation(),
          getAchievements(),
        ]);

        if (isMounted) {
          setEducation(educationResponse.data);
          setAchievements(achievementsResponse.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load credentials",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadCredentials();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    education,
    achievements,
    isLoading,
    error,
  };
}