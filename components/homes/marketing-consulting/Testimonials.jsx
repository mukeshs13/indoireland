"use client";
import { testimonials2 } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <div className="section-testimonial style-6">
      <div className="tf-container-2">
        <div className="heading-section gap_12 text-center mb_58">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-star" />
            </div>
            <p className="text-body-3">About Us</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text effect-right">
            Driving your financial <span className="text-gradient">success</span> with <br /> strategic expertise and solutions
          </h2>
        </div>
        <div className="section-testimonial style-3">
          <div className="wrapper">
            <Swiper
              className="swiper sw-layout"
              spaceBetween={15}
              breakpoints={{
                768: {
                  spaceBetween: 20,
                },
                992: {
                  spaceBetween: 24,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd11",
              }}
            >
              {testimonials2.map((testimonial) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={`testimonial-${testimonial.id}`}
                >
                  <div className="testimonial style-2">
                    
                    <h5 className="text text_white fw-6">
                      {testimonial.quote}
                    </h5>
                    <h5 className="text text_white fw-6">
                      {testimonial.desc}
                    </h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
