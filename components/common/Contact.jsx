"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="section-contact style-default position-relative" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="tf-container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <div className="heading">
                <div className="h1 split-text split-lines-rotation-x text-white">
                  Success is a team play, right? Let's work together!
                </div>
              </div>
              <div className="bot">
                <div className="content">
                  <h6 className="mb_5 text-white">+068 5681 96 96</h6>
                  <p className="text-body-2 text-white">
                    Call us for urgent
                  </p>
                </div>
                <Link 
                  href={`/contact-us`} 
                  className="tf-btn btn-primary2 h36"
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid #ddd'
                  }}
                >
                  <span className="text-caption" style={{ color: 'black' }}>Get Direction</span>
                  <span className="bg-effect" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={(e) => e.preventDefault()} className="form-contact">
              <fieldset>
                <label className="mb_15 text-white" htmlFor="name">
                  Full Name*
                </label>
                <input type="text" placeholder="Full Name" id="name" required />
              </fieldset>
              <div className="grid-2 gap_24">
                <fieldset>
                  <label className="mb_15 text-white" htmlFor="email">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address*"
                    id="email"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label className="mb_15 text-white" htmlFor="phone">
                    Phone Number
                    <span className="text-white opacity-75">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    id="phone"
                    required
                  />
                </fieldset>
              </div>
              <fieldset className="">
                <label className="mb_15 text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="message"
                  placeholder="Write your message here..."
                  id="message"
                  defaultValue={""}
                />
              </fieldset>
              <a href="#" className="link attachment text-white">
                <i className="icon-paperclip-solid" />
                Add an attachment
              </a>
              <button type="submit" className="tf-btn btn-primary2 mt_27">
                <span>Send Message</span>
                <span className="bg-effect" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="shape position-absolute">
        <Image
          alt="item"
          src="/images/item/shape-5.png"
          width={1105}
          height={720}
        />
      </div> */}
    </div>
  );
}