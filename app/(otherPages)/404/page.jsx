import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Image from "next/image";
import Link from "next/link";

import React from "react";
export const metadata = {
  title:
    "Not Found Page || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function NotFoundPage() {
  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default">
          <div className="error-404">
            <div className="contnet">
              <div className="img">
                <Image
                  alt={404}
                  src="/images/item/404.png"
                  width={609}
                  height={240}
                />
              </div>
              <p className="sub-heading text_mono-gray-7">
                We apologize, but the page you're looking for couldn't be found!
              </p>
              <Link href={`/`} className="tf-btn mx-auto">
                <span>Back To Home</span>
                <span className="bg-effect" />
              </Link>
            </div>
            <div className="item position-absolute">
              <Image
                alt="shape"
                src="/images/item/shape-5.png"
                width={1105}
                height={720}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
}
