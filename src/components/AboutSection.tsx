import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GirlImage from '../assets/images/founderImage.jpg';
import BgImage from '../assets/images/Group365.png';
import AboutFrame from "../assets/images/AboutFrame.png"
import CornerLeaf from "../assets/images/CornerLeaf.png"
import PenInk from "../assets/images/penInk.png"

interface AboutData {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
}

const AboutSection: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback static content
  const fallbackData: AboutData = {
    heading: 'About Sublime',
    description: `Sublime House of Tea started off as my teenage ambition, and many years later, I am proud to say that the brand has become a recognizable symbol of trust, taste, and innovation.

Sticking to the core value of bringing to you fresh quality and superior products, the collection at Sublime House of Tea is sourced in small batches. The products are carefully curated to satisfy your health requirements as well as please your taste buds.

Every product of which is packed with authentic quality fresh ingredients, which will enhance your health and wellness.`,
    buttonText: 'Read Our Full Story',
    buttonLink: '/about',
    image: GirlImage,
    backgroundColor: '#a9be95',
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/about-sections?populate=*');

        if (!response.ok) {
          throw new Error('Failed to fetch about section data');
        }

        const result = await response.json();
        console.log('About Section API Response:', result);

        if (result.data && result.data.length > 0) {
          const strapiData = result.data[0];
          const imageUrl = strapiData.image?.url
            ? `http://localhost:1337${strapiData.image.url}`
            : fallbackData.image;

          setAboutData({
            heading: strapiData.heading || fallbackData.heading,
            description: strapiData.description || fallbackData.description,
            buttonText: strapiData.buttonText || fallbackData.buttonText,
            buttonLink: strapiData.buttonLink || fallbackData.buttonLink,
            image: imageUrl,
            backgroundColor: strapiData.backgroundColor || fallbackData.backgroundColor,
          });
        } else {
          setAboutData(fallbackData);
        }
      } catch (err) {
        console.error('Error fetching about section:', err);
        setAboutData(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const displayData = aboutData || fallbackData;

  if (loading) {
    return (
      <section
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{ backgroundColor: '#F6F1E8' }}
      >
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center text-[#1A302A]">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-2 sm:py-12 lg:pt-0 lg:pb-20 overflow-hidden"
      style={{
        backgroundColor: '#F6F1E8'
      }}
    >
      <div className="relative  mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-16">
        
        {/* Rounded Container with padding and background image */}
        <div
          className="relative rounded-3xl p-10 sm:p-20 lg:p-16   "
          style={{
            backgroundColor: "#F1E4B0",



            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >

          {/*

          <div className='absolute top-0 right-0  h-36'>
            <img src={CornerLeaf} alt="" className='h-full' />
          </div>
             <div className='absolute top-0 left-0 scale-x-[-1] h-36'>
            <img src={CornerLeaf} alt="" className='h-full' />
          </div>
             <div className='absolute bottom-0 left-0 scale-y-[-1] scale-x-[-1] h-36'>
            <img src={CornerLeaf} alt="" className='h-full' />
          </div>
            <div className='absolute bottom-0 right-0 scale-y-[-1] scale-x-[1] h-36'>
            <img src={CornerLeaf} alt="" className='h-full' />
          </div> */}

           <div className='absolute h-36 left-[46%] translate-x-1/2 bottom-24'>
            <img src={PenInk} alt="" className='h-full ' />
          </div>

        
          <div className="grid px-4 grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-5">
              {/* Small Heading */}
              <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '38px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-xs sm:text-sm font-semibold uppercase  text-[#B89B4A]">
            Crafting Legacy
              </p>

              {/* Main Heading */}
              <h2 style={{
                fontFamily: "'buttain', sans-serif",
                fontWeight: 100,

                fontSize: '38px',
                lineHeight: '150%',
                letterSpacing: '0%',
              }} className="text-lora font-medium text-3xl sm:text-4xl lg:text-[42px] tracking-[0.81rem] leading-[2000%] text-[#1A302A]">
                Since 1998
              </h2>

              {/* Description Paragraphs */}
              <div style={{
                fontFamily: "'gotham2', sans-serif",
                fontWeight: 100,

                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: '0%',
              }} className="space-y-6 z-10 font-normal text-xs  leading-[200%] text-[#1A302A] text-justify whitespace-pre-line">
                {displayData.description}
              </div>

              {/* Read More Button */}
              <div className="pt-2">
                <Link
                  to={displayData.buttonLink}
                  className="relative inline-block bg-white rounded-3xl text-[#9A7522] px-6 sm:px-8 py-2.5 sm:py-3  text-sm sm:text-base font-medium shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
                >
                  {/* <span className="absolute inset-0 bg-[#316763] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center rounded"></span> */}
                  <span style={{
                    fontFamily: "'gotham2', sans-serif",
                    fontWeight: 100,

                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }} className="relative z-10">{displayData.buttonText}</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex  flex-col  px-10 justify-center lg:justify-end">
              <div className="relative max-h-[90%]  self-end items-start rounded-2xl  overflow-hidden w-full sm:w-80 lg:w-96">
                <img
                  src={displayData.image}
                  alt={displayData.heading}
                  className="w-full max-h-[80%]  object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className='self-end  mt-2'>
                <p style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className='text-center text-[#9A7522] mb-2 mr-4' >UZMA IRFAN</p>
                <p style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} className='mr-8 text-[#9A7522]' >Founder Of Sublime House Of Tea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

