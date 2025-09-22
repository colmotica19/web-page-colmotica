import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { GlobalContext } from "../../singleton/globalContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
// import './../../Styles/index.css'
// import './../../Styles/tekneo.css'
export function HomePage() {
  const { setFocusHardware, setFocusSoftware } = useContext(GlobalContext)
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <Fragment>
      <section className="encabezado-frace">
        <p data-i18n="frase_principal">
          {t("frase_principal")}
        </p>
      </section>

      <section className="about">
        <div className="about__title">
          <p className="about__title-que-es" >{t("section_quienes_somos")}</p>
        </div>

        <div className="about__contenido">
          <p dangerouslySetInnerHTML={{ __html: t("quienes_somos_parrafo") }}>
          </p>
        </div>
      </section>

      <section className="funcion pd-cancel-left pd-cancel-bottom pd-cancel-top bg-f0">
        <div className="img-people">
          <img src="/img/Img-perona-celular.png" className="Img-perona-celular" alt="Img-perona-celular" />
        </div>

        <div className="txt-conten">
          <h1 className="about__title-que-es mg-botton-20">{t("sobre_tekneo")}</h1>
          <p className="about__contenido__p line-" dangerouslySetInnerHTML={{ __html: t("home_tekneo") }}>

          </p>
        </div>
      </section>

      <section className="funcion-integral txt-conten-center">
        <div>
          {/* <p className="about__title-quienes txt-center">FUNCIONES INTEGRALES</p> */}
          <h1 className="about__title-que-es mg-botton-20 txt-center">
            {t("recursos")}
          </h1>
        </div>

        <div className="container-card">
          <button className="container-card__cards holographic-card" onClick={() => navigate("/documentacion")}>
            {/* <img src="/img/Dowload App.png" alt="Dowload" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="inherit" version="1.1" id="Layer_1" viewBox="0 0 512.001 512.001" xmlSpace="preserve" className="fill-white size-[100px]">
              <g>
                <g>
                  <path d="M336.129,173.05L199.272,36.199c-3.851-3.85-9.071-6.012-14.515-6.012H20.529C9.191,30.187,0,39.378,0,50.715v410.571    c0,11.337,9.191,20.529,20.529,20.529h301.086c11.337,0,20.529-9.191,20.529-20.529v-273.72    C342.143,182.121,339.98,176.9,336.129,173.05z M205.286,100.274l66.767,66.764h-66.767V100.274z M301.086,440.758H41.057V71.244    h123.171v116.323c0,11.337,9.191,20.529,20.529,20.529h116.328V440.758z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M239.5,344.958H102.643c-11.337,0-20.529,9.191-20.529,20.529s9.191,20.529,20.529,20.529H239.5    c11.337,0,20.529-9.191,20.529-20.529C260.028,354.148,250.837,344.958,239.5,344.958z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M239.5,262.844H102.643c-11.337,0-20.529,9.191-20.529,20.529c0,11.337,9.191,20.529,20.529,20.529H239.5    c11.337,0,20.529-9.191,20.529-20.529C260.028,272.034,250.837,262.844,239.5,262.844z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M505.988,36.199c-3.85-3.85-9.071-6.013-14.516-6.013h-87.743c-5.446,0-10.667,2.164-14.516,6.013    s-6.012,9.072-6.012,14.516l0.003,366.702c0,5.446,2.162,10.667,6.014,14.516l43.87,43.87c4.009,4.009,9.263,6.014,14.515,6.014    c5.253,0,10.508-2.004,14.515-6.014l43.87-43.87c3.85-3.85,6.013-9.071,6.013-14.516l0.003-366.702    C512,45.271,509.838,40.048,505.988,36.199z M470.94,408.914l-23.341,23.341l-23.341-23.341l-0.001-337.67h46.686L470.94,408.914z    " />
                </g>
              </g>
            </svg>
            <p className="title-app">{t("nav_documentacion")}</p>
          </button>

          <button type="button" className="container-card__cards holographic-card" onClick={() => {
            setFocusHardware(false)
            setFocusSoftware(true)
          }}>
            <img src="/img/Manuales.png" alt="Manuales" />
            <p className="title-app">{t("home_productos")}</p>
          </button>

          <button className="container-card__cards holographic-card" onClick={() => navigate("/socios")}>
            {/* <img src="/img/Video.png" alt="Video" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" className="fill-white size-[100px]">
              <g>
                <path d="M77,31.7h-6c-1.3,0-2.6-0.6-3.6-1.5l-4.8-4.1c-1-0.8-2.3-1.4-3.6-1.4H47.3c-1.5,0-2.9,0.6-4,1.7l-6.2,5.1   c-0.5,0.4-0.5,1.2-0.1,1.7l1.9,1.8c1.3,1,3,1.2,4.3,0.3l5.5-3.3c0.7-0.5,1.7-0.3,2.3,0.3l17.3,16.8c0.4,0.4,0.7,1,0.7,1.6v4.5   c0,1.2,0.9,2.5,2,2.5h6c1.1,0,2-0.9,2-2.1V33.7C79,32.5,78.1,31.7,77,31.7z M60,49.7L49.2,39.2l-3,1.8c-1.5,0.9-3.2,1.4-4.9,1.4   c-2.1,0-4.3-0.8-6-2.2L31.4,37c-0.9-0.7-1.4-1.5-1.5-2.6c-0.2-1.1-1-1.7-2-1.7H21c-1.1,0-2,0.6-2,1.8v18.2c0,1.2,0.9,2,2,2h4   c0.3,0,0.7-1.1,1.1-1.6c1.5-2,3.7-3.1,6.1-3.4c2.4-0.2,4.7,0.6,6.6,2.3l12.5,11.4c1.1,1,1.9,2.1,2.4,3.5c0.3,0.7,1.1,0.9,1.6,0.4   l4.7-4.7c2.4-2.4,4.2-8,2-10.6L60,49.7z M34.9,57.1c-1.3-1.2-3.2-1-4.2,0.4c-1.1,1.4-0.9,3.4,0.4,4.6l12.5,11.3   c0.6,0.6,1.4,0.8,2.2,0.7c0.8-0.1,1.5-0.5,2-1.2c1.1-1.4,0.9-3.4-0.4-4.6L34.9,57.1z" />
              </g>
              <path d="M78.9,75.3" />
            </svg>
            <p className="title-app">{t("nav_socios")}</p>
          </button>
        </div>
      </section>
    </Fragment>
  );
}
