import { useEffect, useState } from "react";
import SectionTitle from "../assets/components/SectionTitle";
import ServiceBox from "../assets/components/ServiceBox";
import useDbStore from "../store/dbStore";

const ServiceListContainer = () => {
  const data = useDbStore((state) => state.data);
  const services = data.services?.updatedArray;

  const [serviceMidPoint, setServiceMidPoint] = useState(4);
  const [serviceEndPoint, setServiceEndPoint] = useState(8);

  useEffect(() => {
    services?.updatedArray &&
      setServiceMidPoint(Math.ceil(services.length / 2));
    services?.updatedArray && setServiceEndPoint(services.length);

    console.log(serviceMidPoint);
    console.log(serviceEndPoint);
  }, [services, serviceMidPoint, serviceEndPoint]);

  return (
    <div id="service" className="service-section section-pt position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 mx-auto">
            <SectionTitle
              classOption="title-section mb-10 pb-10 text-center"
              subTitle="services"
              title="Check <span class='text-primary'>our</span> Services"
              excerptClassOption="null"
              excerpt="Empowering Digital Success Through Comprehensive Solutions."
            />
          </div>
        </div>
        {/* grid-rows-2 */}

        <div className="grid grid-rows-1 mb-7 md:grid-rows-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services &&
              services.slice(0, serviceMidPoint).map((item, key) => {
                return (
                  <ServiceBox
                    title={item.title}
                    excerpt={item.description}
                    key={key}
                  />
                );
              })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services &&
              services.slice(4, serviceEndPoint).map((item, key) => {
                return (
                  <ServiceBox
                    title={item.title}
                    excerpt={item.description}
                    key={key}
                  />
                );
              })}
          </div>
        </div>
        {/* <div className="row mb-n7 align-items-center">
          <div className="col-md-6 col-xl-6 mb-sm-7">
            <div className="service-media-wrapper media-spacing-left">
              {services &&
                services.slice(0, 4).map((item, key) => {
                  return (
                    <ServiceBox
                      title={item.title}
                      excerpt={item.excerpt}
                      key={key}
                    />
                  );
                })}
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mb-7">
            <div className="service-media-wrapper media-spacing-right">
              {services &&
                services.slice(4, 8).map((item, key) => {
                  return (
                    <ServiceBox
                      title={item.title}
                      excerpt={item.excerpt}
                      key={key}
                    />
                  );
                })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceListContainer;
