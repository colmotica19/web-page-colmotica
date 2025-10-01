import { useEffect, useRef, useState, type ReactNode } from "react";
import { GlobalContext } from "./globalContext";
import i18n from "../i18n";
import type { ModalHandle } from "../components/Tekneo/Modal/Modal";

export default function SingletonProvider({ children }: { children: ReactNode }) {
  const [focusSoftware, setFocusSoftware] = useState(false)
  const [focusHardware, setFocusHardware] = useState(false)
  const [lang, setLang] = useState("es")
  const users = [
    { email: "colmotica@hotmail.com", password: "1234", name: "Colmotica", admin: true },
    { email: "admin@admin.com", password: "1234", name: "Admin", admin: true },
    { email: "juan@hotmail.com", password: "1234", name: "Juan", admin: false },
    { email: "zarache@hotmail.com", password: "1234", name: "zarache", admin: false }
  ];
  const [user, setUser] = useState<{
    email: string;
    password: string;
    name: string;
    admin: boolean;
  } | null>(null);
  const modalLoginRef = useRef<ModalHandle>(null);
  const context = {
    focusSoftware,
    setFocusSoftware,
    focusHardware,
    setFocusHardware,
    lang,
    setLang,
    users,
    user,
    setUser,
    modalLoginRef
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
