import { useTranslation } from "react-i18next"
import { LeftAside, type NavButton } from "../../components/Tekneo/Documentation/LeftAside"
import { RightAside } from "../../components/Tekneo/Documentation/RightAside"
import { useCallback, useEffect, useRef, useState, type JSX } from "react"

export default function PreguntasFrecuentes() {
  const { t } = useTranslation()
  const [anchors, setAnchors] = useState<Record<string, JSX.Element[]>>();
  const [viewProduct, setViewProduct] = useState<typeof buttonsToRender[number]["key"]>("Preguntas Frecuentes")
  const viewSection = useRef<HTMLElement>(null)
  const listOfNavRef = useRef<HTMLUListElement>(null)
  const buttonsToRender = [
    {
      key: "Preguntas Frecuentes",
      childrenPopover: <span>Preguntas Frecuentes</span>,
      ariaLabel: "Abrir Preguntas Frecuentes",
      onClick() {
        setViewProduct("Preguntas Frecuentes")
      },
    },
    {
      key: "Test",
      childrenPopover: <span>Test</span>,
      ariaLabel: "Abrir Preguntas Frecuentes",
      onClick() {
        setViewProduct("Test")
      },
    }
  ] as const
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



  // Observers: se registran cuando cambia el producto
  useEffect(() => {
    generateAnchorsBasedInTheContent();
  }, [viewProduct, generateAnchorsBasedInTheContent]);

  const renderCommonFaq = useCallback(() => {
    return (
      <>
        <h1 className="text-4xl">{t("faq_titulo")}</h1>

        <h2 className="text-3xl" id="2" data-title-anchor={t("faq_q1")}>{t("faq_q1")}</h2>
        <p>
          {t("faq_a1")}
        </p>

        <h2 className="text-3xl" id="3" data-title-anchor={t("faq_q2")}>{t("faq_q2")}</h2>
        <p>
          {t("faq_a2")}
        </p>

        <h2 className="text-3xl" id="4" data-title-anchor={t("faq_q3")}>{t("faq_q3")}</h2>
        <p>
          {t("faq_a3")}
        </p>

        <h2 className="text-3xl" id="5" data-title-anchor={t("faq_q4")}>{t("faq_q4")}</h2>
        <p>
          {t("faq_a4")}
        </p>

        <h2 className="text-3xl" id="6" data-title-anchor={t("faq_q5")}>{t("faq_q5")}</h2>
        <p>
          {t("faq_a5")}
        </p>

        <h2 className="text-3xl" id="7" data-title-anchor={t("faq_q6")}>{t("faq_q6")}</h2>
        <p>
          {t("faq_a6")}
        </p>

        <h2 className="text-3xl" id="8" data-title-anchor={t("faq_q7")}>{t("faq_q7")}</h2>
        <p>
          {t("faq_a7")}
        </p>
      </>
    )
  }, [t])

  const renderSection = useCallback(() => {
    switch (viewProduct) {
      case 'Preguntas Frecuentes':
        return renderCommonFaq()
        break;
      default:
        return null;
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewProduct])

  return (
    <section className="grid grid-cols-[200px_50vw_200px] place-content-center mt-[50px] mb-[150px]">
      <LeftAside title="Preguntas" buttons={buttonsToRender as unknown as NavButton[]} activeKey={viewProduct}>
      </LeftAside>
      <section className={`p-8 max-w-[800px] m-auto flex flex-col gap-[1.5lh]`} ref={viewSection}>
        {renderSection()}
      </section>
      <RightAside anchors={anchors} viewProduct={viewProduct} listOfNavRef={listOfNavRef} viewSection={viewSection}></RightAside>
    </section>
  )
}
