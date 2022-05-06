import { faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "../Style/header.sass";
import logo from "../assets/logo.png";

function NavBar() {
  const [isHamMenu, setIsHam] = useState(
    window.outerWidth >= 1024 ? false : true
  );
  const [navOpen, setnavOpen] = useState(
    window.outerWidth >= 1024 ? true : false
  );

  useEffect(() => {
    window
      .matchMedia("(min-width:1024px)")
      .addEventListener("change", function (e) {
        if (e.matches) {
          setnavOpen(true);
          setIsHam(false);
        } else {
          setnavOpen(false);
          setIsHam(true);
        }
      });
  }, []);
  return (
    <>
      {navOpen && (
        <nav>
          <div
            onClick={() => setnavOpen(false)}
            className="nav__container__overlay"
          ></div>
          <ul
            className={`nav__container main-menu ${
              isHamMenu ? "mobile" : "desktop"
            }`}
          >
            <li>
              <a href="http://quicentro.xyz/quicentro/noticias/">Noticias</a>
              <ul className="nav__submenu">
                <li>
                  <a href="http://quicentro.xyz/quicentro/category/bernarda-erazo/">
                    BERNARDA ERAZO
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/category/facilities/">
                    FACILITIES
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/category/fitness/">
                    FITNESS
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/category/institucional/">
                    INSTITUCIONAL
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://quicentro.registragana.com/">Registra Gana</a>
            </li>
            <li>
              <a href="http://quicentro.xyz/quicentro/shops/">TIENDAS</a>
              <ul className="nav__submenu">
                <li>
                  <a href="http://quicentro.xyz/quicentro/shops/?category_name=moda-unisex&category_type=shop_categories&pickup_checked=0">
                    MODA UNISEX
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/shops/?category_name=joyeria&category_type=shop_categories&pickup_checked=0">
                    JOYERIA
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/shops/?category_name=moda-mujer&category_type=shop_categories&pickup_checked=0">
                    MODA MUJER
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/shops/?category_name=calzado-familia&category_type=shop_categories&pickup_checked=0">
                    CALZADO FAMILIA
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://quicentro.xyz/quicentro/sale/">Descuentos</a>
            </li>
            <li>
              <a href="http://quicentro.xyz/quicentro/gastronomia/">
                Gastronomía
              </a>
              <ul className="nav__submenu">
                <li>
                  <a href="http://quicentro.xyz/quicentro/gastronomia/?category_name=patio-de-comidas&category_type=gastronomy_categories&pickup_checked=0">
                    PATIO DE COMIDAS
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/gastronomia/?category_name=cafeterias-y-heladerias&category_type=gastronomy_categories&pickup_checked=0">
                    CAFETERIAS Y HELADERIAS
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/gastronomia/?category_name=otras-comidas&category_type=gastronomy_categories&pickup_checked=0">
                    OTRAS COMIDAS
                  </a>
                </li>
                <li>
                  <a href="http://quicentro.xyz/quicentro/gastronomia/?category_name=restaurantes&category_type=gastronomy_categories&pickup_checked=0">
                    RESTAURANTES
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://quicentro.xyz/quicentro/responsabilidad-social/">
                responsabilidad social
              </a>
            </li>
            <li>
              <a href="http://quicentro.xyz/quicentro/contact/">
                Contacto Comercial
              </a>
            </li>
          </ul>
        </nav>
      )}
      {isHamMenu && (
        <FontAwesomeIcon
          className="hamicon"
          icon={faBars}
          onClick={() => {
            setnavOpen(!navOpen);
          }}
        />
      )}
    </>
  );
}

export default function Header() {
  const header = useRef(null);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY >= 2 * header.current.offsetHeight) {
        header.current.classList.add("sticky");
      } else {
        header.current.classList.remove("sticky");
      }
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header ref={header}>
      <div className="scrollTop__CTA" onClick={scrollTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div className="header__container">
        <div className="header__logo">
          <a href="http://quicentro.xyz/quicentro/">
            <img alt="Logo" src={logo} />
          </a>
        </div>
        <NavBar />
        <div className="header__right-side-link">
          <a href="http://quicentro.xyz/quicentro/login">Iniciar sesión</a>
        </div>
      </div>
    </header>
  );
}
