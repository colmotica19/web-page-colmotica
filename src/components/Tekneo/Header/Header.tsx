import { NavLink } from "react-router";
import "./Header.css";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../singleton/globalContext";
import { useTranslation } from "react-i18next";

export function Header() {
  const { focusSoftware, focusHardware, setFocusSoftware, setFocusHardware, lang, setLang } = useContext(GlobalContext);
  const { t } = useTranslation()
  useEffect(() => {
    const selectCategory = document.querySelector<HTMLElement>('.selectCategory');
    const categoryItems = document.querySelectorAll<HTMLSpanElement>('.selectCategory > .category');
    const selectProduct = document.querySelector<HTMLElement>('.dropdown-content > .selectProduct');
    if (!selectProduct) throw new Error("No se encontró el elemento ''selectProduct");
    const softwareLinks = selectProduct.querySelectorAll('a');
    // Constantes para URLs e info de productos hardware
    const hardwareProducts = [
      {
        url: "https://es.aliexpress.com/item/4000232174472.html?...",
        img: "/img/Lector QR.png",
        name: "TK-Lector",
        description: "Lee codigo QR o tarjeta EM para el funcionamiento del software 'TGate'",
      },
      {
        url: "https://es.aliexpress.com/item/4000999069820.html?...",
        img: "/img/Modulo DT-R004.png",
        name: "Modulo TK-IO44W",
        description: "Modulo de relés programables, sirve para el funcionamiento del software 'TGate'",
      },
      {
        url: "https://es.aliexpress.com/item/4000999069820.html?...",
        img: "/img/Modulo TK-IO22W.webp",
        name: "Modulo TK-IO22W",
        description: "Modulo de relés programables, sirve para el funcionamiento del software 'TGate'",
      },
      {
        url: "https://es.aliexpress.com/item/4000999069820.html?...",
        img: "/img/Modulo TK-IO88W.webp",
        name: "Modulo TK-IO88W",
        description: "Modulo de relés programables, sirve para el funcionamiento del software 'TGate'",
      }
    ];
    // Limpia los productos actuales del dropdown
    function clearProducts() {
      if (!selectProduct) throw new Error("No se encontró el elemento ''selectProduct");
      while (selectProduct.firstChild) {
        selectProduct.removeChild(selectProduct.firstChild);
      }
    }
    // Agrega productos al dropdown
    function appendProducts(products: typeof hardwareProducts) {
      if (!selectProduct) throw new Error("No se encontró el elemento ''selectProduct");
      products.forEach((product) => {
        const element = createProduct(product.url, product.img, product.name, product.description);
        selectProduct.appendChild(element);
      });
    }
    const mapProducts = new Map<string, HTMLAnchorElement>()
    // Crea un nodo <a> de producto
    function createProduct(anchorSrc: string, imgSrc: string, name: string, description = "Descripción") {
      if ([anchorSrc, imgSrc, name, description].some(arg => typeof arg !== "string")) {
        throw new TypeError("Todos los argumentos deben ser strings");
      }
      if (!mapProducts.has(imgSrc)) {
        const anchor = document.createElement('a');
        anchor.href = anchorSrc;
        anchor.target = "_blank"
        const header = document.createElement('div');
        header.className = 'headerProductItem';
        const img = new Image();
        img.src = imgSrc;
        img.style.filter = "none";
        header.appendChild(img);
        const content = document.createElement('div');
        content.className = 'containerBodyAndFooterProduct';
        const body = document.createElement('span');
        body.className = 'bodyProductItem';
        body.textContent = name;
        const footer = document.createElement('span');
        footer.className = 'footerProductItem';
        footer.textContent = description;
        content.append(body, footer);
        anchor.append(header, content);
        mapProducts.set(imgSrc, anchor)
        return anchor;
      } else {
        return mapProducts.get(imgSrc) as HTMLAnchorElement
      }
    }
    // Cambia la categoría seleccionada
    function handleCategorySelection(category: HTMLSpanElement) {
      if (!selectCategory) throw new Error("No se encontró el elemento ''selectCategory");
      if (!selectProduct) throw new Error("No se encontró el elemento ''selectProduct");
      const current = selectCategory.dataset.currentCategory;
      const selected = category.textContent ?? "";
      if (selected === current)
        return;
      clearProducts();
      selectCategory.dataset.currentCategory = selected;
      if (selected === "Software") {
        softwareLinks.forEach(link => selectProduct.appendChild(link));
      }
      else if (selected === "Hardware") {
        appendProducts(hardwareProducts);
      }
    }
    // Asignar eventos de categoría
    categoryItems.forEach(item => item.addEventListener("click", () => handleCategorySelection(item)));
    // Hover y toggle del dropdown
    const dropdown = document.querySelector(".dropdown") as HTMLElement;
    const dropdownContent = document.querySelector(".dropdown-content") as HTMLElement;
    if (!dropdown && !dropdownContent) throw new Error("No se encontró estos dos elementos 'dropdown', 'dropdownContent'")

    dropdown.addEventListener("pointerover", () => {
      dropdownContent.classList.add('show');
    });
    dropdown.addEventListener("click", () => {
      dropdownContent.classList.toggle('show');
    });
    dropdownContent.addEventListener("pointerleave", () => {
      dropdownContent.classList.remove('show');
    });
    // Acordeón menú lateral
    document.querySelectorAll('.accordion-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.parentElement) {
          btn.parentElement.classList.toggle('open');
        }
        else {
          throw new Error("No se pudo encontrar el elemento padre");
        }
      });
    });
  }, [])

  useEffect(() => {
    // Si se activa el foco desde el footer
    if (focusSoftware || focusHardware) {
      const dropdown = document.querySelector(".dropdown") as HTMLElement;
      const dropdownContent = document.querySelector(".dropdown-content") as HTMLElement;
      const selectCategory = document.querySelector<HTMLElement>('.selectCategory');
      if (dropdown && dropdownContent && selectCategory) {
        // Scroll al dropdown
        dropdown.scrollIntoView({ behavior: "smooth", block: "center" });
        // Abrir el dropdown
        dropdownContent.classList.add('show');
        // Seleccionar la categoría
        const category = selectCategory.querySelector<HTMLElement>(
          `[data-value="${focusSoftware ? "Software" : "Hardware"}"]`
        );
        if (category) {
          category.click();
        }
      }
      // Resetear el foco para evitar loops
      setTimeout(() => {
        setFocusSoftware(false);
        setFocusHardware(false);
      }, 500);
    }
  }, [focusSoftware, focusHardware, setFocusSoftware, setFocusHardware]);

  const dropdownContent = useRef<HTMLDivElement>(null)


  return (
    <header className="sticky top-0 z-10">
      <section className="section-header">
        <div className="pre-header">
          <fieldset>
            <input type="text" id="search-input" placeholder="BUSCAR" className="buscar-input" />
            <button type="button" title="Buscar" name="btnbuscar">
              <img src="/svg/icon-buscar.svg" alt="" />
            </button>
            <i className="search-icon"></i>
          </fieldset>

          <button type="button" title="Cambiar idioma" name="btnIdioma" className="btnIdioma" onClick={() => setLang(lang === "es" ? "en" : "es")}>
            <svg
              className="fill-gray-200 size-[20px]"
              viewBox="0 0 600 600"
              version="1.1"
              id="svg9724"
              xmlns="http://www.w3.org/2000/svg">
              <defs
                id="defs9728" />
              <g
                id="g1082"
                transform="matrix(0.86666667,0,0,0.85677845,39.999999,42.966064)"
                style={{ strokeWidth: 1.16048 }}>
                <path
                  id="path241"
                  style={{ color: "inherit", fill: "inherit", strokeLinecap: "round" as const }}
                  d="M 169.23678 -49.88168 A 46.419449 46.419449 0 0 0 122.81475 -3.4618798 L 122.81475 55.162979 L 0.26592663 55.162979 A 46.419399 46.419399 0 0 0 -46.153845 101.58278 A 46.419399 46.419399 0 0 0 0.26592663 148.00258 L 116.47311 148.00258 C 109.84235 231.66594 84.892611 296.90624 9.8820624 349.53878 A 46.419399 46.419399 0 0 0 -1.4558282 414.20006 A 46.419399 46.419399 0 0 0 63.206882 425.53431 C 117.86118 387.18509 154.12427 339.35301 177.04552 287.17079 C 199.33296 323.41323 229.4691 356.59924 269.49745 384.68589 A 46.419399 46.419399 0 0 0 334.1579 373.34936 A 46.419399 46.419399 0 0 0 322.82227 308.69036 C 260.47406 264.94257 232.70979 212.49731 221.29282 148.00258 L 338.13101 148.00258 A 46.419399 46.419399 0 0 0 384.54853 101.58278 A 46.419399 46.419399 0 0 0 338.13101 55.162979 L 215.65655 55.162979 L 215.65655 -3.4618798 A 46.419449 46.419449 0 0 0 169.23678 -49.88168 z M 449.2518 206.90099 A 46.419399 46.419399 0 0 0 406.83443 236.2442 L 268.37064 586.39306 A 46.419399 46.419399 0 0 0 294.46965 646.62961 A 46.419399 46.419399 0 0 0 354.70403 620.53257 L 380.02103 556.50959 L 531.51743 556.50959 L 556.83443 620.53257 A 46.419399 46.419399 0 0 0 617.07106 646.62961 A 46.419399 46.419399 0 0 0 643.16556 586.39306 L 504.70403 236.2442 A 46.419399 46.419399 0 0 0 462.28666 206.90099 A 46.419399 46.419399 0 0 0 455.76923 207.4367 A 46.419399 46.419399 0 0 0 449.2518 206.90099 z M 455.76923 364.95582 L 494.80394 463.66999 L 416.73452 463.66999 L 455.76923 364.95582 z " />
              </g>
            </svg>
            <span className="uppercase text-gray-200 text-[16px] font-bold">{ lang }</span>
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
                      <NavLink to="controlDeAcceso">
                        <div className="headerProductItem">
                          <img src="/img/logo Tgate-05.png" alt="Imagen del producto" />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">TGate</span>
                          <span className="footerProductItem">{t("descripción_tgate") }
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="productListItem">
                      <NavLink to="tshow">
                        <div className="headerProductItem">
                          <img src="/img/LOGO TSHOW.png" alt="Imagen del producto" />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">Tshow</span>
                          <span className="footerProductItem">{t("descripción_tshow") }
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="productListItem">
                      <NavLink to="nodemaker">
                        <div className="headerProductItem">
                          <img src="/img/NODEMAKER.png
                  " alt="Imagen del producto" />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">Nodemaker</span>
                          <span className="footerProductItem">{t("descripción_nodemaker") }</span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="productListItem">
                      <NavLink to="ldm" className="relative">
                        <div className="headerProductItem w-[200px] flex justify-center">
                          <img src="/img/Loho tekneo vertical.png" alt="Imagen del producto" className="filter-none! w-[95px]!" />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">LDM</span>
                          <span className="footerProductItem">{t("descripción_ldm") }</span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li><NavLink to="socios">{t("nav_socios") }</NavLink></li>
              <li><NavLink to={""} id="myBtn">{t("nav_soporte") }</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Sección Restringida, para poder acceder debes iniciar sección</p>
          </div>
        </div> */}

        <div className="header-primario">
          <NavLink to="colmotica">
            <img src="/img/Loho tekneo horizontal.png" alt="Logo Tekneo" className="logo" />
          </NavLink>
          <nav className="btn-header" id="nav-menu">
            <NavLink className="btn-header__btn" to="/">
              <p>{t("nav_inicio") }</p>
            </NavLink>
            <a className="btn-header__btn dropdown">
              <p>{t("nav_productos") }</p>
            </a>
            <a id="myBtn" className="btn-header__btn">
              <p>{t("nav_soporte") }</p>
            </a>

            <NavLink className="btn-header__btn" to="socios">
              <p>{t("nav_socios") }</p>
            </NavLink>
          </nav>
          <div className="dropdown-content" ref={dropdownContent}>
            <section className="selectCategory" data-current-category="Software">
              <span className="category" data-value="Software">Software</span>
              <span className="category" data-value="Hardware">Hardware</span>
            </section>
            <section className="selectProduct">
              <NavLink to="controlDeAcceso" onClick={() => dropdownContent.current?.classList.remove("show")}>
                <div className="headerProductItem">
                  <img src="/img/logo Tgate-05.png" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">TGate</span>
                  <span className="footerProductItem">{t("descripción_tgate") } </span>
                </div>
              </NavLink>
              <NavLink to="tshow" onClick={() => dropdownContent.current?.classList.remove("show")}>
                <div className="headerProductItem">
                  <img src="/img/LOGO TSHOW.png" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">Tshow</span>
                  <span className="footerProductItem">{t("descripción_tshow") }
                  </span>
                </div>
              </NavLink>
              <NavLink to="nodemaker" onClick={() => dropdownContent.current?.classList.remove("show")}>
                <div className="headerProductItem">
                  <img src="/img/NODEMAKER.png
                  " alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">Nodemaker</span>
                  <span className="footerProductItem">{t("descripción_nodemaker") }</span>
                </div>
              </NavLink>
              <NavLink to="ldm" className="relative" onClick={() => dropdownContent.current?.classList.remove("show")}>
                <div className="headerProductItem w-[200px] flex justify-center">
                  <img src="/img/Loho tekneo vertical.png" alt="Imagen del producto" className="filter-none! w-[95px]!" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">LDM</span>
                  <span className="footerProductItem">{t("descripción_ldm") }</span>
                </div>
              </NavLink>
            </section>
          </div>
        </div>
      </section>
    </header>
  );
}
