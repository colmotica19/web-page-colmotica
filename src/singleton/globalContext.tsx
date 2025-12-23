// globalContext.tsx

import {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import type { ModalHandle } from "../components/Tekneo/Modal/Modal";

export type UserLogin = {
  EMAIL: string;
  PASS_HASH: string;
  ID_ROL?: number;
};

export type manuals = {
  ID_MANUALS?: string;
  ID_ROL: number;
  NAME: string;
  CREATE_AT?: Date;
};

export type UserInfo = {
  ID_USERS?: string;
  ID_ROL?: number;
  EMAIL: string;
  PAIS?: string;
  TEL?: string;
  NAME?: string;
  PASS_HASH: string;
  VERIFIED?: number;
};

export type UserTypeInfo = {
  success: boolean;
  message: string;
};

interface GlobalContext {
  focusSoftware: boolean;
  setFocusSoftware: Dispatch<SetStateAction<boolean>>;
  focusHardware: boolean;
  setFocusHardware: Dispatch<SetStateAction<boolean>>;
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  user: UserInfo | null;
  setUser: Dispatch<SetStateAction<UserInfo | null>>;
  userLogin: UserLogin | null;
  setUserLogin: Dispatch<SetStateAction<UserLogin | null>>;
  modalLoginRef: RefObject<ModalHandle | null>;
  userType: UserTypeInfo | null;
  setUserType: Dispatch<SetStateAction<UserTypeInfo | null>>;
  modalTypeRef: RefObject<ModalHandle | null>;
  setManuals: Dispatch<SetStateAction<manuals | null>>;
  loginOpenKey: number;
  setLoginOpenKey: Dispatch<SetStateAction<number>>;
}

export const GlobalContext = createContext({} as GlobalContext);
