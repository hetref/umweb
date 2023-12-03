import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import brandlogo from "../images/logo/logo-black.png";

const MobileMenu = ({ show, onClose }) => {
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

  return (
    <div className={`offcanvas-modal ${show ? "show" : ""}`}>
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
              onClick={onClose}
            ></button>
          </div>

          <nav id="offcanvasNav" className="offcanvas-menu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    onClose();
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
                    onClose();
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
                    onClose();
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
                    onClose();
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
                    onClose();
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
                    onClose();
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
  );
};

MobileMenu.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default MobileMenu;
