// singlentonProvider.tsx

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  GlobalContext,
  type UserInfo,
  type UserLogin,
  type UserTypeInfo,
} from "./globalContext";
//import i18n from "../i18n";
import type { ModalHandle } from "../components/Tekneo/Modal/Modal";
import { getSession } from "../requests/user";

export default function SingletonProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [focusSoftware, setFocusSoftware] = useState(false);
  const [focusHardware, setFocusHardware] = useState(false);
  const [lang, setLang] = useState("es");

  const users = [
    {
      email: "colmotica@hotmail.com",
      password: "1234",
      name: "Colmotica",
      admin: true,
    },
    { email: "admin@admin.com", password: "1234", name: "Admin", admin: true },
    { email: "juan@hotmail.com", password: "1234", name: "Juan", admin: false },
    {
      email: "zarache@hotmail.com",
      password: "1234",
      name: "zarache",
      admin: false,
    },
  ];

  const [user, setUser] = useState<UserInfo | null>(null);

  // ✅ Estado para el login
  const [userLogin, setUserLogin] = useState<UserLogin | null>(null);

  const [userType, setUserType] = useState<UserTypeInfo | null>(null);
  const [loginOpenKey, setLoginOpenKey] = useState(0);

  const modalTypeRef = useRef<ModalHandle>(null);

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
    userLogin,
    setUserLogin,
    modalLoginRef,
    userType,
    setUserType,
    modalTypeRef,
    loginOpenKey,
    setLoginOpenKey,
  };

  useEffect(() => {
    getSession()
      .then((res) => {
        if (res.success && res.user) {
          setUserLogin({
            EMAIL: res.user.EMAIL,
            PASS_HASH: res.user.PASS_HASH,
            ID_ROL: res.user.ID_ROL,
          });

          setUser({
            EMAIL: res.user.EMAIL,
            PASS_HASH: res.user.PASS_HASH,
            ID_USERS: res.user.ID_USERS,
            ID_ROL: res.user.ID_ROL,
            NAME: res.user.NAME,
            PAIS: res.user.PAIS,
            TEL: res.user.TEL,
            VERIFIED: res.user.VERIFIED,
          });

          if (res.userType) {
            setUserType({
              success: true,
              message: res.userType.message,
            });
          }
        }
      })
      .catch(() => {
        setUserLogin(null);
        setUser(null);
        setUserType(null);
      });
  }, []);

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
