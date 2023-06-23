import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
const YoutubeImg = ({ youtube }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
    </a>
  );
};

const YoutubeSlider = ({ youtubes }) => {
  return (
    <div className="youtube__slider">
      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeImg youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YoutubeSlider;
