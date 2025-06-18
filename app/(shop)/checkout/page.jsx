import Contact from "@/components/common/Contact";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Checkout from "@/components/shop/Checkout";
import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Checkout || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function CheckoutPage() {
  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default v5">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_44">
                  <div className="text-display-2 text_black letter-spacing-1">
                    Checkout
                  </div>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link href={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Checkout />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
