"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

import { EffectCards } from "swiper/modules";

const CardSwiper = ({ slides = [] }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={false}
        modules={[EffectCards]}
        className="mySwiper overflow-visible cursor-pointer"
        initialSlide={6}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="overflow-visible">{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSwiper;
