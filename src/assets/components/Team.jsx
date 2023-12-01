import PropTyps from "prop-types";

const Team = ({ thumb, name, designation }) => {
  return (
    <div className="new-team-members-list">
      <img src={thumb} alt="images" />
      <h3 className="title">{name}</h3>
      <span>{designation}</span>
    </div>
  );
};

Team.propTypes = {
  thumb: PropTyps.string,
  name: PropTyps.string,
  designation: PropTyps.string,
};

export default Team;
