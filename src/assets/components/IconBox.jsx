import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
const IconBox = ({ icon, title, link }) => {
  return (
    <div className="grid-item card-mt-75 mb-7">
      <div className="feature-card bg-light">
        <span className="card-shape card-shape-light"></span>
        <span className="card-shape card-shape-dark"></span>
        <img
          className="logo w-full h-[200px] object-contain rounded-xl"
          src={icon}
          alt=" feature logo"
        />
        {link === "" ? (
          <h4 className="title mt-6 mb-0">{title}</h4>
        ) : (
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            className="flex mt-6 justify-center items-center text-[#181c51] hover:text-[#5080ac]"
          >
            <h4 className="title mb-0 mr-4">{title}</h4>
            <FaExternalLinkAlt className="" />
          </a>
        )}
      </div>
    </div>
  );
};

IconBox.defaultProps = {
  link: "",
};

IconBox.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default IconBox;
