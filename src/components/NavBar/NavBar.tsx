import "./NavBar.css";

export function NavBarComponent() {
  return (
    <header>
      <section className="section-header">
        <div className="pre-header">
          <fieldset>
            <input type="text" id="search-input" placeholder="BUSCAR" className="buscar-input" />
            <button type="button" title="Buscar" name="btnbuscar">
              <img src="/svg/icon-buscar.svg" alt="" />
            </button>
            <i className="search-icon"></i>
          </fieldset>

          <button title="Cambiar idioma" name="btnIdioma" className="btnIdioma">
            <img src="/svg/icon-idioma.svg" alt="" />
            <span className="langTag">es</span>
          </button>

          <div className="hamburger btnHamburgesa">
            <div className="_layer -top"></div>
            <div className="_layer -mid"></div>
            <div className="_layer -bottom"></div>
          </div>
          <nav className="menuppal">
            <ul>
              <li><a data-i18n="nav_inicio" href="/index.html">Inicio</a></li>
              <li>
                <div className="accordion">
                  <button type="button" className="accordion-toggle">
                    Productos
                  </button>
                  <ul className="productsList accordion-content">
                    <li className="productListItem">
                      <a href="./Control de Accesso/Control-de-Accesso.html">
                        <div className="headerProductItem">
                          <img src="/jpg/logo Tgate-05.png" alt="Imagen del producto" />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">TGate</span>
                          <span className="footerProductItem">Software especializado en gestión y control
                            de
                            accesos, ideal para fortalecer la seguridad en
                            instalaciones de cualquier tamaño.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="productListItem">
                      <a href="./Productos/Productos.html">
                        <div className="headerProductItem">
                          <img src="/img/LOGO TSHOW.png" alt="Imagen del producto" />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">Tshow</span>
                          <span className="footerProductItem">Es una solución tecnológica avanzada para la
                            administración centralizada de archivos multimedia,
                            diseñada para operar en entornos de red privados.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="productListItem">
                      <a href="/Nodemaker/Nodemaker.html">Nodemaker</a>
                    </li>
                    <li className="productListItem">
                      <a href="/LDM/LDM.html">LDM</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a href="/Socios/socios.html">Socios</a></li>
              <li><a id="myBtn">Soporte</a></li>
            </ul>
          </nav>
        </div>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Sección Restringida, para poder acceder debes iniciar sección</p>
          </div>
        </div>

        <div className="header-primario">
          <a href="/COL/index.html">
            <img src="/img/Loho tekneo horizontal.png" alt="Logo Tekneo" className="logo" />
          </a>
          <nav className="btn-header" id="nav-menu">
            <a className="btn-header__btn" href="/">
              <p data-i18n="">Inicio</p>
            </a>
            <a className="btn-header__btn dropdown">
              <p>Productos</p>
            </a>
            <a id="myBtn" className="btn-header__btn">
              <p>Soporte</p>
            </a>

            <a className="btn-header__btn" href="./Socios/socios.html">
              <p>Socios</p>
            </a>
          </nav>
          <div className="dropdown-content">
            <section className="selectCategory" data-current-category="Software">
              <span className="category" data-value="Software">Software</span>
              <span className="category" data-value="Hardware">Hardware</span>
            </section>
            <section className="selectProduct">
              <a href="./Control de Accesso/Control-de-Accesso.html">
                <div className="headerProductItem">
                  <img src="/jpg/logo Tgate-05.png" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">TGate</span>
                  <span data-i18n="descripción_tgate" className="footerProductItem">Software especializado en
                    gestión y control de accesos,
                    ideal para fortalecer la seguridad en instalaciones de cualquier tamaño. </span>
                </div>
              </a>
              <a href="./Productos/Productos.html">
                <div className="headerProductItem">
                  <img src="/jpg/LOGO TSHOW.png" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">Tshow</span>
                  <span data-i18n="descripción_tshow" className="footerProductItem">Es una solución tecnológica
                    avanzada para la administración
                    centralizada de archivos multimedia, diseñada para operar en entornos de red privados.
                  </span>
                </div>
              </a>
              <a href="./Nodemaker/Nodemaker.html">
                <div className="headerProductItem">
                  <img src="/jpg/NODEMAKER.png
                  " alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">Nodemaker</span>
                  <span data-i18n="descripción_nodemaker" className="footerProductItem">Herramienta de integración
                    diseñada para interconectar
                    dispositivos y sistemas que utilizan distintos protocolos de comunicación, como KNX,
                    Modbus, MQTT y HTTP</span>
                </div>
              </a>
              <a href="./LDM/LDM.html">
                <div className="headerProductItem">
                  <img src="" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">LDM</span>
                  <span data-i18n="descripción_ldm" className="footerProductItem">Descripción</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </section>
    </header>
  );
}
