import { useEffect, useState, type ReactNode } from "react";
import { GlobalContext } from "./globalContext";
import i18n from "../i18n";

export default function SingletonProvider({ children }: { children: ReactNode }) {
  const [focusSoftware, setFocusSoftware] = useState(false)
  const [focusHardware, setFocusHardware] = useState(false)
  const [lang, setLang] = useState("es")
  const users = [
    { email: "colmotica@hotmail.com", password: "1234", name: "Colmotica", admin: true },
    { email: "zarache@hotmail.com", password: "1234", name: "zarache", admin: false }
  ];
  const [user, setUser] = useState<{
    email: string;
    password: string;
    name: string;
    admin: boolean;
} | null>(null);
  const context = {
    focusSoftware,
    setFocusSoftware,
    focusHardware,
    setFocusHardware,
    lang,
    setLang,
    users,
    user,
    setUser
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
