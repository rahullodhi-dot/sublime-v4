//  FINAL WORKING FILE (with imports)

// JUST COPY-PASTE & REPLACE YOUR CURRENT FILE

// (IMPORTANT: koi logic/JSX nahi chheda. sirf imports added & array updated.)

import React, { useState } from 'react';
import tokri from "../assets/images/tokri.png";
import bottomTree from "../assets/images/bottomTree.png";

// IMPORT IMAGES (NO DIRECT PATHS)
import gift1 from "../assets/images/gift1.png";
import gift2 from "../assets/images/gift2.png";
import gift3 from "../assets/images/gift3.png";
import gift4 from "../assets/images/gift4.png";

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
    id: 2,
    name: 'WELLNESS WONDER',
    image: gift2,
    title: 'WELLNESS WONDER',
    price: '₹1,500',
    description:
      "BOX CONTAINS: SUBLIME SIGNATURE BLACK TEA - 100G REGIONAL RAW HONEY - 225G SALTED ALMONDS - 55G HONEY ALMONDS - 50G CLOVE - 50G CINNAMON - 50G BRASS TEA INFUSER - 1PC PRESENT YOUR LOVED ONES WITH OPULENCE AND WELL-BEING WITH SUBLIME HOUSE OF TEA'S...",
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
];

const SMALL_PRODUCTS = [
  { id: 1, image: gift1 },
  { id: 2, image: gift2 },
  { id: 3, image: gift3 },
  { id: 4, image: gift4 },
];


const GiftBoxSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GIFT_BOXES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GIFT_BOXES.length - 1 ? 0 : prev + 1));
  };

  const currentGiftBox = GIFT_BOXES[currentIndex];

  return (
    <section className="w-full min-h-screen relative bg-[#f1e4b0]  py-8 sm:py-12 lg:py-16 overflow-hidden">
        <img src={bottomTree} alt="Bottom Tree" className="  h-full object-contain absolute bottom-0 left-0  z-0 opacity-20 " />
        <img src={bottomTree} alt="Bottom Tree" className="   object-contain absolute bottom-0 right-0  z-0 opacity-20 scale-x-[-1] h-[70%] " />
      <div className="w-full relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
          {/* <div className='absolute opacity-10 h-64 -top-14'>
            <img src={tokri} alt="" className='h-full'/>
          </div>
           <div className='absolute  h-36 opacity-70 right-0 -top-1'>
            <img src={tokri} alt="" className='h-full'/>
          </div> */}
        
        <div className="mb-6 z-10 text-center sm:mb-8 lg:mb-10">
        
          <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-[10px] text-center w-fit  mb-3 mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
            THOUGHTFUL GIFTS, BEAUTIFULLY BOXED
            {/* <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4A5D4F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg> */}
          </p>
          <h2 style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]" >
            Surprises Packed With Joy
          </h2>
        </div>

        {/* Main Layout - 3 Columns */}
        <div className="flex  overflow-hidden flex-col mt-[10%]   lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Small Product Thumbnails - 1 column */}
          {/* <div className="hidden lg:flex lg:col-span-1 flex-col justify-center gap-3">
            {SMALL_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden cursor-pointer"
                style={{
                  width: '90px',
                  height: '91px',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={product.image}
                  alt={`Product ${product?.id}`}
                  className="w-full h-full object-contain"
               
                />
              </div>
            ))}
          </div> */}

          {/* Middle Column - Main Gift Box Display - 4 columns */}
          <div className="lg:col-span-4  flex items-center overflow-hidden" style={{width:'1200px',height:"450px",borderRadius:"5px",overflow:"hidden"}}>
            <div
              className="!overflow-hidden  w-full shadow-lg"
              style={{
                height: '500px',
                borderRadius: '10px',
                overflow:"hidden"
              }}
            >
              {/* Direct Product Image - High Quality */}
              <img
                src={currentGiftBox.image}
                alt={currentGiftBox.name}
                className="max-w-full h-full  object-cover"
                style={{ imageRendering: 'auto' }}
          
          
              />
            </div>
          </div>

          {/* Right Column - Product Cards & Details - 7 columns */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-3">
            {/* Product Cards Row with Navigation */}
            <div className="relative">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {GIFT_BOXES.map((box, index) => (
                  <button
                    key={box.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative overflow-hidden transition-all duration-200 w-full aspect-square ${
                      index === currentIndex
                        ? 'shadow-md'
                        : 'shadow-sm hover:shadow-md'
                    }`}
                    style={{
                      width: '200px',
                      borderRadius: '20px',
                      border: '2px solid rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Product Image - High Quality */}
                    <img
                      src={box.image}
                      alt={box.name}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                      loading="eager"
                  
                    />

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/85 py-1.5 px-1.5">
                      <p  style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '10px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}className="text-white text-[8px] font-karla font-bold text-center uppercase tracking-wide leading-tight">
                        {box.name}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Arrows - Below Cards */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={handlePrev}
                  className="relative text-white flex items-center rounded-full  justify-center shadow-md transition-colors hover:opacity-90"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#9a7522',
                    opacity: 1,
                  }}
                  aria-label="Previous gift box"
                >
                  <svg
                    className="absolute"
                    style={{
                      width: '18px',
                      height: '35px',
                      top: '2px',
                      left: '11px',
                      transform: 'rotate(180deg)',
                      opacity: 1,
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="relative text-white flex items-center justify-center shadow-md transition-colors hover:opacity-90"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#9a7522',
                    borderRadius: '50%',
                    opacity: 1,
                  }}
                  aria-label="Next gift box"
                >
                  <svg
                    className="absolute"
                    style={{
                      width: '18px',
                      height: '35px',
                      top: '2px',
                      left: '11px',
                      opacity: 1,
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Details Card */}
            <div className="rounded-lg overflow-hidden shadow-md">
              {/* Header - Teal Background */}
              <div className="bg-[#9a7523] px-5 py-5">
                <h3 style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="text-lg  font-lora font-semibold tracking-[0.2em] uppercase text-white">
                  {currentGiftBox.title}
                </h3>
              </div>

              {/* Content - Light Background */}
              <div className="bg-[#f6f1e8] p-5 flex flex-col sm:flex-row gap-4 sm:gap-5">
                {/* Left - Price & Buttons */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                  {/* Price */}
                  <div>
                    <p style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className="text-3xl font-bold text-[#2C2C2C]">{currentGiftBox.price}</p>
                    <p style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}  className="text-[9px] text-gray-500 font-karla uppercase tracking-wide mt-0.5">
                      MRP (INCL OF ALL TAXES)
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button  style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className="bg-[#f6f1e8] text-[#2C2C2C] px-5 py-2.5 rounded font-karla font-bold text-xs hover:bg-gray-50 transition-colors uppercase tracking-wider border border-[#b89b4a]">
                      EXPLORE MORE
                    </button>
                    <button className="bg-[#9A7522] hover:bg-black text-white px-3 py-2.5 rounded flex items-center justify-center transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right - Description */}
                <div className="flex-1">
                  <p style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '13px',
                  lineHeight: '160%',
                  letterSpacing: '0%',
                }}  className="text-[10px] leading-relaxed   text-black">
                    {currentGiftBox.description}{' '}
                    <span className="text-[#D4845C] font-semibold hover:underline cursor-pointer">
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
