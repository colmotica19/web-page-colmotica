// src/components/Tekneo/Login/Login.tsx

import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../../singleton/globalContext";
import Registrar from "./Registrar";
import Recuperar from "./Recuperar";
import VerificarUsuario from "./VerificarUsuario";
import { FaArrowRightLong } from "react-icons/fa6";
import { getUserVerificationStatus, loginUser } from "../../../requests/user";
import type { ResponseBackend } from "../../../interfaces/backend";

export default function Login() {
  const navigate = useNavigate();
  const { setUserLogin, modalLoginRef } = useContext(GlobalContext);

  const [viewRegister, setViewRegister] = useState(false);
  const [viewRecovery, setViewRecovery] = useState(false);
  const [viewVerifyUser, setViewVerifyUser] = useState(false);

  const refForm = useRef<HTMLFormElement>(null);
  const refSpan = useRef<HTMLSpanElement>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!refForm.current) return;

    const data = new FormData(refForm.current);
    const EMAIL = data.get("email") as string;
    const PASS_HASH = data.get("password") as string;

    if (!EMAIL || !PASS_HASH) {
      refSpan.current!.textContent = "Debe ingresar correo y contraseña.";
      return;
    }

    try {
      const result: ResponseBackend = await loginUser({ EMAIL, PASS_HASH });

      if ("success" in result && result.success) {
        const res = await fetch(
          import.meta.env.VITE_API_URL + "colmotica/auth/me",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const userData = await res.json();

        if (userData?.success && userData.user) {
          setUserLogin({
            EMAIL: userData.user.EMAIL,
            PASS_HASH: userData.user.PASS_HASH,
          });

          // 🔹 Comprobar verificación del usuario
          const response = await getUserVerificationStatus({
            email: EMAIL,
          });

          console.log(response.success);

          if (response.success === true) {
            // usuario verificado
            modalLoginRef.current?.close();
            navigate("/", { state: { verified: true } });
          } else {
            // usuario NO verificado → Home debe mostrar TOAST
            modalLoginRef.current?.close();
            navigate("/home", { state: { verified: false } });
          }
        } else {
          refSpan.current!.textContent = "No se pudo obtener la sesión.";
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      refSpan.current!.textContent = "Error en la conexión con el servidor.";
    }
  };

  return (
    <div className="relative">
      {viewRegister ? (
        <Registrar
          setViewRegister={setViewRegister}
          setViewRecovery={setViewRecovery}
        />
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

            <form
              className="flex flex-col gap-[20px]"
              ref={refForm}
              onSubmit={handleLogin}
            >
              <label htmlFor="email" className="text-[14px]">
                E-mail
              </label>
              <input
                className="p-[2px_10px] border border-black rounded-[5px]"
                type="email"
                name="email"
                id="email"
              />

              <label htmlFor="password" className="text-[14px]">
                Contraseña
              </label>
              <input
                type="password"
                className="p-[2px_10px] border border-black rounded-[5px]"
                name="password"
                id="password"
              />

              <span className="text-red-500 text-[14px]" ref={refSpan}></span>

              <button
                type="submit"
                className="hover:cursor-pointer p-[5px_20px] bg-blue-500 rounded-[10px] text-white border border-black hover:bg-blue-600"
              >
                Iniciar sesión
              </button>
            </form>

            <button
              className="text-[14px] text-blue-500"
              onClick={() => setViewRegister(true)}
            >
              ¿No tienes cuenta?
            </button>

            <button
              className="text-[14px] text-blue-500"
              onClick={() => setViewRecovery(true)}
            >
              Se me olvidó la contraseña
            </button>

            <button
              className="text-[14px] text-blue-500"
              onClick={() => setViewVerifyUser(true)}
            >
              Tienes un código
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
