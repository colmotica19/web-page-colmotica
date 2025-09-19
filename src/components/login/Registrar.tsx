import { useContext, useRef, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../singleton/globalContext";

export default function Registrar({setViewRegister}: {setViewRegister: Dispatch<SetStateAction<boolean>>}) {
  const navigate = useNavigate()
  const { users } = useContext(GlobalContext);
  const refForm = useRef<HTMLFormElement>(null);
  const refSpan = useRef<HTMLSpanElement>(null)
  return (
    <div
    // className="w-full h-screen flex flex-col justify-center items-center bg-black"
    >
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px]">
        <h1 className="text-[32px] text-center">Registrar</h1>
        <form className="flex flex-col gap-[20px]" ref={refForm} onSubmit={(event) => {
          event.preventDefault()
          if (refForm.current) {
            const data = new FormData(refForm.current);
            const email = data.get("email") as string
            const name = data.get("name") as string
            const password = data.get("password") as string
            const admin = false
            if (email && name && password) {
              users.push({
                email,
                name,
                password,
                admin
              })
              navigate("/login")
            } else if(refSpan.current) {
              refSpan.current.textContent = "Debe completar todos los campos"
            }
          }
        }}>
          <label htmlFor="email" className="text-[14px]">E-mail</label>
          <input className="p-[2px_10px] border-[1px] border-black rounded-[5px]" type="email" name="email" id="email" />
          <label htmlFor="name" className="text-[14px]">Nombre de usuario</label>
          <input className="p-[2px_10px] border-[1px] border-black rounded-[5px]" type="text" name="name" id="name" minLength={4} maxLength={10} />
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="p-[2px_10px] border-[1px] border-black rounded-[5px]" name="password" id="password" minLength={8} />
          <span ref={refSpan} className="text-[14px] text-red-500"></span>
          <button title="Enviar" type="submit" className="hover:cursor-pointer p-[5px_20px] bg-blue-500 rounded-[10px] text-white border-[1px] border-black hover:bg-blue-600">Registrarse</button>
        </form>
        <button type="button" className="text-[14px] text-blue-500" onClick={() => setViewRegister(false)}>¿Ya tienes cuenta?</button>
      </div>

    </div>
  )
}
