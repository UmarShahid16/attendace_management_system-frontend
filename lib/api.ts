const BASE_URL = "https://unrollable-psychodelic-dalia.ngrok-free.dev";

function getAuthToken() {
  try {
    const raw = localStorage.getItem("data");
    if (!raw) return;
    const admin = JSON.parse(raw) as {
      responseData?: {
        token?: string;
      };
    };
    return admin?.responseData?.token ?? null;
  } catch (error) {
    return null;
  }
}

interface ApiRequest {
  endpoint: string;
  params?: any;
  options?: RequestInit;
}

export async function api({ endpoint, params, options = {} }: ApiRequest) {
  const safeEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = new URL(safeEndpoint, BASE_URL);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, String(value));
    }
  }

  const token = getAuthToken();
  const headers = new Headers(options?.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  headers.set("ngrok-skip-browser-warning", "true");

  if (token) {
    headers.set("Authorization", `AMS ${token}`);
  }

  const response = await fetch(url?.toString(), {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    throw {
      status: response.status,
      message: errorData?.message ?? `HTTP Error ${response.status}`,
      data: errorData,
    };
  }
  return response.json();
}
