//user.tsx

import type {
  ResponseBackend,
  SessionResponse,
  User,
  UserLogin,
} from "../interfaces/backend";
import { apiFetch, post } from "./api";
// import type { RegularResponseBackEnd } from "../interfaces/backend";

export async function registerUser(data: User): Promise<ResponseBackend> {
  return post("colmotica/users", data) as Promise<ResponseBackend>;
}

/** 🔹 Verificar código de usuario */
export async function verifyUserCode(data: {
  email: string;
  code: number;
}): Promise<ResponseBackend> {
  return post("colmotica/users/verify-code", data) as Promise<ResponseBackend>;
}

/** 🔹 Iniciar sesión */
export async function loginUser(data: UserLogin) {
  const res = await fetch(
    import.meta.env.VITE_API_URL + "colmotica/users/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // ✅ NECESARIO
      body: JSON.stringify(data),
    }
  );
  return res.json();
}

/** 🔹 Validar sesión por cookie */
export async function getSession(): Promise<SessionResponse> {
  return apiFetch("colmotica/auth/me", {
    method: "GET",
    credentials: "include",
  }) as Promise<SessionResponse>;
}

export async function logoutUser(): Promise<ResponseBackend> {
  return apiFetch("colmotica/auth/logout", {
    method: "POST",
    credentials: "include",
  }) as Promise<ResponseBackend>;
}

export async function recoverPass(): Promise<ResponseBackend> {
  return apiFetch("colmotica/users/recover-pass", {
    method: "POST",
    credentials: "include",
  }) as Promise<ResponseBackend>;
}

/** 🔹 Solicitar código de recuperación */
export async function sendRecoverCode(data: {
  email: string;
}): Promise<ResponseBackend> {
  return post("colmotica/users/sendcode", data) as Promise<ResponseBackend>;
}

/** 🔹 Verificar código para recuperación */
export async function verifyCodeRecover(data: {
  email: string;
  code: number;
}): Promise<ResponseBackend> {
  return post("colmotica/users/recover-pass", data) as Promise<ResponseBackend>;
}

/** 🔹 Cambiar la contraseña */
export async function changePassword(data: {
  email: string;
  pass: string;
}): Promise<ResponseBackend> {
  return post("colmotica/users/recover-pass", data) as Promise<ResponseBackend>;
}

/** 🔹 Estado de la verificacion del usuario */
export async function getUserVerificationStatus(data: {
  email: string;
}): Promise<ResponseBackend> {
  return post(
    "colmotica/users/status-verify-code",
    data
  ) as Promise<ResponseBackend>;
}
