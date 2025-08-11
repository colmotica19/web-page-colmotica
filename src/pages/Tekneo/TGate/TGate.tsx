import "./TGate.css";

export default function TGate() {
  return (
    <>
      <section className="seccion-encabezado-TG">
        <div className="container-encabezado">
          <p className="container-encabezado-title">TGate</p>
          <p className="container-encabezado-sb">
            Software especializado Control de Accesos multiprotocolo ideal por
            su flexibilidad y fortaleza. Potencia la seguridad en las
            instalaciones de cualquier tamaño.
          </p>
        </div>

        <div className="img-logo-seccion">
          <img src="/img/logo Tgate-05.png" alt="lgoo gelice" />
        </div>
      </section>

      <section className="seccion-detalles">
        <p className="seccion-detalles-title">Detalles del Producto</p>
        <p className="seccion-detalles-sb">
          software especializado en gestión y control de accesos, ideal para
          fortalecer la seguridad en instalaciones de cualquier tamaño. Su
          diseño flexible permite centralizar la administración de puntos de
          acceso, adaptándose a las necesidades específicas de cada entorno. Los
          usuarios pueden crear cuentas de administración, configurar áreas,
          niveles, accesos y registrar personal autorizado con sus respectivos
          permisos. Además, permite integrar y monitorear cámaras de vigilancia
          para una supervisión más completa. Gracias a su estructura escalable,
          Tekneo es una solución robusta que se adapta tanto a pequeñas como
          grandes empresas, ofreciendo un control preciso, eficiente y
          personalizado de los accesos dentro de una organización. Es una
          herramienta integral para garantizar seguridad y orden en cualquier
          tipo de instalación.
        </p>
      </section>

      <section className="seccion-beneficios">
        <div className="display-group">
          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate1.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Integración Multi-Protocolo <br /> (KNX, Modbus, MQTT, HTTP).
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Las puertas, electroimanes, cerradiiras eléctrica, cantoneras,
              talanqueras etc pueden estar conectadas a salidas multiprocolo.
              Pueden ser salidas KNX, ModBus, MQTT, TIS BUS lo que te da una
              flexibilidad muy alta-
            </p>
          </div>

          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate2.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Arquitectura Modular y Flexible.
              </p>
            </div>
            <p className="seccion-detalles-sb">
              se adapta a cualquier tipo de instalación, ya sea pequeña o de
              gran escala. Su diseño modular permite implementar solo las
              funcionalidades necesarias al inicio y expandirlas conforme crecen
              las necesidades del cliente, algo poco común en softwares de
              competidores rígidos o monolíticos.
            </p>
          </div>
        </div>

        <div className="display-group">
          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate3.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Escalabilidad Real <br />y Rendimiento Optimizado.
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Muchos sistemas pierden eficiencia al aumentar el número de
              usuarios o puntos de acceso. Tekneo, gracias a su estructura
              escalable, mantiene un alto rendimiento incluso en entornos
              complejos con cientos o miles de puertas y cámaras, sin sacrificar
              velocidad ni seguridad.
            </p>
          </div>

          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate4.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Gestión Centralizada <br />
                de Usuarios y Permisos.
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Permite crear roles, áreas restringidas, niveles de acceso
              personalizados y auditorías completas desde una única interfaz.
              Esta centralización no siempre está disponible en otras
              herramientas, especialmente en soluciones económicas o básicas.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion-uso">
        <div>
          <p className="seccion-detalles-title">Usos del Software</p>
          <p className="seccion-detalles-sb">
            Tgate CONTROL DE ACCESO es un software versátil que permite
            gestionar Pequeñas Oficinas, Conjuntos Residenciales, Edificios de
            Oficinas, Hospitales, donde tenemos distintos modos de acceso,
            distintos usuarios (residentes e invitados) y se necesita agilidad y
            seguridad en el acceso.{" "}
          </p>
        </div>

        <img src="/img/tgate.png" alt="img mockup pc" />
      </section>
    </>
  );
}
