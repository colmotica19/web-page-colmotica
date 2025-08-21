import { useRef, useMemo, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { GlobalContext } from '../../singleton/globalContext';


export default function Productos() {
  const { t } = useTranslation();
  const mapProducts = useRef(new Map<string, HTMLAnchorElement>());
  const { lang } = useContext(GlobalContext)
  const selectProduct = useRef<HTMLElement>(null);
  const selectCategory = useRef<HTMLElement>(null)
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
      name: "Modulo TK-IO44W",
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
    {
      url: "",
      img: "/img/Modulo TK-IO88W.webp",
      name: "Modulo TK-IO88W",
      description:
        t("products_reles"),
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [t, lang]);
  useEffect(() => {
    mapProducts.current.forEach((value, key) => {
      const footerText = value.querySelector(".footerProductItem")
      if (footerText) {
        footerText.textContent = hardwareProducts.find((item) => item.img === key)?.description ?? ""
      }
    })

  }, [hardwareProducts])
  useEffect(() => {
    const categoryItems = document.querySelectorAll<HTMLSpanElement>(
      ".selectCategory > .category"
    );
    if (!selectProduct)
      throw new Error("No se encontró el elemento ''selectProduct");
    const softwareLinks = selectProduct.current?.querySelectorAll("a");
    // Constantes para URLs e info de productos hardware

    // Limpia los productos actuales del dropdown
    function clearProducts() {
      if (!selectProduct)
        throw new Error("No se encontró el elemento ''selectProduct");
      while (selectProduct.current?.firstChild) {
        selectProduct.current?.removeChild(selectProduct.current?.firstChild);
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
        selectProduct.current?.appendChild(element);
      });
    }


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
        console.log(mapProducts)
        return mapProducts.current.get(imgSrc) as HTMLAnchorElement;
      }
    }
    // Cambia la categoría seleccionada
    function handleCategorySelection(category: HTMLSpanElement) {
      if (!selectCategory)
        throw new Error("No se encontró el elemento ''selectCategory");
      if (!selectProduct)
        throw new Error("No se encontró el elemento ''selectProduct");
      const current = selectCategory.current?.dataset.currentCategory;
      const selected = category.textContent ?? "";
      if (selected === current) return;
      clearProducts();
      if (selectCategory.current)
        selectCategory.current.dataset.currentCategory = selected;
      if (selected === "Software" && softwareLinks) {
        softwareLinks.forEach((link) => selectProduct.current?.appendChild(link));
      } else if (selected === "Hardware") {
        appendProducts(hardwareProducts);
      }
    }
    // Asignar eventos de categoría
    categoryItems.forEach((item) =>
      item.addEventListener("click", () => handleCategorySelection(item))
    );
  })

  return (
    <article className="flex justify-center gap-[50px] mt-[50px] pb-[50px]">
      <section
        className="selectCategory"
        data-current-category="Software"
        ref={selectCategory}
      >
        <span className="category" data-value="Software">
          Software
        </span>
        <span className="category" data-value="Hardware">
          Hardware
        </span>
      </section>
      <section className="selectProduct gap-[50px] max-w-[500px]" ref={selectProduct}>
        <NavLink
          to="/controlDeAcceso"
          onClick={() => {
            scroll({ top: 0, left: 0 })
          }}
        >
          <div className="headerProductItem">
            <img src="/img/logo Tgate-05.png" alt="Imagen del producto" />
          </div>
          <div className="containerBodyAndFooterProduct">
            <span className="bodyProductItem">TGate</span>
            <span className="footerProductItem">{t("descripción_tgate")} </span>
          </div>
        </NavLink>
        <NavLink
          to="/tshow"
          onClick={() => {
            scroll({ top: 0, left: 0 })
          }
          }
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
          to="/nodemaker"
          onClick={() => {
            scroll({ top: 0, left: 0 })
          }
          }
        >
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
        <NavLink
          to="/node_modulesldm"
          className="relative"
          onClick={() => {
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
    </article >
  );
}
