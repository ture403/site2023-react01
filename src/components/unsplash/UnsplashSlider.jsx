import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

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
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
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
