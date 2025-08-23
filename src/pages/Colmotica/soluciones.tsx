import { NavLink } from 'react-router'
import './../../Styles/soluciones.css'
import { useTranslation } from 'react-i18next'
export default function Soluciones() {
  const {t} = useTranslation()
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>{t("soluciones_titulo") }</p>
          <p className="sub">{t("soluciones_sub") }</p>
        </div>
      </section>

      <section className="pd-g dflex productos-sec wrapp mg-top-100">
        <div>
          <NavLink to="/colmotica/residencial" onClick={() => scroll({top: 0, left: 0})}>
            <img src="/img/colmotica/resicencia.png" alt="producto1"/>
          </NavLink>
          <p>{t("soluciones_viviendas") }</p>
        </div>
        <div>
          <NavLink to="/colmotica/edificios" onClick={() => scroll({top: 0, left: 0})}>
            <img src="/img/colmotica/hotel.png" alt="producto1"/>
          </NavLink>
          <p>{t("soluciones_edificios") }</p>
        </div>
        <div>
          <NavLink to="/colmotica/hoteles" onClick={() => scroll({top: 0, left: 0})}>
            <img src="/img/colmotica/hoteles.png" alt="producto1"/>
          </NavLink>
          <p>{t("soluciones_hoteles") }</p>
        </div>
      </section>


      <section className="pd-g dflex secone align-center">
        <p className="title-all center-txt">{t("soluciones_intro_titulo") }</p>
        <p className="subtitle-all">{t("soluciones_intro_sub") }</p>
      </section>
      <div className="dflex pd-g">
        <p className="title-all">{t("soluciones_elige") }</p>
      </div>

      <section className="pd-g dflex sefor">
        <div className="c-produc dflex mw400">
          <img src="/img/colmotica/b1.png" alt="imgproduct" className="w80"/>
            <div>
            <p className="title-all fall25">{t("soluciones_beneficio1") }</p>
            </div>
        </div>
        <div className="c-produc dflex mw400">
          <div>
            <p className="title-all fall25">{t("soluciones_beneficio2") }</p>
          </div>
          <img src="/img/colmotica/b2.png" alt="imgproduct" className="w80"/>
        </div>
      </section>
      <section className="pd-g dflex sefor mb-50">
        <div className="c-produc dflex mw400">
          <img src="/img/colmotica/b3.png" alt="imgproduct" className="w80"/>
            <div>
            <p className="title-all fall25">{t("soluciones_beneficio3") }</p>
            </div>
        </div>
        <div className="c-produc dflex mw400">
          <div>
            <p className="title-all fall25">{t("soluciones_beneficio4") }</p>
          </div>
          <img src="/img/colmotica/b4.png" alt="imgproduct" className="w80"/>
        </div>
      </section>
    </>
  )
}
