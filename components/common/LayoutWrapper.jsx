"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import SplitText from "@/utlis/splitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    let lastScrollTop = 0;
    const delta = 10;
    const header = document.querySelector(".header");

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop < 350) {
        header?.classList.remove("is-sticky");
        if (scrollTop < 200) {
          header?.classList.remove("header-sticky");
        } else {
          header?.classList.add("header-sticky");
        }
        return;
      }
      if (scrollTop > lastScrollTop + delta) {
        header?.classList.add("header-sticky");
        header?.classList.remove("is-sticky");
      } else if (scrollTop < lastScrollTop - delta) {
        header?.classList.add("is-sticky");
      }
      lastScrollTop = scrollTop;
    };
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
      window.dispatchEvent(new Event("scroll"));
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Scrolling Effect
    const scrollingEffect = () => {
      const elements = document.querySelectorAll(".scrolling-effect");
      if (!elements.length) return;

      elements.forEach((el) => {
        const settings = {
          scrollTrigger: {
            trigger: el,
            scrub: 3,
            toggleActions: "play none none reverse",
            start: "top bottom",
            end: "bottom bottom",
            delay: 3,
          },
          duration: 0.8,
          ease: "power3.out",
        };

        if (el.classList.contains("effectRight")) {
          settings.opacity = 0;
          settings.x = "80";
        }
        if (el.classList.contains("effectLeft")) {
          settings.opacity = 0;
          settings.x = "-80";
        }
        if (el.classList.contains("effectBottom")) {
          settings.opacity = 0;
          settings.y = "100";
        }
        if (el.classList.contains("effectTop")) {
          settings.opacity = 0;
          settings.y = "-80";
        }
        if (el.classList.contains("effectZoomIn")) {
          settings.opacity = 0;
          settings.scale = 0.5;
        }

        gsap.from(el, settings);
      });
    };

    // Animation Text
    const animationText = () => {
      const splitTextElements = document.querySelectorAll(".split-text");
      if (!splitTextElements.length) return;

      splitTextElements.forEach((el) => {
        const target = el.querySelector("p, a") || el;
        const pxlSplit = new SplitText(target, {
          type: "words, chars, lines",
          lineThreshold: 0.5,
          wordsClass: "word",
          linesClass: "split-line",
        });

        // Handle gradient characters
        const gradientChars = el.querySelectorAll(".text-gradient > .word > *");
        if (gradientChars.length) {
          let offset = 0;
          gradientChars.forEach((char) => {
            const parent = char.parentElement;
            const parentWidth = parent.offsetWidth;

            char.style.backgroundSize = `${parentWidth}px 100%`;
            offset += char.previousElementSibling?.offsetWidth || 0;
            char.style.backgroundPosition = `${parentWidth - offset}px 0%`;
          });
        }

        let splitTypeSet = pxlSplit.chars;
        gsap.set(target, { perspective: 400 });

        const settings = {
          scrollTrigger: {
            trigger: target,
            start: "top 86%",
            once: true,
          },
          duration: 0.9,
          stagger: 0.02,
          ease: "power3.out",
        };

        const hasClass = (className) => el.classList.contains(className);

        if (hasClass("effect-fade")) settings.opacity = 0;
        if (hasClass("effect-right")) {
          settings.opacity = 0;
          settings.x = "50";
        }
        if (hasClass("effect-left")) {
          settings.opacity = 0;
          settings.x = "-50";
        }
        if (hasClass("effect-up")) {
          settings.opacity = 0;
          settings.y = "80";
        }
        if (hasClass("effect-down")) {
          settings.opacity = 0;
          settings.y = "-80";
        }
        if (hasClass("effect-rotate")) {
          settings.opacity = 0;
          settings.rotateX = "50deg";
        }
        if (hasClass("effect-scale")) {
          settings.opacity = 0;
          settings.scale = "0.5";
        }

        if (
          hasClass("split-lines-transform") ||
          hasClass("split-lines-rotation-x")
        ) {
          pxlSplit.split({
            type: "lines",
            lineThreshold: 0.5,
            linesClass: "split-line",
          });

          splitTypeSet = pxlSplit.lines;
          settings.opacity = 0;
          settings.stagger = 0.5;

          if (hasClass("split-lines-rotation-x")) {
            settings.rotationX = -120;
            settings.transformOrigin = "top center -50";
          } else {
            settings.yPercent = 100;
            settings.autoAlpha = 0;
          }
        }

        if (hasClass("split-words-scale")) {
          pxlSplit.split({ type: "words" });
          splitTypeSet = pxlSplit.words;

          splitTypeSet.forEach((elw, index) => {
            gsap.set(
              elw,
              {
                opacity: 0,
                scale: index % 2 === 0 ? 0 : 2,
                force3D: true,
                duration: 0.1,
                ease: "power3.out",
                stagger: 0.02,
              },
              index * 0.01
            );
          });

          gsap.to(splitTypeSet, {
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
            },
            rotateX: "0",
            scale: 1,
            opacity: 1,
          });
        } else {
          gsap.from(splitTypeSet, settings);
        }
      });
    };

    // Initialize effects
    setTimeout(() => {
      scrollingEffect();
      animationText();
    });
  }, [pathname]);
  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, [pathname]); // Runs every time the route changes
  useEffect(() => {
    const scrollTransformElements =
      document.querySelectorAll(".scroll-tranform");

    if (scrollTransformElements.length > 0) {
      scrollTransformElements.forEach((element) => {
        const direction = element.dataset.direction || "up";
        const distance = element.dataset.distance || "10%";
        let animationProperty;

        switch (direction.toLowerCase()) {
          case "left":
            animationProperty = { x: `-${distance}` };
            break;
          case "right":
            animationProperty = { x: `${distance}` };
            break;
          case "up":
            animationProperty = { y: `-${distance}` };
            break;
          case "down":
            animationProperty = { y: `${distance}` };
            break;
          default:
            animationProperty = { y: `-${distance}` };
        }

        gsap.to(element, {
          ...animationProperty,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }

    // Optional cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);
  return <>{children}</>;
}
