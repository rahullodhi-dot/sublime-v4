import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema } from '../utils/schemas';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CategoriesSection from '../components/CategoriesSection';
import AboutSection from '../components/AboutSection';

import PartnersSection from '../components/PartnersSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CustomerTestimonialsSection from '../components/CustomerTestimonialsSection';
import GiftBoxSection from '../components/GiftBoxSection';


import { getHeroSlides } from '../services/homepage.service';
import { getStrapiImageUrl } from '../config/strapi.config';
import BgImg1 from '../assets/images/bgImg2.png';

import ShopTheBestSection from '../components/ShopTheBestSection';
import V3Video from "../assets/video/FinalVideo.mp4"
import mobileVideo from "../assets/video/mobileVideo.mp4"






interface HeroSlideData {
  id: number;
  order: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: {
    url: string;
  };
  slideType: 'video' | 'image';
  backgroundVideo?: {
    url: string;
  };
  backgroundImage?: {
    url: string;
  };
  productImage?: {
    url: string;
  };
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
}

const Home: React.FC = () => {

  const [heroSlides, setHeroSlides] = useState<HeroSlideData[]>([]);
  const [isLoadingSlides, setIsLoadingSlides] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  // Fallback static slides
  // const staticSlides = [
  //   { id: 1, type: 'video' },
  //   { id: 2, type: 'tea' },
  //   { id: 3, type: 'honey' },
  // ];

  // const slides = heroSlides.length > 0 ? heroSlides : staticSlides;

  // Only use API slides
const slides = heroSlides;

  // Minimum swipe distance (in px)
  const minSwipeDistance = 75;

  // Handle swipe/drag navigation
  const handleSlideChange = () => {
    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - next slide
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped right - previous slide
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
    }
  };

  // Touch handlers (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setTouchEndX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      handleSlideChange();
      setIsDragging(false);
    }
  };

  // Mouse handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStartX(e.clientX);
    setTouchEndX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTouchEndX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleSlideChange();
      setIsDragging(false);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Auto-slide every 6 seconds uncomment when the client wants auto sliding
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, currentSlide === 0 ? 45000 : 10000);

  //   return () => clearInterval(interval);
  // }, [slides.length, currentSlide]);

  // Default colors for each slide type (managed from frontend) uncomment when there is muliple slides and the client wants different colors for each slide type
  // const getDefaultColors = (slideType: string, index: number) => {
  //   if (slideType === 'video') {
  //     return {
  //       backgroundColor: '#1a1a1a',
  //       textColor: '#EED6B5'
  //     };
  //   }

  //   // Default colors for image slides (Tea & Honey)
  //   const defaultImageColors = [
  //     { backgroundColor: '#7A9B7F,#A3B899', textColor: '#1A302A' }, // Green (Tea)
  //     { backgroundColor: '#D4A574,#F4D19B', textColor: '#1A302A' }, // Golden (Honey)
  //     { backgroundColor: '#E8E4D8,#F5F1E8', textColor: '#2C3E50' }, // Cream (Default)
  //   ];

  //   return defaultImageColors[index % defaultImageColors.length];
  // };

  // Fetch Hero Slides from Strapi
useEffect(() => {
  const fetchHeroSlides = async () => {
    try {
      const response = await getHeroSlides();

      if (response?.data?.length > 0) {
        const slidesData = response.data
          .map((slide: any, index: number) => {
            if (!slide.isActive) return null;

            return {
              id: slide.id,
              order: slide.order,
              title: slide.title,
              subtitle: slide.Subtitle || '',
              buttonText: slide.buttonText || 'Explore More',
              buttonLink: slide.buttonLink || '/products',
              slideType: slide.slideType,
              backgroundVideo: slide.backgroundVideo
                ? { url: getStrapiImageUrl(slide.backgroundVideo.url) }
                : undefined,
              backgroundImage: slide.backgroundImage
                ? { url: getStrapiImageUrl(slide.backgroundImage.url) }
                : undefined,
              productImage: slide.productImage
                ? { url: getStrapiImageUrl(slide.productImage.url) }
                : undefined,
            };
          })
          .filter(Boolean);

        setHeroSlides(slidesData);
      } else {
        setHeroSlides([]); // fallback trigger karega
      }
    } catch (error) {
      console.error("Hero API Error:", error);
      setHeroSlides([]); // fallback trigger karega
    } finally {
      setIsLoadingSlides(false);
    }
  };

  fetchHeroSlides();
}, []);



  const structuredData = [
    organizationSchema,
    websiteSchema
  ];


  console.log(slides,isLoadingSlides)


  return (
    <div className="overflow-x-hidden w-full">
      <SEO
        title="Sublime House Tea - Premium Teas & Exceptional Tea Experiences"
        description="Discover premium teas at Sublime House Tea. Quality tea blends, exceptional service, and authentic tea experiences. Shop now for the finest teas!"
        keywords="premium teas, tea blends, green tea, black tea, oolong tea, herbal tea, sublime house tea, tea shop, online tea store"
        url="https://sublimehousetea.com"
        structuredData={structuredData}
      />

      {/* Hero Banner Slider */}
   {/* Hero Banner Slider */}
<section
  className="relative min-h-[100vh] sm:h-[75vh] lg:h-[85vh] w-full overflow-hidden select-none"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseLeave}
