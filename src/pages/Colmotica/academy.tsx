import './../../Styles/academy.css'
export default function Academy() {
  return (
    <>
      <section className="pd-g dflex encabezado-frace-2">
        <div className="dflex flex-initial">
          <p>Aprenda a sacar el máximo provecho de nuestras soluciones</p>
          <p className="sub">En Colmotica Academia le enseñamos, paso a paso, cómo utilizar e integrar al máximo nuestras soluciones de automatización y software Tekneo, para que obtenga el mejor rendimiento de su inversión.</p>
        </div>
      </section>

      <div className="pd-g dflex acad">
        <div className="center">
          <section className="secone-acad">
            <p className="title-all">Introducción</p>
            <p className="subtitle-all">Queremos que cada cliente disfrute plenamente de las ventajas de la automatización. Por eso, nuestra Academia es un espacio de formación diseñado especialmente para quienes adquieren nuestras soluciones, con el fin de que puedan configurarlas, gestionarlas y adaptarlas a sus necesidades diarias. </p>
          </section>

          <div className="dflex line"></div>
        </div>

        <div className="secone-acad">
          <img className="img-acad max-w-none" src="/img/colmotica/mujer pc.png" alt=""/>
        </div>
      </div>

      <div className="dflex pd-g">
        <p className="title-all">Qué encontrará en la Academia</p>
      </div>
      <section className="pd-g dflex sefor">
        <div className="c-produc dflex mw400">
          <img src="/img/colmotica/a1.png" alt="imgproduct" className="w80"/>
            <div>
              <p className="title-all fall25">Guías paso a paso para instalar y configurar nuestras soluciones.</p>
            </div>
        </div>
        <div className="c-produc dflex mw400">
          <div>
            <p className="title-all fall25">Tutoriales en video y manuales interactivos.</p>
          </div>
          <img src="/img/colmotica/a2.png" alt="imgproduct" className="w80"/>
        </div>
      </section>
      <section className="pd-g dflex sefor mb-50">
        <div className="c-produc dflex mw400">
          <img src="/img/colmotica/a3.png" alt="imgproduct" className="w80"/>
            <div>
              <p className="title-all fall25">Ejemplos prácticos para el uso diario.</p>
            </div>
        </div>
        <div className="c-produc dflex mw400">
          <div>
            <p className="title-all fall25">Consejos para optimizar el rendimiento y la eficiencia.</p>
          </div>
          <img src="/img/colmotica/a4.png" alt="imgproduct" className="w80"/>
        </div>
      </section>
    </>
  )
}
