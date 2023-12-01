import PropTypes from "prop-types";
import SectionTitle from "../assets/components/SectionTitle";
import Button from "../assets/components/Button";
import IconBox from "../assets/components/IconBox";
import imgshape from "../assets/images/feature/shape.png";
import imgicbox1 from "../assets/images/feature/logo/1.png";
import imgicbox2 from "../assets/images/feature/logo/2.png";
import imgicbox3 from "../assets/images/feature/logo/3.png";

const Works = ({ classOption }) => {
  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="works"
      >
        &nbsp;
      </span>
      <div className={`feature-section position-relative ${classOption}`}>
        <img className="path-img" src={imgshape} alt="images_not_found" />
        <div className="container custom-container">
          <div className="row g-0 align-items-center">
            <div className="col-xl-6 col-lg-8 mx-auto mb-3 text-center">
              <SectionTitle
                classOption="title-section"
                subTitle="WORKS"
                title="We are <span class='text-primary'>different</span> because..."
                excerptClassOption="mb-10"
                excerpt="Pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or
                            desires to obtain"
              />
              <Button
                classOption="btn btn-lg btn-dark btn-hover-dark"
                text="Contact"
                path="contact"
              />
            </div>

            <div className="col-12">
              <div id="grid" className="grid row mb-n7">
                <IconBox
                  className="grid-item card-mt-75 mb-7"
                  icon={imgicbox1}
                  title="Strong Security"
                  excerpt="Pleasure rationally encounter are extremely painful anyone who loves or pursues"
                />
                <IconBox
                  className="grid-item card-mt-75 mb-7"
                  icon={imgicbox2}
                  title="Creative Idea"
                  excerpt="Pleasure rationally encounter are extremely painful anyone who loves or pursues"
                />
                <IconBox
                  className="grid-item card-mt-75 mb-7"
                  icon={imgicbox3}
                  title="Best Service"
                  excerpt="Pleasure rationally encounter are extremely painful anyone who loves or pursues"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Works.propTypes = {
  classOption: PropTypes.string,
};

Works.defaultProps = {
  classOption: "section-pb",
};

export default Works;
