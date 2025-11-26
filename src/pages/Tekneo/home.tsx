// home.tsx

import toast from "react-hot-toast";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { GlobalContext } from "../../singleton/globalContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function HomePage() {
  const { setFocusHardware, setFocusSoftware } = useContext(GlobalContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.verified === false) {
      toast.error(
        "Tu cuenta no está verificada. Debes verificarla o será eliminada."
      );
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <Fragment>
      <section className="encabezado-frace">
        <p data-i18n="frase_principal">{t("frase_principal")}</p>
      </section>

      <section className="about">
        <div className="about__title">
          <p className="about__title-que-es">{t("section_quienes_somos")}</p>
        </div>

        <div className="about__contenido">
          <p dangerouslySetInnerHTML={{ __html: t("quienes_somos_parrafo") }} />
        </div>
      </section>

      <section className="funcion pd-cancel-left pd-cancel-bottom pd-cancel-top bg-f0">
        <div className="img-people">
          <img
            src="/img/Img-perona-celular.png"
            className="Img-perona-celular"
            alt="Img-perona-celular"
          />
        </div>

        <div className="txt-conten">
          <h1 className="about__title-que-es mg-botton-20">
            {t("sobre_tekneo")}
          </h1>
          <p
            className="about__contenido__p line-"
            dangerouslySetInnerHTML={{ __html: t("home_tekneo") }}
          />
        </div>
      </section>

      <section className="funcion-integral txt-conten-center">
        <div>
          <h1 className="about__title-que-es mg-botton-20 txt-center">
            {t("recursos")}
          </h1>
        </div>

        <div className="container-card">
          <button
            className="container-card__cards holographic-card"
            onClick={() => navigate("/documentacion")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              viewBox="0 0 512.001 512.001"
              className="fill-white size-[100px]"
            ></svg>
            <p className="title-app">{t("nav_documentacion")}</p>
          </button>

          <button
            type="button"
            className="container-card__cards holographic-card"
            onClick={() => {
              setFocusHardware(false);
              setFocusSoftware(true);
            }}
          >
            <img src="/img/Manuales.png" alt="Manuales" />
            <p className="title-app">{t("home_productos")}</p>
          </button>

          <button
            className="container-card__cards holographic-card"
            onClick={() => navigate("/socios")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="inherit"
              viewBox="0 0 100 100"
              xmlSpace="preserve"
              className="fill-white size-[100px]"
            ></svg>
            <p className="title-app">{t("nav_socios")}</p>
          </button>
        </div>
      </section>
    </Fragment>
  );
}
