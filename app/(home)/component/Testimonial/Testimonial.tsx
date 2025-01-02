"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="my-20 w-11/12 lg:w-4/5 mx-auto">
      <h1 className="text-center text-3xl font-medium">What Clients Says</h1>
      <p className="text-center py-4">
        Maximum clients are satisfied with our performance and client handling
        strategy
      </p>

      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop
        modules={[FreeMode, Pagination]}
        className="mySwiper my-11"
        breakpoints={{
            // when the window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when the window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when the window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
