export default function Header() {
  return (
    <header>
      <section className="section-header">
        <div className="header-primario">
          <img src="/img/COLMOTICA.png" alt="" />
          <nav className="btn-header" id="nav-menu">
            <a className="btn-header__btn" href="./index.html">
              <p>Home</p>
            </a>
            <a className="btn-header__btn" href="./Productos/productos.html">
              <p>Productos</p>
            </a>
            <a className="btn-header__btn" href="./Academy/academy.html">
              <p>Academy</p>
            </a>
            <a className="btn-header__btn" href="./Soluciones/soluciones.html">
              <p>Soluciones</p>
            </a>
            <a className="btn-header__btn" href="./Consultorias/consultorias.html">
              <p>Consultorias</p>
            </a>
          </nav>
        </div>
      </section>
    </header>
  )
}
