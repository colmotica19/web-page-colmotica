import { useContext, useRef, type FormEvent, type FormEventHandler } from "react";
import "./Footer.css";
import { GlobalContext } from "../../../singleton/globalContext";
import { FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";
import Modal, { type ModalHandle } from "../Modal/Modal";
export function FooterComponent() {
  const { setFocusHardware, setFocusSoftware } = useContext(GlobalContext);
  const modalRef = useRef<ModalHandle>(null);
  const formHandler: FormEventHandler = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <>
      <footer>
        <Modal ref={modalRef}>
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-3xl">Enviar Comentarios</h1>
            <form onSubmit={formHandler} className="flex flex-col gap-[16px]">
              <label htmlFor="comentarios">Opina sobre Tekneo:</label>
              <textarea name="comentarios" id="comentarios" className="border-[1px] border-gray-300 rounded-[4px] p-[8px] focus:outline-gray-400"></textarea>
              <button type="submit" title="Envia tus comentarios">Enviar</button>
            </form>
          </div>
        </Modal>
        <div className="footer-container ">
          <div className="footer-column flex flex-col gap-2.5 text-left justify-start">
            <h4>Empresa</h4>
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Soporte</a>
            <a href="#">Socios</a>
          </div>
          <div className="footer-column flex flex-col gap-2.5 text-left justify-start">
            <h4>Productos</h4>
            <button className="flex justify-start text-left" type="button" onClick={() => {
              setFocusSoftware(true)
              setFocusHardware(false)
            }}>Software</button>
            <button className="flex justify-start text-left" type="button" onClick={() => {
              setFocusHardware(true)
              setFocusSoftware(false)
            }}>Hardware</button>
          </div>
          <div className="footer-column flex flex-col gap-2.5 text-left justify-start">
            <h4>Soporte</h4>
            <button className="text-left flex justify-start" type="button" title="Puedes enviar comentarios sobre Tekneo" onClick={() => modalRef.current?.showModal()}>Centro de ayuda</button>
            <NavLink to="preguntasFrecuentes">FAQs</NavLink>
            <NavLink to="politicaDePrivacidad">Política de privacidad</NavLink>
            <NavLink to="terminosYCondiciones">Términos y condiciones</NavLink>
          </div>
          <div className="footer-column flex flex-col gap-2.5 text-left justify-start">
            <h4>Contacto</h4>
            <a href="#">Carrera 53, Calle 68B #125, local 225</a>
            <a href="#">Barranquilla, Atlantico</a>
            <a href="#">+57 3015678899</a>
            <a href="#">info@tekeno.es</a>
            <div className="flex flex-row gap-[30px] justify-start mt-[10px]">
              <a href="https://www.facebook.com/?locale=es_LA" title="Facebook" target="_blank"><FaFacebookF size={26} /></a>
              <a href="https://web.whatsapp.com/" title="Whatsapp" target="_blank"><SiWhatsapp size={26} /></a>
              <a href="https://x.com/" title="X" target="_blank"><BsTwitterX size={26} /></a>
              <a href="https://www.instagram.com/" title="Instagram" target="_blank"><FaInstagram size={26} ></FaInstagram></a>
            </div>
          </div>
        </div>
      </footer>
      <div className="ftr-back">
        <img src="/img/Loho tekneo horizontal.png" alt="logo teckneo" />
        <p className="ftr-back-t1">
          Copyright © 2024 Tekneo Todos los derechos reservados.
        </p>
        <p className="ftr-back-t2">
          Términos de servicio | Aviso de política de privacidad
        </p>
      </div>
    </>
  );
}
