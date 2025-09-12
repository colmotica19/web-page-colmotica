import { createContext, type Dispatch, type SetStateAction } from "react";

interface GlobalContext {
  focusSoftware: boolean;
  setFocusSoftware: Dispatch<SetStateAction<boolean>>;
  focusHardware: boolean;
  setFocusHardware: Dispatch<SetStateAction<boolean>>;
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  users: { ["email"]: string, ["password"]: string, ["name"]: string }[];
  user: { ["email"]: string, ["password"]: string, ["name"]: string } | null;
  setUser: Dispatch<SetStateAction<{ ["email"]: string, ["password"]: string, ["name"]: string } | null>>;
}

export const GlobalContext = createContext({} as GlobalContext);
