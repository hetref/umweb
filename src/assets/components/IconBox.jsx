import PropTypes from "prop-types";

const IconBox = ({ className, icon, title, excerpt }) => {
  return (
    <div className={className}>
      <div className="feature-card bg-light">
        <span className="card-shape card-shape-light"></span>
        <span className="card-shape card-shape-dark"></span>
        <img className="logo" src={icon} alt=" feature logo" />
        <h4 className="title my-6">{title}</h4>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

IconBox.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
};

export default IconBox;
