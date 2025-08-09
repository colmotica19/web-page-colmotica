import './../../Styles/productos.css'
export default function Products() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Catálogo de productos</p>
          <p className="sub">Descubre el catálogo de productos más completo del mercado</p>
        </div>
      </section>

      <section className="pd-g dflex productos-sec wrapp">
        <div>
          <img src="/img/colmotica/produc 1.png" alt="producto1" />
          <p>PRODUCTO 1</p>
        </div>
        <div>
          <img src="/img/colmotica/produc 1.png" alt="producto1" />
          <p>PRODUCTO 1</p>
        </div>
        <div>
          <img src="/img/colmotica/produc 1.png" alt="producto1" />
          <p>PRODUCTO 1</p>
        </div>
        <div>
          <img src="/img/colmotica/produc 1.png" alt="producto1" />
          <p>PRODUCTO 1</p>
        </div>
      </section>

      <section className="pd-g dflex secone">
        <p className="title-all">La mejor domótica del mercado</p>
        <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
      </section>

      <div className="dflex line"></div>

      <section className="pd-g dflex secone">
        <p className="title-all">Conoce nuestros sistemas</p>
        <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
      </section>
    </>
  )
}
