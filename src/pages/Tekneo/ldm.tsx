export default function Ldm() {
  return (
    <>
      <section className="seccion-encabezado">
        <div className="container-encabezado">
          <p className="container-encabezado-title">LDM</p>
          <p className="container-encabezado-sb">es un software diseñado para gestionar y monitorear el ingreso de personas a espacios físicos de forma segura y eficiente.</p>
        </div>

        <div className="img-logo-seccion">
          <img src="/img/Logo-TK-WHITE-ICON.png" alt="lgoo gelice"/>
        </div>
      </section>

      <section className="seccion-detalles">
        <p className="seccion-detalles-title">Detalles del Producto</p>
        <p className="seccion-detalles-sb">Tekneo es un software especializado en control de acceso y monitoreo en tiempo real, diseñado para gestionar la entrada y salida de personas en instalaciones físicas como oficinas, edificios empresariales, instituciones educativas, residencias, fábricas, entre otros.
          Este sistema permite configurar quién tiene acceso, en qué horarios y a qué zonas específicas, integrándose con dispositivos como lectores de huella, tarjetas RFID, códigos QR o reconocimiento facial.</p>
      </section>

      <section className="seccion-beneficios">
        <div className="group-beneficio">
          <div className="group-beneficio-img">
            <img src="/img/2931173_document_empty_file_new_sheet_icon 1.png" alt="img-beneficios"/>
              <p className="seccion-detalles-title">Beneficio uno</p>
          </div>
          <p className="seccion-detalles-sb">Mejora la seguridad al permitir acceso solo a personas autorizadas.</p>
        </div>

        <div className="group-beneficio">
          <div className="group-beneficio-img">
            <img src="/img/Group 4.png" alt="img-beneficios"/>
              <p className="seccion-detalles-title">Beneficio dos</p>
          </div>
          <p className="seccion-detalles-sb">Monitoreo en tiempo real de entradas y salidas.</p>
        </div>


        <div className="group-beneficio">
          <div className="group-beneficio-img">
            <img src="/img/users-svgrepo-com 1.png" alt="img-beneficios"/>
              <p className="seccion-detalles-title">Beneficio tres</p>
          </div>
          <p className="seccion-detalles-sb">Registro automático de historial de accesos.</p>
        </div>
      </section>

      <section className="seccion-uso">
        <div>
          <p className="seccion-detalles-title">Usos del Software</p>
          <p className="seccion-detalles-sb">Ideal para empresas, edificios o instituciones que requieren controlar quién entra y sale, cuándo y por cuánto tiempo. </p>
        </div>

        <img src="/img/image 3.png" alt="img mockup pc"/>
      </section></>
  )
}
