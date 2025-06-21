"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header2() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header id="header-main" className="header style-1">
      <div className="header-inner">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-left d-flex align-items-center">
                  <div className="header-logo">
                    <Link href={`/#`} className="site-logo">
                      <Image
                        src="/images/logo/footer-logo1.png" // Replace with your logo path
                        alt="Logo"
                        width={140}
                        height={40}
                      />
                    </Link>
                  </div>
                  <nav className="main-menu style-1">
                    <ul className="navigation">
                      <li>
                        <button 
                          onClick={() => handleScroll('home')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 3
                          }}
                        >
                          Home
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => handleScroll('services')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 3
                          }}
                        >
                          Services
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => handleScroll('focus-areas')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 3
                          }}
                        >
                          Focus Areas
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => handleScroll('team')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 3
                          }}
                        >
                          Team
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => handleScroll('about')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            font: 'inherit',
                            cursor: 'pointer',
                            padding: 3
                          }}
                        >
                          About Us
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right d-flex align-items-center">
                  <div className="support text-body-2 d-flex gap_12 align-items-center text_mono-dark-9">
                    <i className="icon-customer-support" />
                    24/7 Support: +91 9746864688,  +91 9745782250
                  </div>
                  <button
                    onClick={() => handleScroll('focus-areas')}
                    className="tf-btn btn-border hide-sm h36 rounded-0"
                  >
                    <span className="text-caption-3">Get in touch</span>
                    <span className="bg-effect" />
                  </button>
                  <button
                    onClick={() => handleScroll('contact')}
                    className="tf-btn hide-sm btn-dark h36 rounded-0"
                  >
                    <span className="text-caption-3">Contact Us</span>
                    <span className="bg-effect" />
                  </button>
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <div className="burger">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}