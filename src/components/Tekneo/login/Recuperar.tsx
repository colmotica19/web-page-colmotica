// Recuperar.tsx

import { useRef, useState } from "react";
import ToastPopover from "../../global/ToastPopover/ToastPopover";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
import { sendRecoverCode } from "../../../requests/user";
import VerificarUsuario from "./VerificarUsuarioPass"; //  👈 USAMOS EL MISMO COMPONENTE
import { FaArrowRightLong } from "react-icons/fa6";

interface RecuperarProps {
  setViewRecovery: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Recuperar({ setViewRecovery }: RecuperarProps) {
  const refForm = useRef<HTMLFormElement>(null);
  const refToastPopover = useRef<ToastHandle>(null);

  // 👇 Igual que Registrar
  const [viewVerifyUser, setViewVerifyUser] = useState(false);

  return (
    <div className="relative">
      {viewVerifyUser ? (
        <>
          {/* ← Botón volver */}
          <button
            type="button"
            title="Volver"
            className="absolute top-[10px] left-[10px]"
            onClick={() => setViewVerifyUser(false)}
          >
            <FaArrowRightLong className="rotate-180" />
          </button>

          {/* 👇 Reutilizamos exactamente el mismo componente */}
          <VerificarUsuario />
        </>
      ) : (
        <>
          <section className="flex justify-center items-center min-h-[10vh]">
            <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px] relative shadow-md">
              {/* ← Botón volver */}
              <button
                className="absolute top-[10px] left-[10px] text-sm text-blue-600"
                type="button"
                onClick={() => setViewRecovery(false)}
              >
                ← Volver
              </button>

              <h1 className="text-[28px] font-bold text-center text-gray-800">
                Recuperar contraseña
              </h1>

              <p className="text-gray-600 text-[14px] text-center leading-relaxed">
                Ingrese su correo y le enviaremos un código para continuar.
              </p>

              <form
                ref={refForm}
                className="flex flex-col gap-[15px]"
                onSubmit={(event) => {
                  event.preventDefault();

                  const fd = new FormData(refForm.current!);
                  const email = fd.get("email") as string;

                  if (!email) {
                    refToastPopover.current?.error("Debe ingresar un correo");
                    return;
                  }

                  sendRecoverCode({ email }).then((res) => {
                    if (!res.success) {
                      refToastPopover.current?.error(
                        res.message || "Error al enviar el código"
                      );
                    } else {
                      refToastPopover.current?.show(
                        "Código enviado correctamente",
                        "success",
                        3000
                      );

                      // 👇 Igual que Registrar: cambiamos la vista
                      setViewVerifyUser(true);
                    }
                  });
                }}
              >
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor="email"
                    className="text-[14px] text-gray-700 font-medium"
                  >
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px]"
                    placeholder="Ingrese su correo"
                  />
                </div>

                <button
                  type="submit"
                  className="p-[8px_20px] bg-blue-500 rounded-[10px] text-white hover:bg-blue-600"
                >
                  Enviar código
                </button>
              </form>

              <ToastPopover ref={refToastPopover} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}
