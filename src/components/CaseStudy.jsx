import { useEffect, useState } from "react";
import SectionTitle from "../assets/components/SectionTitle";
import ServiceBox from "../assets/components/ServiceBox";
import { client } from "../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CaseStudy = () => {
  const [contentfulData, setContentfulData] = useState([]);

  useEffect(() => {
    const getContentfulEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "unscrapMediaCaseStudies",
        });

        console.log(response);
        setContentfulData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getContentfulEntries();
  }, []);

  const handleClick = () => {
    console.log(contentfulData);
    // contentfulData.items.map((item) =>
    //   console.log(documentToReactComponents(item.fields.description))
    // );
  };

  return (
    <div>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="casestudy"
      >
        &nbsp;
      </span>

      <div
        id="service"
        className="service-section section-pt position-relative"
      >
        <div className="container">
          <div className="row md:mb-8">
            <div className="col-xl-6 col-lg-8 mx-auto">
              <SectionTitle
                classOption="title-section mb-0 pb-6 md:pb-10 md:mb-10 text-center"
                subTitle="case study"
                title="Case Studies <span class='text-primary'>Showcase</span>"
                excerptClassOption="null"
                excerpt="Empowering Digital Success Through Comprehensive Solutions."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <button onClick={handleClick}>Hello there</button>

            {contentfulData.length != 0 &&
              contentfulData.items.map((item) => (
                <div key={item.sys.id}>
                  <p>{documentToReactComponents(item.fields.description)}</p>
                  <h2>{item.fields.title}</h2>

                  <ServiceBox
                    title={item.fields.title}
                    excerpt={documentToReactComponents(item.fields.description)}
                    type="case-study"
                    link={`/case-study/${item.sys.id}`}
                  />
                </div>
              ))}

            <ServiceBox
              title="title"
              excerpt="description"
              type="case-study"
              link="/um-dashboard"
            />
            <ServiceBox
              title="title"
              excerpt="description"
              type="case-study"
              link="/um-dashboard"
            />
            <ServiceBox
              title="title"
              excerpt="description"
              type="case-study"
              link="/um-dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
