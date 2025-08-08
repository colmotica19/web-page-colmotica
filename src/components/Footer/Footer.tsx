import "./Footer.css";

export function FooterComponent() {
  return (
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
          <h4>Servicios</h4>
          <a href="#">Consultoría</a>
          <a href="#">Desarrollo Web</a>
          <a href="#">Marketing Digital</a>
          <a href="#">Branding</a>
          <a href="#">Analítica</a>
        </div>
        <div className="footer-column">
          <h4>Soporte</h4>
          <a href="#">Centro de ayuda</a>
          <a href="#">FAQs</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Reportar problema</a>
        </div>
        <div className="footer-column">
          <h4>Redes Sociales</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
          <a href="#">Twitter</a>
        </div>
      </div>
      <div className="ftr-back">
        <img src="/img/Loho tekneo horizontal.png" alt="logo teckneo" />
        <p className="ftr-back-t1">
          Copyright © 2024 Tekneo Todos los derechos reservados.
        </p>
        <p className="ftr-back-t2">
          Términos de servicio | Aviso de política de privacidad
        </p>
      </div>
    </footer>
  );
}
