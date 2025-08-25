import { useRef, useState, useMemo } from "react"
import { useTranslation } from "react-i18next";

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
      diagramSrc: "/img/Modulo TK-IO22W.png",
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
        <h1 className="title font-bold text-[32px] !text-center mb-[5px] text-blue-500">{data.title}</h1>
        <h3 className="description font-medium text-[24px] text-blue-500">Descripción general</h3>
        <p className="descriptionContent">{data.descriptionContent}</p>
        <ul className="listOfFeatures flex flex-col gap-[0.5lh]">
          {Object.values(data.listOfFeatures).map((feature, i) => (
            <li className="list-disc ml-[36px]" key={i}>{feature}</li>
          ))}
        </ul>
        <h1>Aplicaciones</h1>
        <p className="applicationDescription">{data.applicationDescription}</p>
        <ul className="listOfApplications">
          {Object.values(data.listOfApplications).map((app, i) => (
            <li className="list-disc" key={i} dangerouslySetInnerHTML={{ __html: app }}></li>
          ))}
        </ul>
        <h1>Diagrama y componentes</h1>
        <img src={data.diagramSrc} alt="Diagrama" className="diagram" />
        <table>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {data.tableItems.map(([comp, desc], i) => (
              <tr key={i}>
                <td>{comp}</td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <article className="grid grid-cols-[200px_minmax(500px,45vw)] gap-x-[8%] justify-center m-[50px_0px]">
      <aside className="relative flex flex-col gap-[30px] items-center after:w-[2px] after:h-[30%] after:absolute after:top-[10px] after:left-[calc(100%_+_15px)] after:bg-gray-300">
        <div className="w-full">
          <h1 className="text-blue-500 font-bold text-[32px]">Hardware</h1>
          <hr className="w-full border-t-gray-400" />
        </div>
        <ul className="flex flex-col gap-[5px]">
          <li>
            <button className={`p-[5px_15px] bg-blue-300 rounded-[8px] border-[1px] border-transparent hover:border-black !transition-[border-color,_transform,_color] hover:text-black duration-300 text-gray-700 ${viewProduct === "Modulo TK-IO22W" ? "!text-black !border-black" : ""}`} onClick={() => setViewProduct("Modulo TK-IO22W")} title="Abrir producto" type="button">Modulo TK-IO22W</button>
          </li>
          <li>
            <button className={`p-[5px_15px] bg-blue-300 rounded-[8px] border-[1px] border-transparent hover:border-black !transition-[border-color,_transform,_color] hover:text-black duration-300 text-gray-700 ${viewProduct === "Modulo TK-IO44W" ? "!text-black !border-black" : ""}`} onClick={() => setViewProduct("Modulo TK-IO44W")} type="button" title="Abrir Producto">Modulo TK-IO44W</button>
          </li>
        </ul>
        <div className="w-full">
          <h1 className="text-blue-500 font-bold text-[32px]">Software</h1>
          <hr className="w-full border-t-gray-400"/>
        </div>
      </aside>
      <section ref={viewProductDescription} className="flex flex-col gap-[1lh]">
        {renderProductInfo()}
      </section>
    </article>
  )
}