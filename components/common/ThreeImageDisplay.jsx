"use client";
import { testimonials } from "@/data/testimonials";
import React from "react";
import Image from "next/image";
import { counterItems2 } from "@/data/facts";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function ThreeImageDisplay(){
  return(
    <div className="section-testimonial style-5 pb-30 mb-0 pt-8" style={{paddingTop: '6rem', overflow: 'visible'}}>
      <div className="image-grid" style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2, flexDirection: 'column'}} data-responsive="true">
        <style jsx>{`
          @media (min-width: 768px) {
            .image-grid[data-responsive="true"] {
              flex-direction: row !important;
            }
          }
        `}</style>
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            style={{flex: '1', maxWidth: '400px'}}
          >
            <div className="testimonial style-4">
              <div className="img-style mb_20">
                <Image
                  className="lazyload"
                  data-src={testimonial.imageSrc}
                  alt="testimonial"
                  src={testimonial.imageSrc}
                  width={600}
                  height={200}
                  style={{borderRadius: '8px', width: '100%', height: 'auto', position: 'relative', zIndex: 1}}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}