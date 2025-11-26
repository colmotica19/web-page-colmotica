//api.ts

// api.ts

import type { ResponseBackend } from "../interfaces/backend";

const BASE = import.meta.env.VITE_API_URL ?? "";

export async function apiFetch(path: string, opts: RequestInit = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(opts.headers || {}),
  } as Record<string, string>;

  const res = await fetch(BASE + path, {
    ...opts,
    credentials: "include",
    headers,
  });

  const text = await res.text();
  let json: any = null;

  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = text;
  }

  // ❗ Manejo unificado de errores
  if (!res.ok) {
    throw {
      success: false,
      message: json?.message || "Network error",
    } as ResponseBackend;
  }

  return json as ResponseBackend;
}

export function post(path: string, body: unknown) {
  return apiFetch(path, { method: "POST", body: JSON.stringify(body) });
}

export function get(path: string) {
  return apiFetch(path, { method: "GET" });
}

//import type { ResponseBackend } from "../interfaces/backend";

//const BASE = import.meta.env.VITE_API_URL ?? "";

/**
 * apiFetch: wrapper minimal para llamadas fetch con base URL y manejo de token
 * - Añade Content-Type: application/json por defecto
 * - Si existe token en localStorage lo añade como Authorization: Bearer <token>
 * - Parsea respuesta JSON si es posible y lanza en caso de status >= 400
 */
/*export async function apiFetch(path: string, opts: RequestInit = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(opts.headers || {}),
  } as Record<string, string>;

  const res = await fetch(BASE + path, {
    ...opts,
    credentials: "include", // 👈 HABILITA ENVÍO DE COOKIE
    headers,
  });

  // Leer como texto y parsear con seguridad
  const text = await res.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = text;
  }

  if (!res.ok) {
    // Lanzar el cuerpo para que el caller lo maneje (puede ser ResponseBackend o Error)
    throw json || { error: "Network error" };
  }

  return json as ResponseBackend;
}

export function post(path: string, body: unknown) {
  return apiFetch(path, { method: "POST", body: JSON.stringify(body) });
}

export function get(path: string) {
  return apiFetch(path, { method: "GET" });
}*/
