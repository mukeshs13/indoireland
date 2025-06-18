import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../public/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "rc-slider/assets/index.css";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Mobilemenu from "@/components/modals/Mobilemenu";
import Context from "@/context/Context";
export const metadata = {
  title:
    "Business Consulting || Advitex - Finance and Business Consulting React Nextjs Template",
  description:
    "Advitex - Finance and Business Consulting React Nextjs Template",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="wrapper" className="counter-scroll">
          <LayoutWrapper>
            <Context>{children}</Context>

            <ScrollTop />
            <Mobilemenu />
          </LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
