import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import "../Style/brandcarousal.sass";

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
          <img
            alt="Moviestar"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/movistar-2-1.png"
          />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/funky-fish/"
        >
          <img
            alt="Funky Fish"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/Logo_Funky-Fish.png"
          />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/fossil/"
        >
          <img
            alt="Fossil"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/Logo_Fossil.png"
          />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/bibi/"
        >
          <img
            alt="Bibi"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/Logo_Bibi.png"
          />
        </a>
        <a
          className="brand__anchor"
          href="http://quicentro.xyz/quicentro/shop-posts/accesorios-celulares/"
        >
          <img
            alt="Accessories"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://quicentro.xyz/quicentro/wp-content/uploads/2020/07/accersories-1-1.png"
          />
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
