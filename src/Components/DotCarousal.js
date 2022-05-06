import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick/lib/slider";
import "../Style/dotcarousal.sass";

export default function DotCarousal() {
  const settings = {
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    customPaging: (i) => <div className="slide-dot">{i + 1}</div>,
    autoplaySpeed: 5000,
    speed: 700,
    draggable: false,
    useCSS: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
  };
  return (
    <div className="dotCarousal">
      <Slider {...settings}>
        <div>
          <div className="dotSlide__container">
            <a
              className="dotSlide__img"
              href="http://quicentro.xyz/quicentro/tiempo-de-reencuentro-como-encontrar-el-look-perfecto/"
            >
              <img
                alt=""
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/top_banner3.jpg"
              />
            </a>
            <div className="dotSlide__txt">
              <h1>
                <a href="http://quicentro.xyz/quicentro/tiempo-de-reencuentro-como-encontrar-el-look-perfecto/">
                  TIEMPO DE REENCUENTRO, COMO ENCONTRAR EL LOOK PERFECTO?
                </a>
              </h1>
              <p>
                Estos últimos meses del año vienen cargados de muchas
                tradiciones, comida deliciosa, pero sobre todo de muchos
                reencuentros con personas especiales en nuestra vida. De seguro
                tu calendario se está...
              </p>
              <h2>
                <a href="http://quicentro.xyz/quicentro/tiempo-de-reencuentro-como-encontrar-el-look-perfecto/">
                  VER MAS
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="dotSlide__container">
            <a
              className="dotSlide__img"
              href="http://quicentro.xyz/quicentro/tendencias-de-moda-otono-invierno-2020-que-puedes-encontrar-en-quicentro-shopping/"
            >
              <img
                alt=""
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image049.jpg"
              />
            </a>
            <div className="dotSlide__txt">
              <h1>
                <a href="http://quicentro.xyz/quicentro/tendencias-de-moda-otono-invierno-2020-que-puedes-encontrar-en-quicentro-shopping/">
                  TENDENCIAS DE MODA OTOÑO-INVIERNO 2020 QUE PUEDES ENCONTRAR EN
                  QUICENTRO SHOPPING
                </a>
              </h1>
              <p>
                Bienvenido octubre y bienvenida la nueva temporada. Aunque
                todavía existe calor suficiente para sacar el mayor partido a
                nuestros looks veraniegos nuestra mente ya está lista para usar
                todas las...
              </p>
              <h2>
                <a href="http://quicentro.xyz/quicentro/tendencias-de-moda-otono-invierno-2020-que-puedes-encontrar-en-quicentro-shopping/">
                  VER MAS
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="dotSlide__container">
            <a
              className="dotSlide__img"
              href="http://quicentro.xyz/quicentro/esenciales-para-un-verano-inolvidable-en-casa/"
            >
              <img
                alt=""
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image042.png"
              />
            </a>
            <div className="dotSlide__txt">
              <h1>
                <a href="http://quicentro.xyz/quicentro/esenciales-para-un-verano-inolvidable-en-casa/">
                  ESENCIALES PARA UN VERANO INOLVIDABLE EN CASA
                </a>
              </h1>
              <p>
                Esperamos tantos meses para que lleguen estos días de calor y,
                cuando al fin están aquí, muchas veces, no sabemos qué hacer.
                Por ello, hoy te traemos algunas ideas de...
              </p>
              <h2>
                <a href="http://quicentro.xyz/quicentro/esenciales-para-un-verano-inolvidable-en-casa/">
                  VER MAS
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="dotSlide__container">
            <a
              className="dotSlide__img"
              href="http://quicentro.xyz/quicentro/sacos-infaltables-para-esta-temporada-de-frio/"
            >
              <img
                alt=""
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image037.jpg"
              />
            </a>
            <div className="dotSlide__txt">
              <h1>
                <a href="http://quicentro.xyz/quicentro/sacos-infaltables-para-esta-temporada-de-frio/">
                  SACOS INFALTABLES PARA ESTA TEMPORADA DE FRÍO
                </a>
              </h1>
              <p>
                Una prenda que no te puede faltar en tu armario es el suéter. Ya
                que son piezas gratamente cómodas, fáciles de combinar con
                prendas de verano, lo que las hace...
              </p>
              <h2>
                <a href="http://quicentro.xyz/quicentro/sacos-infaltables-para-esta-temporada-de-frio/">
                  VER MAS
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="dotSlide__container">
            <a
              className="dotSlide__img"
              href="http://quicentro.xyz/quicentro/prendas-antifluidos-para-no-perder-el-estilo/"
            >
              <img
                alt=""
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2021/02/image032.png"
              />
            </a>
            <div className="dotSlide__txt">
              <h1>
                <a href="http://quicentro.xyz/quicentro/prendas-antifluidos-para-no-perder-el-estilo/">
                  {" "}
                  PRENDAS ANTIFLUIDOS PARA NO PERDER EL ESTILO
                </a>
              </h1>
              <p>
                {" "}
                La expansión de la pandemia ha cambiado nuestras costumbres,
                hábitos y la forma en como interactuamos con otras personas.
                Pero lo que seguramente más ha revolucionado el virus es
                nuestra...
              </p>
              <h2>
                <a href="http://quicentro.xyz/quicentro/prendas-antifluidos-para-no-perder-el-estilo/">
                  {" "}
                  VER MAS
                </a>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
