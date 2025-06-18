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
          {teamMembers2.map((member, index) => (
            <div
              key={index}
              className="team-item v2 style-default hover-border hover-image"
            >
              {/* <a href="#" className="img-style mb_19">
                <Image
                  alt="avatar"
                  src={member.image}
                  width={406}
                  height={406}
                />
              </a> */}
              <div className="bot">
                <div className="content">
                  <h3 className="name team-member-name">
                    <a href="#" className="link hover-line-text">
                      {member.name}
                    </a>
                  </h3>
                  <p className="text-body-1 team-member-role">{member.role}</p>
                </div>
                <ul className="social d-flex gap_12 justify-content-center">
                  {socialIcons.map((icon, i) => (
                    <li key={i}>
                      <a href={icon.href} className={icon.className} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-grid-container {
          width: 100%;
          padding: 0 1rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .team-member-name {
          font-size: 28px;
        }

        .team-member-role {
          font-size: 16px;
          margin-top: 8px;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          
          .team-member-name {
            font-size: 28px;
          }
        }

        /* Mobile landscape */
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
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
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 350px;
          }
          
          .team-item {
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