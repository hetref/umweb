import PropTypes from "prop-types";

const Brand = ({ image }) => {
  return (
    <div className="single-brand">
      <img src={image} alt="brand logo" />
    </div>
  );
};

Brand.propTypes = {
  image: PropTypes.string,
};

export default Brand;
