import {
  useContext,
  useRef,
  useState,
  type Dispatch,
  type FormEvent,
  type FormEventHandler,
  type SetStateAction,
} from "react";
import "./Footer.css";
import { GlobalContext } from "../../../singleton/globalContext";
import { FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import Modal, { type ModalHandle } from "../../Tekneo/Modal/Modal";
export function FooterComponent({page}: {page: "tekneo" | "colmotica"}) {
  const {t} = useTranslation()
  const { setFocusHardware, setFocusSoftware } = useContext(GlobalContext);
  const modalRef = useRef<ModalHandle>(null);
  const formHandler: FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
  };
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

  return (
    <>
      <footer>
        <Modal ref={modalRef}>
          <div className="flex flex-col gap-[12px]">
            <h1 className="text-3xl">{t("footer_enviar_comentarios") }</h1>
            <form onSubmit={formHandler} className="flex flex-col gap-[8px]">
              <label className="text-[14px] text-gray-700" htmlFor="name">{t("footer_nombre_completo") }</label>
              <input type="text" name="name" id="name" className="border-[1px] p-[4px] border-gray-300 rounded-[4px] focus:outline-gray-400" />
              <label className="text-[14px] text-gray-700" htmlFor="country">{t("footer_pais") }</label>
              <select name="country" title="Selecciona un pais" id="country" className="border-[1px] p-[4px] border-gray-300 rounded-[4px] focus:outline-gray-400">
                <option value="">{t("footer_selecciona_pais")}</option>
                <option value="Colombia">Colombia</option>
                <option value="España">España</option>
                <option value="México">México</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="Perú">Perú</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brasil">Brasil</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Panamá">Panamá</option>
                <option value="Guatemala">Guatemala</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Honduras">Honduras</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Otro">{t("footer_otro_pais")}</option>
              </select>
              <label className="text-[14px] text-gray-700" htmlFor="tel">{t("footer_tel") }</label>
              <input type="tel" maxLength={13} name="tel" id="tel" className="border-[1px] p-[4px] border-gray-300 rounded-[4px] focus:outline-gray-400" />
              <label className="text-[14px] text-gray-700" htmlFor="email">{t("footer_correo") }</label>
              <input type="email" name="email" id="email" className="border-[1px] p-[4px] border-gray-300 rounded-[4px] focus:outline-gray-400" />
              <label className="text-[14px] text-gray-700" htmlFor="comentarios">{t("footer_opina") }</label>
              <textarea
                name="comentarios"
                id="comentarios"
                className="border-[1px] border-gray-300 rounded-[4px] p-[8px] focus:outline-gray-400"
              ></textarea>
              <button type="submit" title="Envia tus comentarios" className="p-[4px] text-white bg-blue-400 rounded-[4px] hover:bg-blue-500 transition-[color,_transform,_background-color]!">
                {t("footer_enviar")}
              </button>
            </form>
          </div>
        </Modal>
        <div className="footer-container ">
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_empresa") }</h4>
            <a href="#">{t("footer_inicio") }</a>
            <a href="#">{t("footer_productos") }</a>
            <a href="#">{t("footer_soporte") }</a>
            <a href="#">{t("footer_socios") }</a>
          </div>
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_productos_titulo") }</h4>
            <button
              className="flex justify-start text-left"
              type="button"
              onClick={() => {
                setFocusSoftware(true);
                setFocusHardware(false);
              }}
            >
              {t("footer_software") }
            </button>
            <button
              className="flex justify-start text-left"
              type="button"
              onClick={() => {
                setFocusHardware(true);
                setFocusSoftware(false);
              }}
            >
              {t("footer_hardware") }
            </button>
          </div>
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_soporte_titulo") }</h4>
            <button
              className="text-left flex justify-start"
              type="button"
              title="Puedes enviar comentarios sobre Tekneo"
              onClick={() => modalRef.current?.showModal()}
            >
              {t("footer_centro_ayuda") }
            </button>
            <NavLink
              to={`${page === "colmotica" ? "/colmotica/" : "/"}preguntasFrecuentes`}
              onClick={() => scroll({ top: 0, left: 0 })}
            >
              {t("footer_faqs") }
            </NavLink>
            <NavLink
              to={`${page === "colmotica" ? "/colmotica/" : "/"}politicaDePrivacidad`}
              onClick={() => scroll({ top: 0, left: 0 })}
            >
              {t("footer_politica_privacidad") }
            </NavLink>
            <NavLink to={`${page === "colmotica" ? "/colmotica/" : "/"}terminosYCondiciones`}>{t("footer_terminos_condiciones") }</NavLink>
          </div>
          <div className="footer-column flex flex-col gap-[8px] text-left justify-start">
            <h4>{t("footer_contacto") }</h4>
            <a href="https://maps.app.goo.gl/LzEZQtpqqvK2yZY89" target="_blank">
              {t("footer_direccion1")}
            </a>
            <a href="https://maps.app.goo.gl/LzEZQtpqqvK2yZY89" target="_blank">
              {t("footer_direccion2") }
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
              >
                <FaFacebookF size={26} />
              </a>
              <a
                href="https://web.whatsapp.com/"
                title="Whatsapp"
                target="_blank"
              >
                <SiWhatsapp size={26} />
              </a>
              <a href="https://x.com/" title="X" target="_blank">
                <BsTwitterX size={26} />
              </a>
              <a
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
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
          {t("footer_derechos") }
        </p>
        <p className="ftr-back-t2">
          {t("footer_legal") }
        </p>
      </div>
    </>
  );
}
