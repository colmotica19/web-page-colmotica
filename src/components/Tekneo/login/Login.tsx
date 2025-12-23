// src/components/Tekneo/Login/Login.tsx

import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../../singleton/globalContext";
import Registrar from "./Registrar";
import Recuperar from "./Recuperar";
import VerificarUsuario from "./VerificarUsuario";
import { FaArrowRightLong } from "react-icons/fa6";
import { getTypeUser, getUserVerificationStatus, loginUser } from "../../../requests/user";
import type { ResponseBackend } from "../../../interfaces/backend";

export default function Login() {
  const navigate = useNavigate();
  const { setUser, setUserLogin, modalLoginRef, setUserType } = useContext(GlobalContext);

  const [viewRegister, setViewRegister] = useState(false);
  const [viewRecovery, setViewRecovery] = useState(false);
  const [viewVerifyUser, setViewVerifyUser] = useState(false);

  const refForm = useRef<HTMLFormElement>(null);
  const refSpan = useRef<HTMLSpanElement>(null);
  const errorTimeout = useRef<number | null>(null);

  const clearError = () => {
    if (refSpan.current) refSpan.current.textContent = "";
    if (errorTimeout.current) {
      clearTimeout(errorTimeout.current);
      errorTimeout.current = null;
    }
  };

  const showError = (message: string) => {
    if (!refSpan.current) return;

    refSpan.current.textContent = message;

    if (errorTimeout.current) {
      clearTimeout(errorTimeout.current);
    }

    errorTimeout.current = window.setTimeout(() => {
      if (refSpan.current) refSpan.current.textContent = "";
    }, 3000);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!refForm.current) return;

    clearError();

    const data = new FormData(refForm.current);
    const EMAIL = data.get("email") as string;
    const PASS_HASH = data.get("password") as string;

    if (!EMAIL || !PASS_HASH) {
      showError("Debe ingresar correo y contraseña.");
      return;
    }

    try {
      // 🔹 LOGIN
      const result: ResponseBackend = await loginUser({ EMAIL, PASS_HASH });

      // ❌ Credenciales incorrectas
      if (!result.success) {
        showError(result.message ?? "Correo o contraseña incorrectos.");
        return;
      }

      // 🔹 SESIÓN
      const res = await fetch(import.meta.env.VITE_API_URL + "colmotica/auth/me", {
        method: "GET",
        credentials: "include",
      });

      const userData = await res.json();

      if (!userData?.success || !userData.user) {
        showError("No se pudo obtener la sesión.");
        return;
      }

      // 🔹 Verificación
      const response = await getUserVerificationStatus({ email: EMAIL });

      // 🔹 Tipo de usuario
      const response2 = await getTypeUser({ email: EMAIL });

      setUserType({
        success: response2.success ?? false,
        message: response2.message ?? "",
      });

      let idRol: number | undefined;

      if (response2.message === "SUPER_ADMIN") idRol = 10001;
      else if (response2.message === "ADMINISTRADOR") idRol = 10002;
      else if (response2.message === "USUARIO") idRol = 10003;

      // 🔹 Guardar login
      setUserLogin({
        EMAIL: userData.user.EMAIL,
        PASS_HASH,
        ID_ROL: idRol,
      });

      setUser({
        EMAIL: userData.user.EMAIL,
        PASS_HASH: userData.user.PASS_HASH,
        NAME: userData.user.NAME,
        PAIS: userData.user.PAIS,
        TEL: userData.user.TEL,
        VERIFIED: userData.user.VERIFIED,
        ID_USERS: userData.user.ID_USERS,
        ID_ROL: idRol,
      });

      // 🔹 Reset UI
      refForm.current.reset();
      clearError();
      modalLoginRef.current?.close();

      navigate("/home", { state: { verified: response.success === true } });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      showError("Error en la conexión con el servidor.");
    }
  };

  return (
    <div className="relative">
      {viewRegister ? (
        <Registrar setViewRegister={setViewRegister} setViewRecovery={setViewRecovery} />
      ) : viewRecovery ? (
        <Recuperar setViewRecovery={setViewRecovery} />
      ) : viewVerifyUser ? (
        <>
          <button
            type="button"
            title="Volver"
            className="absolute top-[10px] left-[10px]"
            onClick={() => setViewVerifyUser(false)}
          >
            <FaArrowRightLong className="rotate-180" />
          </button>
          <VerificarUsuario />
        </>
      ) : (
        <div className="relative">
          <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px]">
            <h1 className="text-[32px] text-center">Login</h1>

            <form className="flex flex-col gap-[20px]" ref={refForm} onSubmit={handleLogin}>
              <label htmlFor="email" className="text-[14px]">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-[2px_10px] border border-black rounded-[5px]"
                onChange={clearError}
              />

              <label htmlFor="password" className="text-[14px]">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-[2px_10px] border border-black rounded-[5px]"
                onChange={clearError}
              />

              <span ref={refSpan} className="block text-red-500 text-[14px] text-center"></span>

              <button
                type="submit"
                className="p-[5px_20px] bg-blue-500 rounded-[10px] text-white border border-black hover:bg-blue-600"
              >
                Iniciar sesión
              </button>
            </form>

            <button className="text-[14px] text-blue-500" onClick={() => setViewRegister(true)}>
              ¿No tienes cuenta?
            </button>

            <button className="text-[14px] text-blue-500" onClick={() => setViewRecovery(true)}>
              Se me olvidó la contraseña
            </button>

            <button className="text-[14px] text-blue-500" onClick={() => setViewVerifyUser(true)}>
              Tienes un código
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
