import { createContext, type Dispatch, type SetStateAction } from "react";

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
}

export const GlobalContext = createContext({} as GlobalContext);
