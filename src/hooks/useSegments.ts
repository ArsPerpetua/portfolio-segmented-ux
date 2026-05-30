import { useEffect, useState } from "react";
import { getSegments } from "../services/portfolioApi";
import type { SegmentOption } from "../types/api";

type UseSegmentsResult = {
  segments: SegmentOption[];
  isLoading: boolean;
  error: string | null;
};

export function useSegments(): UseSegmentsResult {
  const [segments, setSegments] = useState<SegmentOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadSegments() {
      try {
        const response = await getSegments();

        if (isMounted) {
          setSegments(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load segments",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadSegments();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    segments,
    isLoading,
    error,
  };
}