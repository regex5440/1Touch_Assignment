import { faClose, faCross, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./App.sass";
import "./Style/topbar.sass";
import Header from "./Components/Header";
import HeroCarousal from "./Components/HeroCarousal";
import BrandCarousal from "./Components/BrandCarousal";
import DotCarousal from "./Components/DotCarousal";
import Footer from "./Components/Footer";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Search() {
  const [val, setVal] = useState("");
  const handleInput = (e) => {
    setVal(e.target.value);
  };
  return (
    <form className="search__form">
      <input placeholder="Buscar..." value={val} onInput={handleInput} />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

function TopBar() {
  const [showPopup, setshowPopup] = useState(false);

  const closePopUp = () => {
    setshowPopup(false);
  };

  return (
    <div className="top-bar">
      {showPopup && (
        <div className="popup">
          <div className="popup__overlay" onClick={closePopUp}></div>
          <div className="popup__container">
            <div className="popup__close">
              <FontAwesomeIcon onClick={closePopUp} icon={faClose} />
            </div>
            <h1>PopUp</h1>
          </div>
        </div>
      )}
      <div className="top-bar__container">
        <h1 onClick={() => setshowPopup(true)}>
          ABIERTO AHORA VIERNES 7H00-13H00
        </h1>
        <div className="top-bar__interactive">
          <Search />
          <div className="top-bar__interactive-links">
            <a
              href="https://www.facebook.com/QuicentroShopping"
              title="QuicentroShopping@Facebook"
            >
              <FacebookRoundedIcon />
            </a>
            <a
              href="https://www.instagram.com/quicentroshopping/"
              title="quicentroshopping@Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCaG66g9k8Myr_ofwm031PxQ"
              title="Youtube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://twitter.com/QuicentroUIO"
              title="QuicentroUIO@Twitter"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroCarousal />
      <BrandCarousal />
      <DotCarousal />
      <Footer />
    </>
  );
}

export default App;
