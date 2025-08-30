import { useRef, useState, useMemo } from "react"
import { useTranslation } from "react-i18next";
import "./documentacion.css";

export default function Documentacion() {
  const { t } = useTranslation()
  const [viewProduct, setViewProduct] = useState<keyof typeof infoHardware>("Modulo TK-IO22W");
  const viewProductDescription = useRef<HTMLElement>(null);

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
    "Modulo TK-IO44W": {
      title: t("Modulo TK-IO44W_title"),
      descriptionContent: t("Modulo TK-IO44W_descriptionContent"),
      listOfFeatures: {
        1: t("Modulo TK-IO44W_listOfFeatures_1"),
        2: t("Modulo TK-IO44W_listOfFeatures_2"),
        3: t("Modulo TK-IO44W_listOfFeatures_3"),
        4: t("Modulo TK-IO44W_listOfFeatures_4"),
        5: t("Modulo TK-IO44W_listOfFeatures_5"),
        6: t("Modulo TK-IO44W_listOfFeatures_6"),
        7: t("Modulo TK-IO44W_listOfFeatures_7"),
      },
      applicationDescription: t("Modulo TK-IO22W_applicationDescription"),
      listOfApplications: {
        1: t("Modulo TK-IO44W_listOfApplications_1"),
        2: t("Modulo TK-IO44W_listOfApplications_2"),
        3: t("Modulo TK-IO44W_listOfApplications_3"),
        4: t("Modulo TK-IO44W_listOfApplications_4"),
      },
      diagramSrc: ["/img/Modulo TK-IO44W.png", "/img/Modulo TK-IO44W 2.png"],
      tableItems: [
        ["ESP32", t("Modulo TK-IO22W_tableItem_1")],
        ["Inputs Digital (2X)", t("Modulo TK-IO22W_tableItem_2")],
        ["Relay Outputs", t("Modulo TK-IO22W_tableItem_3")],
        ["Power supply", t("Modulo TK-IO22W_tableItem_4")],
        ["Inputs Wiegand", t("Modulo TK-IO22W_tableItem_5")],
        ["Ethernet RJ45", t("Modulo TK-IO22W_tableItem_6")],
        ["Reset button ", t("Modulo TK-IO22W_tableItem_7")],
      ]
    }
    // Puedes agregar más productos aquí...
  }), [t])

  // Esta función inserta la info en el HTML
  function renderProductInfo() {
    const data = infoHardware[viewProduct];
    if (!data) return null;

    return (
      <>
        <h1 className="title font-bold text-[32px] !text-center mb-[5px] text-black">{data.title}</h1>
        <h3 className="description font-medium text-[24px] text-black">{t("descripcion_general")}</h3>
        <p className="descriptionContent">{data.descriptionContent}</p>
        <ul className="listOfFeatures flex flex-col gap-[0.5lh]">
          {Object.values(data.listOfFeatures).map((feature, i) => (
            <li className="list-disc pl-[1lh] ml-[10px] mb-[10px]" key={i}>{feature}</li>
          ))}
        </ul>
        <h1 className="font-bold text-[24px] text-black">{t("aplicaciones")}</h1>
        <p className="applicationDescription">{data.applicationDescription}</p>
        <ul className="listOfApplications">
          {Object.values(data.listOfApplications).map((app, i) => (
            <li className="list-disc pl-[1lh] ml-[10px] mb-[10px]" key={i} dangerouslySetInnerHTML={{ __html: app }}></li>
          ))}
        </ul>
        <h1></h1>
        {data.diagramSrc.map((item, index) => (
          <img src={item} alt="Diagrama" className="diagram" key={index} />
        ))}
        <table>
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
      </>
    );
  }

  const btnModule22w = useRef<HTMLButtonElement>(null)
  const btnModule44w = useRef<HTMLButtonElement>(null)

  return (
    <article className="grid grid-cols-[200px_minmax(500px,45vw)] gap-x-[8%] justify-center m-[50px_0px]">
      <aside className="relative flex flex-col gap-[30px] items-center after:w-[2px] after:h-[30%] after:absolute after:top-[10px] after:left-[calc(100%_+_15px)] after:bg-gray-300">
        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Hardware</h1>
          <hr className="w-full border-t-gray-400" />
        </div>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <button ref={btnModule22w} data-active="true" className={`flex gap-[5px] items-center justify-center p-[5px_15px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO22W" ? "!text-white !border-black" : ""}`} onClick={() => {
              setViewProduct("Modulo TK-IO22W")
              if (btnModule22w.current && btnModule44w.current) {
                btnModule22w.current.dataset.active = "true"
                btnModule44w.current.dataset.active = "false"
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
          </li>
          <li>
            <button ref={btnModule44w} className={`flex gap-[5px] items-center justify-center p-[5px_15px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO44W" ? "!text-white !border-black" : ""}`} onClick={() => {
              setViewProduct("Modulo TK-IO44W")
              if (btnModule44w.current && btnModule22w.current) {
                btnModule22w.current.dataset.active = "false"
                btnModule44w.current.dataset.active = "true"
              } else {
                throw new Error("La referencia 'btnModule22w' o 'btnModule44w' es null o undefined")
              }
            }} type="button" title="Abrir Producto">
              <span className="">Modulo TK-IO44W</span>
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
          </li>
        </ul>
        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Software</h1>
          <hr className="w-full border-t-gray-400" />
        </div>
      </aside>
      <section ref={viewProductDescription} className="flex flex-col gap-[1lh]">
        {renderProductInfo()}
      </section>
    </article>
  )
}