import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";
import ProductSlider from "../../components/Colmotica/ProductSlider/ProductSlider";
// import './../../Styles/mainColmotica.css'
export default function Home() {
  const { t } = useTranslation()
  return (
    <Fragment>
      <div className="flex justify-center items-center flex-col">
        <section className="pd-g dflex encabezado-frace">
          <div className="dflex flex-initial">
            <p dangerouslySetInnerHTML={{ __html: t("home_inteligencia") }}></p>
            <p className="sub" dangerouslySetInnerHTML={{ __html: t("home_domotica") }}></p>
          </div>
        </section>

        <section className="pd-g dflex secone">
          <p className="title-all">{t("section_quienes_somos")}</p>
          <p className="subtitle-all">{t("home_somos")}</p>
        </section>

        <section className="pd-g dflex setwo">
          <div className="c-produc dflex">
            <div>
              <p className="title-all">{t("nav_soluciones")}</p>
              <p className="subtitle-all">{t("colmotica_desarrolla")}</p>
            </div>
            <img src="/img/colmotica/imgprduc.png" alt="imgproduct" />
          </div>
        </section>


        <section className="pd-g dflex setre max-w-max">
          <p className="title-all">{t("home_academia_2")}</p>
          <p className="subtitle-all">{t("colmotica_descubre")}</p>
          <img src="/img/colmotica/mujer pc.png" alt="imgproduct" />
          <NavLink to="/colmotica/academy" className="btn-general" onClick={() => scroll({top: 0, left: 0})}>{t("home_saber")}</NavLink>
        </section>

        <div className="dflex pd-g">
          <p className="title-all mg-top-100">{t("colmotica_sectores") }</p>
        </div>

        {/* <section className="pd-g dflex sefor">
          <div className="c-produc dflex mw400">
            <div>
              <p className="title-all fall25">{ t("colmotica_viviendas")}</p>
            </div>
            <img src="/img/colmotica/home 1.png" alt="imgproduct" width={"auto"} className="w80" />
          </div>
          <div className="c-produc dflex mw400">
            <div>
              <p className="title-all fall25">{t("colmotica_edificios")}</p>
            </div>
            <img src="/img/colmotica/home 2.png" alt="imgproduct" width={"auto"} className="w80" />
          </div>
          <div className="c-produc dflex mw400">
            <div>
              <p className="title-all fall25">{ t("colmotica_hoteles")}</p>
            </div>
            <img src="/img/colmotica/home 3.png" alt="imgproduct" width={"auto"} className="w80" />
          </div>
        </section> */}
        <ProductSlider></ProductSlider>
        <NavLink onClick={() => scroll({top: 0, left: 0})} to="/colmotica/soluciones" className="btn-general">{t("home_saber") }</NavLink>

        <section className="pd-g dflex setre">
          <p className="title-all">{t("nav_consultorias")}</p>
          <p className="subtitle-all">{t("colmotica_encol") }</p>
          <img src="/img/colmotica/consultorias.png" alt="imgproduct" />
          <NavLink onClick={() => scroll({top: 0, left: 0})} to={"/colmotica/consultorias"} type="button" className="btn-general">{t("home_saber")}</NavLink>
        </section>
      </div >
    </Fragment >
  )
}
