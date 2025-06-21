"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialIcons, teamMembers2 } from "@/data/team";

export default function CaseStudies() {
  return (
    <div className="section-case-studies style-1 tf-spacing-36 pb-5">
      <div className="tf-container">
        <div className="heading-section gap_12 text-center">
          <div className="heading-tag d-flex gap_12 mx-auto mb_20 text_mono-dark-8 fw-5">
            <div className="icon">
              <i className="icon-book-bookmark-02" />
            </div>
            <p className="text-body-3">Management</p>
          </div>
          <h2 className="title text_mono-dark-9 fw-5 split-text effect-right">
            Our <span className="text-gradient">expert</span> team
          </h2>
          <p
            className="text-body-1 text_mono-gray-7 mt_28 mb_20 wow animate__fadeInUp animate__animated"
            data-wow-delay="0s"
          >
            With custom services, we empower the development, <br />
            provide support from your unique vision
          </p>
        </div>
      </div>
      
      {/* Responsive Grid Container */}
      <div className="team-grid-container">
        <div className="team-grid">
          <div className="team-row">
            {teamMembers2.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="team-item v2 style-default"
              >
                <div className="bot">
                  <div className="content">
                    <h3 className="name team-member-name">
                      <span className="no-hover-text">
                        {member.name}
                      </span>
                    </h3>
                    <p className="text-body-1 team-member-role">{member.role}</p>
                  </div>
                  {/* <ul className="social d-flex gap_12 justify-content-center">
                    {socialIcons.map((icon, i) => (
                      <li key={i}>
                        <a href={icon.href} className={icon.className} />
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            ))}
          </div>
          <div className="team-row">
            {teamMembers2.slice(3, 5).map((member, index) => (
              <div
                key={index + 3}
                className="team-item v2 style-default"
              >
                <div className="bot">
                  <div className="content">
                    <h3 className="name team-member-name">
                      <span className="no-hover-text">
                        {member.name}
                      </span>
                    </h3>
                    <p className="text-body-1 team-member-role">{member.role}</p>
                  </div>
                  {/* <ul className="social d-flex gap_12 justify-content-center">
                    {socialIcons.map((icon, i) => (
                      <li key={i}>
                        <a href={icon.href} className={icon.className} />
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-grid-container {
          width: 100%;
          padding: 0 1rem;
        }

        .team-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .team-row {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .team-row:nth-child(2) {
          gap: 4rem;
        }

        .team-item {
          flex: 0 0 auto;
          width: 384px;
          /* Remove all hover effects */
          transition: none !important;
        }

        .team-item:hover {
          transform: none !important;
          box-shadow: none !important;
          border-color: initial !important;
          background: none !important;
        }

        .team-row:nth-child(2) .team-item {
          width: 400px;
        }

        .team-member-name {
          font-size: 28px;
          line-height: 36px;
        }

        .team-member-name a,
        .team-member-name .no-hover-text {
          text-decoration: none !important;
          color: inherit !important;
          transition: none !important;
          cursor: default;
        }

        .team-member-name a:hover,
        .team-member-name .no-hover-text:hover {
          color: inherit !important;
          text-decoration: none !important;
          transform: none !important;
        }

        /* Disable hover line text effect */
        .hover-line-text::after {
          display: none !important;
        }

        .team-member-role {
          font-size: 16px;
          margin-top: 8px;
        }

        /* Override any inherited hover effects */
        .team-item * {
          transition: none !important;
        }

        .team-item *:hover {
          transform: none !important;
          color: inherit !important;
          background: none !important;
          border-color: inherit !important;
          box-shadow: none !important;
        }

        /* Comprehensive hover effect removal */
        .team-item,
        .team-item *,
        .team-item::before,
        .team-item::after,
        .team-item *::before,
        .team-item *::after {
          transition: none !important;
          animation: none !important;
        }

        .team-item:hover,
        .team-item:hover *,
        .team-item:hover::before,
        .team-item:hover::after,
        .team-item:hover *::before,
        .team-item:hover *::after {
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
          transform: none !important;
          color: inherit !important;
          background: inherit !important;
          border: inherit !important;
          box-shadow: none !important;
          text-decoration: none !important;
        }

        /* Specific fixes for text disappearing */
        .team-member-name,
        .team-member-name *,
        .team-member-role,
        .team-member-role * {
          opacity: 1 !important;
          visibility: visible !important;
          color: inherit !important;
        }

        .team-member-name:hover,
        .team-member-name:hover *,
        .team-member-role:hover,
        .team-member-role:hover * {
          opacity: 1 !important;
          visibility: visible !important;
          color: inherit !important;
          transform: none !important;
        }

        /* Disable any text effects */
        .no-hover-text {
          pointer-events: none;
          user-select: none;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .team-row {
            gap: 1.5rem;
          }

          .team-row:nth-child(2) {
            gap: 3rem;
          }
          
          .team-item {
            width: 200px;
          }

          .team-row:nth-child(2) .team-item {
            width: 350px;
          }
          
          .team-member-name {
            font-size: 28px;
          }
        }

        /* Mobile landscape */
        @media (max-width: 768px) {
          .team-row {
            gap: 1rem;
          }

          .team-row:nth-child(2) {
            gap: 2rem;
          }
          
          .team-item {
            width: 180px;
          }

          .team-row:nth-child(2) .team-item {
            width: 280px;
          }
          
          .team-member-name {
            font-size: 24px;
          }
          
          .team-member-role {
            font-size: 14px;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .team-grid-container {
            padding: 0 0.5rem;
          }
          
          .team-grid {
            gap: 1.5rem;
          }
          
          .team-row {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          
          .team-item {
            width: 100%;
            max-width: 350px;
            text-align: center;
            padding: 1.5rem 1rem;
          }
          
          .team-member-name {
            font-size: 22px;
            margin-bottom: 0.5rem;
          }
          
          .team-member-role {
            font-size: 14px;
            margin-bottom: 1rem;
          }
          
          .social {
            justify-content: center !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 320px) {
          .team-member-name {
            font-size: 20px;
          }
          
          .team-member-role {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}