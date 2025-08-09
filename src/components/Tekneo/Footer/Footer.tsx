import { useContext } from "react";
import "./Footer.css";
import { GlobalContext } from "../../../singleton/globalContext";

export function FooterComponent() {
  const { } = useContext(GlobalContext);
  return (
    <>
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Empresa</h4>
          <a href="#">Quiénes somos</a>
          <a href="#">Equipo</a>
          <a href="#">Carreras</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-column">
          <h4>Productos</h4>
          <button type="button">Software</button>
          <button type="button">Hardware</button>
        </div>
        <div className="footer-column">
          <h4>Soporte</h4>
          <a href="#">Centro de ayuda</a>
          <a href="#">FAQs</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <a href="#">Carrera 53, Calle 68B #125, local 225</a>
          <a href="#">Barranquilla, Atlantico</a>
          <a href="#">+57 3015678899</a>
          <a href="#">info@tekeno.es</a>
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
