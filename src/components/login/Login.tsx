import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../singleton/globalContext";
import Registrar from "./Registrar";

export default function Login() {
  const navigate = useNavigate()
  const { users, setUser, modalLoginRef } = useContext(GlobalContext);
  const [viewRegister, setViewRegister] = useState(false)
  const refForm = useRef<HTMLFormElement>(null)
  const refSpan = useRef<HTMLSpanElement>(null)
  return (
    <>
      {viewRegister ? <Registrar setViewRegister={setViewRegister}/> : <div
      // className="w-full h-screen flex flex-col justify-center items-center bg-black"
      >
        <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px]">
          <h1 className="text-[32px] text-center">Login</h1>
          <form className="flex flex-col gap-[20px]" ref={refForm} onSubmit={(event) => {
            event.preventDefault()
            if (refForm.current) {
              const data = new FormData(refForm.current);
              const email = data.get("email")
              const password = data.get("password")
              const findUser = users.find((item) => item.email === email && item.password === password);
              if (findUser) {
                setUser(findUser)
                modalLoginRef.current?.close()
                if (location.pathname === "/#/documentacion") {
                  navigate("/documentacion");
                }
              } else {
                if (refSpan.current) {
                  refSpan.current.textContent = "El email o la contraseña no corresponden a una cuenta registrada"
                } else {
                  throw new Error("La referencia 'refSpan' es null o undefined")
                }
              }
            }
          }}>
            <label htmlFor="email" className="text-[14px]">E-mail</label>
            <input className="p-[2px_10px] border-[1px] border-black rounded-[5px]" type="email" name="email" id="email" />
            <label htmlFor="password" className="text-[14px]">Contraseña</label>
            <input type="password" className="p-[2px_10px] border-[1px] border-black rounded-[5px]" name="password" id="password" />
            <span className="text-red-500 text-[14px]" ref={refSpan}></span>
            <button type="submit" className="hover:cursor-pointer p-[5px_20px] bg-blue-500 rounded-[10px] text-white border-[1px] border-black hover:bg-blue-600">Iniciar sesión</button>
          </form>
          <button type="button" className="text-[14px] text-blue-500" onClick={() => setViewRegister(true)}>¿No tienes cuenta?</button>
        </div>
      </div >
  }</>
  )
}
