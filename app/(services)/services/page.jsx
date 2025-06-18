import Challanges from "@/components/common/Challanges";
import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";

import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ServiceAdvantages from "@/components/otherPages/ServiceAdvantages";
import Services from "@/components/otherPages/Services";
import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Services || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function ServicesPage() {
  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_19 letter-spacing-1">
                    Our comprehensive <br />
                    suite of services and solutions
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    Our holistic approach combines a comprehensive suite of
                    integrated services and <br />
                    solutions to deliver maximum value and optimize your
                    operations.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link href={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <ServiceAdvantages />
        <Services />
        <Challanges />
        <Testimonials />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
