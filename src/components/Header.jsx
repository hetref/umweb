import shape1 from "../assets/images/header/shape1.svg";
import shape2 from "../assets/images/header/shape2.svg";
import Intro from "../assets/components/Intro";

const IntroContainer = () => {
  return (
    <div className="section position-relative">
      <div className="hero-shape1">
        <img src={shape1} alt="shape" />
      </div>
      <div className="hero-shape2">
        <img src={shape2} alt="shape" />
      </div>
      <Intro />
    </div>
  );
};

export default IntroContainer;
