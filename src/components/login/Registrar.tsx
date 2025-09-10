import { NavLink } from "react-router";

export default function Registrar() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px]">
        <h1 className="text-[32px] text-center">Registrar</h1>
        <form className="flex flex-col gap-[20px]">
          <label htmlFor="email" className="text-[14px]">E-mail</label>
          <input className="p-[2px_10px] border-[1px] border-black rounded-[5px]" type="email" name="email" id="email" />
          <label htmlFor="name" className="text-[14px]">Nombre de usuario</label>
          <input className="p-[2px_10px] border-[1px] border-black rounded-[5px]" type="text" name="name" id="name" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="p-[2px_10px] border-[1px] border-black rounded-[5px]" name="password" id="password" />
          <button title="Enviar" type="submit" className="hover:cursor-pointer p-[5px_20px] bg-blue-500 rounded-[10px] text-white border-[1px] border-black hover:bg-blue-600">Registrarse</button>
        </form>
        <NavLink to="/login" className="text-[14px] text-blue-500">¿Ya tienes cuenta?</NavLink>
      </div>

    </div>
  )
}
