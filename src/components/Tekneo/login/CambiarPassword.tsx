import { useRef, useState } from "react";
//import { useNavigate } from "react-router-dom";
import ToastPopover from "../../global/ToastPopover/ToastPopover";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
import { changePassword } from "../../../requests/user";
import Login from "./Login";

export default function CambiarPassword() {
  const refForm = useRef<HTMLFormElement>(null);
  const refToastPopover = useRef<ToastHandle>(null);
  //const navigate = useNavigate();

  const [viewChangePass, setViewChangePass] = useState(false);
  if (viewChangePass) {
    return <Login />;
  }

  return (
    <section className="flex justify-center items-center min-h-[10vh]">
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px] shadow-md">
        <h1 className="text-[28px] font-bold text-center text-gray-800">
          Cambiar contraseña
        </h1>

        <p className="text-gray-600 text-[14px] text-center leading-relaxed">
          Ingrese el correo y su nueva contraseña.
        </p>

        <form
          ref={refForm}
          className="flex flex-col gap-[15px]"
          onSubmit={(event) => {
            event.preventDefault();

            const fd = new FormData(refForm.current!);
            const email = fd.get("email") as string;
            const pass = fd.get("pass") as string;

            if (!email || !pass) {
              refToastPopover.current?.error(
                "Debe ingresar el correo y la nueva contraseña"
              );
              return;
            }

            changePassword({ email, pass }).then((res) => {
              if (!res.success) {
                refToastPopover.current?.error(
                  res.message || "Error al cambiar la contraseña"
                );
              } else {
                refToastPopover.current?.show(
                  "Contraseña cambiada correctamente",
                  "success"
                );

                setTimeout(() => {
                  setViewChangePass(true);
                }, 1000);
              }
            });
          }}
        >
          {/* Campo correo */}
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
              className="p-[6px_10px] border border-gray-400 rounded-[5px] focus:outline-none focus:border-blue-500"
              placeholder="Ingrese su correo"
            />
          </div>

          {/* Campo nueva contraseña */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="pass"
              className="text-[14px] text-gray-700 font-medium"
            >
              Nueva contraseña
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              className="p-[6px_10px] border border-gray-400 rounded-[5px] focus:outline-none focus:border-blue-500"
              placeholder="Ingrese su nueva contraseña"
            />
          </div>

          <button
            type="submit"
            className="p-[8px_20px] bg-blue-500 rounded-[10px] text-white border border-black hover:bg-blue-600 transition"
          >
            Cambiar contraseña
          </button>
        </form>

        <ToastPopover ref={refToastPopover} />
      </div>
    </section>
  );
}
