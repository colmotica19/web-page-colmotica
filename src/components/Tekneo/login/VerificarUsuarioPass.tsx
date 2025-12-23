import { useRef, useState } from "react";
import { verifyUserCode } from "../../../requests/user";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
//import ToastPopover from "../../global/ToastPopover/ToastPopover";
import CambiarPassword from "./CambiarPassword";

export default function VerificarUsuarioPass() {
  const refForm = useRef<HTMLFormElement>(null);
  const refToastPopover = useRef<ToastHandle>(null);

  const [viewChangePass, setViewChangePass] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  if (viewChangePass) {
    return <CambiarPassword />;
  }

  return (
    <section className="flex justify-center items-center min-h-[10vh] relative">
      {/* Flecha atrás */}
      <button
        onClick={() => setShowExitConfirm(true)}
        className="absolute top-[20px] left-[20px] text-gray-700 hover:text-black text-[20px]"
      >
        ←
      </button>

      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px] shadow-md">
        <h1 className="text-[28px] font-bold text-center text-gray-800">Verificar correo</h1>

        <p className="text-gray-600 text-[14px] text-center leading-relaxed">
          Ingrese el correo con el que se registró y el código que recibió por correo electrónico.
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

              verifyUserCode({ email, code: parseInt(code) }).then((value) => {
                if (!value.success) {
                  refToastPopover.current?.error(value.message || "Error");
                } else {
                  refToastPopover.current?.show(value.message || "Código verificado", "success", 2500);

                  setTimeout(() => {
                    setViewChangePass(true);
                  }, 1000);
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
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px]"
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
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px]"
              placeholder="Ingrese su código"
            />
          </div>

          <button type="submit" className="p-[8px_20px] bg-blue-500 rounded-[10px] text-white hover:bg-blue-600">
            Verificar
          </button>
        </form>

        {/*<ToastPopover ref={refToastPopover} />*/}
      </div>

      {/* --- MODAL DE CONFIRMACIÓN --- */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-[999]">
          <div className="bg-white p-[20px] rounded-[10px] w-[350px] shadow-lg flex flex-col gap-[20px] border border-gray-300">
            <h2 className="text-[18px] font-semibold text-gray-800 text-center">¿Estás seguro que deseas salir?</h2>

            <p className="text-[14px] text-gray-600 text-center">
              Tendrás que solicitar un nuevo código de verificación.
            </p>

            <div className="flex justify-between gap-[10px]">
              <button
                className="flex-1 p-[8px] bg-gray-300 rounded-[8px] hover:bg-gray-400"
                onClick={() => setShowExitConfirm(false)}
              >
                Cancelar
              </button>

              <button
                className="flex-1 p-[8px] bg-red-500 text-white rounded-[8px] hover:bg-red-600"
                onClick={() => setShowExitConfirm(false)}
              >
                Sí, salir
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
