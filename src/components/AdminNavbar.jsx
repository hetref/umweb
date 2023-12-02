import { useCallback, useContext, useEffect, useState } from "react";
import Logo from "../assets/components/Logo";
import brandlogo from "../assets/images/logo/logo-black.png";
import { NavLink, useNavigate } from "react-router-dom";
import { CursorContext } from "../context/CursorContextProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  const [, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  }, [setCursor]);

  const navigate = useNavigate();

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onHomeClick = () => {
    window.scrollTo(0, 0);
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const signOutHandler = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/um-auth");
      })
      .catch((error) => {
        console.log(error);
        navigate("/um-auth");
        // An error happened.
      });
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
              <nav className="main-menu d-none d-lg-block">
                <ul className="d-flex">
                  <li>
                    <button
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      onClick={() => handleClick("/um-dashboard")}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      onClick={() => handleClick("/um-dashboard/update")}
                    >
                      Update
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      onClick={() => handleClick("/um-dashboard/contact")}
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      onClick={() => handleClick("/um-dashboard/users")}
                    >
                      Users
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      onClick={signOutHandler}
                    >
                      SignOut
                    </button>
                  </li>
                </ul>
              </nav>
              <button className="toggle" onClick={onCanvasHandler}>
                <span className="icon-top"></span>
                <span className="icon-middle"></span>
                <span className="icon-bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`offcanvas-modal ${ofcanvasShow ? "show" : ""}`}>
        <div className="offcanvas-dialog">
          <div className="menu-content">
            <div className="offcanvas-header">
              <Logo
                classOption="offcanvas-logo d-inline-block"
                image={brandlogo}
              />
              <button
                type="button"
                className="btn-close"
                onClick={onCanvasHandler}
              ></button>
            </div>

            <nav id="offcanvasNav" className="offcanvas-menu">
              <ul>
                <li>
                  <NavLink
                    exact
                    to="/"
                    onClick={() => {
                      onCanvasHandler();
                      onHomeClick();
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("about");
                      onCanvasHandler();
                    }}
                    className="btn"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("service");
                      onCanvasHandler();
                    }}
                    className="btn"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("works");
                      onCanvasHandler();
                    }}
                    className="btn"
                  >
                    Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("team");
                      onCanvasHandler();
                    }}
                    className="btn"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      onCanvasHandler();
                    }}
                    className="btn"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
