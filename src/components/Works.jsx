import PropTypes from "prop-types";
import SectionTitle from "../assets/components/SectionTitle";
import Button from "../assets/components/Button";
import IconBox from "../assets/components/IconBox";
import imgshape from "../assets/images/feature/shape.png";
import { useEffect, useState } from "react";
import useDbStore from "../store/dbStore";
import { ref } from "firebase/database";
import { database } from "../firebase";

const Works = ({ classOption }) => {
  const [currentTab, setCurrentTab] = useState("all");
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  const worksRef = ref(database, "unscrapMedia/works");
  const data = useDbStore((state) => state.data);
  // console.log(data);

  useEffect(() => {
    setWorks(data.works);
    console.log(works);
    if (works === null || works === undefined || works.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
      const arr = Object.values(works);
      console.log(arr);
    }
  }, [data, works]);

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
                <div className="work-tags flex justify-center items-center mt-6"></div>
                {!loading &&
                  currentTab === "all" &&
                  Object.values(works)?.map((item, index) => {
                    console.log(item);
                    return (
                      <IconBox
                        key={index}
                        icon={item.image}
                        title={item.title}
                        link={item.link}
                      />
                    );
                  })}

                {!loading &&
                  Object.values(works).map((item, index) => {
                    if (item.category == currentTab) {
                      return (
                        <IconBox
                          key={index}
                          icon={item.image}
                          title={item.title}
                          link={item.link}
                        />
                      );
                    }
                  })}
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
