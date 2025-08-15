import { NavLink } from 'react-router'
import './../../Styles/soluciones.css'
export default function Soluciones() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Soluciones Inteligentes para Cualquier Espacio</p>
          <p className="sub">En Colmotica integramos tecnología avanzada para optimizar el control, la eficiencia y la seguridad de viviendas, hoteles y edificios corporativos. <br/> Diseñamos sistemas adaptados a sus necesidades, siempre con la máxima calidad y estabilidad.</p>
        </div>
      </section>

      <section className="pd-g dflex productos-sec wrapp mg-top-100">
        <div>
          <NavLink to="/colmotica/residencial">
            <img src="/img/colmotica/resicencia.png" alt="producto1"/>
          </NavLink>
          <p>Viviendas Inteligentes </p>
        </div>
        <div>
          <NavLink to="/colmotica/edificios">
            <img src="/img/colmotica/hotel.png" alt="producto1"/>
          </NavLink>
          <p>Edificios Inteligentes </p>
        </div>
        <div>
          <NavLink to="/colmotica/hoteles">
            <img src="/img/colmotica/hoteles.png" alt="producto1"/>
          </NavLink>
          <p>Hoteles Inteligentes </p>
        </div>
      </section>


      <section className="pd-g dflex secone align-center">
        <p className="title-all center-txt">Introducción general</p>
        <p className="subtitle-all">Cada espacio tiene retos y necesidades diferentes. Por eso desarrollamos soluciones específicas para cada sector, combinando hardware, software y protocolos multiprotocolo como KNX, MQTT, BACnet, Modbus, HTTP e IP, garantizando una integración confiable y escalable.</p>
      </section>
      <div className="dflex pd-g">
        <p className="title-all">Por qué elegir nuestras soluciones</p>
      </div>

      <section className="pd-g dflex sefor">
        <div className="c-produc dflex mw400">
          <img src="/img/colmotica/b1.png" alt="imgproduct" className="w80"/>
            <div>
              <p className="title-all fall25">Integración multiprotocolo para máxima compatibilidad.</p>
            </div>
        </div>
        <div className="c-produc dflex mw400">
          <div>
            <p className="title-all fall25">Escalabilidad para adaptarse a futuros requerimientos.</p>
          </div>
          <img src="/img/colmotica/b2.png" alt="imgproduct" className="w80"/>
        </div>
      </section>
      <section className="pd-g dflex sefor mb-50">
        <div className="c-produc dflex mw400">
          <img src="/img/colmotica/b3.png" alt="imgproduct" className="w80"/>
            <div>
              <p className="title-all fall25">Interfaces intuitivas para gestión local o remota.</p>
            </div>
        </div>
        <div className="c-produc dflex mw400">
          <div>
            <p className="title-all fall25">Tecnología estable y probada en entornos exigentes.</p>
          </div>
          <img src="/img/colmotica/b4.png" alt="imgproduct" className="w80"/>
        </div>
      </section>
    </>
  )
}
