import React from "react";
import "./footer.css";

function FooterGral() {
  return (
    <div className="main-footer">
      <div className="containerFooter">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-5 col-sm-6">
            <h4>Centro de Investigaciones</h4>
            <ul className="list-unstyled">
              <a className="linkFooter" href="/">
                {" "}
                <li className="listDetail">Institucional</li>
              </a>
              <a className="linkFooter" href="/">
                {" "}
                <li className="listDetail">Conocenos</li>
              </a>
              <a className="linkFooter" href="/">
                {" "}
                <li className="listDetail">Nuestros proyectos</li>
              </a>
            </ul>
          </div>
          {/* Column 2 */}
          {/* Column 3 */}
          <div className="redesFooter col-md-3 col-sm-6">
            <h4>
              Nuestras redes<span> </span>
            </h4>
            <ul className="list-unstyled">
              <li className="redesSociales"></li>
              <a className="linkRedes" href="https://twitter.com/JandriLarrea">
                {" "}
                <i className="logoRedes fa fa-instagram"></i>{" "}
              </a>
              <li className="redesSociales"></li>
              <a className="linkRedes" href="https://twitter.com/JandriLarrea">
                {" "}
                <i className="logoRedes fa fa-twitter"></i>{" "}
              </a>
              <li className="redesSociales"></li>
              <a
                className="linkRedes"
                href="https://www.youtube.com/channel/UC5GpolCxlms0B80Y7cRo1-A"
              >
                {" "}
                <i className="logoRedes fa fa-youtube"></i>{" "}
              </a>
            </ul>
          </div>
          <div className="newsletterFooter col-md-4 col-sm-6">
            <h6 className="my-3"> Subscribirse a Newsletter </h6>

            <div className="row d-flex my-2 pr-2 pr-md-5 div1">
              <div className="col-9">
                <input
                  type="email"
                  className="form-control py-3"
                  id="inp1"
                  placeholder="Ingrese correo electrónico"
                />
              </div>

              <div className="col-3 px-0">
                <button className="btnFooter text-white px-4 py-2"> OK </button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyrigthText text-xs-center">
            &copy;{new Date().getFullYear()} Juan Pedro, Caffa - Todos los
            derechos registrados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterGral;
