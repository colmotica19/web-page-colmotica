import './../../Styles/residencial.css'

export default function Residencial() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Residencial</p>
          <p className="sub">Confort, seguridad y control en un solo toque.</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">Imagina un hogar que se adapta a ti</p>
            <p className="subtitle-all">que responde a tu voz, sigue tus rutinas y se anticipa a tus necesidades. Con nuestras soluciones domóticas, tu espacio residencial se transforma en un ecosistema inteligente, eficiente y seguro. Disfruta de control total de iluminación con escenas programables, automatización de persianas, climatización inteligente por zonas, y ahorro energético mediante sensores y monitoreo en tiempo real. Todo pensado para maximizar el confort, la eficiencia y la sostenibilidad del hogar.</p>
          </section>

          <div className="dflex line"></div>

          <section className="secone-acad">
            <p className="title-all">Además, la seguridad y el entretenimiento</p>
            <p className="subtitle-all">Están garantizados con sistemas de videovigilancia, alarmas integradas, acceso controlado, sonido multiambiente y compatibilidad con asistentes virtuales como Alexa, Google Home o Apple HomeKit. También podrás centralizar el manejo de sistemas técnicos como riego, piscinas y bombas, todo desde tu móvil o por comando de voz. La automatización residencial no solo mejora tu calidad de vida, sino que convierte tu hogar en un espacio verdaderamente inteligente.</p>
          </section>
        </div>

        <div className="secone-acad">
          <img className="img-acad" src="/img/colmotica/res.png" alt=""/>
        </div>
      </div>
    </>
  )
}
