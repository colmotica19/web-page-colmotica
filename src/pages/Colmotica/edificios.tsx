import './../../Styles/edificios.css'
export default function Edificios() {
  return (
    <>
    <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
            <p>Edificios</p>
            <p className="sub">Control total para edificios inteligentes y eficientes.</p>
        </div>
    </section>

    <div className="pd-g dflex acad">
        <div className="center">
            <section className="secone-acad">
                <p className="title-all">Llevamos la automatización al siguiente nivel</p>
                <p className="subtitle-all">Con soluciones diseñadas específicamente para edificios comerciales, integrando lo mejor de los sistemas aplicados en viviendas inteligentes y hoteles. Nuestra plataforma modular y escalable permite gestionar de forma centralizada todas las áreas del edificio, mejorando la eficiencia operativa, la seguridad y la experiencia de los usuarios. Entre las funcionalidades destacadas se incluyen el control total de iluminación, automatización de persianas, climatización por zonas, sonido ambiental e integración con asistentes de voz.</p>
            </section>

            <div className="dflex line"></div>

            <section className="secone-acad">
                <p className="title-all">Además, se incorporan capacidades avanzadas </p>
                <p className="subtitle-all">Como la medición energética por unidad o piso, seguridad integral con cámaras y control de acceso, gestión remota desde el BMS, y monitoreo de variables críticas. Todo esto se controla desde una única plataforma centralizada, que puede integrarse al sistema existente o funcionar de forma independiente. La automatización inteligente permite a los administradores tomar decisiones basadas en datos reales, reducir costos operativos y garantizar confort y sostenibilidad en espacios corporativos modernos.</p>
            </section>
        </div>

        <div className="secone-acad">
            <img className="img-acad" src="/img/colmotica/edi.png" alt=""/>
        </div>
    </div>
    </>
  )
}
