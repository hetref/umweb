import { useEffect, useState } from "react";
import Logo from "../assets/components/Logo";
import SocialIcon from "../assets/components/SocialIcon";
import logoblack from "../assets/images/logo/logo-black.png";
import imgfooter1 from "../assets/images/footer/img1.svg";

const Footer = () => {
  const [year, setYear] = useState(0);
  useEffect(() => {
    const today = new Date();
    setYear(today.getFullYear());
  }, []);

  return (
    <footer className="footer-section mt-10">
      <div className="footer-top position-relative">
        <img className="footer-shape" src={imgfooter1} alt="shape" />
        <div className="container">
          <div className="row mb-n7">
            <div className="col-lg-6 col-sm-6 mb-7">
              <div className="footer-widget">
                <Logo classOption="footer-logo mb-9" image={logoblack} />
                <ul className="footer-social-links">
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://www.facebook.com/"
                      icon="icofont-facebook"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://www.instagram.com/"
                      icon="icofont-instagram"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://twitter.com/"
                      icon="icofont-twitter"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://www.whatsapp.com/"
                      icon="icofont-whatsapp"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Contact info</h4>
                <p>
                  Unscrap Media, SS3-99, Sector 2, Vashi, Navi Mumbai,
                  Maharashtra 400703
                </p>
                <ul className="address">
                  <li>
                    <a className="address-link" href="tel:+12354569874">
                      +12354 569 874
                    </a>
                  </li>
                  <li>
                    <a className="address-link" href="tel:+98745612398">
                      +98745 612 398
                    </a>
                  </li>
                  <li>
                    <a
                      className="address-link"
                      href="mailto:unscrapmedia@gmail.com"
                    >
                      unscrapmedia@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="address-link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://unscrapmedia.com"
                    >
                      unscrapmedia.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-info text-center">
                <p>
                  Copyright &copy; {year} Made with{" "}
                  <i className="icofont-heart-alt"></i> By{" "}
                  <a
                    href="https://themeforest.net/user/codecarnival/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    UnscrapMedia
                  </a>
                  , All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
