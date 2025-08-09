export default function Tshow() {
  return (
    <>
      <section className="seccion-encabezado">
        <div className="container-encabezado">
          <p className="container-encabezado-title">TSHOW</p>
          <p className="container-encabezado-sb">mVision es una solución tecnológica avanzada para la administración centralizada de archivos multimedia</p>
        </div>

        <div className="img-logo-seccion">
          <img src="/img/LOGO TSHOW.png" alt="lgoo gelice"/>
        </div>
      </section>

      <section className="seccion-detalles">
        <p className="seccion-detalles-title">Detalles del Producto</p>
        <p className="seccion-detalles-sb">es una solución tecnológica avanzada para la administración centralizada de archivos multimedia, diseñada para operar en entornos de red privados. Instalado en un único servidor, permite que dispositivos cliente accedan mediante conexión directa a la red o por dirección IP, sin requerir acceso a internet. A través de una interfaz web intuitiva y segura, los administradores pueden gestionar qué equipos están autorizados para proyectar contenido, así como definir de forma específica los archivos multimedia que cada dispositivo puede reproducir. Esta arquitectura garantiza un control preciso sobre la distribución del contenido y facilita su actualización en tiempo real. mVision es ideal para organizaciones que requieren una plataforma eficiente, escalable y segura para la gestión de proyecciones multimedia en entornos educativos, empresariales o institucionales.</p>
      </section>

      <section className="seccion-beneficios">

        <div className="display-group">
          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate1.svg" alt="img-beneficios"/>
                <p className="seccion-detalles-title">Funcionamiento en Red Privada <br/>sin Dependencia de Internet</p>
            </div>
            <p className="seccion-detalles-sb">A diferencia de muchas plataformas multimedia que requieren conexión constante a internet, mVision opera completamente en entornos locales, lo que garantiza seguridad, privacidad y disponibilidad del contenido incluso en ausencia de red externa. Esto es clave para instituciones educativas, gobiernos o empresas con restricciones de conectividad.</p>
          </div>

          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate2.svg" alt="img-beneficios"/>
                <p className="seccion-detalles-title">Control Centralizado <br/>y Granular del Contenido</p>
            </div>
            <p className="seccion-detalles-sb">mVision permite a los administradores no solo gestionar qué dispositivos pueden acceder al sistema, sino también qué archivos específicos puede reproducir cada uno. Esta capacidad de control fino no siempre está disponible en otras herramientas, especialmente en soluciones más básicas o enfocadas en streaming público.</p>
          </div>
        </div>

        <div className="display-group">
          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate3.svg" alt="img-beneficios"/>
                <p className="seccion-detalles-title">Escalabilidad y Bajo <br/>Costo de Infraestructura</p>
            </div>
            <p className="seccion-detalles-sb">Con una arquitectura cliente-servidor sencilla (un solo servidor + clientes en red local), mVision se escala fácilmente sin requerir infraestructuras complejas ni costosas licencias por dispositivo. Esto lo hace ideal tanto para pequeños centros educativos como para grandes corporaciones con múltiples salas o sucursales.</p>
          </div>

          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate4.svg" alt="img-beneficios"/>
                <p className="seccion-detalles-title">Ideal para Entornos Educativos, <br/>Corporativos e Institucionales</p>
            </div>
            <p className="seccion-detalles-sb">Diseñado específicamente para organizaciones que necesitan proyectar contenido controlado y seguro, mVision destaca como una solución especializada, a diferencia de herramientas genéricas de streaming o gestión multimedia que no ofrecen el mismo nivel de control o personalización sectorial.</p>
          </div>
        </div>
      </section>

      <section className="seccion-uso">
        <div>
          <p className="seccion-detalles-title">Usos del Software</p>
          <p className="seccion-detalles-sb">mVision es una solución tecnológica avanzada para la gestión centralizada de archivos multimedia en redes privadas, ideal para entornos educativos, empresariales o institucionales. Se instala en un único servidor y permite a múltiples dispositivos cliente conectarse directamente a través de la red local o por IP, sin necesidad de internet. Su interfaz web segura facilita a los administradores autorizar equipos, asignar contenidos específicos y controlar la proyección en tiempo real. Gracias a su funcionamiento offline, garantiza privacidad y disponibilidad constante del contenido. Además, su arquitectura cliente-servidor es altamente escalable y de bajo costo, permitiendo implementaciones eficientes sin infraestructuras complejas ni licencias por dispositivo.</p>
        </div>

        <img src="/img/mvision.png" alt="img mockup pc"/>
      </section>
    </>
  )
}
