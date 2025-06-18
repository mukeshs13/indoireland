import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import Contact from "@/components/common/Contact";
import CaseStudies from "@/components/homes/marketing-consulting/CaseStudies";
import Features2 from "@/components/homes/marketing-consulting/Features2";
import Figures from "@/components/homes/marketing-consulting/Figures";
import Hero from "@/components/homes/finance-consulting/Hero";
import Services from "@/components/homes/finance-consulting/Services";
import Testimonials from "@/components/homes/marketing-consulting/Testimonials";
import Brands from "@/components/homes/marketing-consulting/Brands";
import React from "react";
import ThreeImageDisplay from "@/components/common/ThreeImageDisplay";

export const metadata = {
  title:
    "Marketing Consulting || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};

export default function MarketingConsultionPage() {
  return (
    <>
      <div className="primary-4">
        <div id="wrapper" className="counter-scroll">
          <Header2 />
          <Hero />
          <div className="main-content">
            <section id="services-section">
              <Features2 />
              <Figures/>
            </section>

            <Services />
            <CaseStudies />
            <Testimonials />
            <ThreeImageDisplay />
            <Brands/>

            <section id="contact-section">
              <Contact />
            </section>
          </div>
          <Footer5 />
        </div>
      </div>
    </>
  );
}
