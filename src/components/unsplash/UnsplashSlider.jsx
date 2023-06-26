import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const UnsplashImg = ({ img }) => {
  return (
    <a
      href={`https://unsplash.com/search/photos/${img.id}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={img.urls.small} alt={img.original_title} />
    </a>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <div className="unsplash__slider">
      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={5}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        speed={700}
        navigation
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <UnsplashImg img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
