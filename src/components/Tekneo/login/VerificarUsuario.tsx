
export default function VerificarUsuario() {
  return (
    <section className='flex justify-center items-center gap-[10px]'>
      <h1 className='text-[18px] font-bold text-center'>Verificar correo</h1>
      <p>Si usted se está registrando debería recibir un correo con un codigo de verificación para completar el registro de usuario</p>
      <form>
        <label htmlFor="code">Codigo de verificación</label>
        <input type="number" maxLength={10} minLength={4} id="code" name='code'/>
        <button type='submit' className='bg-blue-400 text-white text-center'>Verificar</button>
      </form>
    </section>
  )
}
