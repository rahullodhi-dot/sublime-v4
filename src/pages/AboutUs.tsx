import React from 'react';
import aboutus from "../assets/images/aboutus.png";
import GirlImage from '../assets/images/founderImage2.jpg';
import leftStoryImage from '../assets/images/layer.png';
import rightStoryImage from '../assets/images/leaf2.png';
import penink from "../assets/images/penInk.png";
import aboutVideo from '../assets/video/aboutusvideo.mp4';
import AnimatedSignature from '../components/ui/AnimatedSignature';

const AboutUs = () => {
  return (
    <main className="w-full">
      <section
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full relative isolate"
      >
        <div className="absolute inset-0 bg-[#f6f1e878]" />

        <div className="relative z-10 max-w-[1600px] py-14 md:py-32 mx-auto px-4 sm:px-6 lg:px-12">

          {/* Title */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl text-[#9A7523] text-left">
              Our Story
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between items-center lg:items-start">

            {/* Founder Image Section */}
            <div className="w-full flex flex-col items-center order-1 lg:order-2">
              <img
                src={GirlImage}
                alt="Founder Uzma Irfan"
                className="w-full max-w-[420px] h-[420px] md:h-[520px] object-cover rounded-lg"
              />
                <p
                  style={{
                    fontFamily: "'gotham-light', sans-serif",
                    fontWeight: 100,
                    fontSize: "18px",
                  }}
                  className="text-black mt-4 hidden md:block"
                >
                  Founder Of Sublime
                </p>

              {/* Signature - Mobile Only (Below Description) */}
              <div className="flex flex-col justify-start w-full   items-center border mt-6 lg:hidden">
                <AnimatedSignature />
                <img
                  src={penink}
                  alt="signature"
                  className="h-24 hidden md:block w-auto object-contain"
                />
                 <p
                  style={{
                    fontFamily: "'gotham-light', sans-serif",
                    fontWeight: 100,
                    fontSize: "18px",
                  }}
                  className="text-black mt-4"
                >
                  Founder Of Sublime
                </p>
              
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6 text-left order-2 lg:order-1">

              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                <span
                  style={{ fontFamily: "'buttain', sans-serif" }}
                  className="text-[#9a7523]"
                >
                  Once upon a time
                </span>
                , in 1998 there was a little girl with a head full of dreams and
                hands that could never stay still. She would collect music tapes,
                try her hand at baking, and even record her own songs, curious
                about everything the world had to offer.
              </p>

              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                As the years fluttered by, her wonder only grew. With her mother’s
                gentle guidance and her own unshakable spark, she poured her heart
                into creating something that felt like home, something pure,
                beautiful, and full of care. That something became Sublime.
              </p>

              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                What began as a teenage dream soon blossomed into a world of
                wellness, taste, and thoughtful craft. A place where tea isn’t
                just brewed, but imagined. Where every blend whispers a story of
                nature, nurture, and balance.
              </p>

              <p className="text-[#1f1f1f] text-base md:text-lg leading-8">
                Today, Sublime House of Tea is a women-led celebration of
                everything warm and wondrous. And at its heart stands the dreamer
                who believed that the simplest cup could carry a little bit of
                magic.
              </p>

              {/* Signature - Desktop Only */}
              <div className="hidden lg:flex justify-between items-center gap-4 pt-4">
                <AnimatedSignature />
                <img
                  src={penink}
                  alt="signature"
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative w-full py-16 md:py-24 mt-16 rounded-3xl overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[#000000a6]" />

            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="mb-10 flex flex-col justify-center items-center gap-4 text-white text-center">
                <p style={{ fontFamily: "gotham-light" }} className="text-xl md:text-2xl">
                  Choose excellence
                </p>
                <h2 style={{ fontFamily: "gotham2" }} className="text-3xl md:text-5xl">
                  Our Vision & Mission
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14 items-start">

                {/* Mission */}
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="w-full h-[120px] md:h-[156px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={rightStoryImage}
                      alt="Our craft"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl uppercase underline text-[#EED6B5] mb-4">
                    Mission
                  </h3>

                  <p className="text-[#f6f1e8] text-base md:text-lg leading-8">
                    To gather the finest leaves, spices and little treasures of
                    nature, weaving them into moments that wake the senses,
                    soothe the soul and sprinkle calm into everyday life.
                  </p>
                </div>

                {/* Divider (Desktop Only) */}
                <div className="hidden lg:flex justify-center">
                  <div className="w-px bg-white h-full" />
                </div>

                {/* Vision */}
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="w-full h-[120px] md:h-[156px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={leftStoryImage}
                      alt="Our vision"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl uppercase underline text-[#EED6B5] mb-4">
                    Vision
                  </h3>

                  <p className="text-[#f6f1e8] text-base md:text-lg leading-8">
                    To become a sanctuary where taste and wellness hold hands,
                    where purity hums softly, craftsmanship twinkles with care,
                    and every sip feels like finding joy tucked inside the
                    ordinary.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default AboutUs;