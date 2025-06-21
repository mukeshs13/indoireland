"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function Footer5() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer id="footer" className="footer style-4">
      <div className="footer-wrap">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="footer-top mt_30" style={{marginBottom: '30px'}}>
                <div className="footer-newsletter">
                  <div className="footer-logo mb-0">
                    <Image
                      alt="logo"
                      src="/images/logo/footer-logo-4.png"
                      width={650}
                      height={128}
                    />
                  </div>
                </div>
                {/* <div className="wrap-social">
                  <h6 className="footer-heading text_white text_white fw-5">
                    Our Social
                  </h6>
                  <div className="tf-social">
                    <a href="#" className="icon-twitter-x" />
                    <a href="#" className="icon-instagram" />
                    <a href="#" className="icon-youtube" />
                  </div>
                </div> */}
              </div>
              <div className="footer-body mb_10">
                <div className="left flex-md-row">
                  {/* Desktop view - show services and home sections */}
                  <div className="footer-col-block d-none d-md-block">
                    <div 
                      className="text-body-1 footer-heading text_white fw-5"
                      onClick={() => handleScroll('home')}
                      style={{ cursor: 'pointer' }}
                    >
                      Home
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-body-3 text_mono-gray-8">
                          <button
                            onClick={() => handleScroll('services')}
                            className="link footer-menu_item"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'inherit',
                              font: 'inherit',
                              cursor: 'pointer',
                              padding: 0,
                              textAlign: 'left'
                            }}
                          >
                            Services
                          </button>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <button
                            onClick={() => handleScroll('focus-areas')}
                            className="link footer-menu_item"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'inherit',
                              font: 'inherit',
                              cursor: 'pointer',
                              padding: 0,
                              textAlign: 'left'
                            }}
                          >
                            Focus Areas
                          </button>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <button
                            onClick={() => handleScroll('team')}
                            className="link footer-menu_item"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'inherit',
                              font: 'inherit',
                              cursor: 'pointer',
                              padding: 0,
                              textAlign: 'left'
                            }}
                          >
                            Team
                          </button>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <button
                            onClick={() => handleScroll('about')}
                            className="link footer-menu_item"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'inherit',
                              font: 'inherit',
                              cursor: 'pointer',
                              padding: 0,
                              textAlign: 'left'
                            }}
                          >
                            About Us
                          </button>
                        </li>
                        <li className="text-body-3 text_mono-gray-8">
                          <button
                            onClick={() => handleScroll('contact')}
                            className="link footer-menu_item"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'inherit',
                              font: 'inherit',
                              cursor: 'pointer',
                              padding: 0,
                              textAlign: 'left'
                            }}
                          >
                            Contact Us
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Mobile view - simple menu list without toggles */}
                  <div className="footer-col-block d-block d-md-none">
                    <div className="text-body-1 footer-heading text_white fw-5 mb-3">
                      Menu
                    </div>
                    <ul className="footer-menu-list">
                      <li className="text-body-3 text_mono-gray-8">
                        <button
                          onClick={() => handleScroll('home')}
                          className="link footer-menu_item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left'
                          }}
                        >
                          Home
                        </button>
                      </li>
                      <li className="text-body-3 text_mono-gray-8">
                        <button
                          onClick={() => handleScroll('services')}
                          className="link footer-menu_item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left'
                          }}
                        >
                          Services
                        </button>
                      </li>
                      <li className="text-body-3 text_mono-gray-8">
                        <button
                          onClick={() => handleScroll('focus-areas')}
                          className="link footer-menu_item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left'
                          }}
                        >
                          Focus Areas
                        </button>
                      </li>
                      <li className="text-body-3 text_mono-gray-8">
                        <button
                          onClick={() => handleScroll('team')}
                          className="link footer-menu_item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left'
                          }}
                        >
                          Team
                        </button>
                      </li>
                      <li className="text-body-3 text_mono-gray-8">
                        <button
                          onClick={() => handleScroll('about')}
                          className="link footer-menu_item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left'
                          }}
                        >
                          About Us
                        </button>
                      </li>
                      <li className="text-body-3 text_mono-gray-8">
                        <button
                          onClick={() => handleScroll('contact')}
                          className="link footer-menu_item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 0,
                            textAlign: 'left'
                          }}
                        >
                          Contact Us
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Updated address section with side-by-side layout - Two lines only */}
                <div className="right">
                  <div className="footer-about">
                    <div className="row g-4">
                      {/* India Office */}
                      <div className="col-md-6">
                        <div className="footer-info">
                          <div className="text-body-2 text_white fw-5 mb-3">
                            India Office
                          </div>
                          <div className="address-details">
                            <a href="mailto:info@indoireland.com" className="link text-body-3 text_white d-block mb-2">
                              info@indoireland.com
                            </a>
                            <div className="text-body-3 text_white mb-1">
                              SKC Tower, 14/236J - Maradu, Opp. Forum Mall
                            </div>
                            <div className="text-body-3 text_white mb-2">
                              Cochin - Ernakulam, Kerala, India - 682304
                            </div>
                            <div className="text-body-3 text_white">
                              +91 9746864688, <br /> +91 9745782250
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ireland Office */}
                      <div className="col-md-6">
                        <div className="footer-info">
                          <div className="text-body-2 text_white fw-5 mb-3">
                            Ireland Office
                          </div>
                          <div className="address-details">
                            <a href="mailto:Info@indoireland.com" className="link text-body-3 text_white d-block mb-2">
                              Info@indoireland.com
                            </a>
                            <div className="text-body-3 text_white mb-1">
                              Unit 1 New Bancroft Hall, Old Main Street
                            </div>
                            <div className="text-body-3 text_white mb-2">
                              Tallaght, DUBLIN, Ireland, D24 N726
                            </div>
                            <div className="text-body-3 text_white">
                              (+353) 87 293 0719
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p className="text-body-3 text-start text_mono-gray-5 mt_30">
                  © {new Date().getFullYear()} Copyright by{" "}
                  <a href="#" className="link text_mono-gray-5 text-body-3">
                    Indoireland.
                  </a>{" "}
                   All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}