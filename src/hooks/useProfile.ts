import { useEffect, useState } from "react";
import { getProfile } from "../services/portfolioApi";
import type { Profile } from "../types/api";

type UseProfileResult = {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
};

export function useProfile(): UseProfileResult {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const response = await getProfile();

        if (isMounted) {
          setProfile(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load profile",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    profile,
    isLoading,
    error,
  };
}