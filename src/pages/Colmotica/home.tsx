import { Fragment } from "react/jsx-runtime";
import Footer from "../../components/Colmotica/Footer/Footer";
import Header from "../../components/Colmotica/Header/Header";

export default function Home() {
  return (
    <Fragment>
      <Header></Header>
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
          <img src="./jpg/imgprduc.png" alt="imgproduct" />
        </div>
      </section>


      <section className="pd-g dflex setre">
        <p className="title-all">Academy</p>
        <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
        <img src="./jpg/mujer pc.png" alt="imgproduct" />
        <button className="btn-general">SABER MAS</button>
      </section>

      <section className="pd-g dflex sefor mg-top-100">
        <div className="c-produc dflex">
          <img src="./jpg/cubo.png" alt="imgproduct" />
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
          <img src="./jpg/cubo.png" alt="imgproduct" />
        </div>
      </section>
      <section className="pd-g dflex sefor">
        <div className="c-produc dflex">
          <img src="./jpg/cubo.png" alt="imgproduct" />
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
          <img src="./jpg/cubo.png" alt="imgproduct" />
        </div>
      </section>

      <section className="pd-g dflex setre">
        <p className="title-all">Consultorias</p>
        <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
        <img src="./jpg/consultorias.png" alt="imgproduct" />
        <button type="button" className="btn-general">SABER MAS</button>
      </section>
      <Footer></Footer>
    </Fragment>
  )
}
