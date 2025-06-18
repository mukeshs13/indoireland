import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Faqs || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function FaqsPage() {
  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_49 text-center">
                  <h1 className="text_black mb_19 letter-spacing-1">FAQs</h1>
                  <p className="sub-heading text_mono-gray-7">
                    Our holistic approach combines a comprehensive suite of
                    integrated services and <br />
                    solutions to deliver maximum value and optimize your
                    operations.
                  </p>
                </div>
                <ul className="breadcrumb justify-content-center">
                  <li>
                    <Link href={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Faqs
          headingClass="heading-title"
          parentClass="section-faqs style-1 tf-spacing-8"
          header2
        />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
