import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <section className="section-header">
        <div className="header-primario">
          <img src="/img/colmotica/Logo-colmotica.png" alt="imagen" />
          <nav className="btn-header" id="nav-menu">
            <NavLink className="btn-header__btn" to="/colmotica">
              <p>Home</p>
            </NavLink>
            {/* <NavLink className="btn-header__btn" to="products">
              <p>Productos</p>
            </NavLink> */}
            <NavLink className="btn-header__btn" to="soluciones">
              <p>Soluciones</p>
            </NavLink>
            <NavLink className="btn-header__btn" to="academy">
              <p>Academia</p>
            </NavLink>
            <NavLink className="btn-header__btn" to="consultorias">
              <p>Consultorias</p>
            </NavLink>
          </nav>
        </div>
      </section>
    </header>
  )
}
