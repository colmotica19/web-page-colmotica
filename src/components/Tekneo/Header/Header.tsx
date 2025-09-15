import { NavLink } from "react-router";
import "./Header.css";
import { useContext, useEffect, useMemo, useRef } from "react";
import { GlobalContext } from "../../../singleton/globalContext";
import { useTranslation } from "react-i18next";
import BtnChangeLang from "../../global/btnChangeLang";
import Modal, { type ModalHandle } from "../Modal/Modal";
import Popover, { type PopoverHandle } from "../../Popover/Popover";

export function Header() {
  const { focusSoftware, focusHardware, setFocusSoftware, setFocusHardware, lang, user } = useContext(GlobalContext);
  const { t } = useTranslation()
  const mapProducts = useRef(new Map<string, HTMLAnchorElement>());
  const hardwareProducts = useMemo(() => [
    {
      url: "",
      img: "/img/Lector QR.png",
      name: "TK-Lector",
      description:
        t("products_lee"),
    },
    {
      url: "",
      img: "/img/Modulo DT-R004.png",
      name: "Modulo TK-IO24W2",
      description:
        t("products_reles"),
    },
    {
      url: "",
      img: "/img/Modulo TK-IO22W.webp",
      name: "Modulo TK-IO22W",
      description:
        t("products_reles"),
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [t, lang]);
  // Crea un nodo <a> de producto
  function createProduct(
    anchorSrc: string,
    imgSrc: string,
    name: string,
    description = "Descripción"
  ) {
    if (
      [anchorSrc, imgSrc, name, description].some(
        (arg) => typeof arg !== "string"
      )
    ) {
      throw new TypeError("Todos los argumentos deben ser strings");
    }
    if (!mapProducts.current.has(imgSrc)) {
      const anchor = document.createElement("a");
      anchor.href = anchorSrc;
      anchor.target = "_blank";
      const header = document.createElement("div");
      header.className = "headerProductItem";
      const img = new Image();
      img.src = imgSrc;
      img.style.filter = "none";
      header.appendChild(img);
      const content = document.createElement("div");
      content.className = "containerBodyAndFooterProduct";
      const body = document.createElement("span");
      body.className = "bodyProductItem";
      body.textContent = name;
      const footer = document.createElement("span");
      footer.className = "footerProductItem";
      footer.textContent = description;
      content.append(body, footer);
      anchor.append(header, content);
      mapProducts.current.set(imgSrc, anchor);
      return anchor;
    } else {
      return mapProducts.current.get(imgSrc) as HTMLAnchorElement;
    }
  }
  useEffect(() => {
    mapProducts.current.forEach((value, key) => {
      const footerText = value.querySelector(".footerProductItem")
      if (footerText) {
        footerText.textContent = hardwareProducts.find((item) => item.img === key)?.description ?? ""
      }
    })

  }, [hardwareProducts])
  useEffect(() => {
    const selectCategory =
      document.querySelector<HTMLElement>(".selectCategory");
    const categoryItems = document.querySelectorAll<HTMLSpanElement>(
      ".selectCategory > .category"
    );
    const selectProduct = document.querySelector<HTMLElement>(
      ".dropdown-content > .selectProduct"
    );
    if (!selectProduct)
      throw new Error("No se encontró el elemento ''selectProduct");
    const softwareLinks = selectProduct.querySelectorAll("a");
    // Constantes para URLs e info de productos hardware

    // Limpia los productos actuales del dropdown
    function clearProducts() {
      if (!selectProduct)
        throw new Error("No se encontró el elemento ''selectProduct");
      while (selectProduct.firstChild) {
        selectProduct.removeChild(selectProduct.firstChild);
      }
    }
    // Agrega productos al dropdown
    function appendProducts(products: typeof hardwareProducts) {
      if (!selectProduct)
        throw new Error("No se encontró el elemento ''selectProduct");
      products.forEach((product) => {
        const element = createProduct(
          product.url,
          product.img,
          product.name,
          product.description
        );
        selectProduct.appendChild(element);
      });
    }



    // Cambia la categoría seleccionada
    function handleCategorySelection(category: HTMLSpanElement) {
      if (!selectCategory)
        throw new Error("No se encontró el elemento ''selectCategory");
      if (!selectProduct)
        throw new Error("No se encontró el elemento ''selectProduct");
      const current = selectCategory.dataset.currentCategory;
      const selected = category.textContent ?? "";
      if (selected === current) return;
      clearProducts();
      selectCategory.dataset.currentCategory = selected;
      if (selected === "Software") {
        softwareLinks.forEach((link) => selectProduct.appendChild(link));
      } else if (selected === "Hardware") {
        appendProducts(hardwareProducts);
      }
    }
    // Asignar eventos de categoría
    categoryItems.forEach((item) =>
      item.addEventListener("click", () => handleCategorySelection(item))
    );
    // Hover y toggle del dropdown
    const dropdown = document.querySelector(".dropdown") as HTMLElement;
    const dropdownContent = document.querySelector(
      ".dropdown-content"
    ) as HTMLElement;
    if (!dropdown && !dropdownContent)
      throw new Error(
        "No se encontró estos dos elementos 'dropdown', 'dropdownContent'"
      );

    // dropdown.addEventListener("pointerover", () => {
    //   dropdownContent.classList.add("show");
    // });
    dropdown.addEventListener("click", () => {
      dropdownContent.classList.toggle("show");
    });
    dropdownContent.addEventListener("mouseleave", () => {
      dropdownContent.classList.remove("show");
    });
    // Acordeón menú lateral
    document.querySelectorAll(".accordion-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.parentElement) {
          btn.parentElement.classList.toggle("open");
        } else {
          throw new Error("No se pudo encontrar el elemento padre");
        }
      });
    });
  }, []);

  useEffect(() => {
    // Si se activa el foco desde el footer
    if (focusSoftware || focusHardware) {
      const dropdown = document.querySelector(".dropdown") as HTMLElement;
      const dropdownContent = document.querySelector(
        ".dropdown-content"
      ) as HTMLElement;
      const selectCategory =
        document.querySelector<HTMLElement>(".selectCategory");
      if (dropdown && dropdownContent && selectCategory) {
        // Scroll al dropdown
        dropdown.scrollIntoView({ behavior: "smooth", block: "center" });
        // Abrir el dropdown
        dropdownContent.classList.add("show");
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

  const dropdownContent = useRef<HTMLDivElement>(null);
  const modalRef = useRef<ModalHandle>(null);
  const closeModalForGoToLink = () => {
    modalRef.current?.close()
    scroll({ top: 0, left: 0 })
  }
  const productList = useRef<HTMLUListElement>(null)
  const categoryList = useRef<HTMLUListElement>(null)
  const popoverProfile = useRef<PopoverHandle>(null)
  const btnProfile = useRef<HTMLButtonElement>(null);
  return (
    <header className="sticky top-0 z-10">
      <section className="section-header">
        <div className="pre-header">
          <fieldset>
            <input
              type="text"
              id="search-input"
              placeholder="BUSCAR"
              className="buscar-input"
            />
            <button type="button" title="Buscar" name="btnbuscar">
              <img src="/svg/icon-buscar.svg" alt="" />
            </button>
            <i className="search-icon"></i>
          </fieldset>

          <BtnChangeLang></BtnChangeLang>

          <button type="button" title="Abrir modal" className="flex md:hidden" onClick={() => modalRef.current?.showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="text-white size-[28px]">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>
        <Modal ref={modalRef} className="w-full">
          <nav className="navModal">
            <ul className="flex flex-col justify-center items-center gap-[15px] font-bold text-2xl text-center">
              <li>
                <NavLink data-i18n="nav_inicio" to="/" onClick={closeModalForGoToLink}>
                  {t("nav_inicio")}
                </NavLink>
              </li>
              <li>
                <div className="accordion">
                  <button type="button" className="accordion-toggle text-black! flex justify-center items-center gap-[10px]">
                    {t("nav_productos")}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit" className="size-[24px] rotate-270 transition-transform duration-300">
                      <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="inherit" />
                    </svg>
                  </button>
                  <ul className="categoryList flex flex-raw justify-center items-center gap-[-1px] text-[16px] font-medium m-[15px_0px]" data-product="Software" ref={categoryList}>
                    <li>
                      <button className="bg-blue-400 text-white p-[5px_10px] flex gap-[5px] justify-center items-center" type="button" title="Software" onClick={() => {
                        productList.current?.querySelectorAll<HTMLLIElement>(".productListItem").forEach((item) => item.style.display === "none" ? item.style.display = "" : null)
                        productList.current?.querySelectorAll(":is(a):not(li > a)").forEach((item) => item.remove())
                        if (categoryList.current) {
                          categoryList.current.dataset.product = "Software"
                        } else {
                          throw new Error("La referencia categoryList es null o undefined")
                        }
                      }}>
                        <span>Software</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve" className="size-[24px] fill-white">
                          <path d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5  V37.5z" />
                          <path d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7  c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z" />
                          <path d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6  c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z" />
                          <path d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5  V3.5z" />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button className="bg-blue-400 text-white p-[5px_10px] flex gap-[5px] justify-center items-center" type="button" title="Hardware" onClick={() => {
                        productList.current?.querySelectorAll<HTMLLIElement>(".productListItem").forEach((item) => item.style.display = "none")
                        hardwareProducts.forEach((item) => {
                          const anchor = createProduct(item.url, item.img, item.name, item.description)
                          productList.current?.appendChild(anchor)
                        })
                        if (categoryList.current) {
                          categoryList.current.dataset.product = "Hardware"
                        } else {
                          throw new Error("La referencia categoryList es null o undefined")
                        }
                      }}>
                        <span>Hardware</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve" className="size-[24px] fill-white">
                          <path d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5  V37.5z" />
                          <path d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7  c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z" />
                          <path d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6  c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z" />
                          <path d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5  V3.5z" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                  <ul className="productsList accordion-content" ref={productList}>
                    <li className="productListItem">
                      <NavLink to="controlDeAcceso" onClick={closeModalForGoToLink}>
                        <div className="headerProductItem">
                          <img
                            src="/img/logo Tgate-05.png"
                            alt="Imagen del producto"
                          />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">TGate</span>
                          <span className="footerProductItem">{t("descripción_tgate")}
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="productListItem">
                      <NavLink to="tshow" onClick={closeModalForGoToLink}>
                        <div className="headerProductItem">
                          <img
                            src="/img/LOGO TSHOW.png"
                            alt="Imagen del producto"
                          />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">Tshow</span>
                          <span className="footerProductItem">{t("descripción_tshow")}
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="productListItem">
                      <NavLink to="nodemaker" onClick={closeModalForGoToLink}>
                        <div className="headerProductItem">
                          <img
                            src="/img/NODEMAKER.png"
                            alt="Imagen del producto"
                          />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">Nodemaker</span>
                          <span className="footerProductItem">{t("descripción_nodemaker")}</span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="productListItem">
                      <NavLink to="ldm" className="relative" onClick={closeModalForGoToLink}>
                        <div className="headerProductItem w-[200px] flex justify-center items-center">
                          <img
                            src="/img/Loho tekneo vertical.png"
                            alt="Imagen del producto"
                            className="filter-none! w-[95px]!"
                          />
                        </div>
                        <div className="containerBodyAndFooterProduct">
                          <span className="bodyProductItem">LDM</span>
                          <span className="footerProductItem">{t("descripción_ldm")}</span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li><NavLink to="socios" onClick={closeModalForGoToLink}>{t("nav_socios")}</NavLink></li>
              {/* <li><NavLink to={""} id="myBtn" onClick={closeModalForGoToLink}>{t("nav_soporte")}</NavLink></li> */}
            </ul>
          </nav>
        </Modal>

        {/* <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Sección Restringida, para poder acceder debes iniciar sección</p>
          </div>
        </div> */}

        <div className="header-primario">
          <NavLink to="colmotica" onClick={() => scroll({ top: 0, left: 0 })}>
            <img
              src="/img/Loho tekneo horizontal.png"
              alt="Logo Tekneo"
              className="logo"
            />
          </NavLink>
          <nav className="btn-header" id="nav-menu">
            <NavLink className="btn-header__btn" to="/home" onClick={() => scroll({ top: 0, left: 0 })}>
              <p>{t("nav_inicio")}</p>
            </NavLink>
            <a className="btn-header__btn dropdown">
              <p>{t("nav_productos")}</p>
            </a>
            <NavLink onClick={() => scroll({ top: 0, left: 0 })} className={"btn-header__btn font-medium"} to="/documentacion">{t("nav_documentacion")}</NavLink>
            {/* <a id="myBtn" className="btn-header__btn">
              <p>{t("nav_soporte")}</p>
            </a> */}

            <NavLink className="btn-header__btn" to="socios" onClick={() => scroll({ top: 0, left: 0 })}>
              <p>{t("nav_socios")}</p>
            </NavLink>
          </nav>
          <div className="dropdown-content max-[1440px]:max-h-[400px] lg:overflow-auto" ref={dropdownContent}>
            <section
              className="selectCategory"
              data-current-category="Software"
            >
              <span className="category" data-value="Software">
                Software
              </span>
              <span className="category" data-value="Hardware">
                Hardware
              </span>
            </section>
            <section className="selectProduct">
              <NavLink
                to="controlDeAcceso"
                onClick={() => {
                  dropdownContent.current?.classList.remove("show")
                  scroll({ top: 0, left: 0 })
                }}
              >
                <div className="headerProductItem">
                  <img src="/img/logo Tgate-05.png" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">TGate</span>
                  <span className="footerProductItem">{t("descripción_tgate")}</span>
                </div>
              </NavLink>
              <NavLink
                to="tshow"
                onClick={() => {
                  dropdownContent.current?.classList.remove("show")
                  scroll({ top: 0, left: 0 })
                }}
              >
                <div className="headerProductItem">
                  <img src="/img/LOGO TSHOW.png" alt="Imagen del producto" />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">Tshow</span>
                  <span className="footerProductItem">{t("descripción_tshow")}
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="nodemaker"
                onClick={() => {
                  dropdownContent.current?.classList.remove("show")
                  scroll({ top: 0, left: 0 })
                }
                }
              >
                <div className="headerProductItem">
                  <img
                    src="/img/NODEMAKER.png
                  "
                    alt="Imagen del producto"
                  />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">Nodemaker</span>
                  <span className="footerProductItem">{t("descripción_nodemaker")}</span>
                </div>
              </NavLink>
              <NavLink
                to="ldm"
                className="relative"
                onClick={() => {
                  dropdownContent.current?.classList.remove("show")
                  scroll({ top: 0, left: 0 })
                }
                }
              >
                <div className="headerProductItem w-[200px] flex justify-center">
                  <img
                    src="/img/Loho tekneo vertical.png"
                    alt="Imagen del producto"
                    className="filter-none! w-[95px]!"
                  />
                </div>
                <div className="containerBodyAndFooterProduct">
                  <span className="bodyProductItem">LDM</span>
                  <span className="footerProductItem">{t("descripción_ldm")}</span>
                </div>
              </NavLink>
            </section>
            <section>
            </section>
          </div>
          <button onClick={(event) => {
            popoverProfile.current?.showPopover(event.currentTarget ?? event.target)
          }} ref={btnProfile} className="rounded-[36px] size-[40px] bg-black flex flex-col justify-center items-center text-center mt-[-15px] capitalize font-bold text-white border-[2px] border-gray-200 select-none cursor-pointer">
            <span>{user?.name[0]}</span>
          </button>

          <Popover btnClose gapLeft={(popoverProfile.current?.this?.offsetWidth ? (popoverProfile.current.this.offsetWidth / 2) - 20 : 150 / 2) * -1} gapTop={5} ref={popoverProfile}>
            <div className="flex flex-col gap-[10px] justify-center items-center p-[16px]">
              <div className="rounded-[36px] size-[50px] bg-black flex flex-col justify-center items-center text-center mt-[-15px] capitalize font-bold text-white border-[2px] border-gray-200 select-none">
                <span>{user?.name[0]}</span>
              </div>
              <span>{user?.name}</span>
            </div>
          </Popover>
        </div>
      </section>
    </header>
  );
}
