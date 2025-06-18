"use client";
import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="section-testimonial style-4">
      <div className="tf-container">
        <div className="heading-section mb_56">
          <div className="point text-body-1 mb_7">
            <span className="item" />
            Testimonials
          </div>
          <h2 className="heading-title text_primary">
            Client Satisfaction, Our Reputation
          </h2>
          <p className="text-body-1 text_mono-gray-6 mt_20">
            We’ve helped hundreds of partners, to achieve their goals and
            stellar <br />
            feedback, is our reward!
          </p>
        </div>
        <div className="d-grid gap_12">
          <div className="tf-grid-layout md-col-2">
            <div className="grid-2 gap_12">
              <div
                className="highlight-item bg-color-yellow wow animate__fadeInLeft animate__animated"
                data-wow-delay="0s"
              >
                <h2 className="text_pirmary fw-6">Top 5 Best</h2>
                <div className="logo">
                  <Image
                    alt="logo"
                    src="/images/logo/logo.png"
                    width={230}
                    height={64}
                  />
                </div>
              </div>
              <div
                className="highlight-item bg-color-blue wow animate__fadeInLeft animate__animated"
                data-wow-delay="0.1s"
              >
                <h2 className="text_pirmary fw-6">12+ Awards</h2>
                <div className="logo">
                  <Image
                    alt="logo"
                    src="/images/logo/logo-1.png"
                    width={222}
                    height={56}
                  />
                </div>
              </div>
            </div>
            <div
              className="testimonial style-3 wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.2s"
            >
              <h5 className="text">
                "We couldn’t have asked for a better experience. Their
                dedication to client satisfaction is reflected in their strong
                industry reputation. "
              </h5>
              <div className="content d-flex align-items-end justify-content-between gap_12">
                <div className="box-user d-flex align-items-center">
                  <div className="avatar">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-14.jpg"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="info">
                    <h6 className="name">Z. Ibrahimović</h6>
                    <p>CEO &amp; Founder, Catherine Studio</p>
                  </div>
                </div>
                <div className="partner">
                  <Image
                    alt="logo"
                    src="/images/brands/brand-10.png"
                    width={138}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tf-grid-layout md-col-2">
            <div
              className="testimonial style-3 wow animate__fadeInRight animate__animated"
              data-wow-delay="0s"
            >
              <h5 className="text">
                "Their reputation for excellence speaks for itself. Every
                interaction was professional."
              </h5>
              <div className="content d-flex align-items-end justify-content-between gap_12">
                <div className="box-user d-flex align-items-center">
                  <div className="avatar">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-15.jpg"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="info">
                    <h6 className="name">K. Mainoo</h6>
                    <p>Project Managerment at Amoor</p>
                  </div>
                </div>
                <div className="partner">
                  <Image
                    alt="logo"
                    src="/images/brands/brand-11.png"
                    width={97}
                    height={37}
                  />
                </div>
              </div>
            </div>
            <div className="grid-2 gap_12">
              <div
                className="highlight-item bg-color-red wow animate__fadeInRight animate__animated"
                data-wow-delay="0.1s"
              >
                <h2 className="text_pirmary fw-6">Winner</h2>
                <div className="logo">
                  <Image
                    alt="logo"
                    src="/images/logo/logo-2.png"
                    width={178}
                    height={48}
                  />
                </div>
              </div>
              <div
                className="highlight-item bg-color-yellow wow animate__fadeInRight animate__animated"
                data-wow-delay="0.2s"
              >
                <h2 className="text_pirmary fw-6">12+ Awards</h2>
                <div className="logo">
                  <Image
                    alt="logo"
                    src="/images/logo/logo-4.png"
                    width={160}
                    height={96}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tf-grid-layout md-col-2">
            <div className="grid-2 gap_12">
              <div
                className="highlight-item bg-color-blue wow animate__fadeInLeft animate__animated"
                data-wow-delay="0s"
              >
                <h2 className="text_pirmary fw-6">News</h2>
                <div className="logo">
                  <Image
                    alt="logo"
                    src="/images/logo/logo-3.png"
                    width={202}
                    height={96}
                  />
                </div>
              </div>
              <div
                className="highlight-item bg-color-green wow animate__fadeInLeft animate__animated"
                data-wow-delay="0.1s"
              >
                <h2 className="text_pirmary fw-6">Top 8 Best</h2>
                <div className="logo">
                  <Image
                    alt="logo"
                    src="/images/logo/logo-1.png"
                    width={222}
                    height={56}
                  />
                </div>
              </div>
            </div>
            <div
              className="testimonial style-3 wow animate__fadeInLeft animate__animated"
              data-wow-delay="0.2s"
            >
              <h5 className="text">
                "The team’s responsiveness and ability to meet our needs was
                remarkable. Their excellent reputation precedes them, and they
                more than lived up to it."
              </h5>
              <div className="content d-flex align-items-end justify-content-between gap_12">
                <div className="box-user d-flex align-items-center">
                  <div className="avatar">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-14.jpg"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="info">
                    <h6 className="name">D. Van De Beek</h6>
                    <p>Marketing Manager, VDV</p>
                  </div>
                </div>
                <div className="partner">
                  <Image
                    alt="logo"
                    src="/images/brands/brand-12.png"
                    width={108}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
