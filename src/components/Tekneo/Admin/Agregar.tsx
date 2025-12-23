import { useRef } from "react";
import type { ToastHandle } from "../../global/ToastPopover/ToastPopover";
import ToastPopover from "../../global/ToastPopover/ToastPopover";
import { aggNewAdmin } from "../../../requests/user";

export default function AgregarAdministrador({ onAdded }: { onAdded?: () => void }) {
  const refForm = useRef<HTMLFormElement>(null);
  const refToast = useRef<ToastHandle>(null);

  return (
    <section className="flex justify-center items-center min-h-[10vh]">
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px] shadow-md">
        <h1 className="text-[28px] font-bold text-center text-gray-800">Agregar administrador</h1>

        <p className="text-gray-600 text-[14px] text-center leading-relaxed">
          Complete los siguientes campos para registrar un nuevo administrador.
        </p>

        <form
          ref={refForm}
          className="flex flex-col gap-[15px]"
          onSubmit={async (event) => {
            event.preventDefault();

            if (!refForm.current) return;

            const data = new FormData(refForm.current);
            const email = data.get("email") as string;
            const name = data.get("name") as string;
            const pass_hash = data.get("password") as string;

            if (!email || !name || !pass_hash) {
              refToast.current?.error("Debe completar todos los campos.");
              return;
            }

            try {
              console.log("JSON ENVIADO DESDE EL FRONT:", {
                EMAIL: email,
                NAME: name,
                PASS_HASH: pass_hash,
              });

              const res = await aggNewAdmin({
                EMAIL: email,
                NAME: name,
                PASS_HASH: pass_hash,
              });

              if (!res.success) {
                refToast.current?.error(res.message || "Error al registrar.");
              } else {
                refToast.current?.show(res.message || "Administrador agregado correctamente", "success", 2500);

                refForm.current.reset();

                // 🔥 Notificar al padre para refrescar tabla
                onAdded?.();
              }
            } catch (err) {
              console.error(err);
              refToast.current?.error("Error de conexión con el servidor.");
            }
          }}
        >
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="name" className="text-[14px] text-gray-700 font-medium">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px]"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label htmlFor="email" className="text-[14px] text-gray-700 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px]"
              placeholder="usuario@correo.com"
            />
          </div>

          <div className="flex flex-col gap-[5px]">
            <label htmlFor="password" className="text-[14px] text-gray-700 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-[6px_10px] border-[1px] border-gray-400 rounded-[5px]"
              placeholder="Contraseña temporal"
            />
          </div>

          <button type="submit" className="p-[8px_20px] bg-blue-500 rounded-[10px] text-white hover:bg-blue-600">
            Registrar
          </button>
        </form>

        <ToastPopover ref={refToast} />
      </div>
    </section>
  );
}
