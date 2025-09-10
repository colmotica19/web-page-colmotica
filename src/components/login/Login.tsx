import { NavLink } from "react-router";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className="flex flex-col gap-[20px] bg-white p-[30px] rounded-[10px] w-[400px]">
        <h1 className="text-[32px] text-center">Login</h1>
        <form className="flex flex-col gap-[20px]">
          <label htmlFor="email" className="text-[14px]">E-mail</label>
          <input className="p-[2px_10px] border-[1px] border-black rounded-[5px]" type="email" name="email" id="email" />
          <label htmlFor="password" className="text-[14px]">Contraseña</label>
          <input type="password" className="p-[2px_10px] border-[1px] border-black rounded-[5px]" name="password" id="password" />
          <button type="submit" className="hover:cursor-pointer p-[5px_20px] bg-blue-500 rounded-[10px] text-white border-[1px] border-black hover:bg-blue-600">Iniciar sesión</button>
        </form>
        <NavLink to="/registrar" className="text-[14px] text-blue-500">¿No tienes cuenta?</NavLink>
      </div>
    </div>
  )
}
