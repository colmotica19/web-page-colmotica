import './../../Styles/consultorias.css'
export default function Consultorias() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Consultorias</p>
          <p className="sub">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">Lorem Ipsum es simplemente el texto</p>
            <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">Lorem Ipsum es simplemente el texto</p>
            <p className="subtitle-all">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad" src="/img/colmotica/consull.png" alt="" />
        </div>
      </div>
    </>
  )
}
