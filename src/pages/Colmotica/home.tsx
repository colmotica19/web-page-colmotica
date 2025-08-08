import { Fragment } from "react/jsx-runtime";
import Footer from "../../components/Colmotica/Footer/Footer";
import Header from "../../components/Colmotica/Header/Header";
import { Helmet } from "react-helmet-async";
// import './../../Styles/mainColmotica.css'
export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Colmotica</title>
        <link rel="icon" type="image/png" href="/img/Favicon.png" />
        <link rel="stylesheet" href="/src/Styles/mainColmotica.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Header></Header>
      <div className="flex justify-center items-center flex-col">
        <section className="pd-g dflex encabezado-frace">
          <div className="dflex flex-initial">
            <p>Inteligencia que <br />transforma espacios</p>
            <p className="sub">Domótica avanzada para hogares, <br />hoteles y edificios comerciales</p>
          </div>
        </section>

        <section className="pd-g dflex secone">
          <p className="title-all">Que Somos</p>
          <p className="subtitle-all">Colmotica es la marca que redefine la forma en que interactuamos con nuestros espacios. A través de soluciones tecnológicas inteligentes, brindamos confort, eficiencia y seguridad total en viviendas, hoteles y edificios comerciales.</p>
        </section>

        <section className="pd-g dflex setwo">
          <div className="c-produc dflex">
            <div>
              <p className="title-all">Productos</p>
              <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
            </div>
            <img src="/img/colmotica/imgprduc.png" alt="imgproduct" />
          </div>
        </section>


        <section className="pd-g dflex setre max-w-max">
          <p className="title-all">Academy</p>
          <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
          <img src="/img/colmotica/mujer pc.png" alt="imgproduct" />
          <button className="btn-general">SABER MAS</button>
        </section>

        <section className="pd-g dflex sefor mg-top-100">
          <div className="c-produc dflex">
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
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
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
          </div>
        </section>
        <section className="pd-g dflex sefor">
          <div className="c-produc dflex">
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
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
            <img src="/img/colmotica/cubo.png" alt="imgproduct" />
          </div>
        </section>

        <section className="pd-g dflex setre">
          <p className="title-all">Consultorias</p>
          <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
          <img src="/img/colmotica/consultorias.png" alt="imgproduct" />
          <button type="button" className="btn-general">SABER MAS</button>
        </section>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}
