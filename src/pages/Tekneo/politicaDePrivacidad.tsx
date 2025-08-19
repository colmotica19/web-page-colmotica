import { useTranslation } from "react-i18next"

export default function PoliticaDePrivacidad() {
  const {t} = useTranslation()
  return (
    <>
      <div className="p-8 max-w-[800px] m-auto flex flex-col gap-[20px]">
        <h1 className="text-4xl">{t("legal_privacidad_titulo") }</h1>
        <p>
          {t("legal_privacidad_p1")}
        </p>
        <h2 className="text-3xl">{t("legal_privacidad_h2_1") }</h2>
        <p>
          {t("legal_privacidad_p2") }
        </p>
        <h2 className="text-3xl">{t("legal_privacidad_h2_2") }</h2>
        <p>
          {t("legal_privacidad_p3") }
        </p>
        <h2 className="text-3xl">{t("legal_privacidad_h2_3") }</h2>
        <p>
          {t("legal_privacidad_p4") }
        </p>
        <p>
          {t("legal_privacidad_p5") }
        </p>
      </div>
    </>
  )
}
