import { createContext, type Dispatch, type SetStateAction } from "react";

interface GlobalContext {
  focusSoftware: boolean;
  setFocusSoftware: Dispatch<SetStateAction<boolean>>;
  focusHardware: boolean;
  setFocusHardware: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as GlobalContext);
