//user.tsx

import type { CantRequestsResponse, ResponseBackend, SessionResponse, User, UserLogin } from "../interfaces/backend";
import { apiFetch, post, get, patch, del } from "./api";
// import type { RegularResponseBackEnd } from "../interfaces/backend";

export async function registerUser(data: User): Promise<ResponseBackend> {
  return post("colmotica/users", data) as Promise<ResponseBackend>;
}

/** 🔹 Verificar código de usuario */
export async function verifyUserCode(data: { email: string; code: number }): Promise<ResponseBackend> {
  return post("colmotica/users/verify-code", data) as Promise<ResponseBackend>;
}

/** 🔹 Iniciar sesión */
export async function loginUser(data: UserLogin) {
  const res = await fetch(import.meta.env.VITE_API_URL + "colmotica/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ✅ NECESARIO
    body: JSON.stringify(data),
  });
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
export async function sendRecoverCode(data: { email: string }): Promise<ResponseBackend> {
  return post("colmotica/users/sendcode", data) as Promise<ResponseBackend>;
}

/** 🔹 Verificar código para recuperación */
export async function verifyCodeRecover(data: { email: string; code: number }): Promise<ResponseBackend> {
  return post("colmotica/users/recover-pass", data) as Promise<ResponseBackend>;
}

/** 🔹 Cambiar la contraseña */
export async function changePassword(data: { email: string; pass: string }): Promise<ResponseBackend> {
  return post("colmotica/users/recover-pass", data) as Promise<ResponseBackend>;
}

/** 🔹 Estado de la verificacion del usuario */
export async function getUserVerificationStatus(data: { email: string }): Promise<ResponseBackend> {
  return post("colmotica/users/status-verify-code", data) as Promise<ResponseBackend>;
}

/** 🔹 Obtener tipo de usuario */
export async function getTypeUser(data: { email: string }): Promise<ResponseBackend> {
  return post("colmotica/users/type-user", data) as Promise<ResponseBackend>;
}

/** 🔹 Obtener lista de usuarios registrados*/
export async function getUsers(): Promise<ResponseBackend> {
  return get("colmotica/users") as Promise<ResponseBackend>;
}

/** 🔹 Obtener lista de usuarios registrados*/
export async function aggNewAdmin(data: { EMAIL: string; NAME: string; PASS_HASH: string }): Promise<ResponseBackend> {
  return post("colmotica/users/admin", data) as Promise<ResponseBackend>;
}

/** 🔹 Solicitar manual */
export async function requestManual(data: { ID_USERS: string; ID_MANUALS: string }): Promise<ResponseBackend> {
  return post("colmotica/manuals/req", data) as Promise<ResponseBackend>;
}

/** 🔹 Solicitudes hechas por un usuario */
export async function requestManualList(data: { EMAIL: string }): Promise<ResponseBackend> {
  return post("colmotica/manuals/req/pendienteByUser", data) as Promise<ResponseBackend>;
}

/** 🔹 Aceptar solicitudes de manuales */
export async function aproveManual(data: {
  ID_MANUALS_VS_USERS: number;
  ID_MANUALS: string;
  ID_USERS: string;
}): Promise<ResponseBackend> {
  return patch("colmotica/manuals/req/aprobado", data) as Promise<ResponseBackend>;
}

/** 🔹 Rechazar solicitudes de manuales*/
export async function refusedManual(data: {
  ID_MANUALS_VS_USERS: number;
  ID_MANUALS: string;
  ID_USERS: string;
}): Promise<ResponseBackend> {
  return patch("colmotica/manuals/req/rechazado", data) as Promise<ResponseBackend>;
}

/** 🔹 Eliminar Administrador */
export async function deleteAdmin(id: string): Promise<ResponseBackend> {
  return del(`colmotica/users/delete/${id}`) as Promise<ResponseBackend>;
}

/** 🔹 Cambiar contraseña de administrador */
export async function recoverPassAdmin(data: { email: string; pass: string }): Promise<ResponseBackend> {
  return post("colmotica/users/admin/recoverpass", data) as Promise<ResponseBackend>;
}

/** 🔹 Editar nombre */
export async function editarAdmin(data: { ID_USERS: string; NAME: string }): Promise<ResponseBackend> {
  return patch(`colmotica/users/update/${data.ID_USERS}`, data) as Promise<ResponseBackend>;
}

/** 🔹 Numero de solicitudes de un manual hechas por un usuario*/
export async function cantRequests(data: { ID_MANUALS: string; ID_USERS: string }): Promise<CantRequestsResponse> {
  return post("colmotica/users/cant-request-manuals", data);
}
