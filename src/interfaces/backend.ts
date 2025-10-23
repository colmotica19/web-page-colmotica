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

export interface RegularResponseBackEnd {
  success: boolean,
  message: string | Record<string, unknown>
}

export interface ErrorResponseBackend {
  error: string;
}

export type ResponseBackend = RegularResponseBackEnd | ErrorResponseBackend