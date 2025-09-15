import React, { useCallback, useEffect, useMemo, useRef, useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import "./documentacion.css";
import Popover, { type PopoverHandle } from "../../../components/Popover/Popover";

// Refactor: componente más legible y modular. Mantengo la lógica original
// pero evito listeners fuera del flujo React y simplifico generación de anchors.

type ProductKey = "Modulo TK-IO22W" | "Modulo TK-IO24W2" | "Tgate" | "TK-Lector" | "Nodemaker";

export default function Documentacion(): JSX.Element {
  const { t } = useTranslation();
  const [viewProduct, setViewProduct] = useState<ProductKey>("Modulo TK-IO22W");

  // refs para popovers y botones
  const btnModule22w = useRef<HTMLButtonElement | null>(null);
  const btnModule44w = useRef<HTMLButtonElement | null>(null);
  const btnTgate = useRef<HTMLButtonElement | null>(null);
  const btnNodemaker = useRef<HTMLButtonElement | null>(null);
  const btnLectorTk = useRef<HTMLButtonElement | null>(null);

  const popoverModule22 = useRef<PopoverHandle | null>(null);
  const popoverModule44 = useRef<PopoverHandle | null>(null);
  const popoverTgate = useRef<PopoverHandle | null>(null);
  const popoverLector = useRef<PopoverHandle | null>(null);
  const popoverNodemaker = useRef<PopoverHandle | null>(null);

  const viewProductDescription = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listOfNav = useRef<HTMLUListElement | null>(null);

  // ---------- datos traducidos (memoizados) ----------
  const infoHardware = useMemo(() => ({
    "Modulo TK-IO22W": {
      title: t("Modulo TK-IO22W_title"),
      descriptionContent: t("Modulo TK-IO22W_descriptionContent"),
      listOfFeatures: [
        t("Modulo TK-IO22W_listOfFeatures_1"),
        t("Modulo TK-IO22W_listOfFeatures_2"),
        t("Modulo TK-IO22W_listOfFeatures_3"),
        t("Modulo TK-IO22W_listOfFeatures_4"),
        t("Modulo TK-IO22W_listOfFeatures_5"),
        t("Modulo TK-IO22W_listOfFeatures_6"),
        t("Modulo TK-IO22W_listOfFeatures_7"),
      ],
      applicationDescription: t("Modulo TK-IO22W_applicationDescription"),
      listOfApplications: [
        t("Modulo TK-IO22W_listOfApplications_1"),
        t("Modulo TK-IO22W_listOfApplications_2"),
        t("Modulo TK-IO22W_listOfApplications_3"),
        t("Modulo TK-IO22W_listOfApplications_4"),
      ],
      diagramSrc: ["/img/Imagen1.png", "/img/Imagen2.png"],
      tableItems: [
        ["ESP32", t("Modulo TK-IO22W_tableItem_1")],
        ["Inputs Digital (2X)", t("Modulo TK-IO22W_tableItem_2")],
        ["Relay Outputs", t("Modulo TK-IO22W_tableItem_3")],
        ["Power supply", t("Modulo TK-IO22W_tableItem_4")],
        ["Inputs Wiegand", t("Modulo TK-IO22W_tableItem_5")],
        ["Ethernet RJ45", t("Modulo TK-IO22W_tableItem_6")],
        ["Reset button", t("Modulo TK-IO22W_tableItem_7")],
      ],
    },
    "Modulo TK-IO24W2": {
      title: t("Modulo TK-IO24W2_title"),
      descriptionContent: t("Modulo TK-IO24W2_descriptionContent"),
      listOfFeatures: [
        t("Modulo TK-IO24W2_listOfFeatures_1"),
        t("Modulo TK-IO24W2_listOfFeatures_2"),
        t("Modulo TK-IO24W2_listOfFeatures_3"),
        t("Modulo TK-IO24W2_listOfFeatures_4"),
        t("Modulo TK-IO24W2_listOfFeatures_5"),
        t("Modulo TK-IO24W2_listOfFeatures_6"),
        t("Modulo TK-IO24W2_listOfFeatures_7"),
      ],
      applicationDescription: t("Modulo TK-IO24W2_applicationDescription_1"),
      listOfApplications: [
        t("Modulo TK-IO24W2_listOfApplications_1"),
        t("Modulo TK-IO24W2_listOfApplications_2"),
        t("Modulo TK-IO24W2_listOfApplications_3"),
        t("Modulo TK-IO24W2_listOfApplications_4"),
      ],
      diagramSrc: ["/img/Modulo TK-IO44W.png", "/img/Modulo TK-IO44W 2.png"],
      tableItems: [
        ["ESP32", t("Modulo TK-IO24W2_tableItem_1")],
        ["Inputs Digital (2X)", t("Modulo TK-IO24W2_tableItem_2")],
        ["Relay Outputs", t("Modulo TK-IO24W2_tableItem_3")],
        ["Power supply", t("Modulo TK-IO24W2_tableItem_4")],
        ["Inputs Wiegand", t("Modulo TK-IO24W2_tableItem_5")],
        ["Ethernet RJ45", t("Modulo TK-IO24W2_tableItem_6")],
        ["Reset button", t("Modulo TK-IO24W2_tableItem_7")],
      ],
    },
  } as const), [t]);

  const infoSoftware = useMemo(() => ({
    Tgate: {
      title: t("tgate_title"),
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
        19: t("tgate_end"),
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
      imgSrc: [
        "/img/tgate_1.jpg",
        "/img/tgate_2.jpg",
        "/img/tgate_3.jpg",
        "/img/tgate_4.jpg",
        "/img/tgate_5.jpg",
      ],
    },
    Nodemaker: {
      title: t("nodemaker_title"),
      content: {
        1: t("nodemaker_1")
      },
      list: {
        title: t("nodemaker_list_title"),
        1: t("nodemaker_list_1"),
        2: t("nodemaker_list_2"),
        3: t("nodemaker_list_3"),
        4: t("nodemaker_list_4"),
        5: t("nodemaker_list_5"),
        6: t("nodemaker_list_6"),
        7: t("nodemaker_list_7"),
        8: t("nodemaker_list_8"),
        9: t("nodemaker_list_9"),
      },
      list2: {
        title: t("nodemaker_list2_title"),
        1: t("nodemaker_list2_1"),
        2: t("nodemaker_list2_2"),
        3: t("nodemaker_list2_3"),
        4: t("nodemaker_list2_4"),
      },
      list3: {
        title: t("nodemaker_list3_title"),
        1: t("nodemaker_list3_1"),
        2: t("nodemaker_list3_2"),
        3: t("nodemaker_list3_3"),
      },
      imgSrc: ["/img/Logo de nodemaker.png", "/img/img2 de nodemaker.png"]
    }
  } as const), [t]);

  const infoTkLector = useMemo(() => ({
    "TK-Lector": {
      title: "TK-Lector",
      content: {
        1: t("lector_tk_1"),
        2: t("lector_tk_2"),
        3: t("lector_tk_3"),
        4: t("lector_tk_4"),
        5: t("lector_tk_5"),
        6: t("lector_tk_6"),
        7: t("lector_tk_7"),
        8: t("lector_tk_8"),
        9: t("lector_tk_9"),
        10: t("lector_tk_10"),
        11: t("lector_tk_11"),
        12: t("lecktor_tk_12"),
        13: t("lecktor_tk_15"),
        14: t("lecktor_tk_16"),
        15: t("lecktor_tk_17"),
      },
      list: Array.from({ length: 14 }, (_, i) => t(`lecktor_tk_12_${i + 1}`)),
      applicationList: [
        t("lecktor_tk_13"),
        t("lecktor_tk_13_1"),
        t("lecktor_tk_13_2"),
        t("lecktor_tk_13_3"),
      ],
      recomendation: [
        t("lecktor_tk_14"),
        t("lecktor_tk_14_1"),
        t("lecktor_tk_14_2"),
        t("lecktor_tk_14_3"),
      ],
      imgSrc: ["/img/Lector QR 2.png"],
    },
  } as const), [t]);

  // ---------- helpers ----------
  // const allProductKeys: ProductKey[] = useMemo(
  //   () => ["Modulo TK-IO22W", "Modulo TK-IO24W2", "Tgate", "TK-Lector"],
  //   []
  // );

  const previewFor = useCallback(
    (name: ProductKey) => {
      if (name in infoHardware) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = (infoHardware as any)[name];
        return (
          <>
            <h1>{data.title}</h1>
            {data.diagramSrc.map((src: string, i: number) => (
              <img key={i} src={src} alt="img" className="h-auto w-[220px]" />
            ))}
          </>
        );
      }
      if (name in infoSoftware) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = (infoSoftware as any)[name];
        return (
          <>
            <h1>{data.title}</h1>
            <img src={data.imgSrc[0]} alt="" className="w-[500px] h-auto" />
          </>
        );
      }
      if (name in infoTkLector) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = (infoTkLector as any)[name];
        return (
          <>
            <h1>{data.title}</h1>
            <img src={data.imgSrc[0]} alt="" className="w-[400px] h-auto" />
          </>
        );
      }

      return null;
    },
    [infoHardware, infoSoftware, infoTkLector]
  );

  // Generación de anchors a partir del contenido visible
  const [anchors, setAnchors] = useState<Record<string, JSX.Element[]>>({});

  const generateAnchorsBasedInTheContent = useCallback(() => {
    const target = viewProductDescription.current;
    if (!target) return;

    const allItemsWithId = Array.from(target.querySelectorAll<HTMLElement>("[id]")).filter(
      (el) => el.id
    );

    const anchorsJsx = allItemsWithId.map((item) => (
      <li key={item.id} className="size-full">
        <a
          className="flex p-[5px_15px] size-full anchorSection rounded-[10px] w-full"
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            const rectTop = item.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: rectTop, behavior: "smooth" });
          }}
        >
          {item.dataset.titleAnchor ?? (item.textContent && item.textContent.length < 12 ? item.textContent : item.id)}
        </a>
      </li>
    ));

    setAnchors({ [viewProduct]: anchorsJsx });
  }, [viewProduct]);

  // Marca en los botones cuál está activo
  const verifyTheCorrectViewProduct = useCallback(() => {
    const map: Record<ProductKey, React.RefObject<HTMLButtonElement | null>> = {
      "TK-Lector": btnLectorTk,
      Tgate: btnTgate,
      "Modulo TK-IO22W": btnModule22w,
      "Modulo TK-IO24W2": btnModule44w,
      "Nodemaker": btnNodemaker
    };

    Object.entries(map).forEach(([key, ref]) => {
      if (!ref.current) return; // no lanzo error, solo ignoro
      ref.current.dataset.active = viewProduct === key ? "true" : "false";
    });
  }, [viewProduct]);

  // Observers: se registran cuando cambia el producto
  useEffect(() => {
    generateAnchorsBasedInTheContent();

    if (!viewProductDescription.current) return;

    const sections = Array.from(viewProductDescription.current.querySelectorAll<HTMLElement>("[id]"));
    let prevLink: HTMLAnchorElement | null = null;

    const intersectionCb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector<HTMLAnchorElement>(`.listOfNav a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          prevLink?.classList.remove("active");
          link.classList.add("active");
          prevLink = link;
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCb, {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0.1,
    });

    sections.forEach((s) => observer.observe(s));
    verifyTheCorrectViewProduct();

    return () => sections.forEach((s) => observer.unobserve(s));
  }, [viewProduct, generateAnchorsBasedInTheContent, verifyTheCorrectViewProduct]);

  // Animaciones "fade-in"
  useEffect(() => {
    const el = containerRef.current;
    if (el) el.querySelectorAll("*").forEach((it) => it.classList.add("fade-in"));

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".fade-in"));
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((e) => obs.observe(e));
    return () => elements.forEach((e) => obs.unobserve(e));
  }, [viewProduct]);

  // Renderers separados por tipo de producto (mantengo estructura original simplificada)
  const renderModuleTk = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (infoHardware as any)[viewProduct];
    if (!data) return null;

    return (
      <div ref={containerRef}>
        <div className="aplicaciones descripcion">
          <h1 className="title font-bold text-[32px] !text-center mb-[5px] text-black">{data.title}</h1>
          <h3 className="description font-bold text-[24px] text-black" id="descripcion" data-title-anchor={t("Descripcion")}>
            {t("descripcion_general")}
          </h3>
          <p className="descriptionContent">{data.descriptionContent}</p>

          <ul className="listOfFeatures flex flex-col gap-[0.5lh]">
            {data.listOfFeatures.map((f: string, i: number) => (
              <li key={i} className="list-disc pl-[20px] ml-[15px]">{f}</li>
            ))}
          </ul>

          <h1 className="font-bold text-[24px] text-black" id="aplicaciones" data-title-anchor={t("aplicaciones")}>{t("aplicaciones")}</h1>
          <p className="applicationDescription">{data.applicationDescription}</p>
          <ul className="listOfApplications">
            {data.listOfApplications.map((app: string, i: number) => (
              <li key={i} className="list-disc pl-[1lh] ml-[10px] mb-[10px]" dangerouslySetInnerHTML={{ __html: app }} />
            ))}
          </ul>
        </div>

        <div className="tablaDeCaracteristicas diagrama">
          {data.diagramSrc.map((src: string, i: number) => (
            <img key={i} src={src} alt="Diagrama" className="diagram max-w-none w-[440px] h-auto self-center" id={i === 0 ? "diagrama" : undefined} data-title-anchor={t("Diagrama")} />
          ))}

          <table id="tablaDeCaracteristicas" data-title-anchor={t("tablaDeEspecificaciones")}>
            <thead>
              <tr className="*:border-[1px] *:border-gray-400 *:p-[5px_10px] bg-blue-100">
                <th>{t("Componente")}</th>
                <th>{t("Descripcion")}</th>
              </tr>
            </thead>
            <tbody className="*:even:bg-gray-200">
              {data.tableItems.map(([comp, desc]: [string, string], i: number) => (
                <tr key={i} className="*:border-[1px] *:border-gray-300 *:p-[5px_10px]">
                  <td>{comp}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }, [infoHardware, t, viewProduct]);

  const renderTGate = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (infoSoftware as any)[viewProduct];
    console.log(data)
    if (!data && viewProduct !== "Tgate") return null;

    return (
      <div className="flex flex-col gap-[20px] justify-center items-start" ref={containerRef}>
        <h1 className="self-center text-[32px] text-center mb-[5px] font-bold title">{data.title}</h1>
        <h2 className="font-bold text-[24px]" id="description" data-title-anchor="Introducción">{data.content[1]}</h2>
        <img src={data.imgSrc[0]} alt="" className="self-center w-auto h-auto" />
        <p dangerouslySetInnerHTML={{ __html: data.content[2] }} />
        <p>{data.content[3]}</p>

        <ul className="flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list[4] }} className="list-disc pl-[20px] ml-[15px]" />
          <li dangerouslySetInnerHTML={{ __html: data.list[5] }} className="list-disc pl-[20px] ml-[15px]" />
          <ul className="ml-[20px] flex flex-col gap-[0.5lh]">
            <li dangerouslySetInnerHTML={{ __html: data.list[6] }} className="list-decimal pl-[20px] ml-[15px]" />
            <li dangerouslySetInnerHTML={{ __html: data.list[7] }} className="list-decimal pl-[20px] ml-[15px]" />
            <li dangerouslySetInnerHTML={{ __html: data.list[8] }} className="list-decimal pl-[20px] ml-[15px]" />
            <li dangerouslySetInnerHTML={{ __html: data.list[9] }} className="list-decimal pl-[20px] ml-[15px]" />
          </ul>
        </ul>

        <h1 className="font-bold text-[24px]" data-title-anchor="Camara" id="camara">{data.content[11]}</h1>
        <img src={data.imgSrc[2]} alt="" className="self-center w-auto h-auto" />
        <p>{data.content[12]}</p>

        <img src={data.imgSrc[3]} alt="" className="self-center w-auto h-auto" />

        <h1 className="font-bold text-[24px]" id="horarios" data-title-anchor="Horarios">{data.content[13]}</h1>
        <img src={data.imgSrc[1]} alt="" className="self-center w-auto h-auto" />
        <p>{data.content[14]}</p>

        <h1 className="font-bold text-[24px]" id="knx" data-title-anchor="KNX">{data.content[15]}</h1>
        <img src={data.imgSrc[4]} alt="" className="self-center w-auto h-auto" />
        <p>{data.content[16]}</p>

        <h1 className="font-bold text-[24px]" id="excel" data-title-anchor="Excel">{data.content[17]}</h1>
        <p>{data.content[18]}</p>
        <p>{data.content[19]}</p>
      </div>
    );
  }, [infoSoftware, viewProduct]);

  const renderLectorTk = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (infoTkLector as any)[viewProduct];
    if (!data) return null;
    return (
      <div className="aplicaciones">
        <h1 className="font-bold text-[32px] text-center fade-in">{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.content[1] }} className="fade-in" />
        <h2 className="font-bold text-[24px] fade-in" dangerouslySetInnerHTML={{ __html: data.content[2] }} id="title2" data-title-anchor="Caracteristicas destacadas" />

        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {[3, 4, 5, 6, 7].map((i) => <li key={i} className="fade-in">{data.content[i]}</li>)}
        </ul>

        <h2 className="font-bold text-[24px] fade-in" dangerouslySetInnerHTML={{ __html: data.content[8] }} id="title3" data-title-anchor="Aplicaciones principales" />
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {[9, 10, 11].map((i) => <li key={i} className="fade-in">{data.content[i]}</li>)}
        </ul>

        <h2 className="font-bold text-[24px] fade-in" id="title4" data-title-anchor="Caracteristicas">{data.content[12]}</h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {data.list.map((it: string, i: number) => <li key={i} className="fade-in">{it}</li>)}
        </ul>

        <h2 className="font-bold text-[24px] fade-in" id="title5" data-title-anchor="Aplicaciones">{data.applicationList[0]}</h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {data.applicationList.slice(1).map((it: string, i: number) => <li key={i} className="fade-in">{it}</li>)}
        </ul>

        <h2 className="font-bold text-[24px] fade-in" id="title6" data-title-anchor="Recomendaciones">{data.recomendation[0]}</h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {data.recomendation.slice(1).map((it: string, i: number) => <li key={i} className="fade-in">{it}</li>)}
        </ul>

        <h2 className="font-bold text-[24px] fade-in" id="title6" data-title-anchor="Vista Lector">{data.content[13]}</h2>
        <p className="fade-in">{data.content[14]}</p>
        <img src={data.imgSrc[0]} alt="imagen" className="w-[400px] self-center fade-in" />
        <p className="fade-in">{data.content[15]}</p>
      </div>
    );
  }, [infoTkLector, viewProduct]);

  const renderNodeMaker = useCallback(() => {
    const data = infoSoftware[viewProduct as "Nodemaker"];
    if (!data && viewProduct !== "Nodemaker") return null;
    return (
      <div className="aplicaciones" ref={containerRef}>
        <h1 className="font-bold text-[32px] text-center" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.content[1] }}></p>
        <img src={data.imgSrc[0] } alt="" width={"auto"} height={"auto"} className="w-[550px] self-center" />
        <img src={data.imgSrc[1] } alt="" width={"auto"} height={"auto"} className="w-[550px] self-center" />
        <h2 className="font-bold text-[24px] text-left" dangerouslySetInnerHTML={{ __html: data.list.title }} id="principal" data-title-anchor={data.list.title }></h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list[1] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[2] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[3] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[4] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[5] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[6] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[7] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[8] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[9] }}></li>
        </ul>
        <h2 className="font-bold text-[24px] text-left" dangerouslySetInnerHTML={{ __html: data.list2.title }} id="secundario" data-title-anchor={data.list2.title}></h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list2[1] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list2[2] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list2[3] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list2[4] }}></li>
        </ul>
        <h2 className="font-bold text-[24px] text-left" dangerouslySetInnerHTML={{ __html: data.list3.title }} id="terceario" data-title-anchor={data.list3.title }></h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list3[1] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list3[2] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list3[3] }}></li>
        </ul>
      </div>
    )
  }, [infoSoftware, viewProduct])

  // archivo para descarga según producto
  const renderBtnDownload = useCallback(() => {
    const fileForDownload: Partial<Record<ProductKey, string>> = {
      Tgate: "/docs/Manual - Tekneo Software.pdf",
      "TK-Lector": "/docs/DataSheet QR-Lector.pdf",
      "Modulo TK-IO22W": "/docs/TK-IO22W Datasheet 1.pdf",
      "Modulo TK-IO24W2": "/docs/TK-IO24W2 Datasheet 2.pdf",
      "Nodemaker": "/docs/Manual NodeMaker.docx"
    };

    const file = fileForDownload[viewProduct];
    if (!file) return null;

    return (
      <a href={file} className="flex p-[5px_15px] justify-center gap-[20px] size-full btnDownload rounded-[10px] w-full" download>
        <span>{t("manual")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit" className="size-[24px]">
          <g id="Interface / Download">
            <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </a>
    );
  }, [t, viewProduct]);

  // ---------- handlers de hover: uso onMouseEnter/onMouseLeave (no addEventListener)
  const handleMouseEnter = useCallback((key: ProductKey) => {
    switch (key) {
      case "Modulo TK-IO22W":
        popoverModule22.current?.showPopover(btnModule22w.current as HTMLButtonElement);
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose()
        break;
      case "Modulo TK-IO24W2":
        popoverModule44.current?.showPopover(btnModule44w.current as HTMLButtonElement);
        popoverModule22.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose()
        break;
      case "Tgate":
        popoverTgate.current?.showPopover(btnTgate.current as HTMLButtonElement);
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose()
        break;
      case "TK-Lector":
        popoverLector.current?.showPopover(btnLectorTk.current as HTMLButtonElement);
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverNodemaker.current?.forceClose()
        break;
      case "Nodemaker":
        popoverNodemaker.current?.showPopover(btnNodemaker.current as HTMLButtonElement)
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        break;
    }
  }, []);

  const handleMouseLeave = useCallback((key: ProductKey) => {
    switch (key) {
      case "Modulo TK-IO22W":
        popoverModule22.current?.close?.();
        break;
      case "Modulo TK-IO24W2":
        popoverModule44.current?.close?.();
        break;
      case "Tgate":
        popoverTgate.current?.close?.();
        break;
      case "TK-Lector":
        popoverLector.current?.close?.();
        break;
      case "Nodemaker":
        popoverNodemaker.current?.close?.()
        break;
    }
  }, []);

  // actualizo atributos dataset de botones cuando cambie viewProduct
  useEffect(() => verifyTheCorrectViewProduct(), [viewProduct, verifyTheCorrectViewProduct]);

  // ---------- renderizado final ----------
  return (
    <article className="grid grid-cols-[200px_minmax(500px,50vw)_200px] gap-x-[8%] justify-center m-[50px_0px] relative">
      <aside className="relative flex flex-col gap-[30px] items-center after:w-[2px] after:h-[30%] after:absolute after:top-[10px] after:left-[calc(100%_+_15px)] after:bg-gray-300">
        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Hardware</h1>
          <hr className="w-full border-t-gray-400" />
        </div>

        <ul className="flex flex-col gap-[5px]">
          <li>
            <button
              ref={btnModule22w}
              data-active={viewProduct === "Modulo TK-IO22W"}
              className={`flex gap-[10px] min-w-[200px] items-center justify-end p-[5px_15px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO22W" ? "!text-white !border-black" : ""}`}
              onClick={() => setViewProduct("Modulo TK-IO22W")}
              onMouseEnter={() => handleMouseEnter("Modulo TK-IO22W")}
              onMouseLeave={() => handleMouseLeave("Modulo TK-IO22W")}
              title="Abrir producto"
              type="button"
            >
              <span>Modulo TK-IO22W</span>
              <ArrowIcon />
            </button>

            <Popover ref={popoverModule22} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">{previewFor("Modulo TK-IO22W")}</div>
            </Popover>
          </li>

          <li>
            <button
              ref={btnModule44w}
              data-active={viewProduct === "Modulo TK-IO24W2"}
              className={`flex gap-[10px] min-w-[200px] items-center justify-end p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO24W2" ? "!text-white !border-black" : ""}`}
              onClick={() => setViewProduct("Modulo TK-IO24W2")}
              onMouseEnter={() => handleMouseEnter("Modulo TK-IO24W2")}
              onMouseLeave={() => handleMouseLeave("Modulo TK-IO24W2")}
              type="button"
              title="Abrir Producto"
            >
              <span>Modulo TK-IO24W2</span>
              <ArrowIcon />
            </button>

            <Popover ref={popoverModule44} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">{previewFor("Modulo TK-IO24W2")}</div>
            </Popover>
          </li>

          <li>
            <button
              ref={btnLectorTk}
              data-active={viewProduct === "TK-Lector"}
              onClick={() => setViewProduct("TK-Lector")}
              onMouseEnter={() => handleMouseEnter("TK-Lector")}
              onMouseLeave={() => handleMouseLeave("TK-Lector")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "TK-Lector" ? "!text-white !border-black" : ""}`}
            >
              <span>Lector TK</span>
              <ArrowIcon />
            </button>

            <Popover ref={popoverLector} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">{previewFor("TK-Lector")}</div>
            </Popover>
          </li>
        </ul>

        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Software</h1>
          <hr className="w-full border-t-gray-400" />
        </div>

        <ul className="flex flex-col gap-[5px]">
          <li>
            <button
              ref={btnTgate}
              onClick={() => setViewProduct("Tgate")}
              onMouseEnter={() => handleMouseEnter("Tgate")}
              onMouseLeave={() => handleMouseLeave("Tgate")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Tgate" ? "!text-white !border-black" : ""}`}
            >
              <span>TGate</span>
              <ArrowIcon />
            </button>

            <Popover ref={popoverTgate} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">{previewFor("Tgate")}</div>
            </Popover>
          </li>
          <li>
            <button
              ref={btnNodemaker}
              onClick={() => setViewProduct("Nodemaker")}
              onMouseEnter={() => handleMouseEnter("Nodemaker")}
              onMouseLeave={() => handleMouseLeave("Nodemaker")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Tgate" ? "!text-white !border-black" : ""}`}
            >
              <span>Nodemaker</span>
              <ArrowIcon />
            </button>

            <Popover ref={popoverNodemaker} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">{previewFor("Nodemaker")}</div>
            </Popover>
          </li>
        </ul>
      </aside>

      <section ref={viewProductDescription} className="flex flex-col gap-[1lh]">
        {viewProduct === "Modulo TK-IO22W" || viewProduct === "Modulo TK-IO24W2"
          ? renderModuleTk()
          : viewProduct === "Tgate"
            ? renderTGate()
            : viewProduct === "TK-Lector"
              ? renderLectorTk()
              : viewProduct === "Nodemaker"
                ? renderNodeMaker()
                : null}
      </section>

      <aside className="sticky top-[125px] self-start flex flex-col items-center gap-[20px]">
        <div>
          <h1 className="text-[18px]">{t("tabla_de_contenido")}</h1>
          <ul className={`listOfNav mt-[10px] flex-col items-start gap-[5px] min-h-[150px]`} ref={listOfNav}>
            {(anchors[viewProduct] ?? []).map((el) => el)}
          </ul>
        </div>
        <hr className="border-t-gray-400 w-full" />
        {renderBtnDownload()}
      </aside>
    </article>
  );
}

// Icona reutilizable
function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white size-[16px] rotate-90" viewBox="0 -4.5 20 20" version="1.1">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="inherit">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" />
          </g>
        </g>
      </g>
    </svg>
  );
}
