import { NavLink } from "react-router";
import BtnChangeLang from "../global/btnChangeLang";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation()
  return (
    <header className="sticky top-0 bg-white drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)] z-10">
      <section className="section-header">
        <div className="header-primario">
          <NavLink to="/" onClick={() => scroll({ top: 0, left: 0 })}>
            <img src="/img/colmotica/Logo-colmotica.png" alt="imagen" width={"auto"} className="w-[180px] mb-[15px]!" />
          </NavLink>
          <nav className="btn-header h-full flex justify-center items-center" id="nav-menu">
            <NavLink onClick={() => scroll({ top: 0, left: 0 })} className="btn-header__btn flex justify-center items-center border-b-[2px] border-transparent hover:border-black h-full" to="/colmotica">
              <p>{t("nav_inicio")}</p>
            </NavLink>
            <NavLink onClick={() => scroll({ top: 0, left: 0 })} className="btn-header__btn flex justify-center items-center border-b-[2px] border-transparent hover:border-black h-full" to="soluciones">
              <p>{t("nav_soluciones")}</p>
            </NavLink>
            <NavLink onClick={() => scroll({ top: 0, left: 0 })} className="btn-header__btn flex justify-center items-center border-b-[2px] border-transparent hover:border-black h-full" to="academy">
              <p>{t("home_academia_2")}</p>
            </NavLink>
            <NavLink onClick={() => scroll({ top: 0, left: 0 })} className="btn-header__btn flex justify-center items-center border-b-[2px] border-transparent hover:border-black h-full" to="consultorias">
              <p>{t("nav_consultorias")}</p>
            </NavLink>
            <BtnChangeLang></BtnChangeLang>
          </nav>
        </div>
      </section>
    </header>
  )
}
