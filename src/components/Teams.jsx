import PropTypes from "prop-types";
import SectionTitle from "../assets/components/SectionTitle";
import Team from "../assets/components/Team";

import caryimg from "../assets/images/profiles/Cary.jpg";
import tejanimg from "../assets/images/profiles/Tejan.jpg";
import kaushikimg from "../assets/images/profiles/Kaushik.jpg";

const Teams = ({ classOption }) => {
  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="team"
      >
        &nbsp;
      </span>
      <div className={`team-section overflow-hidden ${classOption}`}>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="team-content-wrap">
                <SectionTitle
                  classOption="title-section"
                  subTitle="TEAM"
                  title="Visionaries Behind <span class='text-primary'>Unscrap Media</span>"
                  excerptClassOption="mb-5"
                  excerpt="Meet the dynamic trio steering Unscrap Media towards excellence — Tejan Suvarna, Kaushik Patil, and Cary Wood. Fueled by a shared passion for innovation, they bring a wealth of experience in social media marketing, web development, and creative design. Together, they form the driving force behind our commitment to delivering cutting-edge solutions that redefine the digital landscape. With a vision to empower businesses through seamless integration of technology and creativity, Cary, Kaushik, and Tejan inspire our team to push boundaries and consistently exceed expectations."
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="new-team-members">
                <Team
                  thumb={tejanimg}
                  name="Tejan Suvarna"
                  designation="Co-Founder"
                />
                <Team
                  thumb={kaushikimg}
                  name="Kaushik Patil"
                  designation="Co-Founder"
                />
                <Team
                  thumb={caryimg}
                  name="Cary Wood"
                  designation="Co-Founder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Teams.propTypes = {
  classOption: PropTypes.string,
};

Teams.defaultProps = {
  classOption: "section-pb",
};

export default Teams;
