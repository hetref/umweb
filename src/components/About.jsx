import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import SectionTitle from "../assets/components/SectionTitle";
import img1 from "../assets/images/about/1.png";
import imgshape from "../assets/images/about/shape1.svg";

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="about"
      >
        &nbsp;
      </span>
      <div className="about-us position-relative">
        <div className="container">
          <div className="row mb-n7">
            <div className="col-xl-5 col-lg-6 mb-7">
              <div className="about-content">
                <SectionTitle
                  classOption="title-section"
                  subTitle="ABOUT US"
                  title="Best 
                                <span class='text-primary'>
                                    Digital Agency
                                </span>
                                <br className='d-none d-xl-block' />
                                in the Town"
                />
                <span className="date-meta">
                  Since 2019 <span className="hr"></span>
                </span>
                <p className="mb-5">
                  Established in 2019, Unscrap Media is the brainchild of
                  visionaries Tejan Suvarna, Kaushik Patil and Cary Wood. Fueled
                  by a collective passion for innovation, we bring a wealth of
                  experience in social media marketing, web development, and
                  creative design. At Unscrap, we are dedicated to reshaping the
                  digital landscape by seamlessly integrating technology and
                  creativity, delivering cutting-edge solutions that empower
                  businesses to thrive in the ever-evolving online world.
                </p>
              </div>
            </div>
            <div className="col-xl-6 order-first order-lg-last col-lg-6 mb-7 offset-xl-1">
              <div
                className="about-photo scene text-center text-lg-left"
                id="scene"
                ref={sceneEl}
              >
                <div data-depth="0.2">
                  <img src={img1} alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="about-shape" src={imgshape} alt="bg-shape" />
      </div>
    </>
  );
};

export default About;
