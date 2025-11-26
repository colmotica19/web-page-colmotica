import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
} from "react";
import { useTranslation } from "react-i18next";
import "./documentacion.css";
import Popover, {
  type PopoverHandle,
} from "../../../components/Popover/Popover";
import { GlobalContext } from "../../../singleton/globalContext";

// Refactor: componente más legible y modular. Mantengo la lógica original
// pero evito listeners fuera del flujo React y simplifico generación de anchors.

type ProductKey =
  | "Modulo TK-IO22W"
  | "Modulo TK-IO24W2"
  | "Tgate"
  | "TK-Lector"
  | "Nodemaker"
  | "Access Control"
  | "TShow"
  | "LDM";

export default function Documentacion(): JSX.Element {
  const { t } = useTranslation();
  const [viewProduct, setViewProduct] = useState<ProductKey>("Modulo TK-IO22W");
  const { user, modalLoginRef } = useContext(GlobalContext);

  // refs para popovers y botones
  const btnModule22w = useRef<HTMLButtonElement | null>(null);
  const btnAccessControl = useRef<HTMLButtonElement>(null);
  // const btnAccessControl2 = useRef<HTMLButtonElement>(null)
  const btnModule44w = useRef<HTMLButtonElement | null>(null);
  const btnTgate = useRef<HTMLButtonElement | null>(null);
  const btnNodemaker = useRef<HTMLButtonElement | null>(null);
  const btnLectorTk = useRef<HTMLButtonElement | null>(null);
  const btnTShow = useRef<HTMLButtonElement>(null);
  const btnLDM = useRef<HTMLButtonElement>(null);

  const popoverModule22 = useRef<PopoverHandle | null>(null);
  const popoverModule44 = useRef<PopoverHandle | null>(null);
  const popoverTgate = useRef<PopoverHandle | null>(null);
  const popoverTShow = useRef<PopoverHandle | null>(null);
  const popoverLector = useRef<PopoverHandle | null>(null);
  const popoverNodemaker = useRef<PopoverHandle | null>(null);
  const popoverAccessControl1 = useRef<PopoverHandle | null>(null);
  // const popoverAccessControl2 = useRef<PopoverHandle | null>(null);

  const viewProductDescription = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listOfNav = useRef<HTMLUListElement | null>(null);

  // ---------- datos traducidos (memoizados) ----------
  const infoHardware = useMemo(
    () =>
      ({
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
          "Access Control": {
            title: t("access_control_title"),
            content: {
              1: t("acess_control_1"),
              2: t("acess_control_2"),
              3: t("acess_control_3"),
              4: t("acess_control_4"),
              5: t("acess_control_5"),
              6: t("acess_control_6"),
              7: t("acess_control_7"),
              8: t("acess_control_2_1"),
              9: t("acess_control_2_2"),
              10: t("acess_control_3_1"),
              11: t("acess_control_3_2"),
              12: t("acess_control_4_1"),
              13: t("acess_control_4_2"),
              14: t("access_control_5_1"),
              15: t("access_control_5_2"),
              16: t("access_control_5_3"),
              17: t("access_control_5_4"),
              18: t("access_control_5_5"),
              19: t("access_control_5_6"),
              20: t("access_control_5_7"),
              21: t("access_control_5_8"),
            },
            list: {
              1: t("access_control_4_list_1"),
              2: t("access_control_4_list_2"),
              3: t("access_control_4_list_3"),
              4: t("access_control_4_list_4"),
              5: t("access_control_4_list_5"),
            },
            imgSrc: [
              "/img/access_control_1.jpg",
              "/img/access_control_2.png",
              "/img/access_control_3.png",
              "/img/access_control_4.png",
              "/img/access_control_5.png",
              "/img/access_control_6.jpg",
              "/img/access_control_7.jpg",
              "/img/access_control_8.jpg",
              "/img/access_control_9.jpg",
              "/img/access_control_10.jpg",
              "/img/access_control_11.jpg",
              "/img/access_control_12.png",
              "/img/access_control_13.png",
              "/img/access_control_14.png",
              "/img/access_control_15.png",
            ],
          },
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
          applicationDescription: t(
            "Modulo TK-IO24W2_applicationDescription_1"
          ),
          listOfApplications: [
            t("Modulo TK-IO24W2_listOfApplications_1"),
            t("Modulo TK-IO24W2_listOfApplications_2"),
            t("Modulo TK-IO24W2_listOfApplications_3"),
            t("Modulo TK-IO24W2_listOfApplications_4"),
          ],
          diagramSrc: [
            "/img/Modulo TK-IO44W.png",
            "/img/Modulo TK-IO44W 2.png",
          ],
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
      } as const),
    [t]
  );

  const infoSoftware = useMemo(
    () =>
      ({
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
            1: t("nodemaker_1"),
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
          imgSrc: ["/img/Logo de nodemaker.png", "/img/img2 de nodemaker.png"],
        },
        TShow: {
          title: t("t_show_title"),
          content: {
            1: t("t_show_1"),
            2: t("t_show_1_1"),
            3: t("t_show_1_2"),
            4: t("t_show_1_3"),
            5: t("t_show_1_4"),
            6: t("t_show_2"),
            7: t("t_show_2_1"),
            8: t("t_show_3_1"),
            9: t("t_show_3_2"),
            10: t("t_show_4_1"),
            11: t("t_show_4_2"),
            12: t("t_show_5_1"),
            13: t("t_show_5_2"),
            14: t("t_show_6_1"),
            15: t("t_show_6_2"),
          },
          list: {
            1: t("t_show_1_list_1"),
            2: t("t_show_1_list_2"),
            3: t("t_show_1_list_3"),
            4: t("t_show_1_list_4"),
          },
          imgSrc: ["/img/tshow.png", "/img/tshow 2.png"],
        },
      } as const),
    [t]
  );

  const infoTkLector = useMemo(
    () =>
      ({
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
          list: Array.from({ length: 14 }, (_, i) =>
            t(`lecktor_tk_12_${i + 1}`)
          ),
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
      } as const),
    [t]
  );

  // ---------- helpers ----------
  // const allProductKeys: ProductKey[] = useMemo(
  //   () => ["Modulo TK-IO22W", "Modulo TK-IO24W2", "Tgate", "TK-Lector"],
  //   []
  // );

  const previewFor = useCallback(
    (
      name: keyof typeof infoSoftware | keyof typeof infoHardware | ProductKey
    ) => {
      let data;
      switch (name) {
        case "Modulo TK-IO22W":
        case "Modulo TK-IO24W2":
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data = (infoHardware as any)[name];
          return (
            <>
              <h1>{data.title}</h1>
              {data.diagramSrc.map((src: string, i: number) => (
                <img key={i} src={src} alt="img" className="h-auto w-[220px]" />
              ))}
            </>
          );
        case "Access Control":
          data = infoHardware["Modulo TK-IO22W"]["Access Control"];
          return (
            <>
              <h1>{data.title}</h1>
              <img src={data.imgSrc[0]} alt="" width={"auto"} height={"auto"} />
            </>
          );
        case "Nodemaker":
        case "TShow":
        case "Tgate":
          data = infoSoftware[name];
          return (
            <>
              <h1>{data.title}</h1>
              <img src={data.imgSrc[0]} alt="" className="w-[500px] h-auto" />
            </>
          );
        case "TK-Lector":
          data = infoTkLector[name];
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

    const allItemsWithId = Array.from(
      target.querySelectorAll<HTMLElement>("[id]")
    ).filter((el) => el.id);

    const anchorsJsx = allItemsWithId.map((item) => (
      <li key={item.id} className="size-full">
        <a
          className="flex p-[5px_15px] size-full anchorSection rounded-[10px] w-full"
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            const rectTop =
              item.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: rectTop, behavior: "smooth" });
          }}
        >
          {item.dataset.titleAnchor ??
            (item.textContent && item.textContent.length < 12
              ? item.textContent
              : item.id)}
        </a>
      </li>
    ));

    setAnchors({ [viewProduct]: anchorsJsx });
  }, [viewProduct, t]);

  // Marca en los botones cuál está activo
  const verifyTheCorrectViewProduct = useCallback(() => {
    const map: Record<ProductKey, React.RefObject<HTMLButtonElement | null>> = {
      "TK-Lector": btnLectorTk,
      Tgate: btnTgate,
      "Modulo TK-IO22W": btnModule22w,
      "Access Control": btnAccessControl,
      "Modulo TK-IO24W2": btnModule44w,
      Nodemaker: btnNodemaker,
      TShow: btnTShow,
      LDM: btnLDM,
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

    const sections = Array.from(
      viewProductDescription.current.querySelectorAll<HTMLElement>("[id]")
    );
    let prevLink: HTMLAnchorElement | null = null;

    const intersectionCb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector<HTMLAnchorElement>(
          `.listOfNav a[href="#${entry.target.id}"]`
        );
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
  }, [
    viewProduct,
    generateAnchorsBasedInTheContent,
    verifyTheCorrectViewProduct,
  ]);

  // Animaciones "fade-in"
  useEffect(() => {
    const el = containerRef.current;
    if (el)
      el.querySelectorAll("*").forEach((it) => it.classList.add("fade-in"));

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in")
    );
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

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
          <h1 className="title font-bold text-[32px] !text-center mb-[5px] text-black">
            {data.title}
          </h1>
          <h3
            className="description font-bold text-[24px] text-black"
            id="descripcion"
            data-title-anchor={t("Descripcion")}
          >
            {t("descripcion_general")}
          </h3>
          <p className="descriptionContent">{data.descriptionContent}</p>

          <ul className="listOfFeatures flex flex-col gap-[0.5lh]">
            {data.listOfFeatures.map((f: string, i: number) => (
              <li key={i} className="list-disc pl-[20px] ml-[15px]">
                {f}
              </li>
            ))}
          </ul>

          <h1
            className="font-bold text-[24px] text-black"
            id="aplicaciones"
            data-title-anchor={t("aplicaciones")}
          >
            {t("aplicaciones")}
          </h1>
          <p className="applicationDescription">
            {data.applicationDescription}
          </p>
          <ul className="listOfApplications">
            {data.listOfApplications.map((app: string, i: number) => (
              <li
                key={i}
                className="list-disc pl-[1lh] ml-[10px] mb-[10px]"
                dangerouslySetInnerHTML={{ __html: app }}
              />
            ))}
          </ul>
        </div>

        <div className="tablaDeCaracteristicas diagrama">
          {data.diagramSrc.map((src: string, i: number) => (
            <img
              key={i}
              src={src}
              alt="Diagrama"
              className="diagram max-w-none w-[440px] h-auto self-center"
              id={i === 0 ? "diagrama" : undefined}
              data-title-anchor={t("Diagrama")}
            />
          ))}

          <table
            id="tablaDeCaracteristicas"
            data-title-anchor={t("tablaDeEspecificaciones")}
          >
            <thead>
              <tr className="*:border-[1px] *:border-gray-400 *:p-[5px_10px] bg-blue-100">
                <th>{t("Componente")}</th>
                <th>{t("Descripcion")}</th>
              </tr>
            </thead>
            <tbody className="*:even:bg-gray-200">
              {data.tableItems.map(
                ([comp, desc]: [string, string], i: number) => (
                  <tr
                    key={i}
                    className="*:border-[1px] *:border-gray-300 *:p-[5px_10px]"
                  >
                    <td>{comp}</td>
                    <td>{desc}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <button
            type="button"
            className="p-[5px_15px] bg-blue-500 text-white rounded-[8px] mt-[20px]"
            onClick={() => {
              setViewProduct("Access Control");
              scroll({ top: 0, left: 0 });
            }}
          >
            {t("acess_control_1") + " (Access Control)"}
          </button>
        </div>
      </div>
    );
  }, [infoHardware, t, viewProduct]);

  const renderTGate = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (infoSoftware as any)[viewProduct];
    if (!data && viewProduct !== "Tgate") return null;

    return (
      <div
        className="flex flex-col gap-[20px] justify-center items-start"
        ref={containerRef}
      >
        <h1 className="self-center text-[32px] text-center mb-[5px] font-bold title">
          {data.title}
        </h1>
        <h2
          className="font-bold text-[24px]"
          id="description"
          data-title-anchor="Introducción"
        >
          {data.content[1]}
        </h2>
        <img
          src={data.imgSrc[0]}
          alt=""
          className="self-center w-auto h-auto"
        />
        <p dangerouslySetInnerHTML={{ __html: data.content[2] }} />
        <p>{data.content[3]}</p>

        <ul className="flex flex-col gap-[0.5lh]">
          <li
            dangerouslySetInnerHTML={{ __html: data.list[4] }}
            className="list-disc pl-[20px] ml-[15px]"
          />
          <li
            dangerouslySetInnerHTML={{ __html: data.list[5] }}
            className="list-disc pl-[20px] ml-[15px]"
          />
          <ul className="ml-[20px] flex flex-col gap-[0.5lh]">
            <li
              dangerouslySetInnerHTML={{ __html: data.list[6] }}
              className="list-decimal pl-[20px] ml-[15px]"
            />
            <li
              dangerouslySetInnerHTML={{ __html: data.list[7] }}
              className="list-decimal pl-[20px] ml-[15px]"
            />
            <li
              dangerouslySetInnerHTML={{ __html: data.list[8] }}
              className="list-decimal pl-[20px] ml-[15px]"
            />
            <li
              dangerouslySetInnerHTML={{ __html: data.list[9] }}
              className="list-decimal pl-[20px] ml-[15px]"
            />
          </ul>
        </ul>

        <h1
          className="font-bold text-[24px]"
          data-title-anchor="Camara"
          id="camara"
        >
          {data.content[11]}
        </h1>
        <img
          src={data.imgSrc[2]}
          alt=""
          className="self-center w-auto h-auto"
        />
        <p>{data.content[12]}</p>

        <img
          src={data.imgSrc[3]}
          alt=""
          className="self-center w-auto h-auto"
        />

        <h1
          className="font-bold text-[24px]"
          id="horarios"
          data-title-anchor="Horarios"
        >
          {data.content[13]}
        </h1>
        <img
          src={data.imgSrc[1]}
          alt=""
          className="self-center w-auto h-auto"
        />
        <p>{data.content[14]}</p>

        <h1 className="font-bold text-[24px]" id="knx" data-title-anchor="KNX">
          {data.content[15]}
        </h1>
        <img
          src={data.imgSrc[4]}
          alt=""
          className="self-center w-auto h-auto"
        />
        <p>{data.content[16]}</p>

        <h1
          className="font-bold text-[24px]"
          id="excel"
          data-title-anchor="Excel"
        >
          {data.content[17]}
        </h1>
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
        <h1 className="font-bold text-[32px] text-center fade-in">
          {data.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: data.content[1] }}
          className="fade-in"
        />
        <h2
          className="font-bold text-[24px] fade-in"
          dangerouslySetInnerHTML={{ __html: data.content[2] }}
          id="title2"
          data-title-anchor="Caracteristicas destacadas"
        />

        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {[3, 4, 5, 6, 7].map((i) => (
            <li key={i} className="fade-in">
              {data.content[i]}
            </li>
          ))}
        </ul>

        <h2
          className="font-bold text-[24px] fade-in"
          dangerouslySetInnerHTML={{ __html: data.content[8] }}
          id="title3"
          data-title-anchor="Aplicaciones principales"
        />
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {[9, 10, 11].map((i) => (
            <li key={i} className="fade-in">
              {data.content[i]}
            </li>
          ))}
        </ul>

        <h2
          className="font-bold text-[24px] fade-in"
          id="title4"
          data-title-anchor="Caracteristicas"
        >
          {data.content[12]}
        </h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {data.list.map((it: string, i: number) => (
            <li key={i} className="fade-in">
              {it}
            </li>
          ))}
        </ul>

        <h2
          className="font-bold text-[24px] fade-in"
          id="title5"
          data-title-anchor="Aplicaciones"
        >
          {data.applicationList[0]}
        </h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {data.applicationList.slice(1).map((it: string, i: number) => (
            <li key={i} className="fade-in">
              {it}
            </li>
          ))}
        </ul>

        <h2
          className="font-bold text-[24px] fade-in"
          id="title6"
          data-title-anchor="Recomendaciones"
        >
          {data.recomendation[0]}
        </h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh] fade-in">
          {data.recomendation.slice(1).map((it: string, i: number) => (
            <li key={i} className="fade-in">
              {it}
            </li>
          ))}
        </ul>

        <h2
          className="font-bold text-[24px] fade-in"
          id="title6"
          data-title-anchor="Vista Lector"
        >
          {data.content[13]}
        </h2>
        <p className="fade-in">{data.content[14]}</p>
        <img
          src={data.imgSrc[0]}
          alt="imagen"
          className="w-[400px] self-center fade-in"
        />
        <p className="fade-in">{data.content[15]}</p>
      </div>
    );
  }, [infoTkLector, viewProduct]);

  const renderNodeMaker = useCallback(() => {
    const data = infoSoftware[viewProduct as "Nodemaker"];
    if (!data && viewProduct !== "Nodemaker") return null;
    return (
      <div className="aplicaciones" ref={containerRef}>
        <h1
          className="font-bold text-[32px] text-center"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h1>
        <p dangerouslySetInnerHTML={{ __html: data.content[1] }}></p>
        <img
          src={data.imgSrc[0]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="w-[550px] self-center"
        />
        <img
          src={data.imgSrc[1]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="w-[550px] self-center"
        />
        <h2
          className="font-bold text-[24px] text-left"
          dangerouslySetInnerHTML={{ __html: data.list.title }}
          id="principal"
          data-title-anchor={data.list.title}
        ></h2>
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
        <h2
          className="font-bold text-[24px] text-left"
          dangerouslySetInnerHTML={{ __html: data.list2.title }}
          id="secundario"
          data-title-anchor={data.list2.title}
        ></h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list2[1] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list2[2] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list2[3] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list2[4] }}></li>
        </ul>
        <h2
          className="font-bold text-[24px] text-left"
          dangerouslySetInnerHTML={{ __html: data.list3.title }}
          id="terceario"
          data-title-anchor={data.list3.title}
        ></h2>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list3[1] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list3[2] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list3[3] }}></li>
        </ul>
      </div>
    );
  }, [infoSoftware, viewProduct]);

  const renderAccessControl = useCallback(() => {
    const data = infoHardware["Modulo TK-IO22W"]["Access Control"];
    if (!data && viewProduct !== "Access Control") return null;
    return (
      <div className="aplicaciones" ref={containerRef}>
        <h1 className="text-[32px] text-center font-bold">{data.title}</h1>
        <h2
          className="text-[24px] font-bold"
          id={"access_control_1"}
          data-title-anchor={data.content[1]}
        >
          {data.content[1]}
        </h2>
        <img
          src={data.imgSrc[0]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p dangerouslySetInnerHTML={{ __html: data.content[2] }}></p>
        <img
          src={data.imgSrc[1]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[3]}</p>
        <img
          src={data.imgSrc[2]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[4]}</p>
        <img
          src={data.imgSrc[3]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[5]}</p>
        <img
          src={data.imgSrc[4]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[6]}</p>
        <p>{data.content[7]}</p>
        <img
          src={data.imgSrc[5]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <h2
          className="text-[24px] font-bold"
          id={"access_control_2"}
          data-title-anchor={data.content[8]}
        >
          {data.content[8]}
        </h2>
        <p>{data.content[9]}</p>
        <img
          src={data.imgSrc[6]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <h2
          className="text-[24px] font-bold"
          id={"access_control_3"}
          data-title-anchor={data.content[10]}
        >
          {data.content[10]}
        </h2>
        <p>{data.content[11]}</p>
        <section className="grid grid-cols-2 gap-[10px]">
          <img
            src={data.imgSrc[7]}
            alt=""
            width={"auto"}
            height={"auto"}
            className="self-center"
          />
          <img
            src={data.imgSrc[8]}
            alt=""
            width={"auto"}
            height={"auto"}
            className="self-center"
          />
        </section>
        <h2
          className="text-[24px] font-bold"
          id={"access_control_4"}
          data-title-anchor={data.content[12]}
        >
          {data.content[12]}
        </h2>
        <p>{data.content[13]}</p>
        <img
          src={data.imgSrc[9]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li dangerouslySetInnerHTML={{ __html: data.list[1] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[2] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[3] }}></li>
          <li dangerouslySetInnerHTML={{ __html: data.list[4] }}></li>
          <img
            src={data.imgSrc[10]}
            alt=""
            width={"auto"}
            height={"auto"}
            className="self-center pl-[0px]"
          />
          <li dangerouslySetInnerHTML={{ __html: data.list[5] }}></li>
        </ul>
        <h2
          className="text-[24px] font-bold"
          id={"access_control_5"}
          data-title-anchor={data.content[14]}
        >
          {data.content[14]}
        </h2>
        <p>{data.content[15]}</p>
        <img
          src={data.imgSrc[10]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[16]}</p>
        <img
          src={data.imgSrc[11]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[17]}</p>
        <p>{data.content[18]}</p>
        <img
          src={data.imgSrc[12]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <h2
          className="text-[24px] font-bold"
          id={"access_control_6"}
          data-title-anchor={data.content[19]}
        >
          {data.content[19]}
        </h2>
        <img
          src={data.imgSrc[13]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <p>{data.content[20]}</p>
        <p>{data.content[21]}</p>
      </div>
    );
  }, [viewProduct, infoHardware]);

  const renderTshow = useCallback(() => {
    const data = infoSoftware["TShow"];
    if (!data && viewProduct !== "Access Control") return null;
    return (
      <div className="aplicaciones">
        <h1 className="text-[32px] font-bold text-center">{data.title}</h1>
        <h2 className="text-[24px] font-bold">{data.content[1]}</h2>
        <p>{data.content[2]}</p>
        <p>{data.content[3]}</p>
        <p>{data.content[4]}</p>
        <ul className="*:list-disc *:pl-[20px] ml-[20px] flex flex-col gap-[0.5lh]">
          <li>{data.list[1]}</li>
          <li>{data.list[2]}</li>
          <li>{data.list[3]}</li>
          <li>{data.list[4]}</li>
        </ul>
        <p>{data.content[5]}</p>
        <h2 className="text-[24px] font-bold">{data.content[6]}</h2>
        <p>{data.content[7]}</p>
        <h2 className="text-[24px] font-bold">{data.content[8]}</h2>
        <p>{data.content[9]}</p>
        <h2 className="text-[24px] font-bold">{data.content[10]}</h2>
        <p>{data.content[11]}</p>
        <h2 className="text-[24px] font-bold">{data.content[12]}</h2>
        <p>{data.content[12]}</p>
        <h2 className="text-[24px] font-bold">{data.content[13]}</h2>
        <p>{data.content[14]}</p>
        <img
          src={data.imgSrc[0]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
        <img
          src={data.imgSrc[1]}
          alt=""
          width={"auto"}
          height={"auto"}
          className="self-center"
        />
      </div>
    );
  }, [infoSoftware, viewProduct]);

  // archivo para descarga según producto
  const renderBtnDownload = useCallback(() => {
    const fileForDownload: Partial<Record<ProductKey, string>> = {
      Tgate: "/docs/Manual - Tekneo Software.pdf",
      "TK-Lector": "/docs/DataSheet QR-Lector.pdf",
      "Modulo TK-IO22W": "/docs/TK-IO22W Datasheet 1.pdf",
      "Modulo TK-IO24W2": "/docs/TK-IO24W2 Datasheet 2.pdf",
      Nodemaker: "/docs/Manual NodeMaker.docx",
    };

    const file = fileForDownload[viewProduct];
    if (!file) return null;

    return (
      <a
        href={file}
        className="flex p-[5px_15px] justify-center gap-[20px] size-full btnDownload rounded-[10px] w-full"
        download
      >
        <span>{t("manual")}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="inherit"
          className="size-[24px]"
        >
          <g id="Interface / Download">
            <path
              id="Vector"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </a>
    );
  }, [t, viewProduct]);

  // ---------- handlers de hover: uso onMouseEnter/onMouseLeave (no addEventListener)
  const handleMouseEnter = useCallback((key: ProductKey) => {
    switch (key) {
      case "Modulo TK-IO22W":
        popoverModule22.current?.showPopover(
          btnModule22w.current as HTMLButtonElement
        );
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose();
        popoverAccessControl1.current?.forceClose?.();
        break;
      case "Modulo TK-IO24W2":
        popoverModule44.current?.showPopover(
          btnModule44w.current as HTMLButtonElement
        );
        popoverModule22.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose();
        popoverAccessControl1.current?.forceClose?.();
        break;
      case "Tgate":
        popoverTgate.current?.showPopover(
          btnTgate.current as HTMLButtonElement
        );
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose();
        popoverTShow.current?.forceClose?.();
        popoverAccessControl1.current?.forceClose?.();
        break;
      case "TK-Lector":
        popoverLector.current?.showPopover(
          btnLectorTk.current as HTMLButtonElement
        );
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverTShow.current?.forceClose?.();
        popoverNodemaker.current?.forceClose();
        popoverAccessControl1.current?.forceClose?.();
        break;
      case "Nodemaker":
        popoverNodemaker.current?.showPopover(
          btnNodemaker.current as HTMLButtonElement
        );
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        popoverTShow.current?.forceClose?.();
        popoverAccessControl1.current?.forceClose?.();
        break;
      case "Access Control":
        popoverNodemaker.current?.forceClose?.();
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverTgate.current?.forceClose?.();
        break;
      case "TShow":
        popoverTShow.current?.showPopover(
          btnTShow.current as HTMLButtonElement
        );
        popoverModule22.current?.forceClose?.();
        popoverModule44.current?.forceClose?.();
        popoverLector.current?.forceClose?.();
        popoverNodemaker.current?.forceClose();
        popoverAccessControl1.current?.forceClose?.();
        popoverTgate.current?.forceClose();
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
        popoverNodemaker.current?.close?.();
        break;
      case "TShow":
        popoverTShow.current?.close();
        break;
    }
  }, []);

  // actualizo atributos dataset de botones cuando cambie viewProduct
  useEffect(
    () => verifyTheCorrectViewProduct(),
    [viewProduct, verifyTheCorrectViewProduct]
  );

  // Si el usuario no está logueado, intentamos mostrar el modal cuando la ref esté disponible.
  // Antes la llamada se hacía en el render y a veces la ref aún no existía (Modal montado en otro componente).
  useEffect(() => {
    if (true) return;
    let mounted = true;
    let timer: number | undefined;

    const tryOpen = () => {
      if (!mounted) return;
      try {
        if (modalLoginRef?.current?.showModal) {
          modalLoginRef.current.showModal();
        } else {
          // reintentar en breve hasta que el componente que asigna la ref se monte
          timer = window.setTimeout(tryOpen, 50);
        }
      } catch (err) {
        // si hay error no queremos romper el flujo, pero lo logueamos para depuración
        console.error("Error mostrando modal de login:", err);
      }
    };

    tryOpen();
    return () => {
      mounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [user, modalLoginRef]);

  // if (!user) {
  //   return (
  //     <section className="min-h-[80vh] flex flex-col justify-center items-center">
  //       <h1 className="text-center text-[32px] font-bold">Debe iniciar sesión</h1>
  //     </section>
  //   );
  // }

  // ---------- renderizado final ----------
  return (
    <article className="grid grid-cols-[200px_minmax(500px,50vw)_200px] gap-x-[8%] justify-center mt-[50px] mb-[150px]">
      <aside className="flex h-max flex-col gap-[30px] items-center after:w-[2px] after:h-[30%] after:absolute after:top-[10px] after:left-[calc(100%_+_15px)] after:bg-gray-300 sticky top-[100px]">
        <div className="w-full">
          <h1 className="text-black font-bold text-[32px]">Hardware</h1>
          <hr className="w-full border-t-gray-400" />
        </div>

        <ul className="flex flex-col gap-[5px]">
          <li className="mainListItem">
            <button
              ref={btnModule22w}
              data-active={viewProduct === "Modulo TK-IO22W"}
              // data-active-sub-list-item={viewProduct === "Modulo TK-IO22W" || viewProduct === "Access Control"}
              className={`flex gap-[10px] min-w-[200px] items-center justify-end p-[5px_15px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "Modulo TK-IO22W"
                  ? "!text-white !border-black"
                  : ""
              }`}
              onClick={() => {
                setViewProduct("Modulo TK-IO22W");
                scroll({
                  top: 0,
                  left: 0,
                });
              }}
              onMouseEnter={() => handleMouseEnter("Modulo TK-IO22W")}
              onMouseLeave={() => handleMouseLeave("Modulo TK-IO22W")}
              title="Abrir producto"
              type="button"
            >
              <span>Modulo TK-IO22W</span>
              <ArrowIcon />
            </button>
            {/* <ul className="subListItem">
              <li>
                <button
                  ref={btnAccessControl}
                  data-active={viewProduct === "Access Control"}
                  className={`flex gap-[10px] min-w-[100px] items-center justify-end p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${viewProduct === "Modulo TK-IO22W" ? "!text-white !border-black" : ""}`}
                  onClick={() => setViewProduct("Access Control")}
                  onMouseEnter={() => popoverAccessControl1.current?.showPopover(btnAccessControl.current as HTMLButtonElement)}
                  onMouseLeave={() => popoverAccessControl1.current?.close()}
                  title="Abrir producto"
                  type="button"
                >
                  <span>Access Control</span>
                  <ArrowIcon />
                </button>
              </li>
            </ul> */}

            <Popover
              ref={popoverModule22}
              gapTop={-(btnModule44w.current?.offsetHeight ?? 100)}
              gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}
            >
              <div className="flex flex-col gap-[10px] items-center">
                {previewFor("Modulo TK-IO22W")}
              </div>
            </Popover>
          </li>

          <li className="mainListItem">
            <button
              ref={btnModule44w}
              data-active={viewProduct === "Modulo TK-IO24W2"}
              // data-active-sub-list-item={viewProduct === "Modulo TK-IO24W2" || viewProduct === "Access Control"}
              className={`flex gap-[10px] min-w-[200px] items-center justify-end p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "Modulo TK-IO24W2"
                  ? "!text-white !border-black"
                  : ""
              }`}
              onClick={() => {
                setViewProduct("Modulo TK-IO24W2");
                scroll({
                  top: 0,
                  left: 0,
                });
              }}
              onMouseEnter={() => handleMouseEnter("Modulo TK-IO24W2")}
              onMouseLeave={() => handleMouseLeave("Modulo TK-IO24W2")}
              type="button"
              title="Abrir Producto"
            >
              <span>Modulo TK-IO24W2</span>
              <ArrowIcon />
            </button>

            <Popover
              ref={popoverModule44}
              gapTop={-(btnModule44w.current?.offsetHeight ?? 100)}
              gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}
            >
              <div className="flex flex-col gap-[10px] items-center">
                {previewFor("Modulo TK-IO24W2")}
              </div>
            </Popover>
          </li>

          <li>
            <button
              ref={btnLectorTk}
              data-active={viewProduct === "TK-Lector"}
              onClick={() => {
                setViewProduct("TK-Lector");
                scroll({
                  top: 0,
                  left: 0,
                });
              }}
              onMouseEnter={() => handleMouseEnter("TK-Lector")}
              onMouseLeave={() => handleMouseLeave("TK-Lector")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "TK-Lector" ? "!text-white !border-black" : ""
              }`}
            >
              <span>Lector TK</span>
              <ArrowIcon />
            </button>

            <Popover
              ref={popoverLector}
              gapTop={-(btnModule44w.current?.offsetHeight ?? 100)}
              gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}
            >
              <div className="flex flex-col gap-[10px] items-center">
                {previewFor("TK-Lector")}
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
            <button
              ref={btnTgate}
              onClick={() => {
                setViewProduct("Tgate");
                scroll({
                  top: 0,
                  left: 0,
                });
              }}
              onMouseEnter={() => handleMouseEnter("Tgate")}
              onMouseLeave={() => handleMouseLeave("Tgate")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "Tgate" ? "!text-white !border-black" : ""
              }`}
            >
              <span>TGate</span>
              <ArrowIcon />
            </button>

            <Popover
              ref={popoverTgate}
              gapTop={-(btnModule44w.current?.offsetHeight ?? 100)}
              gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}
            >
              <div className="flex flex-col gap-[10px] items-center">
                {previewFor("Tgate")}
              </div>
            </Popover>
          </li>
          <li>
            <button
              ref={btnNodemaker}
              onClick={() => {
                setViewProduct("Nodemaker");
                scroll({ top: 0, left: 0 });
              }}
              onMouseEnter={() => handleMouseEnter("Nodemaker")}
              onMouseLeave={() => handleMouseLeave("Nodemaker")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "Tgate" ? "!text-white !border-black" : ""
              }`}
            >
              <span>Nodemaker</span>
              <ArrowIcon />
            </button>

            <Popover
              ref={popoverNodemaker}
              gapTop={-(btnModule44w.current?.offsetHeight ?? 100)}
              gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}
            >
              <div className="flex flex-col gap-[10px] items-center">
                {previewFor("Nodemaker")}
              </div>
            </Popover>
          </li>
          <li>
            <button
              ref={btnTShow}
              onClick={() => {
                setViewProduct("TShow");
                scroll({ top: 0, left: 0 });
              }}
              onMouseEnter={() => handleMouseEnter("TShow")}
              onMouseLeave={() => handleMouseLeave("TShow")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "Tgate" ? "!text-white !border-black" : ""
              }`}
            >
              <span>TShow</span>
              <ArrowIcon />
            </button>

            <Popover
              ref={popoverTShow}
              gapTop={-(btnModule44w.current?.offsetHeight ?? 100)}
              gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}
            >
              <div className="flex flex-col gap-[10px] items-center">
                {previewFor("TShow")}
              </div>
            </Popover>
          </li>
          <li>
            <button
              ref={btnLDM}
              onClick={() => {
                setViewProduct("LDM");
                scroll({ top: 0, left: 0 });
              }}
              onMouseEnter={() => handleMouseEnter("LDM")}
              onMouseLeave={() => handleMouseLeave("LDM")}
              type="button"
              className={`flex gap-[10px] min-w-[200px] items-center justify-center p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                viewProduct === "Tgate" ? "!text-white !border-black" : ""
              }`}
            >
              <span>LDM</span>
              <ArrowIcon />
            </button>

            {/* <Popover ref={popoverNodemaker} gapTop={-(btnModule44w.current?.offsetHeight ?? 100)} gapLeft={(btnModule44w.current?.offsetWidth ?? 100) + 15}>
              <div className="flex flex-col gap-[10px] items-center">{previewFor("Nodemaker")}</div>
            </Popover> */}
          </li>
        </ul>
      </aside>

      <section
        ref={viewProductDescription}
        className="flex flex-col gap-[1.5lh]"
      >
        {viewProduct === "Modulo TK-IO22W" || viewProduct === "Modulo TK-IO24W2"
          ? renderModuleTk()
          : viewProduct === "Tgate"
          ? renderTGate()
          : viewProduct === "TK-Lector"
          ? renderLectorTk()
          : viewProduct === "Nodemaker"
          ? renderNodeMaker()
          : viewProduct === "Access Control"
          ? renderAccessControl()
          : viewProduct === "TShow"
          ? renderTshow()
          : null}
      </section>

      <aside className="sticky top-[125px] self-start flex flex-col items-center gap-[20px]">
        <div>
          <h1 className="text-[18px]">{t("tabla_de_contenido")}</h1>
          <ul
            className={`listOfNav mt-[10px] flex-col items-start gap-[5px] min-h-[150px]`}
            ref={listOfNav}
          >
            {(anchors[viewProduct] ?? []).map((el) => el)}
            {viewProduct === "Modulo TK-IO22W" ||
            viewProduct === "Modulo TK-IO24W2" ? (
              <>
                <li>
                  <button
                    ref={btnAccessControl}
                    className={`flex gap-[10px] min-w-[100px] items-center justify-end p-[5px_10px] btnSection rounded-[8px] hover:text-white text-gray-300 ${
                      viewProduct === "Modulo TK-IO22W"
                        ? "!text-white !border-black"
                        : ""
                    }`}
                    onClick={() => {
                      setViewProduct("Access Control");
                      scroll({
                        top: 0,
                        left: 0,
                      });
                    }}
                    onMouseEnter={() =>
                      popoverAccessControl1.current?.showPopover(
                        btnAccessControl.current as HTMLButtonElement
                      )
                    }
                    onMouseLeave={() => popoverAccessControl1.current?.close()}
                    title="Abrir producto"
                    type="button"
                  >
                    <ArrowIcon className="rotate-[270deg]" />
                    <span>Access Control</span>
                  </button>
                </li>
                <Popover
                  ref={popoverAccessControl1}
                  gapTop={
                    -(btnAccessControl.current?.offsetHeight ?? 100) - 150
                  }
                  gapLeft={-(btnAccessControl.current?.offsetWidth ?? 100) - 80}
                >
                  <div className="flex flex-col gap-[10px] items-center">
                    {previewFor("Access Control")}
                  </div>
                </Popover>
              </>
            ) : null}
          </ul>
        </div>
        <hr className="border-t-gray-400 w-full" />
        {renderBtnDownload()}
      </aside>
    </article>
  );
}

// Icona reutilizable
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-white size-[16px] rotate-90 ${className}`}
      viewBox="0 -4.5 20 20"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="inherit"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-260.000000, -6684.000000)"
          fill="inherit"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" />
          </g>
        </g>
      </g>
    </svg>
  );
}
