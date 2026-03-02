import React, { useState } from 'react';
import bottomTree from "../assets/images/bottomTree.png";

import gift1 from "../assets/images/g1.png";
import gift2 from "../assets/images/g2.png";
import gift3 from "../assets/images/g3.png";
import gift4 from "../assets/images/g4.png";
import ArrowButton from './ui/ArrowButton';

interface GiftBox {
  id: number;
  name: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

const GIFT_BOXES: GiftBox[] = [
  {
    id: 1,
    name: 'SUMMER SYMPHONY',
    image: gift1,
    title: 'LUXURY GIFT BOX',
    price: '₹2,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G SUBLIME SIGNATURE EARL GREY-50G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },


  {
    id: 3,
    name: 'BOUQUET OF HIVE',
    image: gift3,
    title: 'BOUQUET OF HIVE TO HOME',
    price: '₹3,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G SUBLIME SIGNATURE EARL GREY-50G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },
  {
    id: 4,
    name: 'BOX OF SERENITY',
    image: gift4,
    title: 'BOX OF SERENITY',
    price: '₹4,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G SUBLIME SIGNATURE EARL GREY-50G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },

  {
    id: 2,
    name: 'WELLNESS WONDER',
    image: gift4,
    title: 'WELLNESS WONDER',
    price: '₹1,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
  },
];

const GiftBoxSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentGiftBox = GIFT_BOXES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? GIFT_BOXES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === GIFT_BOXES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full relative bg-[#f6f1e8] py-12 overflow-hidden">

      {/* Background Images (Fixed Stretch + Proper Positioning) */}
      <img
        src={bottomTree}
        className="absolute bottom-0 left-0 opacity-10 z-0 pointer-events-none object-contain max-w-none"
      />
      <img
        src={bottomTree}
        className="absolute bottom-0 right-0 opacity-20 z-0 pointer-events-none object-contain max-w-none scale-x-[-1]"
      />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">

        {/* HEADER (Original Styling Restored) */}
        <div className="mb-6 z-10 text-center sm:mb-8 lg:mb-10">

          <p
            style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,
              fontSize: '12px',
              lineHeight: '100%',
              // letterSpacing: '0%',
            }}
            className="text-[10px] mb-3 mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase"
          >
            THOUGHTFUL GIFTS, BEAUTIFULLY BOXED
          </p>

          <h2
            style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,
              fontSize: '38px',
              lineHeight: '100%',
              // letterSpacing: '0%',
            }}
            className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]"
          >
            Surprises Packed With Joy
          </h2>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">

          {/* Main Image */}
          <div className="max-w-full mb-6">
            <div className=" h-[280px] overflow-hidden rounded-md shadow-lg">
              <img
                src={currentGiftBox.image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Thumbnails + Arrows */}
          <div className="flex items-center gap-3 mb-6">

            <div className="flex gap-3 overflow-x-auto whitespace-nowrap flex-1">
              {GIFT_BOXES.map((box, index) => (
                <button
                  key={box.id}
                  onClick={() => setCurrentIndex(index)}
                  className="min-w-[140px] h-[140px] rounded-xl border-2 border-black/10 overflow-hidden flex-shrink-0"
                >
                  <img
                    src={box.image}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {/* <button onClick={handlePrev} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">‹</button> */}
              <ArrowButton direction='left' onClick={handlePrev} isDefaultSvg={false}/>
              <ArrowButton direction='right' onClick={handleNext} isDefaultSvg={false}/>
            </div>

          </div>

          {/* Details */}
          <div className="rounded-lg shadow-md overflow-hidden">

            <div className="bg-[#9a7523] px-5 py-4">
              <h3
                style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
                className="text-white uppercase"
              >
                {currentGiftBox.title}
              </h3>
            </div>

            <div className="p-5 bg-[#f6f1e8]">
              <p className="text-2xl font-bold mb-2">
                {currentGiftBox.price}
              </p>

              <p
                style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: '13px',
                  lineHeight: '160%',
                  letterSpacing: '0%',
                }}
                className="text-black"
              >
                {currentGiftBox.description}
                <span className="text-[#D4845C] font-semibold cursor-pointer ml-1">
                  READ MORE
                </span>
              </p>
            </div>

          </div>

        </div>

        {/* ================= DESKTOP (ORIGINAL RESTORED) ================= */}
        <div className="hidden lg:flex gap-8">

          {/* Left Big Image */}
          <div
            className=""
            style={{ minWidth: '460px', height: '480px', borderRadius: '5px' }}
          >
            <img
              src={currentGiftBox.image}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6">

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-4 gap-4">
              {GIFT_BOXES.map((box, index) => (
                <button
                  key={box.id}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: '200px',
                    borderRadius: '20px',
                    border: '2px solid rgba(0,0,0,0.1)',
                  }}
                  className="overflow-hidden"
                >
                  <img
                    src={box.image}
                    className="w-full h-[200px] object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button onClick={handlePrev} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">‹</button>
              <button onClick={handleNext} className="w-10 h-10 bg-[#9a7522] text-white rounded-full">›</button>
            </div>

            {/* Details */}
            <div className="rounded-lg shadow-md overflow-hidden">

              <div className="bg-[#9a7523] px-5 py-5">
                <h3
                  style={{
                    fontFamily: "'gotham2', sans-serif",
                    fontWeight: 100,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                  className="text-white uppercase"
                >
                  {currentGiftBox.title}
                </h3>
              </div>

              <div className="bg-[#f6f1e8] p-5 flex gap-6">

                <div className=' min-w-[20%] flex flex-col justify-center  items-start'>
                  <p className="text-3xl flex-1 font-bold text-[#2C2C2C]">
                    {currentGiftBox.price}
                  </p>

                  <div className='h-fit  flex gap-1 justify-center items-center border'>
                    <button style={{fontFamily:"gotham-book"}} className='text-sm h-fit px-4 py-2  whitespace-nowrap border-2 border-[#9a7523] rounded'>Explore more</button>
                    <button className='border p-2 bg-[#9a7523] rounded-md'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M19.7292 22.2592C20.1318 22.2592 20.5178 22.0993 20.8024 21.8147C21.087 21.5301 21.2469 21.1441 21.2469 20.7416C21.2469 20.339 21.087 19.953 20.8024 19.6684C20.5178 19.3838 20.1318 19.2239 19.7292 19.2239C19.3267 19.2239 18.9407 19.3838 18.6561 19.6684C18.3715 19.953 18.2116 20.339 18.2116 20.7416C18.2116 21.1441 18.3715 21.5301 18.6561 21.8147C18.9407 22.0993 19.3267 22.2592 19.7292 22.2592ZM9.61142 22.2592C10.0139 22.2592 10.4 22.0993 10.6846 21.8147C10.9692 21.5301 11.1291 21.1441 11.1291 20.7416C11.1291 20.339 10.9692 19.953 10.6846 19.6684C10.4 19.3838 10.0139 19.2239 9.61142 19.2239C9.20891 19.2239 8.82288 19.3838 8.53827 19.6684C8.25365 19.953 8.09375 20.339 8.09375 20.7416C8.09375 21.1441 8.25365 21.5301 8.53827 21.8147C8.82288 22.0993 9.20891 22.2592 9.61142 22.2592Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.05878 4.04725H22.2591L20.2355 15.1768M5.05878 4.04725L7.08235 15.1768H20.2355M5.05878 4.04725C4.88982 3.37239 4.047 2.02368 2.02344 2.02368M20.2355 15.1768H5.29149C3.48647 15.1768 2.52933 15.9671 2.52933 17.2004C2.52933 18.4338 3.48647 19.224 5.29149 19.224H19.7296" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'gotham-light', sans-serif",
                      fontWeight: 100,
                      fontSize: '13px',
                      lineHeight: '160%',
                      letterSpacing: '0%',
                    }}
                    className="text-black"
                  >
                    {currentGiftBox.description}
                    <span className="text-[#D4845C] font-semibold cursor-pointer ml-1">
                      READ MORE
                    </span>
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GiftBoxSection;
