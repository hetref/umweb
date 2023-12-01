import PropTypes from "prop-types";

const ContactInfo = ({ classOption, title, info }) => {
  return (
    <div className={classOption}>
      <h4 className="title">{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: info }}></p>
    </div>
  );
};

ContactInfo.propTypes = {
  classOption: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
};

export default ContactInfo;
