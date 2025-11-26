import { useRef, useState } from "react";
import { verifyUserCode } from "../../../requests/user";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
import ToastPopover from "../../global/ToastPopover/ToastPopover";
import CambiarPassword from "./CambiarPassword";

export default function VerificarUsuarioPass() {
  const refForm = useRef<HTMLFormElement>(null);
  const refToastPopover = useRef<ToastHandle>(null);

  // 👇 Controla si se muestra VerificarUsuarioPass o CambiarPassword
  const [viewChangePass, setViewChangePass] = useState(false);

  // Si ya se verificó el código ➜ mostrar CambiarPassword
  if (viewChangePass) {
    return <CambiarPassword />;
  }

  return (
    <section className="flex justify-center items-center min-h-[10vh]">
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px] shadow-md">
        <h1 className="text-[28px] font-bold text-center text-gray-800">
          Verificar correo
        </h1>

        <p className="text-gray-600 text-[14px] text-center leading-relaxed">
          Ingrese el correo con el que se registró y el código que recibió por
          correo electrónico.
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
                refToastPopover.current?.error(
                  "Debe ingresar el correo y el código de verificación"
                );
                return;
              }

              verifyUserCode({ email, code: parseInt(code) }).then((value) => {
                if (!value.success) {
                  refToastPopover.current?.error(value.message || "Error");
                } else {
                  refToastPopover.current?.show(
                    value.message || "Código verificado",
                    "success",
                    2500
                  );

                  // ⬇⬇⬇ Aquí está la magia: cambiamos de vista
                  setTimeout(() => {
                    setViewChangePass(true);
                  }, 1000);
                }
              });
            }
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

          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="code"
              className="text-[14px] text-gray-700 font-medium"
            >
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

          <button
            type="submit"
            className="p-[8px_20px] bg-blue-500 rounded-[10px] text-white hover:bg-blue-600"
          >
            Verificar
          </button>
        </form>

        <ToastPopover ref={refToastPopover} />
      </div>
    </section>
  );
}
