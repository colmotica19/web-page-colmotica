import './../../Styles/edificios.css'
import { useTranslation } from 'react-i18next'
export default function Edificios() {
    const { t } = useTranslation()
    return (
        <>
            <section className="pd-g dflex encabezado-frace-2">
                <div className="dflex flex-initial">
                    <p>{t("edificios")}</p>
                    <p className="sub">{t("edificios_desc")}</p>
                </div>
            </section>

            <div className="pd-g dflex acad">
                <div className="center">
                    <section className="secone-acad">
                        <p className="title-all">{t("edificios_desc_2")}</p>
                        <p className="subtitle-all">{t("edificios_desc_3")}</p>
                    </section>

                    <div className="dflex line"></div>

                    <section className="secone-acad">
                        <p className="title-all">{ t("edificios_desc_4")}</p>
                        <p className="subtitle-all">{t("edificios_desc_5") }</p>
                    </section>
                </div>

                <div className="secone-acad">
                    <img className="img-acad !max-w-none" src="/img/colmotica/edi.png" alt="imagen" width={"auto"} />
                </div>
            </div>
        </>
    )
}
