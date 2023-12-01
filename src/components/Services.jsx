import SectionTitle from "../assets/components/SectionTitle";
import ServiceBox from "../assets/components/ServiceBox";
import imgservice1 from "../assets/images/service/icon/1.png";

const ServiceListContainer = () => {
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

        <div className="row mb-n7 align-items-center">
          <div className="col-md-6 col-xl-6 mb-sm-7">
            <div className="service-media-wrapper media-spacing-left">
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mb-7">
            <div className="service-media-wrapper media-spacing-right">
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
              <ServiceBox
                icon={imgservice1}
                title="Social Media Marketing"
                excerpt="Elevate your brand's online presence with our strategic social media marketing services. We craft engaging campaigns to connect, captivate, and convert your audience across platforms."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceListContainer;
