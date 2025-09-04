import { useRef, useState, useMemo, type JSX, useEffect } from "react"
import { useTranslation } from "react-i18next";
import "./documentacion.css";
import Popover, { type PopoverHandle } from "../../../components/Popover/Popover";

export default function Documentacion() {
  const { t } = useTranslation()
  const [viewProduct, setViewProduct] = useState<keyof typeof infoHardware | keyof typeof infoSoftware>("Modulo TK-IO22W");
  const viewProductDescription = useRef<HTMLElement>(null);
  const [anchors, setAnchors] = useState<Record<string, JSX.Element[]>>();

  const infoHardware = useMemo(() => ({
    "Modulo TK-IO22W": {
      title: t("Modulo TK-IO22W_title"),
      descriptionContent: t("Modulo TK-IO22W_descriptionContent"),
      listOfFeatures: {
        1: t("Modulo TK-IO22W_listOfFeatures_1"),
        2: t("Modulo TK-IO22W_listOfFeatures_2"),
        3: t("Modulo TK-IO22W_listOfFeatures_3"),
        4: t("Modulo TK-IO22W_listOfFeatures_4"),
        5: t("Modulo TK-IO22W_listOfFeatures_5"),
        6: t("Modulo TK-IO22W_listOfFeatures_6"),
        7: t("Modulo TK-IO22W_listOfFeatures_7"),
      },
      applicationDescription: t("Modulo TK-IO22W_applicationDescription"),
      listOfApplications: {
        1: t("Modulo TK-IO22W_listOfApplications_1"),
        2: t("Modulo TK-IO22W_listOfApplications_2"),
        3: t("Modulo TK-IO22W_listOfApplications_3"),
        4: t("Modulo TK-IO22W_listOfApplications_4"),
      },
      diagramSrc: ["/img/Imagen1.png", "/img/Imagen2.png"],
      tableItems: [
        ["ESP32", t("Modulo TK-IO22W_tableItem_1")],
        ["Inputs Digital (2X)", t("Modulo TK-IO22W_tableItem_2")],
        ["Relay Outputs", t("Modulo TK-IO22W_tableItem_3")],
        ["Power supply", t("Modulo TK-IO22W_tableItem_4")],
        ["Inputs Wiegand", t("Modulo TK-IO22W_tableItem_5")],
        ["Ethernet RJ45", t("Modulo TK-IO22W_tableItem_6")],
        ["Reset button ", t("Modulo TK-IO22W_tableItem_7")],
      ]
    },
    "Modulo TK-IO24W2": {
      title: t("Modulo TK-IO24W2_title"),
      descriptionContent: t("Modulo TK-IO24W2_descriptionContent"),
      listOfFeatures: {
        1: t("Modulo TK-IO24W2_listOfFeatures_1"),
        2: t("Modulo TK-IO24W2_listOfFeatures_2"),
        3: t("Modulo TK-IO24W2_listOfFeatures_3"),
        4: t("Modulo TK-IO24W2_listOfFeatures_4"),
        5: t("Modulo TK-IO24W2_listOfFeatures_5"),
        6: t("Modulo TK-IO24W2_listOfFeatures_6"),
        7: t("Modulo TK-IO24W2_listOfFeatures_7"),
      },
      applicationDescription: t("Modulo TK-IO24W2_applicationDescription_1"),
      listOfApplications: {
        1: t("Modulo TK-IO24W2_listOfApplications_1"),
        2: t("Modulo TK-IO24W2_listOfApplications_2"),
        3: t("Modulo TK-IO24W2_listOfApplications_3"),
        4: t("Modulo TK-IO24W2_listOfApplications_4"),
      },
      diagramSrc: ["/img/Modulo TK-IO44W.png", "/img/Modulo TK-IO44W 2.png"],
      tableItems: [
        ["ESP32", t("Modulo TK-IO24W2_tableItem_1")],
        ["Inputs Digital (2X)", t("Modulo TK-IO24W2_tableItem_2")],
        ["Relay Outputs", t("Modulo TK-IO24W2_tableItem_3")],
        ["Power supply", t("Modulo TK-IO24W2_tableItem_4")],
        ["Inputs Wiegand", t("Modulo TK-IO24W2_tableItem_5")],
        ["Ethernet RJ45", t("Modulo TK-IO24W2_tableItem_6")],
        ["Reset button ", t("Modulo TK-IO24W2_tableItem_7")],
      ]
    }
    // Puedes agregar más productos aquí...
  }), [t])

  const infoSoftware = useMemo(() => ({
    "Tgate": {
      title: "TGate",
      content: {
        1: t("tgate_1"),
        2: t("tgate_1_1"),
        3: t("tgate_1_2"),
        11: t("tgate_2"),
        12: t("tgate_2_1"),
        13: t("tgate_3"),
        14: t("tgate_3_1"),
        15: t("tgate_4"),
        16: t("tgate_4_1"),
        17: t("tgate_5"),
        18: t("tgate_5_1"),
        19: t("tgate_end")
      },
      list: {
        4: t("tgate_1_list_1"),
        5: t("tgate_1_list_2"),
        6: t("tgate_1_list_2_1"),
        7: t("tgate_1_list_2_2"),
        8: t("tgate_1_list_2_3"),
        9: t("tgate_1_list_2_4"),
        10: t("tgate_1_list_3"),
      },
      imgSrc: ["/img/tgate_1.jpg", "/img/tgate_2.jpg", "/img/tgate_3.jpg", "/img/tgate_4.jpg", "/img/tgate_5.jpg"]
    }
  } as const), [t])

  function renderAccessControl() {
    const data = infoSoftware[viewProduct as keyof typeof infoSoftware];
    if (!data) return null;

    return (
      <div className="flex flex-col gap-[20px] justify-center items-start">
        <h1 className="self-center text-[32px] text-center mb-[5px] font-bold title">{data.title}</h1>
        <h2 className="font-bold text-[24px]" id="description" data-title-anchor="Introducción">{data.content[1]}</h2>
        <img src={data.imgSrc[0]} alt="" width={"auto"} className="self-center w-auto h-auto" />
        <p dangerouslySetInnerHTML={{ __html: data.content[2] }}></p>
        <p>{data.content[3]}</p>
        <ul className="flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list[4] }} className="list-disc pl-[20px] ml-[15px]"></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[5] }} className="list-disc pl-[20px] ml-[15px]"></li>
          <ul className="ml-[20px] flex flex-col gap-[0.5lh]">
            <li dangerouslySetInnerHTML={{ __html: data.list[6] }} className="list-decimal pl-[20px] ml-[15px]"></li>
            <li dangerouslySetInnerHTML={{ __html: data.list[7] }} className="list-decimal pl-[20px] ml-[15px]"></li>
            <li dangerouslySetInnerHTML={{ __html: data.list[8] }} className="list-decimal pl-[20px] ml-[15px]"></li>
            <li dangerouslySetInnerHTML={{ __html: data.list[9] }} className="list-decimal pl-[20px] ml-[15px]"></li>
          </ul>
          <li dangerouslySetInnerHTML={{ __html: data.list[5] }} className="list-disc pl-[20px] ml-[15px]"></li>
        </ul>
        <h1 className="font-bold text-[24px]" data-title-anchor="Camara" id="camara">{data.content[11]}</h1>
        <img src={data.imgSrc[2]} alt="" width={"auto"} className="self-center w-auto h-auto" />
        <p>{data.content[12]}</p>
        <img src={data.imgSrc[3]} alt="" width={"auto"} className="self-center w-auto h-auto" />
        <h1 className="font-bold text-[24px]">{data.content[13]}</h1>
        <img src={data.imgSrc[1]} alt="" width={"auto"} className="self-center w-auto h-auto" />
        <p>{data.content[14]}</p>
        <h1 className="font-bold text-[24px]">{data.content[15]}</h1>
        <img src={data.imgSrc[4]} alt="" width={"auto"} className="self-center w-auto h-auto" />
        <p>{data.content[16]}</p>
        <h1 className="font-bold text-[24px]">{data.content[17]}</h1>
        <p>{data.content[18]}</p>
        <p>{data.content[19]}</p>
      </div>
    )
  }

  // Esta función inserta la info en el HTML
  function renderProductInfo() {
    const data = infoHardware[viewProduct as keyof typeof infoHardware];
    if (!data) return null;

    return (
      <>
        <div className="aplicaciones descripcion">
          <h1 className="title font-bold text-[32px] !text-center mb-[5px] text-black">{data.title}</h1>
          <h3 className="description font-bold text-[24px] text-black" id="descripcion" data-title-anchor="Descripción">{t("descripcion_general")}</h3>
          <p className="descriptionContent">{data.descriptionContent}</p>
          <ul className="listOfFeatures flex flex-col gap-[0.5lh]">
            {Object.values(data.listOfFeatures).map((feature, i) => (
              <li className="list-disc pl-[20px] ml-[15px]" key={i}>{feature}</li>
            ))}
          </ul>
          <h1 className="font-bold text-[24px] text-black" id="aplicaciones" data-title-anchor="Aplicaciones">{t("aplicaciones")}</h1>
          <p className="applicationDescription">{data.applicationDescription}</p>
          <ul className="listOfApplications">
            {Object.values(data.listOfApplications).map((app, i) => (
              <li className="list-disc pl-[1lh] ml-[10px] mb-[10px]" key={i} dangerouslySetInnerHTML={{ __html: app }}></li>
            ))}
          </ul>
        </div>
        <div className="tablaDeCaracteristicas diagrama">
          {data.diagramSrc.map((item, index) => (
            <img src={item} alt="Diagrama" className="diagram max-w-none w-[440px] max-h-none h-auto self-center" key={index} width={"auto"} id={index === 0 ? "diagrama" : ""} data-title-anchor="Diagrama" />
          ))}
          <table id="tablaDeCaracteristicas" data-title-anchor="Tabla de especificaciones">
            <thead>
              <tr className="*:border-[1px] *:border-gray-400 *:p-[5px_10px] bg-blue-100">
                <th>{t("Componente")}</th>
                <th>{t("Descripcion")}</th>
              </tr>
            </thead>
            <tbody className="*:even:bg-gray-200">
              {data.tableItems.map(([comp, desc], i) => (
                <tr key={i} className="*:border-[1px] *:border-gray-300 *:p-[5px_10px]">
                  <td>{comp}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  function renderPreviewProductInfo(productName: keyof typeof infoHardware | keyof typeof infoSoftware) {
    if (Object.keys(infoHardware).some((item) => item === productName)) {
      const data = infoHardware[productName as keyof typeof infoHardware]
      return (
        <>
          <h1>{data.title}</h1>
          {data.diagramSrc.map((item, index) => (
            <img src={item} alt="img" width={"auto"} key={index} className="h-auto w-[220px]" />
          ))}
        </>
      )
    } else if (Object.keys(infoSoftware).some((item) => item === productName)) {
      const data = infoSoftware[productName as keyof typeof infoSoftware];

      return (
        <>
          <h1>{data.title}</h1>
          <img src={data.imgSrc[0]} alt="" className="w-[500px] h-auto" width={"auto"} height={"auto"} />
        </>
      )
    }
  }

  const btnModule22w = useRef<HTMLButtonElement>(null)
  const btnModule44w = useRef<HTMLButtonElement>(null)
  const btnTgate = useRef<HTMLButtonElement>(null);
  const popoverHandle = useRef<PopoverHandle>(null)
  const popoverHandle2 = useRef<PopoverHandle>(null)
  const popoverAccessControlHandle = useRef<PopoverHandle>(null)
  btnModule22w.current?.addEventListener("mouseover", () => {
    if (btnModule22w.current) {
      popoverHandle.current?.showPopover(btnModule22w.current)
      popoverHandle2.current?.forceClose()
      popoverAccessControlHandle.current?.forceClose()
    }
  })
  btnModule22w.current?.addEventListener("mouseleave", () => {
    if (btnModule22w.current) {
      popoverHandle.current?.close()
    }
  })
  btnModule44w.current?.addEventListener("mouseover", () => {
    if (btnModule44w.current) {
      popoverHandle2.current?.showPopover(btnModule44w.current)
      popoverHandle.current?.forceClose()
      popoverAccessControlHandle.current?.forceClose()
    }
  })
  btnModule44w.current?.addEventListener("mouseleave", () => {
    if (btnModule44w.current) {
      popoverHandle2.current?.close()
    }
  })
  btnTgate.current?.addEventListener("mouseover", () => {
    if (btnTgate.current) {
      popoverAccessControlHandle.current?.showPopover(btnTgate.current)
      popoverHandle2.current?.forceClose()
      popoverHandle.current?.forceClose()
    }
  })
  btnTgate.current?.addEventListener("mouseleave", () => {
    if (btnTgate.current) {
      popoverAccessControlHandle.current?.close()
    }
  })
  const listOfNav = useRef<HTMLUListElement>(null)

  function generateAnchorsBasedInTheContent() {
    if (!viewProductDescription.current) throw new Error("viewProductDescription es null");

    const target = viewProductDescription.current;
    const allItemsWithId = Array.from(target.querySelectorAll<HTMLElement>("[id]"));

    const anchorsJsx = allItemsWithId.map((item) => item.id !== "" && (
      <li key={item.id} className="size-full">
        <a className="flex p-[5px_15px] size-full anchorSection rounded-[10px] w-full" href={`#${item.id}`} onClick={(event) => {
          event.preventDefault()
          scroll({ top: item.offsetTop + 40, left: 0, behavior: "smooth" })

        }}>{item.dataset.titleAnchor ?? ((item.textContent.length < 12 && item.textContent !== "") ? item.textContent : item.id)}</a>
      </li>
    ));

    setAnchors({
      [viewProduct]: anchorsJsx.filter((item) => item !== false)
    });
  }
  useEffect(() => {
    generateAnchorsBasedInTheContent()
    if (!viewProductDescription.current) return;

    const sections = Array.from(viewProductDescription.current.querySelectorAll<HTMLElement>("[id]"));
    let refPrevAnchor: HTMLAnchorElement | null = null
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector<HTMLAnchorElement>(`.listOfNav a[href="#${entry.target.id}"]`);
          if (link) {
            if (entry.isIntersecting) {
              if (refPrevAnchor instanceof HTMLAnchorElement) refPrevAnchor.classList.remove("active");
              link.classList.add("active");
              refPrevAnchor = link;
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px 0px -70% 0px", // se activa cuando entra un poco antes
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [viewProduct])

  return (
    <article className="grid grid-cols-[200px_minmax(500px,50vw)_200px] gap-x-[8%] justify-center m-[50px_0px] relative">
      <aside className="relative flex flex-col gap-[30px] items-center after:w-[2px] after:h-[30%] after:absolute after:top-[10px] after:left-[calc(100%_+_15px)] after:bg-gray-300">
        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Hardware</h1>
          <hr className="w-full border-t-gray-400" />
        </div>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <button ref={btnModule22w} data-active="true" className={`flex gap-[10px] min-w-[200px] items-center justify-end p-[5px_15px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO22W" ? "!text-white !border-black" : ""}`} onClick={() => {
              setViewProduct("Modulo TK-IO22W")
              if (btnModule22w.current && btnModule44w.current && btnTgate.current) {
                btnModule22w.current.dataset.active = "true"
                btnModule44w.current.dataset.active = "false"
                btnTgate.current.dataset.active = "false"
              } else {
                throw new Error("La referencia 'btnModule22w' o 'btnModule44w' es null o undefined")
              }
            }} title="Abrir producto" type="button">
              <span className="">Modulo TK-IO22W</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-white size-[16px] rotate-90" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -4.5 20 20" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="inherit">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#337]">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <Popover ref={popoverHandle} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">
                {renderPreviewProductInfo("Modulo TK-IO22W")}
              </div>
            </Popover>
          </li>
          <li>
            <button ref={btnModule44w} className={`flex gap-[10px] min-w-[200px] items-center justify-end p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO24W2" ? "!text-white !border-black" : ""}`} onClick={() => {
              setViewProduct("Modulo TK-IO24W2")
              if (btnModule44w.current && btnModule22w.current && btnTgate.current) {
                btnModule22w.current.dataset.active = "false"
                btnModule44w.current.dataset.active = "true"
                btnTgate.current.dataset.active = "false"
              } else {
                throw new Error("La referencia 'btnModule22w' o 'btnModule44w' es null o undefined")
              }
            }} type="button" title="Abrir Producto">
              <span className="">Modulo TK-IO24W2</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-white size-[16px] rotate-90" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -4.5 20 20" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="inherit">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#337]">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>

            <Popover ref={popoverHandle2} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">
                {renderPreviewProductInfo("Modulo TK-IO24W2")}
              </div>
            </Popover>
          </li>
        </ul>
        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Software</h1>
          <hr className="w-full border-t-gray-400" />
        </div>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <button onClick={() => {
              setViewProduct("Tgate")
              if (btnModule44w.current && btnModule22w.current && btnTgate.current) {
                btnModule22w.current.dataset.active = "false"
                btnModule44w.current.dataset.active = "false"
                btnTgate.current.dataset.active = "true"
              } else {
                throw new Error("La referencia 'btnModule22w' o 'btnModule44w' es null o undefined")
              }
            }} ref={btnTgate} type="button" className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO24W2" ? "!text-white !border-black" : ""}`}>
              <span>TGate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-white size-[16px] rotate-90" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -4.5 20 20" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="inherit">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#337]">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <Popover ref={popoverAccessControlHandle} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">
                {renderPreviewProductInfo("Tgate")}
              </div>
            </Popover>
          </li>
        </ul>
      </aside>
      <section ref={viewProductDescription} className="flex flex-col gap-[1lh]">
        {renderProductInfo() ?? renderAccessControl()}
      </section>
      <aside className="sticky top-[125px] self-start flex flex-col items-center gap-[20px]">
        <div>
          <h1 className="text-[18px]">{t("tabla_de_contenido")}</h1>
          <ul className={`listOfNav mt-[10px] flex-col items-start gap-[5px] min-h-[150px]`} ref={listOfNav}>
            {anchors ? anchors[viewProduct] : ""}
          </ul>
        </div>
        <hr className="border-t-gray-400 w-full" />
        <a href="/docs/Manual - Tekneo Software.pdf" className="flex p-[5px_15px] justify-center gap-[20px] size-full btnDownload rounded-[10px] w-full" download={true} type="button">
          <span>{t("manual")}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit" className="size-[24px]">
            <g id="Interface / Download">
              <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </a>
      </aside>
    </article>
  )
}