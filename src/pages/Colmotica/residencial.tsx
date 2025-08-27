import { useTranslation } from 'react-i18next'
import './../../Styles/residencial.css'

export default function Residencial() {
  const { t } = useTranslation();
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>{t("residencial")}</p>
          <p className="sub">{t("residencial_1")}</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">{t("residencial_2")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_3") }}></p>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("residencial_4")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_5") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_6")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_7") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_7.5")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_8") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_9")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_10") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_11")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_12") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_13")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_14") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_15")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_16") }}></p>
          </section>
          <div className="dflex line"></div>
          <section className="secone-acad">
            <p className="title-all">{t("residencial_17")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("residencial_18") }}></p>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad !max-w-none" src="/img/colmotica/res.png" alt="imagen" width={"auto"} />
        </div>
      </div>
    </>
  )
}
