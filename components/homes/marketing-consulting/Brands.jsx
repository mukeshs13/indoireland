const brands = [
  { id: 1, src: "/images/brands/brand1.png", width: 169, height: 56 },
  { id: 2, src: "/images/brands/brand2.png", width: 169, height: 56 },
];
import Image from "next/image";

export default function Brands() {
  return (
    <div className="">
      <div >
        <div
          className="tf-marquee"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {brands.map((brand) => (
            <div
              key={`brand-${brand.id}`}
            >
              <div className="partner style-1">
                <Image
                  alt={`Brand ${brand.id}`}
                  src={brand.src}
                  width={brand.width}
                  height={brand.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}