>

  {/* Loader */}
  {isLoadingSlides && (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  )}

  {/* ================= API SLIDES ================= */}
  {!isLoadingSlides && slides.length > 0 &&
    slides.map((slide, index) => {
      const isVideo = slide.slideType?.toLowerCase() === "video";

      return (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* -------- VIDEO SLIDE -------- */}
          {isVideo && slide.backgroundVideo ? (
            <div className="relative w-full h-full bg-black">

           {/* Desktop Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute hidden sm:block inset-0 w-full h-full object-cover"
>
  <source src={V3Video} type="video/mp4" />
</video>

{/* Mobile Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute block sm:hidden inset-0 w-full h-full object-cover"
>
  <source src={mobileVideo} type="video/mp4" />
</video>

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl text-white">
                  <h1 className="text-4xl md:text-6xl font-light mb-6">
                    {slide.title}
                  </h1>

                  <p
                    className="mb-8 text-lg italic"
                    dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                  />

                  <Link
                    to={slide.buttonLink}
                    className="inline-block bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* -------- IMAGE SLIDE -------- */
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage?.url || BgImg1})`,
              }}
            >
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl w-full">

                  {/* Product Image */}
                  <div className="flex justify-center">
                  {/* Desktop Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute hidden sm:block inset-0 w-full h-full object-cover"
>
  <source src={V3Video} type="video/mp4" />
</video>

{/* Mobile Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute block sm:hidden inset-0 w-full h-full object-cover"
>
  <source src={mobileVideo} type="video/mp4" />
</video>
                  </div>

                  {/* Text */}
                  <div className="text-center lg:text-left text-black">
                    <h2 className="text-4xl font-light mb-6">
                      {slide.title}
                    </h2>

                    <p
                      className="mb-8 italic"
                      dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                    />

                    <Link
                      to={slide.buttonLink}
                      className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      );
    })}

  {/* ================= FALLBACK VIDEO ================= */}
  {!isLoadingSlides && slides.length === 0 && (
    <div className="absolute inset-0">
     {/* Desktop Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute hidden sm:block inset-0 w-full h-full object-cover"
>
  <source src={V3Video} type="video/mp4" />
</video>

{/* Mobile Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute block sm:hidden inset-0 w-full h-full object-cover"
>
  <source src={mobileVideo} type="video/mp4" />
</video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">
          <p style={{fontFamily:"gotham-book"}} className="uppercase tracking-[0.3rem] mb-6  text-sm">
            To gather the finest leaves, spices and little treasures of nature
          </p>

          <h1 style={{fontFamily:"gotham2"}} className="text-4xl tracking-[0.1rem] md:text-6xl font-light mb-8">
            Serenity in every moment
          </h1>

          <Link
            to="/products"
            className="inline-block  shine-effect bg-white text-black px-8 py-3 rounded transition"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  )}

</section>

      {/* <BackToTop /> */}
      <CategoriesSection />
      <AboutSection />
      <ShopTheBestSection />

      <GiftBoxSection />
      <WhyChooseUsSection />
      <TestimonialsSection subHeading="Only Buy Good" />
      {/* <StorySection /> */}

      <CustomerTestimonialsSection />

      <PartnersSection />

      <BlogSection />
      {/* <NewsletterBanner /> */}
    </div>
  );
};

export default Home;
