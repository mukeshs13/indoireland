"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Mobilemenu() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close the mobile menu after clicking
    const offcanvasElement = document.getElementById('menu-mobile');
    if (offcanvasElement) {
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="menu-mobile">
      <div className="offcanvas-header top-nav-mobile justify-content-between">
        <Link href={`/`} className="logo">
          <Image
            alt="logo"
            src="/images/logo/footer-logo1.png"
            width={140}
            height={40}
          />
        </Link>
        <div className="close-menu" data-bs-dismiss="offcanvas">
          <i className="icon-times-solid" />
        </div>
      </div>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <button
                  onClick={() => handleScroll('home')}
                  className="mb-menu-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    padding: 0,
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  Home
                </button>
              </li>
              <li className="nav-mb-item">
                <button
                  onClick={() => handleScroll('services')}
                  className="mb-menu-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    padding: 0,
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  Services
                </button>
              </li>
              <li className="nav-mb-item">
                <button
                  onClick={() => handleScroll('focus-areas')}
                  className="mb-menu-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    padding: 0,
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  Focus Areas
                </button>
              </li>
              <li className="nav-mb-item">
                <button
                  onClick={() => handleScroll('team')}
                  className="mb-menu-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    padding: 0,
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  Team
                </button>
              </li>
              <li className="nav-mb-item">
                <button
                  onClick={() => handleScroll('about')}
                  className="mb-menu-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    cursor: 'pointer',
                    padding: 0,
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
          <div className="mb-other-content">
            <ul className="mb-info mb_20">
              <li>
                <p className="text_mono-gray">
                  Support:
                  <a href="tel:+12341096666">
                    <span className="fw-5 text_mono-gray-5">
                      24/7 Support: (234) 109-6666
                    </span>
                  </a>
                </p>
              </li>
            </ul>
            <div className="mb-wrap-btn d-flex gap_12">
              <button
                onClick={() => handleScroll('focus-areas')}
                className="tf-btn btn-border"
              >
                <span>Get in touch</span>
                <span className="bg-effect" />
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="tf-btn"
              >
                <span>Contact Us</span>
                <span className="bg-effect" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}