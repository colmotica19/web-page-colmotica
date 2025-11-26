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
}

export const GlobalContext = createContext({} as GlobalContext);
