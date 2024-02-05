import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ServiceBox = ({ title, excerpt, type, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    if (type === "case-study") {
      navigate(link);
    }
  };

  return (
    <div className="service-media">
      <div
        className="service-media-body hover:bg-[#3d72a440] p-[2rem] rounded duration-300"
        onClick={handleClick}
      >
        <h4 className="title">{title}</h4>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

ServiceBox.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
};

export default ServiceBox;
