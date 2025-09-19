import { createContext, type Dispatch, type RefObject, type SetStateAction } from "react";
import type { ModalHandle } from "../components/Tekneo/Modal/Modal";

type UserInfo = { ["email"]: string, ["password"]: string, ["name"]: string, ["admin"]: boolean }

interface GlobalContext {
  focusSoftware: boolean;
  setFocusSoftware: Dispatch<SetStateAction<boolean>>;
  focusHardware: boolean;
  setFocusHardware: Dispatch<SetStateAction<boolean>>;
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  users: UserInfo[];
  user: UserInfo | null;
  setUser: Dispatch<SetStateAction<UserInfo | null>>;
  modalLoginRef: RefObject<ModalHandle | null>;
}

export const GlobalContext = createContext({} as GlobalContext);
