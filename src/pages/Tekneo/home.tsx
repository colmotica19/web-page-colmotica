import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { GlobalContext } from "../../singleton/globalContext";
import { useTranslation } from "react-i18next";
// import './../../Styles/index.css'
// import './../../Styles/tekneo.css'
export function HomePage() {
    const { setFocusHardware, setFocusSoftware } = useContext(GlobalContext)
    const {t} = useTranslation()
    return (
        <Fragment>
            <section className="encabezado-frace">
                <p data-i18n="frase_principal">
                    {t("frase_principal")}
                </p>
            </section>

            <section className="about">
                <div className="about__title">
                    <p className="about__title-que-es" >{t("section_quienes_somos") }</p>
                </div>

                <div className="about__contenido">
                    <p dangerouslySetInnerHTML={{__html: t("quienes_somos_parrafo") }}>
                    </p>
                </div>
            </section>

            <section className="funcion pd-cancel-left pd-cancel-bottom pd-cancel-top bg-f0">
                <div className="img-people">
                    <img src="/img/Img-perona-celular.png" className="Img-perona-celular" alt="Img-perona-celular" />
                </div>

                <div className="txt-conten">
                    <h1 className="about__title-que-es mg-botton-20">{t("sobre_tekneo") }</h1>
                    <p className="about__contenido__p line-">
                        {t("home_tekneo") }
                    </p>
                </div>
            </section>

            <section className="funcion-integral txt-conten-center">
                <div>
                    {/* <p className="about__title-quienes txt-center">FUNCIONES INTEGRALES</p> */}
                    <h1 className="about__title-que-es mg-botton-20 txt-center">
                        {t("recursos") }
                    </h1>
                </div>

                <div className="container-card">
                    <div className="container-card__cards holographic-card">
                        <img src="/img/Dowload App.png" alt="Dowload" />
                        <p className="title-app">{t("home_academia") }</p>
                    </div>

                    <button type="button" className="container-card__cards holographic-card" onClick={() => {
                        setFocusHardware(false)
                        setFocusSoftware(true)
                    }}>
                        <img src="/img/Manuales.png" alt="Manuales" />
                        <p className="title-app">{t("home_productos") }</p>
                    </button>

                    <div className="container-card__cards holographic-card">
                        <img src="/img/Video.png" alt="Video" />
                        <p className="title-app">{t("nav_soporte") }</p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
