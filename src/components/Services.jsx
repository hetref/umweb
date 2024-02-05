import { useEffect, useState } from "react";
import SectionTitle from "../assets/components/SectionTitle";
import ServiceBox from "../assets/components/ServiceBox";
import useDbStore from "../store/dbStore";

const ServiceListContainer = () => {
  const data = useDbStore((state) => state.data);
  const services = data.services?.updatedArray;

  const [serviceMidPoint, setServiceMidPoint] = useState();
  const [serviceEndPoint, setServiceEndPoint] = useState();

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
        <div className="row md:mb-8">
          <div className="col-xl-6 col-lg-8 mx-auto">
            <SectionTitle
              classOption="title-section mb-0 pb-6 md:pb-10 md:mb-10 text-center"
              subTitle="services"
              title="Check <span class='text-primary'>our</span> Services"
              excerptClassOption="null"
              excerpt="Empowering Digital Success Through Comprehensive Solutions."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
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
      </div>
    </div>
  );
};

export default ServiceListContainer;
