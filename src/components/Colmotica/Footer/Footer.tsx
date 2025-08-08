import { Fragment } from "react/jsx-runtime"

export default function Footer() {
  return (
    <Fragment>
      <footer className="">
        <div className="containet-footer">
          <p className="containet-footer-title">
            <a className="color-white">Home</a>
          </p>
          <p className="containet-footer-title">
            <a className="color-white" id="myBtn">Productos</a>
          </p>
          <p className="containet-footer-title">
            <a className="color-white">Academy</a>
          </p>
          <p className="containet-footer-title">
            <a className="color-white">Soluciones</a>
          </p>
          <p className="containet-footer-title">
            <a className="color-white">Consultorias</a>
          </p>
        </div>
        <div className="containet-footer">
          <p className="containet-footer-title">CONTACTO</p>
          <p className="containet-footer-sbtitle">Tekneo@gmail.com</p>
          <p className="containet-footer-sbtitle">#123456789 - 65</p>
          <p className="containet-footer-sbtitle">#123456789 - 65</p>
          <p className="containet-footer-sbtitle">Calle 123 # 123 - 123</p>
        </div>
      </footer>
    </Fragment>
  )
}