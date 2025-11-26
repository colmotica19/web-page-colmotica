import { useTranslation } from "react-i18next"
import { LeftAside, type NavButton } from "../../components/Tekneo/Documentation/LeftAside"
import { RightAside } from "../../components/Tekneo/Documentation/RightAside"
import { useCallback, useEffect, useRef, useState, type JSX } from "react"

export default function PoliticaDePrivacidad() {
  const { t } = useTranslation()
  const [anchors, setAnchors] = useState<Record<string, JSX.Element[]>>()
  const [viewProduct, setViewProduct] = useState<typeof buttonsToRender[number]["key"]>("Politica de Privacidad")
  const viewSection = useRef<HTMLElement>(null)
  const listOfNavRef = useRef<HTMLUListElement>(null)

  const buttonsToRender = [
    {
      key: "Politica de Privacidad",
      childrenPopover: <span>Privacidad</span>,
      ariaLabel: "Abrir política",
      onClick() {
        setViewProduct("Politica de Privacidad")
      },
    },
  ] as const

  const generateAnchorsBasedInTheContent = useCallback(() => {
    const target = viewSection.current;
    if (!target) return;
    const allItemsWithId = Array.from(target.querySelectorAll<HTMLElement>("[id]"));
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

  useEffect(() => {
    generateAnchorsBasedInTheContent();
  }, [viewProduct, generateAnchorsBasedInTheContent]);

  return (
    <section className="grid grid-cols-[200px_50vw_200px] place-content-center mt-[50px] mb-[150px] gap-[8%]">
      <LeftAside title="Legal" buttons={buttonsToRender as unknown as NavButton[]} activeKey={viewProduct}></LeftAside>
      <section ref={viewSection} className={`p-8 m-auto flex flex-col gap-[1.5lh]`}>
        <h1 className="text-4xl">{t("legal_privacidad_titulo")}</h1>
        <p>{t("legal_privacidad_p1")}</p>
        <h2 className="text-3xl" id="h1" data-title-anchor={t("legal_privacidad_h2_1")}>{t("legal_privacidad_h2_1")}</h2>
        <p>{t("legal_privacidad_p2")}</p>
        <h2 className="text-3xl" id="h2" data-title-anchor={t("legal_privacidad_h2_2")}>{t("legal_privacidad_h2_2")}</h2>
        <p>{t("legal_privacidad_p3")}</p>
        <h2 className="text-3xl" id="h3" data-title-anchor={t("legal_privacidad_h2_3")}>{t("legal_privacidad_h2_3")}</h2>
        <p>{t("legal_privacidad_p4")}</p>
        <p>{t("legal_privacidad_p5")}</p>
      </section>
      <RightAside anchors={anchors} viewProduct={viewProduct} listOfNavRef={listOfNavRef} viewSection={viewSection}></RightAside>
    </section>
  )
}
