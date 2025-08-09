import { Helmet } from "react-helmet-async";

export function Partners() {
  function openModal(id: string) {
    const modal = document.getElementById(id)
    if (modal) {
      modal.style.display = 'block';
    }
  }

  function closeModal(id: string) {
    const modal = document.getElementById(id)
    if (modal) {
      modal.style.display = 'none';
    } else {
      throw new Error("No se encontró el elemento " + id)
    }
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function (event) {
    const modals = document.querySelectorAll<HTMLElement>('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
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
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  } 

    const menu = document.querySelector('.hamburger');

  // method
  function toggleMenu(event: Event) {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('is-active');
    const menuppal = document.querySelector(".menuppal");
    if(!menuppal) throw new Error("No se encuentra el elemento 'menuppal'")
    menuppal.classList.toggle("is_active");
    event.preventDefault();
  }

  // event
  menu?.addEventListener('click', toggleMenu, false);

  return (
    <>
      <Helmet><link rel="stylesheet" href="/src/Styles/socios.css" /></Helmet>
      <section className="encabezado-frace">
        <p>Socios (Ecosistema Tecnológico)</p>
        <p className="sub-title">Algunas de las tecnologías con las que trabajamos incluyen:</p>
      </section>

      <section className="group-partner">
        <p>En Tekneo desarrollamos soluciones compatibles con una amplia variedad de protocolos y dispositivos del sector, lo que nos permite integrarnos fácilmente con plataformas reconocidas y tecnologías de terceros utilizadas en proyectos reales.
          Nuestro ecosistema está en constante expansión, permitiendo a integradores trabajar con marcas confiables dentro de sus instalaciones sin complicaciones.
        </p>

        <div className="socios">
          <button className="btn-movi" onClick={() => openModal('modal1')}>
            <img src="/img/zennio logo.png" alt="Akuvox" />
          </button>
          <button className="btn-movi" onClick={() => openModal('modal2')}>
            <img src="/img/logicmachie.png" alt="logicmachie" />
          </button>
          <button className="btn-movi" onClick={() => openModal('modal3')}>
            <img src="/img/knx.png" alt="KNX" />
          </button>
          <button className="btn-movi" onClick={() => openModal('modal4')}>
            <img src="/img/mobotix.png" alt="Mobotix" />
          </button>
          <button className="btn-movi" onClick={() => openModal('modal5')}>
            <img src="/img/tis.png" alt="Mobotix" />
          </button>

          <div id="modal1" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal1')}>&times;</span>
              <div className="modal-content-descipcion">
                <img src="/img/zennio logo.png" alt="Akuvox"/>
                  <p className="desciption-txt">MOBOTIX ofrece sistemas de videovigilancia de alta calidad que aseguran una protección integral en un entorno moderno y conectado. Como parte de este compromiso, Tekneo se suma como socio estratégico, integrando soluciones innovadoras que optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y Tekneo crean un ecosistema robusto que permite a las organizaciones abordar los desafíos de seguridad contemporáneos de manera efectiva y eficiente.</p>

                  <p className="desciption-title mg-0"> <b>Funcionalidades</b></p>
                  <p className="desciption-txt mg-top-0">Sistemas de videovigilancia , operaciones de seguridad</p>

                  <p className="desciption-title mg-0"> <b>Versión</b></p>
                  <p className="desciption-txt mg-top-0">Ultima Actualización 3,2</p>
              </div>
            </div>
          </div>

          <div id="modal2" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal2')}>&times;</span>
              <div className="modal-content-descipcion">
                <img src="/img/logicmachie.png" alt="logicmachie"/>
                  <p className="desciption-txt">MOBOTIX ofrece sistemas de videovigilancia de alta calidad que aseguran una protección integral en un entorno moderno y conectado. Como parte de este compromiso, Tekneo se suma como socio estratégico, integrando soluciones innovadoras que optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y Tekneo crean un ecosistema robusto que permite a las organizaciones abordar los desafíos de seguridad contemporáneos de manera efectiva y eficiente.</p>

                  <p className="desciption-title mg-0"> <b>Funcionalidades</b></p>
                  <p className="desciption-txt mg-top-0">Sistemas de videovigilancia , operaciones de seguridad</p>

                  <p className="desciption-title mg-0"> <b>Versión</b></p>
                  <p className="desciption-txt mg-top-0">Ultima Actualización 3,2</p>
              </div>
            </div>
          </div>

          <div id="modal3" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal3')}>&times;</span>
              <div className="modal-content-descipcion">
                <img src="/img/knx.png" alt="KNX"/>
                  <p className="desciption-txt">MOBOTIX ofrece sistemas de videovigilancia de alta calidad que aseguran una protección integral en un entorno moderno y conectado. Como parte de este compromiso, Tekneo se suma como socio estratégico, integrando soluciones innovadoras que optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y Tekneo crean un ecosistema robusto que permite a las organizaciones abordar los desafíos de seguridad contemporáneos de manera efectiva y eficiente.</p>

                  <p className="desciption-title mg-0"> <b>Funcionalidades</b></p>
                  <p className="desciption-txt mg-top-0">Sistemas de videovigilancia , operaciones de seguridad</p>

                  <p className="desciption-title mg-0"> <b>Versión</b></p>
                  <p className="desciption-txt mg-top-0">Ultima Actualización 3,2</p>
              </div>
            </div>
          </div>

          <div id="modal4" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal4')}>&times;</span>
              <div className="modal-content-descipcion">
                <img src="/img/mobotix.png" alt="Mobotix"/>
                  <p className="desciption-txt">MOBOTIX ofrece sistemas de videovigilancia de alta calidad que aseguran una protección integral en un entorno moderno y conectado. Como parte de este compromiso, Tekneo se suma como socio estratégico, integrando soluciones innovadoras que optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y Tekneo crean un ecosistema robusto que permite a las organizaciones abordar los desafíos de seguridad contemporáneos de manera efectiva y eficiente.</p>

                  <p className="desciption-title mg-0"> <b>Funcionalidades</b></p>
                  <p className="desciption-txt mg-top-0">Sistemas de videovigilancia , operaciones de seguridad</p>

                  <p className="desciption-title mg-0"> <b>Versión</b></p>
                  <p className="desciption-txt mg-top-0">Ultima Actualización 3,2</p>
              </div>
            </div>
          </div>

          <div id="modal5" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal5')}>&times;</span>
              <div className="modal-content-descipcion">
                <img src="/img/tis.png" alt="Mobotix"/>
                  <p className="desciption-txt">MOBOTIX ofrece sistemas de videovigilancia de alta calidad que aseguran una protección integral en un entorno moderno y conectado. Como parte de este compromiso, Tekneo se suma como socio estratégico, integrando soluciones innovadoras que optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y Tekneo crean un ecosistema robusto que permite a las organizaciones abordar los desafíos de seguridad contemporáneos de manera efectiva y eficiente.</p>

                  <p className="desciption-title mg-0"> <b>Funcionalidades</b></p>
                  <p className="desciption-txt mg-top-0">Sistemas de videovigilancia , operaciones de seguridad</p>

                  <p className="desciption-title mg-0"> <b>Versión</b></p>
                  <p className="desciption-txt mg-top-0">Ultima Actualización 3,2</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
