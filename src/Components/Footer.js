import "../Style/footer.sass";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__col1">
          <div className="footer__col1__container">
            <div className="footer__col1__logo">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/logo.png"
                alt="Company logo"
              />
            </div>

            <div className="footer__col1__info">
              <h4>UBICACIÓN</h4>
              <p>
                Quicentro Shopping está ubicado en el centro ejecutivo y
                financiero de la ciudad de Quito, rodeado de hoteles de primera
                clase y otros puntos de interés turístico.
              </p>

              <p>Dirección:</p>
              <p>
                Avenida Naciones Unidas entre Avenida 6 de Diciembre y Avenida
                De Los Shyris.
              </p>
              <p>Telf.: +59322464526</p>
            </div>
          </div>
        </div>
        <div className="footer__col2">
          <div className="footer__col2__container">
            <div className="footer__nav__block">
              <h4>EMPRESA</h4>
              <ul>
                <li>
                  <a href="http://quicentro.xyz/quicentro/acerca-de-nostros/">
                    Acerca de Nosotros
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/trabaja-con-nosotros/">
                    Trabaja con nosotros
                  </a>
                </li>

                <li>
                  <a href="http://quicentro.xyz/quicentro/contacto-interna/">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/sugerencias/">
                    Sugerencias
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__nav__block">
              <h4>SERVICIOS</h4>
              <ul>
                <li>
                  <a href="http://quicentro.xyz/quicentro/wifi-gratis/">
                    Wifi Gratis
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/parqueadero/">
                    Parqueadero
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__nav__block">
              <h4>POLÍTICAS</h4>
              <ul>
                <li>
                  <a href="http://quicentro.xyz/quicentro/parqueaderos-bici-detalle/">
                    Parqueadero Motos y Bicicletas
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/mascotas/">
                    Mascotas y Medio Ambiente
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__nav__block">
              <h4>AVISO LEGAL</h4>
              <ul>
                <li>
                  <a href="http://quicentro.xyz/quicentro/privacidad/">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/terms-and-conditions/">
                    Términos y condiciones
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__nav__block">
              <h4>TRABAJA CON NOSOTROS</h4>
              <p className="phone">
                <strong>Número de teléfono</strong>: 022464526
              </p>
              <p className="email">
                <strong>Correo electrónico</strong>: info@quicentro.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
