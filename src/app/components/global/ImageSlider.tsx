import {
  Virtual,
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

const ImageSlider = ({ slides }: any) => {
  return (
    <div className="">
      <Swiper
        modules={[Virtual, Navigation, Pagination, EffectCards]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        // virtual
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        {slides.map((item: any | undefined, index: number | undefined) => (
          <SwiperSlide key={item.file_path} virtualIndex={index}>
            <div className="bg-white w-[600px] h-[600px] rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                alt = "Minimum inclusive"
                className="shadow-lg w-full h-auto align-middle bg-cover border-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
