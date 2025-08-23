"use client";

import { useTranslation } from "react-i18next";
import "./ProductSlider.css";

export default function ProductSlider() {
  const { t } = useTranslation();

  return (
    <section className="slider">
      <div className="slides">
        <div className="slide">
          <p className="title-all fall25">{t("colmotica_viviendas")}</p>
          <img src="/img/colmotica/home 1.png" alt="imgproduct" />
        </div>

        <div className="slide">
          <p className="title-all fall25">{t("colmotica_edificios")}</p>
          <img src="/img/colmotica/home 2.png" alt="imgproduct" />
        </div>

        <div className="slide">
          <p className="title-all fall25">{t("colmotica_hoteles")}</p>
          <img src="/img/colmotica/home 3.png" alt="imgproduct" />
        </div>
      </div>
    </section>
  );
}
