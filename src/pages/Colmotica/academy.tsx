import { useTranslation } from 'react-i18next'
import './../../Styles/academy.css'
export default function Academy() {
  const { t } = useTranslation()
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>{t("academy_aprovecha")}</p>
          <p className="sub">{t("academy_colmotica")}</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">{t("academy_introduccion")}</p>
            <p className="subtitle-all">{t("academy_queremos")}</p>
          </section>

          <div className="dflex line"></div>
        </div>

        <div className="secone-acad">
          <img className="img-acad max-w-none" src="/img/colmotica/mujer pc.png" alt="" />
        </div>
      </div>

      <div className="dflex pd-g">
        <p className="title-all">{t("academy_queEncontrara")}</p>
      </div>
      <section className="grid grid-cols-2 grid-rows-2 p-[50px] gap-[30px] m-auto">
        <div className="bg-gray-200 border-l-[4px] border-black p-[40px] max-w-[400px] flex justify-center items-start gap-[20px]">
          <img src="/img/colmotica/a1.png" alt="imgproduct" className="w80" />
          <div>
            <p className="title-all fall25">{t("academy_guias")}</p>
          </div>
        </div>
        <div className="bg-gray-200 border-l-[4px] border-black p-[40px] max-w-[400px] flex justify-center items-start gap-[20px]">
          <div>
            <p className="title-all fall25">{t("academy_tutoriales")}</p>
          </div>
          <img src="/img/colmotica/a2.png" alt="imgproduct" className="w80" />
        </div>
        <div className="bg-gray-200 border-l-[4px] border-black p-[40px] max-w-[400px] flex justify-center items-start gap-[20px]">
          <img src="/img/colmotica/a3.png" alt="imgproduct" className="w80" />
          <div>
            <p className="title-all fall25">{t("academy_ejemplos")}</p>
          </div>
        </div>
        <div className="bg-gray-200 border-l-[4px] border-black p-[40px] max-w-[400px] flex justify-center items-start gap-[20px]">
          <div>
            <p className="title-all fall25">{t("academy_consejos")}</p>
          </div>
          <img src="/img/colmotica/a4.png" alt="imgproduct" className="w80" />
        </div>
      </section>
      <section className="sec-fondo flex justify-center items-center">
        <div className="dflex mg-top-100">
          <p className="title-all">{t("academy_areas")}</p>
        </div>

        <div className="flex justify-around w-[90vw]">
          <div className="flex flex-col gap-[5px] justify-center items-center hover:transform-[scale(1.1)] transition-transform duration-300 w-max">
            <img src="/img/colmotica/ic1.png" alt="" />
            <p className="title-fondo">{t("academy_area1_title")}</p>
            <p className="sbtitle-fondo">{t("academy_area1_desc")}</p>
          </div>

          <div className="flex flex-col gap-[5px] justify-center items-center hover:transform-[scale(1.1)] transition-transform duration-300 w-max">
            <img src="/img/colmotica/ic2.png" alt="" />
            <p className="title-fondo">{t("academy_area2_title")}</p>
            <p className="sbtitle-fondo">{t("academy_area2_desc")}</p>
          </div>

          <div className="flex flex-col gap-[5px] justify-center items-center hover:transform-[scale(1.1)] transition-transform duration-300 w-max">
            <img src="/img/colmotica/ic3.png" alt="" />
            <p className="title-fondo">{t("academy_area3_title")}</p>
            <p className="sbtitle-fondo">{t("academy_area3_desc")}</p>
          </div>
        </div>
      </section>
      <div className="dflex pd-g mg-top-100">
        <p className="title-all">{t("academy_beneficios")}</p>
      </div>
      <section className="flex justify-around">
        <div className="card-img">
          <img src="/img/colmotica/sec1.png" alt="" />
          <p>{t("academy_beneficio1")}</p>
        </div>
        <div className="card-img">
          <img src="/img/colmotica/sec2.png" alt="" />
          <p>{t("academy_beneficio2")}</p>
        </div>
      </section>
      <section className="flex justify-around">
        <div className="card-img">
          <img src="/img/colmotica/sec3.png" alt="" />
          <p>{t("academy_beneficio3")}</p>
        </div>
        <div className="card-img">
          <img src="/img/colmotica/sec4.png" alt="" />
          <p>{t("academy_beneficio4")}</p>
        </div>
      </section>
    </>
  )
}
