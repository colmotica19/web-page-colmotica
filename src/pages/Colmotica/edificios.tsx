import './../../Styles/edificios.css'
import { useTranslation } from 'react-i18next'
export default function Edificios() {
    const { t } = useTranslation()
    return (
        <>
            <section className="pd-g dflex encabezado-frace-2">
                <div className="dflex flex-initial">
                    <p>{t("edificios")}</p>
                    <p className="sub" dangerouslySetInnerHTML={{ __html: t("edificios_desc") }}></p>
                </div>
            </section>

            <div className="pd-g dflex acad">
                <div className="center">
                    <section className="secone-acad">
                        <p className="title-all">{t("edificios_desc_2")}</p>
                        <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("edificios_desc_3") }}></p>
                    </section>

                    <div className="dflex line"></div>

                    <section className="secone-acad">
                        <p className="title-all">{t("edificios_desc_4")}</p>
                        <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
                            <li className='list-disc'>{t("edificios_desc_4_list_1")}</li>
                            <li className='list-disc'>{t("edificios_desc_4_list_2")}</li>
                            <li className='list-disc'>{t("edificios_desc_4_list_3")}</li>
                            <li className='list-disc'>{t("edificios_desc_4_list_4")}</li>
                            <li className='list-disc'>{t("edificios_desc_4_list_5")}</li>
                        </ul>
                    </section>
                    <div className="dflex line"></div>

                    <section className="secone-acad">
                        <p className="title-all">{t("edificios_desc_5")}</p>
                        <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
                            <li className='list-disc'>{t("edificios_desc_6_list_1")}</li>
                            <li className='list-disc'>{t("edificios_desc_6_list_2")}</li>
                            <li className='list-disc'>{t("edificios_desc_6_list_3")}</li>
                            <li className='list-disc'>{t("edificios_desc_6_list_4")}</li>
                        </ul>
                    </section>
                    <div className="dflex line"></div>

                    <section className="secone-acad">
                        <p className="title-all">{t("edificios_desc_7")}</p>
                        <p className="subtitle-all">{t("edificios_desc_8")}</p>
                    </section>
                </div>

                <div className="secone-acad">
                    <img className="img-acad !max-w-none" src="/img/colmotica/edi.png" alt="imagen" width={"auto"} />
                </div>
            </div>
        </>
    )
}
