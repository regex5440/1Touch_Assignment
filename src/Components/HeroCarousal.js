import Slider from "react-slick/lib/slider";
import "../Style/herocarousal.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function HeroCarousal() {
  const settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 700,
    draggable: false,
    useCSS: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
  };
  return (
    <div className="heroCarousal">
      <Slider {...settings}>
        <div className="heroCarousal__item">
          <img
            alt="Carousal 1"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/b4.jpg"
          />
        </div>
        <div className="heroCarousal__item">
          <img
            alt="Carousal 2"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/b3.jpg"
          />
        </div>
        <div className="heroCarousal__item">
          <img
            alt="Carousal 3"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/b2.jpg"
          />
        </div>
        <div className="heroCarousal__item">
          <img
            alt="Carousal 4"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/b1.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
