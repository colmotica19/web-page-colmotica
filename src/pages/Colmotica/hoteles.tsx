import './../../Styles/hoteles.css';
export default function Hoteles() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Hoteles</p>
          <p className="sub">Tecnología que eleva la experiencia hotelera.</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">Ofrecemos una experiencia de automatización avanzada, </p>
            <p className="subtitle-all">Adaptada al entorno hotelero para brindar a los huéspedes confort, modernidad y control intuitivo dentro de cada habitación. La iluminación, climatización, persianas, audio y asistentes de voz se integran de forma personalizada, mientras que la administración centralizada queda en manos del hotel, mediante un sistema BMS (Building Management System). Esta solución permite monitorear y ajustar cada habitación desde una única plataforma, de forma presencial o remota, asegurando eficiencia operativa, ahorro energético y una atención más ágil.</p>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">Nuestro BMS permite gestionar climatización por zonas</p>
            <p className="subtitle-all"> Consumo eléctrico por habitación, sensores técnicos, seguridad y más, todo con reportes y alertas en tiempo real. Funciones como climatización inteligente, gestión energética, vigilancia integrada y control por estado de ocupación optimizan recursos y reducen costos. Así, los hoteles logran un mayor nivel de eficiencia, sostenibilidad y experiencia del cliente, todo desde una interfaz única y altamente configurable. </p>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad" src="/img/colmotica/hotell.png" alt="" />
        </div>
      </div>
    </>
  )
}
