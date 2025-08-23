import { useTranslation } from 'react-i18next';
import './../../Styles/hoteles.css';
export default function Hoteles() {
  const {t} = useTranslation()
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>{t("hoteles") }</p>
          <p className="sub">{t("hoteles_1") }</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">{t("hoteles_2") } </p>
            <p className="subtitle-all">{t("hoteles_3") }</p>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("hoteles_4") }</p>
            <p className="subtitle-all">{t("hoteles_5") }</p>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad !max-w-none" src="/img/colmotica/hotell.png" alt="imagen" width={"auto"} />
        </div>
      </div>
    </>
  )
}
