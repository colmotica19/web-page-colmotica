import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

function openModal(id: string) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(id: string) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  } else {
    throw new Error("No se encontró el elemento " + id);
  }
}

export default function SliderSwiper() {
  return (
    <Swiper
      className="z-1 flex justify-center"
      slidesPerView={4}
      modules={[Autoplay, Pagination]}
      spaceBetween={3}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      grabCursor={false}
    >
      <SwiperSlide className="min-h-[100px] flex! justify-center">
        <button type="button" className="btn-movi" onClick={() => openModal("modal1")}>
          <img src="/img/zennio logo.png" alt="Akuvox" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="min-h-[100px] flex! justify-center">
        <button type="button" className="btn-movi" onClick={() => openModal("modal2")}>
          <img src="/img/logicmachie.png" alt="logicmachie" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="min-h-[100px] flex! justify-center">
        <button type="button" className="btn-movi" onClick={() => openModal("modal3")}>
          <img src="/img/knx.png" alt="KNX" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="min-h-[100px] flex! justify-center">
        <button type="button" className="btn-movi" onClick={() => openModal("modal4")}>
          <img src="/img/mobotix.png" alt="Mobotix" />
        </button>
      </SwiperSlide>
      <SwiperSlide className="min-h-[100px] flex! justify-center">
        <button type="button" className="btn-movi" onClick={() => openModal("modal5")}>
          <img src="/img/tis.png" alt="Mobotix" />
        </button>
      </SwiperSlide>

      <div className="socios">
        <div id="modal1" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal("modal1")}>
              &times;
            </span>
            <div className="modal-content-descipcion">
              <img src="/img/zennio logo.png" alt="Akuvox" />
              <p className="desciption-txt">
                MOBOTIX ofrece sistemas de videovigilancia de alta calidad que
                aseguran una protección integral en un entorno moderno y
                conectado. Como parte de este compromiso, Tekneo se suma como
                socio estratégico, integrando soluciones innovadoras que
                optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y
                Tekneo crean un ecosistema robusto que permite a las
                organizaciones abordar los desafíos de seguridad contemporáneos
                de manera efectiva y eficiente.
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Funcionalidades</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Sistemas de videovigilancia , operaciones de seguridad
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Versión</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Ultima Actualización 3,2
              </p>
            </div>
          </div>
        </div>

        <div id="modal2" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal("modal2")}>
              &times;
            </span>
            <div className="modal-content-descipcion">
              <img src="/img/logicmachie.png" alt="logicmachie" />
              <p className="desciption-txt">
                MOBOTIX ofrece sistemas de videovigilancia de alta calidad que
                aseguran una protección integral en un entorno moderno y
                conectado. Como parte de este compromiso, Tekneo se suma como
                socio estratégico, integrando soluciones innovadoras que
                optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y
                Tekneo crean un ecosistema robusto que permite a las
                organizaciones abordar los desafíos de seguridad contemporáneos
                de manera efectiva y eficiente.
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Funcionalidades</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Sistemas de videovigilancia , operaciones de seguridad
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Versión</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Ultima Actualización 3,2
              </p>
            </div>
          </div>
        </div>

        <div id="modal3" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal("modal3")}>
              &times;
            </span>
            <div className="modal-content-descipcion">
              <img src="/img/knx.png" alt="KNX" />
              <p className="desciption-txt">
                MOBOTIX ofrece sistemas de videovigilancia de alta calidad que
                aseguran una protección integral en un entorno moderno y
                conectado. Como parte de este compromiso, Tekneo se suma como
                socio estratégico, integrando soluciones innovadoras que
                optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y
                Tekneo crean un ecosistema robusto que permite a las
                organizaciones abordar los desafíos de seguridad contemporáneos
                de manera efectiva y eficiente.
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Funcionalidades</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Sistemas de videovigilancia , operaciones de seguridad
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Versión</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Ultima Actualización 3,2
              </p>
            </div>
          </div>
        </div>

        <div id="modal4" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal("modal4")}>
              &times;
            </span>
            <div className="modal-content-descipcion">
              <img src="/img/mobotix.png" alt="Mobotix" />
              <p className="desciption-txt">
                MOBOTIX ofrece sistemas de videovigilancia de alta calidad que
                aseguran una protección integral en un entorno moderno y
                conectado. Como parte de este compromiso, Tekneo se suma como
                socio estratégico, integrando soluciones innovadoras que
                optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y
                Tekneo crean un ecosistema robusto que permite a las
                organizaciones abordar los desafíos de seguridad contemporáneos
                de manera efectiva y eficiente.
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Funcionalidades</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Sistemas de videovigilancia , operaciones de seguridad
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Versión</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Ultima Actualización 3,2
              </p>
            </div>
          </div>
        </div>

        <div id="modal5" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal("modal5")}>
              &times;
            </span>
            <div className="modal-content-descipcion">
              <img src="/img/tis.png" alt="Mobotix" />
              <p className="desciption-txt">
                MOBOTIX ofrece sistemas de videovigilancia de alta calidad que
                aseguran una protección integral en un entorno moderno y
                conectado. Como parte de este compromiso, Tekneo se suma como
                socio estratégico, integrando soluciones innovadoras que
                optimizan la seguridad y la gestión de datos. Juntos, MOBOTIX y
                Tekneo crean un ecosistema robusto que permite a las
                organizaciones abordar los desafíos de seguridad contemporáneos
                de manera efectiva y eficiente.
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Funcionalidades</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Sistemas de videovigilancia , operaciones de seguridad
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>Versión</b>
              </p>
              <p className="desciption-txt mg-top-0">
                Ultima Actualización 3,2
              </p>
            </div>
          </div>
        </div>
      </div>
    </Swiper>
  );
}
