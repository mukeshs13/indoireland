import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Link from "next/link";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Pricing from "@/components/common/Pricing";

import React from "react";
export const metadata = {
  title:
    "Pricing || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function PricingPage() {
  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <h1 className="text_black mb_18 letter-spacing-1">
                    Pricing Plan
                  </h1>
                  <p className="sub-heading text_mono-gray-7">
                    his focuses on achieving tangible outcomes, such as
                    increased revenue, cost savings, <br />
                    or improved efficiency, and ultimately driving
                    organizational success.
                  </p>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link href={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Pricing />
        <Faqs parentClass="section-faqs style-1 tf-spacing-8 pt-0" />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
