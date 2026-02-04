"use client";

import React, { useEffect, useRef } from "react";
import BrewTop from "../assets/images/BrewTop.png";
import BrewBottom from "../assets/images/BrewBottom.png";
import BrewTimer from "../assets/images/BrewTimer.png";
import mountain from "../assets/images/mountain2.png"
import texture from "../assets/images/texture.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrewSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;

    if (!section || !path) return;

    // Get path length
    const length = path.getTotalLength();

    // Hide path initially (NO visibility hidden)
    gsap.set(path, {
      strokeDasharray: "8 8",
      strokeDashoffset: length,
    });

    // Draw path on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}

      className="min-h-screen  max-w-[1280px] mx-auto relative mb-12 w-full mt-12 "
    >

      <div className="opacity-50 absolute h-full w-full" style={{
        backgroundImage: `url(${texture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

      }}>

      </div>
      <div className="absolute opacity-10  h-full w-full z-10">
        <img src={mountain} alt="" className="h-full w-full" />
      </div>
      <div className="relative container mx-auto py-20 rounded-[20px] bg-[#]">

        {/* SVG PATH */}
        <svg
          className="absolute top-[25%] left-1/2 -translate-x-1/2 hidden lg:block z-0"
          width="994"
          height="896"
          viewBox="0 0 819 996"
          fill="none"
        >
          <path
            ref={pathRef}
            d="M188.619 0.0251465C182.619 238.525 659.424 -6.47485 757.337 108.025C855.25 222.525 809.922 362.525 782.922 416.525C678.55 625.27 292.618 314.053 99.8342 464.525C-16.7545 555.525 -64.7838 833.562 152.836 994.525"
            stroke="#316763"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col gap-32">

          {/* TOP */}
          <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-[85%] self-end pl-20">
            <img
              src={BrewTop}
              alt="Boil water"
              className="h-[300px] w-[22rem] object-contain"
            />
            <div className="md:w-[40%]">
              <h3  style={{fontFamily:"gotham2"}} className="font-lora text-3xl mb-2">
                Boil 250 ml water
              </h3>
              <p  style={{fontFamily:"gotham-book"}}className="text-sm leading-7">
               Bring 250 ml of fresh, filtered water to a boil.For the best flavor, allow the water to cool slightly to 75–85°C (not fully boiling). Direct boiling water can make green tea taste bitter.
              </p>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex mb-28 flex-col md:flex-row-reverse items-center gap-8 w-full md:w-[86%] self-start">
            <img
              src={BrewTimer}
              alt="Tea leaves"
              className="h-[300px] w-[12rem] object-contain"
            />
            <div className="md:w-[40%] mb-20 ">
              <h3 style={{fontFamily:"gotham2"}} className="font-lora text-3xl mb-2">
                1 teaspoon tea leaves
              </h3>
              <p style={{fontFamily:"gotham-book"}} className="text-sm leading-7">
              Use 1–2 grams of tea per 180–200 ml of water (roughly 1 teaspoon per cup). Rinse the teapot or cup with hot water to maintain brewing temperature.
              </p>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex  flex-col md:flex-row items-center gap-8 w-full md:w-[85%] self-end ">
            <img
              src={BrewBottom}
              alt="Strain tea"
              className="h-[300px] w-[22rem] object-contain"
            />
            <div className="md:w-[40%]">
              <h3  style={{fontFamily:"gotham2"}} className="font-lora text-3xl mb-2">
                Strain & enjoy
              </h3>
              <p className="text-sm leading-7">
              Strain the tea to prevent over-steeping. Serve hot and enjoy as is, or add honey, lemon, or milk depending on the tea type.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrewSection;
