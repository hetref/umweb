import { useEffect, useState } from "react";
import MainMenu from "../assets/components/MainMenu";
import Logo from "../assets/components/Logo";
import MobileMenu from "../assets/components/MobileMenu";
import brandlogo from "../assets/images/logo/logo-black.png";

const Header = () => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const header = document.querySelector(".sticky-header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header-section sticky-header ${
          scroll > headerTop ? "is-sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="header-logo">
                <Logo classOption="d-block" image={brandlogo} />
              </div>
            </div>

            <div className="col text-end">
              <MainMenu />
              <button className="toggle" onClick={onCanvasHandler}>
                <span className="icon-top"></span>
                <span className="icon-middle"></span>
                <span className="icon-bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};

export default Header;
