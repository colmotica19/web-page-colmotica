import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";
// import './../../Styles/mainColmotica.css'
export default function Home() {
  const { t } = useTranslation()
  return (
    <Fragment>
      <div className="flex justify-center items-center flex-col">
        <section className="pd-g dflex encabezado-frace">
          <div className="dflex flex-initial">
            <p dangerouslySetInnerHTML={{__html: t("home_inteligencia") }}></p>
            <p className="sub" dangerouslySetInnerHTML={{__html: t("home_domotica") }}></p>
          </div>
        </section>

        <section className="pd-g dflex secone">
          <p className="title-all">{t("section_quienes_somos") }</p>
          <p className="subtitle-all">{t("home_somos") }</p>
        </section>

        <section className="pd-g dflex setwo">
          <div className="c-produc dflex">
            <div>
              <p className="title-all">{t("nav_productos") }</p>
              <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
            <img src="/img/colmotica/imgprduc.png" alt="imgproduct" />
          </div>
        </section>


        <section className="pd-g dflex setre max-w-max">
          <p className="title-all">{t("home_academia")}</p>
          <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
          <img src="/img/colmotica/mujer pc.png" alt="imgproduct" />
          <button className="btn-general">{t("home_saber") }</button>
        </section>

        <section className="pd-g dflex sefor mg-top-100">
          <div className="c-produc dflex">
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
            <div>
              <p className="title-all">{t("nav_productos") }</p>
              <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
          </div>
          <div className="c-produc dflex">
            <div>
              <p className="title-all">{t("nav_productos") }</p>
              <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
          </div>
        </section>
        <section className="pd-g dflex sefor">
          <div className="c-produc dflex">
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
            <div>
              <p className="title-all">{t("nav_productos") }</p>
              <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
          </div>
          <div className="c-produc dflex">
            <div>
              <p className="title-all">{t("nav_productos") }</p>
              <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
          </div>
        </section>

        <section className="pd-g dflex setre">
          <p className="title-all">{t("nav_consultorias") }</p>
          <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
          <img src="/img/colmotica/consultorias.png" alt="imgproduct" />
          <button type="button" className="btn-general">{t("home_saber") }</button>
        </section>
      </div>
    </Fragment>
  )
}
