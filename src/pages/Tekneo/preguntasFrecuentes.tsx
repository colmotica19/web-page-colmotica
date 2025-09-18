import { useTranslation } from "react-i18next"
import { LeftAside, type NavButton } from "../../components/Tekneo/Documentation/LeftAside"
import { RightAside } from "../../components/Tekneo/Documentation/RightAside"
import { useCallback, useRef, useState, type JSX } from "react"

export default function PreguntasFrecuentes() {
  const { t } = useTranslation()
  const [anchors, setAnchors] = useState<Record<string, JSX.Element[]>>();
  const [viewProduct, setViewProduct] = useState<string>("Ho")
  const viewSection = useRef<HTMLElement>(null)
  const buttonsToRender: NavButton[] = [
    {
      key: "Hola Mundo",
      childrenPopover: <span>Hola Mundo</span>,
      label: "Hola Mundo 2",
      ariaLabel: "Abrir Hola mundo",
      onClick() {
        setViewProduct("Hola mundo")
      },
    }
  ]
  const generateAnchorsBasedInTheContent = useCallback(() => {
    const target = viewSection.current;
    if (!target) return;

    const allItemsWithId = Array.from(target.querySelectorAll<HTMLElement>("[id]")).filter(
      (el) => el.id
    );

    const anchorsJsx = allItemsWithId.map((item) => {

      return (
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
      )
    });
    setAnchors({ [viewProduct]: anchorsJsx });

  }, [viewProduct]);

  const renderCommonFaq = useCallback(() => {
    return (
      <div className="p-8 max-w-[800px] m-[30px_auto] flex flex-col gap-[20px]">
        <h1 className="text-4xl">{t("faq_titulo")}</h1>

        <h2 className="text-3xl">{t("faq_q1")}</h2>
        <p>
          {t("faq_a1")}
        </p>

        <h2 className="text-3xl">{t("faq_q2")}</h2>
        <p>
          {t("faq_a2")}
        </p>

        <h2 className="text-3xl">{t("faq_q3")}</h2>
        <p>
          {t("faq_a3")}
        </p>

        <h2 className="text-3xl">{t("faq_q4")}</h2>
        <p>
          {t("faq_a4")}
        </p>

        <h2 className="text-3xl">{t("faq_q5")}</h2>
        <p>
          {t("faq_a5")}
        </p>

        <h2 className="text-3xl">{t("faq_q6")}</h2>
        <p>
          {t("faq_a6")}
        </p>

        <h2 className="text-3xl">{t("faq_q7")}</h2>
        <p>
          {t("faq_a7")}
        </p>
      </div>
    )
  }, [t])

  const renderSection = useCallback(() => {
    switch (viewProduct) {
      case 'Hola mundo':
        return renderCommonFaq()
        break;
      default:
        return null;
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewProduct])

  return (
    <>
      <LeftAside title="Preguntas" buttons={buttonsToRender}>

      </LeftAside>
      <section ref={viewSection}>
        {renderSection()}
      </section>
      <RightAside anchors={anchors } viewProduct={viewProduct}></RightAside>
    </>
  )
}
