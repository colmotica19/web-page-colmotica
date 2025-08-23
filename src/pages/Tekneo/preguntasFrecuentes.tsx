import { useTranslation } from "react-i18next"

export default function PreguntasFrecuentes() {
  const { t } = useTranslation()
  return (
    <>
      <div className="p-8 max-w-[800px] m-[30px_auto] flex flex-col gap-[20px]">
        <h1 className="text-4xl">{t("faq_titulo")}</h1>

        <h2 className="text-3xl">{t("faq_q1") }</h2>
        <p>
          {t("faq_a1") }
        </p>

        <h2 className="text-3xl">{t("faq_q2") }</h2>
        <p>
          {t("faq_a2") }
        </p>

        <h2 className="text-3xl">{t("faq_q3") }</h2>
        <p>
          {t("faq_a3") }
        </p>

        <h2 className="text-3xl">{t("faq_q4") }</h2>
        <p>
          {t("faq_a4") }
        </p>

        <h2 className="text-3xl">{t("faq_q5") }</h2>
        <p>
          {t("faq_a5") }
        </p>

        <h2 className="text-3xl">{t("faq_q6") }</h2>
        <p>
          {t("faq_a6") }
        </p>

        <h2 className="text-3xl">{t("faq_q7") }</h2>
        <p>
          {t("faq_a7") }
        </p>
      </div>
    </>
  )
}
