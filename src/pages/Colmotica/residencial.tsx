import { useTranslation } from 'react-i18next'
import './../../Styles/residencial.css'

export default function Residencial() {
  const { t } = useTranslation();
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>{ t("residencial")}</p>
          <p className="sub">{t("residencial_1") }</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">{t("residencial_2")}</p>
            <p className="subtitle-all">{t("residencial_3")}</p>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("residencial_4")}</p>
            <p className="subtitle-all">{t("residencial_5")}</p>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad !max-w-none" src="/img/colmotica/res.png" alt="imagen" width={"auto"}/>
        </div>
      </div>
    </>
  )
}
