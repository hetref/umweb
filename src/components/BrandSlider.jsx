import { Swiper, SwiperSlide } from "swiper/react";
import Brand from "../assets/components/Brand";
import imgbrand1 from "../assets/images/brand-logo/1.png";
import imgbrand2 from "../assets/images/brand-logo/2.png";
import imgbrand3 from "../assets/images/brand-logo/3.png";
import imgbrand4 from "../assets/images/brand-logo/4.png";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const BrandSlider = () => {
  return (
    <div className="brand-section pb-[70px] lg:pb-[140px] pt-[60px] lg:pt-[100px]">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              className="brand-carousel"
              loop={true}
              speed={800}
              autoplay={{
                delay: 2000,
              }}
              slidesPerView={4}
              spaceBetween={0}
              navigation={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <Brand image={imgbrand1} />
              </SwiperSlide>
              <SwiperSlide>
                <Brand image={imgbrand2} />
              </SwiperSlide>
              <SwiperSlide>
                <Brand image={imgbrand3} />
              </SwiperSlide>
              <SwiperSlide>
                <Brand image={imgbrand4} />
              </SwiperSlide>
              <SwiperSlide>
                <Brand image={imgbrand4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
