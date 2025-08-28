import { useTranslation } from 'react-i18next';
import './../../Styles/hoteles.css';
export default function Hoteles() {
  const { t } = useTranslation()
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>{t("hoteles")}</p>
          <p className="sub" dangerouslySetInnerHTML={{ __html: t("hoteles_1") }}></p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all" dangerouslySetInnerHTML={{ __html: t("hoteles_2") }}></p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("hoteles_3") }}></p>
            <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
              <li className='list-disc'>{t("hoteles_3_list_1")}</li>
              <li className='list-disc'>{t("hoteles_3_list_2")}</li>
              <li className='list-disc'>{t("hoteles_3_list_3")}</li>
              <li className='list-disc'>{t("hoteles_3_list_4")}</li>
              <li className='list-disc'>{t("hoteles_3_list_5")}</li>
            </ul>
            <p className="title-all" dangerouslySetInnerHTML={{ __html: t("hoteles_5") }}></p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("hoteles_4") }}></p>
            <p className="subtitle-all">{t("hoteles_6")}</p>
            <p className="subtitle-all">{t("hoteles_7")}</p>
            <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
              <li className='list-disc'>{t("hoteles_7_list_1")}</li>
              <li className='list-disc'>{t("hoteles_7_list_2")}</li>
              <li className='list-disc'>{t("hoteles_7_list_3")}</li>
              <li className='list-disc'>{t("hoteles_7_list_4")}</li>
              <li className='list-disc'>{t("hoteles_7_list_5")}</li>
              <li className='list-disc'>{t("hoteles_7_list_6")}</li>
            </ul>
            <p className="subtitle-all">{t("hoteles_8")}</p>
          </section>
          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("hoteles_9")}</p>
            <p className="subtitle-all" dangerouslySetInnerHTML={{ __html: t("hoteles_10") }}></p>
            <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
              <li className='list-disc'>{t("hoteles_10_list_1")}</li>
              <li className='list-disc'>{t("hoteles_10_list_2")}</li>
              <li className='list-disc'>{t("hoteles_10_list_3")}</li>
              <li className='list-disc'>{t("hoteles_10_list_4")}</li>
            </ul>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("hoteles_11")}</p>
            <p className="subtitle-all">{t("hoteles_12")}</p>
            <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
              <li className='list-disc'>{t("hoteles_12_list_1")}</li>
              <li className='list-disc'>{t("hoteles_12_list_2")}</li>
              <li className='list-disc'>{t("hoteles_12_list_3")}</li>
              <li className='list-disc'>{t("hoteles_12_list_4")}</li>
            </ul>
          </section>
          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("hoteles_13")}</p>
            <p className="subtitle-all">{t("hoteles_14")}</p>
            <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
              <li className='list-disc'>{t("hoteles_14_list_1")}</li>
              <li className='list-disc'>{t("hoteles_14_list_2")}</li>
              <li className='list-disc'>{t("hoteles_14_list_3")}</li>
            </ul>
          </section>
          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">{t("hoteles_15")}</p>
            <p className="subtitle-all">{t("hoteles_16")}</p>
            <ul className='flex flex-col gap-[1lh] *:pl-[15px] *:ml-[20px] m-[20px_0px]'>
              <li className='list-disc'>{t("hoteles_16_list_1")}</li>
              <li className='list-disc'>{t("hoteles_16_list_2")}</li>
              <li className='list-disc'>{t("hoteles_16_list_3")}</li>
              <li className='list-disc'>{t("hoteles_16_list_4")}</li>
            </ul>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad !max-w-none" src="/img/colmotica/hotell.png" alt="imagen" width={"auto"} />
        </div>
      </div>
    </>
  )
}
