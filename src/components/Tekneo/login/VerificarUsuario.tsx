// VerificarUsuario.tsx

import { useRef, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { verifyUserCode } from "../../../requests/user";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
//import ToastPopover from "../../global/ToastPopover/ToastPopover";
import Login from "./Login";

export default function VerificarUsuario() {
  const refForm = useRef<HTMLFormElement>(null);
  const refToastPopover = useRef<ToastHandle>(null);
  //  const navigate = useNavigate();

  const [viewChangeLogin, setViewChangeLogin] = useState(false);

  if (viewChangeLogin) {
    return <Login />;
  }

  return (
    <section className="flex justify-center items-center min-h-[10vh]">
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px] shadow-md">
        <h1 className="text-[28px] font-bold text-center text-gray-800">Verificar correo</h1>

        <p className="text-gray-600 text-[14px] text-center leading-relaxed">
          Ingrese el correo con el que se registró y el código que recibió por correo electrónico para verificar su
          cuenta.
        </p>

        <form
          ref={refForm}
          className="flex flex-col gap-[15px]"
          onSubmit={(event) => {
            event.preventDefault();

            if (refForm.current) {
              const formData = new FormData(refForm.current);
              const email = formData.get("email") as string;
              const code = formData.get("code") as string;

              if (!email || !code) {
                refToastPopover.current?.error("Debe ingresar el correo y el código de verificación");
                return;
              }

              verifyUserCode({
                email: email,
                code: parseInt(code),
              }).then((value) => {
                if ("error" in value) {
                  refToastPopover.current?.error(value.error ?? value.message ?? "Ocurrió un error");
                } else {
                  refToastPopover.current?.show(
                    typeof value.message === "string"
                      ? value.message
                      : value.success
                      ? "Cuenta verificada correctamente"
                      : "Error en la verificación",
                    value.success ? "success" : "error",
                    3000
                  );

                  if (value.success) {
                    setTimeout(() => {
                      setViewChangeLogin(true);
                    }, 2000);
                  }
                }
              });
            }
          }}
        >
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="email" className="text-[14px] text-gray-700 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px] focus:outline-none focus:border-blue-500"
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label htmlFor="code" className="text-[14px] text-gray-700 font-medium">
              Código de verificación
            </label>
            <input
              type="number"
              id="code"
              name="code"
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px] focus:outline-none focus:border-blue-500"
              placeholder="Ingrese su código"
            />
          </div>

          <button
            type="submit"
            className="p-[8px_20px] bg-blue-500 rounded-[10px] text-white border-[1px] border-black hover:bg-blue-600 hover:cursor-pointer transition"
          >
            Verificar
          </button>
        </form>

        {/*<ToastPopover ref={refToastPopover} */}
      </div>
    </section>
  );
}
