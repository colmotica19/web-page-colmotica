import SliderSwiper from "../../components/Tekneo/SliderTekneo";
import './../../Styles/socios.css';

export function Partners() {
  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function (event) {
    const modals = document.querySelectorAll<HTMLElement>(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0] as HTMLElement;
  if (modal && btn && span) {
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  const menu = document.querySelector(".hamburger");

  // method
  function toggleMenu(event: Event) {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle("is-active");
    const menuppal = document.querySelector(".menuppal");
    if (!menuppal) throw new Error("No se encuentra el elemento 'menuppal'");
    menuppal.classList.toggle("is_active");
    event.preventDefault();
  }

  // event
  menu?.addEventListener("click", toggleMenu, false);

  return (
    <>
      <section className="encabezado-frace">
        <p>Socios (Ecosistema Tecnológico)</p>
        <p className="sub-title">
          Algunas de las tecnologías con las que trabajamos incluyen:
        </p>
      </section>

      <section className="group-partner">
        <p>
          En Tekneo desarrollamos soluciones compatibles con una amplia variedad
          de protocolos y dispositivos del sector, lo que nos permite
          integrarnos fácilmente con plataformas reconocidas y tecnologías de
          terceros utilizadas en proyectos reales. Nuestro ecosistema está en
          constante expansión, permitiendo a integradores trabajar con marcas
          confiables dentro de sus instalaciones sin complicaciones.
        </p>
        <SliderSwiper />
      </section>
    </>
  );
}
