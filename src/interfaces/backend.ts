// src/interfaces/backend.ts

// src/interfaces/backend.ts

export interface User {
  ID_USERS?: string;
  ID_ROL?: number;
  EMAIL: string;
  PAIS: string;
  TEL: string;
  NAME: string;
  PASS_HASH: string;
  VERIFIED?: number;
}

export interface UserLogin {
  ID_USERS?: string;
  ID_ROL?: number;
  EMAIL: string;
  PAIS?: string;
  TEL?: string;
  NAME?: string;
  PASS_HASH: string;
  VERIFIED?: number;
}

export interface SessionResponse {
  success: boolean;

  user?: {
    ID_USERS?: string;
    ID_ROL?: number;
    EMAIL: string;
    PAIS?: string;
    TEL?: string;
    NAME?: string;
    PASS_HASH: string;
    VERIFIED?: number;
  };

  userType?: {
    success: boolean;
    message: string;
  };
}

export interface CantRequestsResponse {
  success: true;
  result: {
    total: number;
  }[];
}

/**
 * 🔴 Respuesta de error del backend
 */
export interface ErrorResponseBackend {
  success: false;
  error?: string; // El backend puede mandar error
  message?: string; // O puede mandar message
}

/**
 * 🟢 Respuesta exitosa del backend
 */
export interface SuccessResponseBackend {
  success: true;
  message?: string;
  data?: unknown;
  result?: User[];
  reqLogin?: {
    EMAIL: string;
    PASS_HASH: string;
  };
}

/**
 * 🔥 Tipo unificado que usará todo tu frontend
 */
export type ResponseBackend = SuccessResponseBackend | ErrorResponseBackend;

/*export interface User {
  ID_USERS?: string;
  ID_ROL?: number;
  EMAIL: string;
  PAIS: string;
  TEL: string;
  NAME: string;
  PASS_HASH: string;
  VERIFIED?: number;
}

export interface SessionResponse {
  success: boolean;
  user?: {
    EMAIL: string;
    PASS_HASH: string;
  };
  message?: string;
}

export interface UserLogin {
  ID_USERS?: string;
  ID_ROL?: number;
  EMAIL: string;
  PAIS?: string;
  TEL?: string;
  NAME?: string;
  PASS_HASH: string;
  VERIFIED?: number;
}

export interface RegularResponseBackEnd {
  success: boolean;
  message?: string;
  reqLogin?: {
    EMAIL: string;
    PASS_HASH: string;
  };
}

export interface ErrorResponseBackend {
  error: string;
}

export type ResponseBackend = RegularResponseBackEnd | ErrorResponseBackend;*/
