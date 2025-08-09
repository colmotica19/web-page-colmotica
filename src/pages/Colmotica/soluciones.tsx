import { NavLink } from 'react-router'
import './../../Styles/soluciones.css'
export default function Soluciones() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Soluciones Colmotica</p>
          <p className="sub">Descubre el catálogo de productos más completo del mercado</p>
        </div>
      </section>

      <section className="pd-g dflex productos-sec wrapp">
        <div>
          <NavLink to="/colmotica/residencial">
            <img src="/img/colmotica/resicencia.png" alt="producto1" />
          </NavLink>
          <p>RESIDENCIAL</p>
        </div>
        <div>
          <NavLink to="/colmotica/edificios">
            <img src="/img/colmotica/hotel.png" alt="producto1" />
          </NavLink>
          <p>EDIFICIOS</p>
        </div>
        <div>
          <NavLink to="/colmotica/hoteles">
            <img src="/img/colmotica/hoteles.png" alt="producto1" />
          </NavLink>
          <p>HOTELES</p>
        </div>
      </section>

    </>
  )
}
