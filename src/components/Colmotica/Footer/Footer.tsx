import {
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
export function FooterComponentColmotica() {
  const { t } = useTranslation()
  const [telephoneCopied, setTelephoneCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopy = async (
    text: string,
    setValue: Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setValue(true);
      setTimeout(() => setValue(false), 1500); // se quita después de 1.5s
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  function resetScroll() {
    scroll({top: 0, left: 0})
  }

  return (
    <>
      <footer data-page="colmotica">
        <div className="footer-container ">
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_empresa")}</h4>
            <NavLink to="/colmotica/" onClick={() => resetScroll()}>{t("footer_inicio")}</NavLink>
            <NavLink to="/colmotica/academy" onClick={() => resetScroll()}>{t("home_academia_2")}</NavLink>
            <NavLink to="/colmotica/consultorias" onClick={() => resetScroll()}>{t("nav_consultorias")}</NavLink>
          </div>
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("nav_soluciones")}</h4>
            <NavLink to={"/colmotica/residencial"} onClick={() => resetScroll()}>{t("colmotica_viviendas")}</NavLink>
            <NavLink to={"/colmotica/edificios"} onClick={() => resetScroll()}>{t("colmotica_edificios")}</NavLink>
            <NavLink to={"/colmotica/hoteles"} onClick={() => resetScroll()}>{t("colmotica_hoteles")}</NavLink>
          </div>
          {/* <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_soporte_titulo")}</h4>

          </div> */}
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_contacto")}</h4>
            <a href="https://maps.app.goo.gl/LzEZQtpqqvK2yZY89" target="_blank" rel="noopener">
              {t("footer_direccion1")}
            </a>
            <a href="https://maps.app.goo.gl/LzEZQtpqqvK2yZY89" target="_blank" rel="noopener">
              {t("footer_direccion2")}
            </a>
            <button
              type="button"
              onClick={() => handleCopy("+57 3015678899", setTelephoneCopied)}
              className="text-left"
            >
              {telephoneCopied ? t("footer_copiado") : t("footer_telefono")}
            </button>
            <button
              type="button"
              className="text-left"
              onClick={() => handleCopy("info@tekeno.es", setIsEmailCopied)}
            >
              {isEmailCopied ? t("footer_copiado") : t("footer_email")}
            </button>
            <div className="flex flex-row gap-[15px] justify-start mt-[10px]">
              <a
                href="https://www.facebook.com/?locale=es_LA"
                title="Facebook"
                target="_blank"
                rel="noopener"
              >
                <FaFacebookF size={26} />
              </a>
              <a
                href="https://web.whatsapp.com/"
                title="Whatsapp"
                target="_blank"
                rel="noopener"
              >
                <SiWhatsapp size={26} />
              </a>
              <a href="https://x.com/" title="X" target="_blank" rel="noopener">
                <BsTwitterX size={26} />
              </a>
              <a
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener"
              >
                <FaInstagram size={26}></FaInstagram>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="ftr-back">
        <img src="/img/Loho tekneo horizontal.png" alt="logo teckneo" />
        <p className="ftr-back-t1">
          {t("footer_derechos")}
        </p>
        <p className="ftr-back-t2">
          {t("footer_legal")}
        </p>
      </div>
    </>
  );
}
