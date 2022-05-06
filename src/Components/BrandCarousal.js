import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import "../Style/brandcarousal.sass";
import accersories from "../assets/accersories.png";
import bibi_logo from "../assets/Logo_Bibi.png";
import fossil_logo from "../assets/Logo_Fossil.png";
import funky_fish from "../assets/Logo_Funky-Fish.png";
import movistar from "../assets/movistar.png";

export default function BrandCarousal() {
  const [slider, setSlider] = useState(0);
  useEffect(() => {
    setSlider(
      window.outerWidth > 1024
        ? 5
        : window.outerWidth > 767
        ? 4
        : window.outerWidth > 500
        ? 3
        : 2
    );
    window
      .matchMedia("(min-width:1024px)")
      .addEventListener("change", function (e) {
        if (e.matches) setSlider(5);
      });
    window
      .matchMedia("(min-width:767px) and (max-width: 1024px)")
      .addEventListener("change", function (e) {
        if (e.matches) setSlider(4);
      });
    window
      .matchMedia("(max-width:767px)")
      .addEventListener("change", function (e) {
        if (e.matches) {
          setSlider(3);
        } else {
          setSlider(2);
        }
      });
  }, []);

  const settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: slider,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
  };
  return (
    <div className="brandCarousal">
      <Slider {...settings}>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/movistar/"
        >
          <img alt="Moviestar" src={movistar} />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/funky-fish/"
        >
          <img alt="Funky Fish" src={funky_fish} />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/fossil/"
        >
          <img alt="Fossil" src={fossil_logo} />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/bibi/"
        >
          <img alt="Bibi" src={bibi_logo} />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/accesorios-celulares/"
        >
          <img alt="Accessories" src={accersories} />
        </a>
      </Slider>
      <div className="brandCarousal__action">
        <a href="http://quicentro.xyz/quicentro/all-shops-and-gestronomia/">
          todas las marcas
        </a>
      </div>
    </div>
  );
}
