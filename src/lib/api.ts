const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

const REQUEST_TIMEOUT_MS = 8000;

type ApiResponse<T> = {
  status: "success" | "error";
  message: string;
  data: T;
  meta?: Record<string, unknown>;
};

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
): Promise<Response> {
  const controller = new AbortController();

  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timeout. Please make sure the backend API is running.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function parseApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const result = (await response.json()) as ApiResponse<T>;

  if (!response.ok) {
    throw new Error(result.message || "API request failed");
  }

  return result;
}

export async function apiGet<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  return parseApiResponse<T>(response);
}

export async function apiPost<TBody, TResponse>(
  endpoint: string,
  body: TBody,
): Promise<ApiResponse<TResponse>> {
  const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return parseApiResponse<TResponse>(response);
}