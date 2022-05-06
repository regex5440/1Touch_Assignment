import Slider from "react-slick/lib/slider";
import "../Style/herocarousal.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import b4 from "../assets/b4.jpg";
import b3 from "../assets/b3.jpg";
import b2 from "../assets/b2.jpg";
import b1 from "../assets/b1.jpg";
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
          <img alt="Carousal 1" src={b4} />
        </div>
        <div className="heroCarousal__item">
          <img alt="Carousal 2" src={b3} />
        </div>
        <div className="heroCarousal__item">
          <img alt="Carousal 3" src={b2} />
        </div>
        <div className="heroCarousal__item">
          <img alt="Carousal 4" src={b1} />
        </div>
      </Slider>
    </div>
  );
}
