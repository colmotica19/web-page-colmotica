//Registrar.tsx

import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { registerUser } from "../../../requests/user";
import { CountrySelect } from "../CountrySelect";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
import ToastPopover from "../../global/ToastPopover/ToastPopover";
import VerificarUsuario from "./VerificarUsuario";
import { FaArrowRightLong } from "react-icons/fa6";
import Login from "./Login";

export default function Registrar({
  setViewRegister,
}: //setViewRecovery,
{
  setViewRegister: Dispatch<SetStateAction<boolean>>;
  setViewRecovery: Dispatch<SetStateAction<boolean>>;
}) {
  const [viewChangeLogin, setViewChangeLogin] = useState(false);
  const refForm = useRef<HTMLFormElement>(null);
  const refSpan = useRef<HTMLSpanElement>(null);
  const refToastPopover = useRef<ToastHandle>(null);
  const [viewVerifyUser, setViewVerifyUser] = useState(false);
  const [country, setCountry] = useState("");

  if (viewChangeLogin) {
    return <Login />;
  }

  return (
    <div className="relative">
      {viewVerifyUser ? (
        <>
          <button
            type="button"
            title="Volver"
            className="absolute top-[10px] left-[10px]"
            onClick={() => setViewVerifyUser(false)}
          >
            <FaArrowRightLong className="rotate-180" />
          </button>

          {/* ✅ le pasamos el idUser generado */}
          <VerificarUsuario />
        </>
      ) : (
        <>
          <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px]">
            <h1 className="text-[32px] text-center">Registrar</h1>

            <form
              className="flex flex-col gap-[20px]"
              ref={refForm}
              onSubmit={(event) => {
                event.preventDefault();

                if (refForm.current) {
                  const data = new FormData(refForm.current);
                  const email = data.get("email") as string;
                  const name = data.get("name") as string;
                  const tel = data.get("tel") as string;
                  const password = data.get("password") as string;
                  const pais = data.get("pais") as string;

                  if (email && name && password) {
                    registerUser({
                      EMAIL: email,
                      NAME: name,
                      PAIS: pais,
                      PASS_HASH: password,
                      TEL: tel,
                    }).then((value) => {
                      if ("error" in value) {
                        refToastPopover.current?.error(
                          value.error ?? value.message ?? "Ocurrió un error"
                        );
                      } else {
                        refToastPopover.current?.show(
                          typeof value.message === "string"
                            ? value.message
                            : "Se envió un correo de verificación",
                          value.success ? "success" : "error",
                          6000
                        );

                        setViewVerifyUser(true);
                      }
                    });
                  } else if (refSpan.current) {
                    refSpan.current.textContent =
                      "Debe completar todos los campos";
                  }
                }
              }}
            >
              <label htmlFor="email" className="text-[14px]">
                E-mail
              </label>
              <input
                className="p-[2px_10px] border-[1px] border-black rounded-[5px]"
                type="email"
                name="email"
                id="email"
              />

              <label htmlFor="name" className="text-[14px]">
                Nombre de usuario
              </label>
              <input
                className="p-[2px_10px] border-[1px] border-black rounded-[5px]"
                type="text"
                name="name"
                id="name"
                minLength={4}
                maxLength={10}
              />

              <label htmlFor="pais" className="text-[14px]">
                País
              </label>
              <CountrySelect
                name="pais"
                value={country}
                onChange={setCountry}
              ></CountrySelect>

              <label htmlFor="tel" className="text-[14px]">
                Ingrese el teléfono
              </label>
              <input
                type="tel"
                name="tel"
                title="Ingrese el teléfono"
                className="p-[2px_10px] border-[1px] border-black rounded-[5px]"
                maxLength={10}
              />

              <label htmlFor="password" className="text-[14px]">
                Contraseña
              </label>
              <input
                type="password"
                className="p-[2px_10px] border-[1px] border-black rounded-[5px]"
                name="password"
                id="password"
                minLength={8}
              />

              <span ref={refSpan} className="text-[14px] text-red-500"></span>

              <button
                title="Enviar"
                type="submit"
                className="hover:cursor-pointer p-[5px_20px] bg-blue-500 rounded-[10px] text-white border-[1px] border-black hover:bg-blue-600"
              >
                Registrarse
              </button>
            </form>

            <button
              type="button"
              className="text-[14px] text-blue-500"
              onClick={() => setViewRegister(false)}
            >
              ¿Ya tienes cuenta?
            </button>

            <button
              type="button"
              className="text-[14px] text-blue-500"
              onClick={() => setViewChangeLogin(true)}
            >
              Se me olvidó la contraseña
            </button>

            <button
              type="button"
              title="Verificar usuario"
              className="text-[14px] text-blue-500"
              onClick={() => setViewVerifyUser(true)}
            >
              Tienes un código
            </button>
          </div>

          <ToastPopover ref={refToastPopover}></ToastPopover>
        </>
      )}
    </div>
  );
}
