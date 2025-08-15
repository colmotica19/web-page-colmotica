import { useEffect, useState, type ReactNode } from "react";
import { GlobalContext } from "./globalContext";
import i18n from "../i18n";

export default function SingletonProvider({ children }: { children: ReactNode }) {
  const [focusSoftware, setFocusSoftware] = useState(false)
  const [focusHardware, setFocusHardware] = useState(false)
  const [lang, setLang] = useState("es")
  const context = {
    focusSoftware,
    setFocusSoftware,
    focusHardware,
    setFocusHardware,
    lang,
    setLang
  }

    useEffect(() => {
      const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
      };
      changeLanguage(lang)
     
    }, [lang])

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
}
