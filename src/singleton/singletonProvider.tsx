import { useState, type ReactNode } from "react";
import { GlobalContext } from "./globalContext";

export default function SingletonProvider({ children }: { children: ReactNode }) {
  const [focusSoftware, setFocusSoftware] = useState(false)
  const [focusHardware, setFocusHardware] = useState(false)
  const context = {
    focusSoftware,
    setFocusSoftware,
    focusHardware,
    setFocusHardware
  }
  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
}
