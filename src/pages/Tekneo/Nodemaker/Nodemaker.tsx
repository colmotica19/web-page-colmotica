import "./nodemaker.css";

export default function Nodemaker() {
  return (
    <>
      <section className="seccion-encabezado-NM ">
        <div className="container-encabezado">
          <p className="container-encabezado-title">NODEMAKER</p>
          <p className="container-encabezado-sb">
            NodeMaker es una herramienta diseñada para integradores que quieren
            tener el control total de su red KNX
          </p>
        </div>

        <div className="img-logo-seccion">
          <img src="/img/NODEMAKER.png" alt="lgoo gelice" />
        </div>
      </section>

      <section className="seccion-detalles">
        <p className="seccion-detalles-title">Detalles del Producto</p>
        <p className="seccion-detalles-sb">
          Herramienta de integración diseñada para interconectar dispositivos y
          sistemas que utilizan distintos protocolos de comunicación, como KNX,
          Modbus, MQTT y HTTP. Su objetivo es facilitar la interoperabilidad
          entre equipos de diferentes fabr/icantes dentro de una misma
          instalación, sin necesidad de adquirir costosos dispositivos
          multiprotocolo o enfrentar configuraciones complejas. Gracias a una
          interfaz intuitiva y amigable, Node-Maker está pensado para
          integradores de todos los niveles, permitiéndoles crear lógica de
          comunicación entre dispositivos con facilidad, rapidez y total
          flexibilidad.
        </p>
      </section>

      <section className="seccion-beneficios">
        <div className="display-group">
          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate1.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Interoperabilidad <br />
                entre protocolos
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Permite conectar y comunicar dispositivos que usan distintos
              protocolos como KNX, Modbus, MQTT y HTTP, eliminando barreras de
              compatibilidad entre sistemas de distintos fabr/icantes.
            </p>
          </div>

          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate2.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Ahorro en <br />
                hardware adicional
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Evita la necesidad de adquirir gateways físicos complejos o
              costosos. Todo se gestiona desde el software, reduciendo costos en
              infraestructura y mantenimiento.
            </p>
          </div>
        </div>

        <div className="display-group">
          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate3.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Interfaz intuitiva <br />
                para integradores
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Su entorno gráfico es amigable y fácil de usar, lo que permite a
              integradores de cualquier nivel configurar reglas, conexiones y
              automatizaciones sin necesidad de conocimientos avanzados en
              programación.
            </p>
          </div>

          <div className="group-beneficio">
            <div className="group-beneficio-img">
              <img src="/svg/gate4.svg" alt="img-beneficios" />
              <p className="seccion-detalles-title">
                Personalización de <br />
                lógica y automatización
              </p>
            </div>
            <p className="seccion-detalles-sb">
              Ofrece total flexibilidad para crear reglas personalizadas y
              automatizar comportamientos entre equipos, adaptándose a cualquier
              necesidad del cliente o escenario técnico.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion-uso">
        <div>
          <p className="seccion-detalles-title">Usos del Software</p>
          <p className="seccion-detalles-sb">
            NodeMaker es un software versátil que permite interconectar líneas
            KNX de forma bidireccional, facilitando una comunicación más
            eficiente entre segmentos del sistema. Además, actúa como una
            pasarela multiprotocolo con soporte MQTT bidireccional, ideal para
            integrar plataformas IoT como apps móviles, servicios en la nube o
            sistemas externos de automatización. También ofrece funciones
            avanzadas de monitoreo y diagnóstico, gracias a su sistema de
            registro inteligente de telegramas, que permite filtrar, analizar y
            controlar el tráfico en la red en tiempo real, asegurando un control
            total y personalizado de cada instalación.
          </p>
        </div>

        <img src="/img/ndmaker.png" alt="img mockup pc" />
      </section>
    </>
  );
}
