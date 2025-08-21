import { useTranslation } from 'react-i18next';
import SliderSwiper from '../../components/Tekneo/Slider/SliderTekneo';
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
  const {t} = useTranslation()

  return (
    <>
      <section className="encabezado-frace">
        <p>{t("socios_titulo") }</p>
        <p className="sub-title">
          {t("socios_algunas")}
        </p>
      </section>

      <section className="group-partner">
        <p>
          {t("socios_tekneo")}
        </p>
        <SliderSwiper />
      </section>
    </>
  );
}
