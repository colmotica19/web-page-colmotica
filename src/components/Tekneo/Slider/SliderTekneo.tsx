import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation()
  return (
    <>
      <Swiper
        className="z-1 flex justify-center h-[150px] min-w-[10vw] max-w-[80vw] *:gap-[30px]" slidesPerView={4} modules={[Autoplay, Pagination]} spaceBetween={3} loop={true} freeMode={true} autoplay={{ delay: 4000, disableOnInteraction: false, }} pagination={{ clickable: true, }} speed={1000} grabCursor={false}
      >
        <SwiperSlide className="flex! justify-center items-center">
          <button type="button" className="btn-movi" onClick={() => openModal("modal1")}>
            <img className="max-h-[180px]" width={"auto"} src="/img/zennio logo.png" alt="Akuvox" />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center items-center">
          <button type="button" className="btn-movi" onClick={() => openModal("modal2")}>
            <img className="max-h-[180px]" width={"auto"} src="/img/logicmachie.png" alt="logicmachie" />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center items-center">
          <button type="button" className="btn-movi" onClick={() => openModal("modal3")}>
            <img className="max-h-[180px]" width={"auto"} src="/img/knx.png" alt="KNX" />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center items-center">
          <button type="button" className="btn-movi" onClick={() => openModal("modal4")}>
            <img className="max-h-[180px]" width={"auto"} src="/img/mobotix.png" alt="Mobotix" />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex! justify-center items-center">
          <button type="button" className="btn-movi" onClick={() => openModal("modal5")}>
            <img className="max-h-[180px]" width={"auto"} src="/img/tis.png" alt="Mobotix" />
          </button>
        </SwiperSlide>
      </Swiper>

      <div className="socios">
        <div id="modal1" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal("modal1")}>
              &times;
            </span>
            <div className="modal-content-descipcion">
              <img src="/img/zennio logo.png" alt="Akuvox" />
              <p className="desciption-txt">
                {t("socios_descripcion")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_funcionalidades")}</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_sistemas")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_version") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_actualizacion")}
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
                {t("socios_descripcion")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_funcionalidades")}</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_sistemas")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_version") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_actualizacion")}
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
                {t("socios_descripcion")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_funcionalidades")}</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_sistemas")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_version") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_actualizacion")}
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
                {t("socios_descripcion")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_funcionalidades") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_sistemas")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_version") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_actualizacion")}
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
                {t("socios_descripcion")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_funcionalidades") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_sistemas")}
              </p>

              <p className="desciption-title mg-0">
                {" "}
                <b>{t("socios_version") }</b>
              </p>
              <p className="desciption-txt mg-top-0">
                {t("socios_actualizacion")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
