import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Parallax from "parallax-js";
import Button from "./Button";
import imgintro from "../images/slider/slide2.png";

const Intro = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div className="hero-slider">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-slide-content">
              <h2 className="title animated">
                Full Solution <br />
                for your{" "}
                <span className="text-decoration-underline">Existence</span>
                <br />
                in Social Life
              </h2>
              <Button
                classOption="btn btn-lg animated delay1 btn-dark btn-hover-dark me-4 mb-3 mb-sm-0"
                text="Contact Us"
                path="contact"
              />
              <Button
                classOption="btn btn-lg animated delay2 btn-secondary btn-hover-secondary mb-3 mb-sm-0"
                text="Check Services"
                path="service"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="hero-img scene mt-10 mt-lg-0"
              id="scene"
              ref={sceneEl}
            >
              <div data-depth="0.2">
                <img className="animated" src={imgintro} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  data: PropTypes.object,
};

export default Intro;