"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";
import { BannerSlides } from "@/app/static/banner";
import SingleBanner from "./SingleBanner";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={true}
      className="h-screen w-full"
    >
      {BannerSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <SingleBanner
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
