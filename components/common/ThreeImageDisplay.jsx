"use client";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { counterItems2 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function ThreeImageDisplay(){
  return(
    <div className="section-testimonial style-5 tf-spacing-16 pb-0">
      <Swiper
        className="swiper"
        loop
        initialSlide={1}
        centeredSlides
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          575: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 1.3,
            spaceBetween: 72,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 72,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            className="swiper-slide"
            key={`${testimonial.id}-${index}`}
          >
            <div className="testimonial style-4">
              <div className="img-style mb_40">
                <Image
                  className="lazyload"
                  data-src={testimonial.imageSrc}
                  alt="testimonial"
                  src={testimonial.imageSrc}
                  width={600}
                  height={200}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}