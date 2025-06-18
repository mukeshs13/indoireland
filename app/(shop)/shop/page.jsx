import Contact from "@/components/common/Contact";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Shop from "@/components/shop/Shop";
import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Shop || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function ShopPage() {
  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_42">
                  <div className="text-display-2 letter-spacing-1">Shop</div>
                </div>
                <ul className="breadcrumb">
                  <li>
                    <Link href={`/`} className="link">
                      Home
                    </Link>
                  </li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content style-1">
        <Shop />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
