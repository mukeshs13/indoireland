import Contact from "@/components/common/Contact";
import Link from "next/link";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import RelatedProducts from "@/components/shop/RelatedProducts";
import ShopDescription from "@/components/shop/ShopDescription";
import ShopDetails from "@/components/shop/ShopDetails";
import { products } from "@/data/products";
export const metadata = {
  title:
    "Product Details || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const product = products.filter((p) => p.id == id)[0] || products[0];

  return (
    <>
      <div className="wrap-page-header">
        <Header1 />
        <div className="page-title style-default v4">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb_51">
                  <div className="text-display-2 mb_25 letter-spacing-1 mb_43">
                    Products Detail
                  </div>
                  <ul className="breadcrumb">
                    <li>
                      <Link href={`/`} className="link">
                        Home
                      </Link>
                    </li>
                    <li>Shop</li>
                    <li>{product.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /.page-title */}
        </div>
      </div>
      <div className="main-content style-1">
        <ShopDetails product={product} />
        <ShopDescription />
        <RelatedProducts />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
