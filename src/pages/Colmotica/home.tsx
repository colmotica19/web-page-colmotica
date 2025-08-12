import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";
// import './../../Styles/mainColmotica.css'
export default function Home() {
  return (
    <Fragment>
    <section className="pd-g dflex encabezado-frace">
        <div className="dflex flex-initial">
            <p>Inteligencia que <br/>transforma espacios</p>
            <p className="sub">Domótica avanzada que transforma hogares, <br/>hoteles y edificios comerciales.</p>
        </div>
    </section>

    <section className="pd-g dflex secone">
        <p className="title-all">Quienes somos</p>
        <p className="subtitle-all">En Colmotica llevamos la inteligencia a cada rincón. Diseñamos y ejecutamos soluciones de automatización para los sectores de edificios, hotelero y residencial, combinando confort, eficiencia y seguridad en una sola experiencia. Desde la medición de energía hasta la gestión integral con BMS, integramos múltiples tecnologías y protocolos para lograr sistemas flexibles y adaptados a cada proyecto. Nuestro equipo acompaña cada etapa, desde el diseño hasta la puesta en marcha, ya sea para un ambiente específico o para toda una propiedad. </p>
    </section>

    <section className="pd-g dflex setwo">
        <div className="c-produc dflex">
            <div>
                <p className="title-all">Soluciones</p>
                <p className="subtitle-all">En Colmotica desarrollamos soluciones inteligentes para eficiencia energética, control de iluminación, climatización, seguridad, videovigilancia y gestión de accesos. Integramos sistemas con plataformas BMS, PMS y software multiprotocolo para lograr espacios conectados y eficientes. Ofrecemos toda la línea de productos Tekneo, garantizando innovación, calidad y compatibilidad en cada proyecto.</p>
            </div>
            <img src="/img/colmotica/imgprduc.png" alt="imgproduct" />
        </div>
    </section>

    <section className="pd-g dflex setre">
        <p className="title-all">Formación (Academy)</p>
        <p className="subtitle-all">Descubre, aprende y domina la tecnología que transforma espacios. En la Academia Colmotica te guiamos paso a paso en el uso de los productos Tekneo —TGate, TShow, LDM y Node-Maker— y en la aplicación de nuestras soluciones y protocolos de automatización, control y eficiencia. Un punto de encuentro para quienes quieren llevar sus proyectos al siguiente nivel con innovación y resultados reales.</p>
        <img src="/img/colmotica/mujer pc.png" alt="imgproduct"/>
        <NavLink to="academy" className="btn-general">SABER MAS</NavLink>
    </section>

    <section className="pd-g dflex sefor mg-top-100">
        <div className="c-produc dflex">
            <img src="/img/colmotica/cubo.png" alt="imgproduct"/>
            <div>
                <p className="title-all">Producto 1</p>
                <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
        </div>
                <div className="c-produc dflex">
            <div>
                <p className="title-all">Productos</p>
                <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
            <img src="/img/colmotica/cubo.png" alt="imgproduct"/>
        </div>
    </section>
        <section className="pd-g dflex sefor">
        <div className="c-produc dflex">
            <img src="/img/colmotica/cubo.png" alt="imgproduct"/>
            <div>
                <p className="title-all">Producto 1</p>
                <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
        </div>
                <div className="c-produc dflex">
            <div>
                <p className="title-all">Productos</p>
                <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
            <img src="/img/colmotica/cubo.png" alt="imgproduct"/>
        </div>
    </section>

    <section className="pd-g dflex setre">
        <p className="title-all">Consultorias</p>
        <p className="subtitle-all">En Colmotica no solo implementamos tecnología, también te asesoramos para que cada decisión cuente. Nuestro servicio de consultoría te ayuda a planificar, diseñar y optimizar proyectos de automatización, eficiencia energética y seguridad, garantizando que cada solución se adapte a tus objetivos y presupuesto. Desde la elección de protocolos y equipos hasta la integración de sistemas complejos, te guiamos para que tu proyecto sea eficiente, escalable y exitoso.</p>
        <img src="/img/colmotica/consultorias.png" alt="imgproduct"/>
        <NavLink to={"consultorias"} className="btn-general">SABER MAS</NavLink>
    </section>
    </Fragment>
  )
}
