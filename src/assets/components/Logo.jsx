import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Logo = ({ image, classOption, link }) => {
  return (
    <NavLink className={`${classOption}`} to={link}>
      <img className="logo-main" src={image} alt="Logo" />
    </NavLink>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
  classOption: PropTypes.string,
  link: PropTypes.string,
};

Logo.defaultProps = {
  classOption: "text-center",
  link: "",
};

export default Logo;
