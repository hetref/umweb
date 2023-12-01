import PropTypes from "prop-types";

const ServiceBox = ({ icon, title, excerpt }) => {
  return (
    <div className="service-media">
      <img className="logo" src={icon} alt=" service logo" />
      <div className="service-media-body">
        <h4 className="title">{title}</h4>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

ServiceBox.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
};

export default ServiceBox;
