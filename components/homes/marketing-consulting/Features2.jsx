import React from "react";
import Image from "next/image";
export default function Features2() {
  return (
    <div className="section mt_30">
      <div className="tf-container-2">
        <div className="heading-section text-center mb_58">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-user-question-02" />
            </div>
            <p className="text-body-3 fw-5">What we offer</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text split-lines-rotation-x">
            Our unique offerings to{" "}
            <span className="text-gradient">unlock</span> your <br />
            full business potential
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_27 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            Discover the expertise, innovation, and commitment that set us
            apart. We <br />
            deliver tailored strategies and measurable results to help.
          </p>
        </div>
        <ul
          className="nav nav-tabs-wrap style-2 overflow-x-auto mb_48"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="service-1"
              data-bs-toggle="tab"
              data-bs-target="#service-1-pane"
              type="button"
              role="tab"
              aria-controls="service-1-pane"
              aria-selected="true"
            >
              <span className="text-body-1 text_mono-gray-5">01</span>
              <span className="fw-5 h6">  Business Consultation</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-2"
              data-bs-toggle="tab"
              data-bs-target="#service-2-pane"
              type="button"
              role="tab"
              aria-controls="service-2-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">02</span>
              <span className="fw-5 h6">  Trade Connects & MOUs</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-3"
              data-bs-toggle="tab"
              data-bs-target="#service-3-pane"
              type="button"
              role="tab"
              aria-controls="service-3-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">03</span>
              <span className="fw-5 h6">  Legal & Logistics Support</span>
              <span className="line" />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="service-4"
              data-bs-toggle="tab"
              data-bs-target="#service-4-pane"
              type="button"
              role="tab"
              aria-controls="service-4-pane"
              aria-selected="false"
            >
              <span className="text-body-1 text_mono-gray-5">04</span>
              <span className="fw-5 h6"> Project Identification</span>
              <span className="line" />
            </button>
          </li>
        </ul>
        <div
          className="tab-content flat-animate-tab effect-content-slide"
          id="myTabContent"
        >
          <div
            className="tab-pane show active"
            id="service-1-pane"
            role="tabpanel"
            aria-labelledby="service-1"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <Image
                  className="lazyload"
                  data-src="/images/section/case-studies-23.jpg"
                  alt="service"
                  src="/images/section/case-studies-23.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">01</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                    Business Consultation
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Develop Ireland-India business and trade activities
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" /> We offering
                      customized strategies that truly work for you
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" />
                      Brings the knowledge and insights you need to make
                      informed decisions that drive success.
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" /> Cancel anytime you
                      want
                    </li>
                    <li className="text-body-1 text_white">
                      <i className="icon-check-cycle-line" /> Proven Results and
                      Client Satisfaction
                    </li>
                </ul>
                  {/* <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                    <div className="avatar rounded-cycle overflow-hidden">
                      <Image
                        alt="avatar"
                        src="/images/avatar/avatar-17.jpg"
                        width={144}
                        height={144}
                      />
                    </div>
                    <div className="content">
                      <p className="description fw-3 text-body-2 mb_4 text_color-text-1">
                        “It's a comprehensive tool of Advitex that we
                        <span className="fw-6 text_color-text-1">
                          rely on daily{" "}
                        </span>
                        to guide our
                        <span className="fw-6 text_color-text-1">
                          investment decisions
                        </span>
                        ”
                      </p>
                      <div className="text-body-2 fw-6 text_color-text-1">
                        John Sena - CEO of Kling
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-2-pane"
            role="tabpanel"
            aria-labelledby="service-2"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <Image
                  className="lazyload"
                  data-src="/images/section/case-studies-24.jpg"
                  alt="service"
                  src="/images/section/case-studies-24.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">02</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                    Trade Connects & MOUs
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Organized events/seminars for promoting trade and business between both the countries
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" /> Personalized
                    approaches crafted for your specific needs
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" /> Strategic insights
                    to turn your goals into measurable outcomes
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" /> Strategic insights
                    to turn your goals into measurable outcomes
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" /> Flexibility to adapt
                    as your priorities change
                  </li>
                </ul>
                {/* <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                  <div className="avatar rounded-cycle overflow-hidden">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-5.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="content">
                    <p className="description fw-3 text-body-2 mb_4 text_color-text-1">
                      "Thanks to Advitex's stock planning tools, we have seen
                      remarkable stability in our investments, even during
                      volatile periods."
                    </p>
                    <div className="text-body-2 fw-6 text_color-text-1">
                      Alex Boar - CEO of Marcus
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-3-pane"
            role="tabpanel"
            aria-labelledby="service-3"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <Image
                  className="lazyload"
                  data-src="/images/section/case-studies-22.jpg"
                  alt="service"
                  src="/images/section/case-studies-22.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">03</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                     Legal & Logistics Support
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Coordinates and support high-level private business delegates both sides as well as liasing with the governments’ business agencies like events managements/delegates visa/accommodation — all other legal matters under the guidance of the government agencies.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" /> End-to-end solutions
                    tailored to your requirements
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" />
                    Transparent workflows for clarity and trust
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" />
                    Exceptional expertise ensuring timely results
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" />
                    Proven methodologies backed by client success stories
                  </li>
                </ul>
                {/* <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                  <div className="avatar rounded-cycle overflow-hidden">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-6.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="content">
                    <p className="description fw-3 text-body-2 mb_4 text_color-text-1">
                      "Advitex's strategic insights have been crucial in
                      redefining our business path and keeping us ahead of the
                      curve."
                    </p>
                    <div className="text-body-2 fw-6 text_color-text-1">
                      Elise Chrona - CEO of Minga
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane show"
            id="service-4-pane"
            role="tabpanel"
            aria-labelledby="service-4"
            tabIndex={0}
          >
            <div className="box-service style-2">
              <div className="img-style effect-item effect-left">
                <Image
                  className="lazyload"
                  data-src="/images/section/case-studies-21.jpg"
                  alt="service"
                  src="/images/section/case-studies-21.jpg"
                  width={651}
                  height={691}
                />
              </div>
              <div className="content">
                <div className="heading mb_28 effect-item effect-right">
                  <h6 className="text_primary fw-5 mb_12 number">04</h6>
                  <h4 className="fw-5 mb_14 mb_24 title">
                     Project Identification
                  </h4>
                  <p className="text-body-1 text_mono-gray-7">
                    Support Ireland investors/individuals/companies for exploring Indian markets.
                  </p>
                </div>
                <ul className="list effect-item effect-right effect-3 mb_56">
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" />
                    Data-driven evaluations to measure performance
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" />
                    Brings the knowledge and insights you need to make informed
                    decisions that drive success.
                  </li>
                  <li className="text-body-1 text_white">
                    <i className="icon-check-cycle-line" />
                    Agile strategies to refine and improve results
                  </li>
                </ul>
                {/* <div className="author d-flex gap_24 align-items-center effect-item effect-right effect-4">
                  <div className="avatar rounded-cycle overflow-hidden">
                    <Image
                      alt="avatar"
                      src="/images/avatar/avatar-8.jpg"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="content">
                    <p className="description fw-3 text-body-2 mb_4 text_color-text-1">
                      "Advitex's investment planning has
                      <span className="">simplified complex decisions</span> ,
                      giving us clarity and
                      <span className="text_color-text-1 fw-6">confidence</span>
                      in our financial journey."
                    </p>
                    <div className="text-body-2 fw-6 text_color-text-1">
                      Elise Chrona - CEO of Minga
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
