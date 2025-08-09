import { Fragment } from "react/jsx-runtime";
// import './../../Styles/index.css'
// import './../../Styles/tekneo.css'
export function HomePage() {
    return (
        <Fragment>
            <section className="encabezado-frace">
                <p data-i18n="frase_principal">
                    Soluciones inteligentes en Building Automation, adaptables y avanzadas para satisfacer las necesidades de cualquier proyecto.
                </p>
            </section>

            <section className="about">
                <div className="about__title">
                    <p data-i18n="section_quienes_somos" className="about__title-que-es">Quiénes Somos</p>
                </div>

                <div className="about__contenido">
                    <p data-i18n="quienes_somos_parrafo">
                        <b>En Tekneo diseñamos soluciones de software para la automatización,
                            seguridad y control inteligente de instalaciones.</b>
                        <br />
                        Nos especializamos en conectar tecnologías mediante herramientas
                        potentes y accesibles, que permiten a los integradores construir
                        sistemas eficientes, seguros y completamente adaptados a las
                        necesidades del cliente. Nuestra misión es simplificar la
                        interoperabilidad y elevar el nivel de automatización en cada
                        proyecto.
                    </p>
                </div>
            </section>

            <section className="funcion pd-cancel-left pd-cancel-bottom pd-cancel-top bg-f0">
                <div className="img-people">
                    <img src="/img/Img-perona-celular.png" className="Img-perona-celular" alt="Img-perona-celular" />
                </div>

                <div className="txt-conten">
                    <h1 className="about__title-que-es mg-botton-20">Sobre Tekneo</h1>
                    <p className="about__contenido__p">
                        <b>Tekneo es una marca dedicada al desarrollo de software
                            especializado para proyectos de automatización, seguridad y control
                            inteligente en edificios e instalaciones técnicas.
                            <br />
                            Nuestra propuesta
                            se centra en ofrecer herramientas robustas, escalables y fáciles de
                            usar, diseñadas para facilitar la integración entre tecnologías y
                            protocolos de distintos fabricantes.</b>
                        <br /><br />
                        Creamos soluciones que simplifican procesos complejos, permiten una
                        supervisión más eficiente y potencian la interoperabilidad en sistemas
                        críticos. A través de nuestras plataformas, brindamos a los
                        integradores el control total sobre sus instalaciones, permitiéndoles
                        construir entornos más seguros, conectados y funcionales.
                    </p>
                </div>
            </section>

            <section className="funcion-integral txt-conten-center">
                <div>
                    {/* <p className="about__title-quienes txt-center">FUNCIONES INTEGRALES</p> */}
                    <h1 className="about__title-que-es mg-botton-20 txt-center">
                        Recursos
                    </h1>
                </div>

                <div className="container-card">
                    <div className="container-card__cards holographic-card">
                        <img src="/img/Dowload App.png" alt="Dowload" />
                        <p className="title-app">Academy</p>
                    </div>

                    <div className="container-card__cards holographic-card">
                        <img src="/img/Manuales.png" alt="Manuales" />
                        <p className="title-app">Catálogo de productos</p>
                    </div>

                    <div className="container-card__cards holographic-card">
                        <img src="/img/Video.png" alt="Video" />
                        <p className="title-app">Soporte</p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
