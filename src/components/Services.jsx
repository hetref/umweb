import { useEffect, useState } from "react";
import SectionTitle from "../assets/components/SectionTitle";
import ServiceBox from "../assets/components/ServiceBox";
import useDbStore from "../store/dbStore";

// const services = [
//   {
//     title: "Social Media Marketing",
//     excerpt:
//       "Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms.",
//   },
//   {
//     title: "Creative Design",
//     excerpt:
//       "Immerse your brand in visually stunning design. Our creative design services combine innovation and aesthetics to convey your brand message with eye-catching visuals that leave a lasting impression.",
//   },
//   {
//     title: "Video Production",
//     excerpt:
//       "Transform your ideas into compelling visual stories. Our video production services seamlessly blend creativity and professionalism, bringing your brand to life through dynamic and impactful videos.",
//   },
//   {
//     title: "Motion Graphic Animation",
//     excerpt:
//       "Add a dynamic touch to your content with our motion graphic animation services. We bring ideas to life through captivating animations, enhancing your brand's storytelling and engagement.",
//   },
//   {
//     title: "Website Development",
//     // excerpt:
//     //   "Empower your online presence with cutting-edge website development. We specialize in crafting user-friendly, responsive websites that not only look great but also deliver a seamless user experience.",
//     excerpt:
//       "Enhance your online presence with top-notch website development. We specialize in sleek, user-friendly & good looking sites for a seamless user experience.",
//   },
//   {
//     title: "Product Photography",
//     excerpt:
//       "Showcase your products in the best light. Our product photography services capture the essence of your offerings, presenting them with high-quality visuals that speak volumes.",
//   },
//   {
//     title: "Search Engine Optimization",
//     excerpt:
//       "Boost your visibility on search engines and drive organic traffic to your website. Our SEO services are tailored to enhance your online presence, improve rankings, and ensure your business stands out in the digital landscape.",
//   },
//   {
//     title: "Ads Campaign",
//     excerpt:
//       "Drive targeted results with our strategic ad campaigns. From conception to execution, we optimize every campaign to maximize reach and conversions, ensuring your brand gets the attention it deserves.",
//   },
//   {
//     title: "Ads Campaign",
//     excerpt:
//       "Drive targeted results with our strategic ad campaigns. From conception to execution, we optimize every campaign to maximize reach and conversions, ensuring your brand gets the attention it deserves.",
//   },
//   {
//     title: "Ads Campaign",
//     excerpt:
//       "Drive targeted results with our strategic ad campaigns. From conception to execution, we optimize every campaign to maximize reach and conversions, ensuring your brand gets the attention it deserves.",
//   },
// ];

const ServiceListContainer = () => {
  const data = useDbStore((state) => state.data);
  const services = data.services.updatedArray;

  const [serviceMidPoint, setServiceMidPoint] = useState(4);
  const [serviceEndPoint, setServiceEndPoint] = useState(8);

  useEffect(() => {
    const serviceMidPoint = Math.ceil(services.length / 2);
    const serviceEndPoint = services.length;

    setServiceMidPoint(serviceMidPoint);
    setServiceEndPoint(serviceEndPoint);

    console.log(serviceMidPoint);
    console.log(serviceEndPoint);
  }, [services]);

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
