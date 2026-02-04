import React, { useState, useEffect } from 'react';
import round1 from "../assets/images/roound1.png"
import AboutFrame from "../assets/images/csback.png"

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Anita Sharma',
    location: 'Bengaluru',
    rating: 5,
    title: 'Exceptional Quality',
    review: '"Sublime Signature Black Tea is pure perfection! The aroma is refreshing, the taste is soothing, and it instantly uplifts my mood. Truly a premium blend that delivers wellness."',
    image: '/src/assets/images/Ellipse 96.png',
  },
  {
    id: 2,
    name: 'Vaibhav Vedsav',
    location: 'Kolkata',
    rating: 5,
    title: 'Rich Aroma With Taste',
    review: '"Our whole family loves Sublime Moroccan Mint Tea! It\'s refreshing, natural, and packed with antioxidants. It helps digestion, boosts immunity, and keeps us"',
    image: '/src/assets/images/Ellipse 97.png',
  },
  {
    id: 3,
    name: 'Paola Sebastian',
    location: 'Mumbai',
    rating: 5,
    title: 'Exceptional Support',
    review: '"Sublime Dry Fruits are pure perfection! The aroma is refreshing, the taste is soothing, and it instantly uplifts my mood. Truly a premium blend that delivers wellness."',
    image: '/src/assets/images/Ellipse 98.png',
  },
  {
    id: 4,
    name: 'Rahul Verma',
    location: 'Delhi',
    rating: 5,
    title: 'Amazing Experience',
    review: '"The quality of tea is outstanding! Every sip is a journey of flavors. The packaging is beautiful and the delivery was prompt. Highly recommend!"',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 5,
    name: 'Priya Singh',
    location: 'Pune',
    rating: 5,
    title: 'Pure Bliss',
    review: '"I have tried many tea brands, but Sublime House stands out. The freshness and aroma are unmatched. It has become my daily ritual."',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
];

const CustomerTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Get visible testimonials (prev, current, next)
  const getVisibleTestimonials = () => {
    const prevIndex = currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1;

    return [
      { testimonial: TESTIMONIALS[prevIndex], position: 'left' as const },
      { testimonial: TESTIMONIALS[currentIndex], position: 'center' as const },
      { testimonial: TESTIMONIALS[nextIndex], position: 'right' as const },
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section style={{
      backgroundImage: `url(${AboutFrame})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} className="w-full relative py-12 sm:py-16 lg:py-20 ">
      {/* <div>
        <img src={AboutFrame} alt="" className='absolute w-[200%] h-full bottom-2' />
      </div> */}
      {/* <div style={{
        animation: "spinSlow   26s linear infinite",
      }}
        className='absolute -right-[11%] -top-8    w-72 h-72 pointer-events-none'>
        <img src={round1} alt="" className='h-full w-full block animate-spin-slow' />
      </div>
      <div style={{
        animation: "spinSlow 26s linear infinite",
      }}
        className='absolute -left-[11%] -top-6   animate-spin-slow  w-72 h-72 pointer-events-none'>
        <img src={round1} alt="" className='h-full w-full block' />
      </div> */}

      <div className="text-center  absolute z-10 left-[50%]  -translate-x-1/2 mb-8 sm:mb-12 lg:mb-16">
        <p style={{
          fontFamily: "'gotham', sans-serif",
          fontWeight: 100,

          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase mb-3">
          HEAR THE GOOD
        </p>
        <h2 style={{
          fontFamily: "'gotham2', sans-serif",
          fontWeight: 100,

          fontSize: '38px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]">
          What Our Customers Say
        </h2>
      </div>
      <div className="w-full max-w-[1600px] mt-32 mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}


        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9a7522] hover:bg-[#9a7522] text-white flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -ml-2 sm:-ml-5"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M5.50781 16.5198L13.7678 24.7798M5.50781 16.5198L13.7678 8.25978M5.50781 16.5198L19.9628 16.5198M27.5345 16.5198L24.0928 16.5198" stroke="#F6F0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9a7522] hover:bg-[#9a7522] text-white flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -mr-2 sm:-mr-5"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M27.5322 16.5198L19.2722 8.25977M27.5322 16.5198L19.2722 24.7798M27.5322 16.5198L13.0772 16.5198M5.50552 16.5198L8.94719 16.5198" stroke="#F6F0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          {/* Testimonials Cards */}
          <div className="flex items-center justify-center gap-6 lg:gap-8 px-8 sm:px-12 lg:px-16">
            {visibleTestimonials.map(({ testimonial, position }, index) => {
              const isCenter = position === 'center';

              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`transition-all duration-700 ${isCenter
                      ? 'w-full sm:w-[380px] lg:w-[420px] scale-100 sm:scale-110 z-10'
                      : 'hidden sm:block sm:w-[320px] lg:w-[360px] scale-90 pointer-events-none'
                    }`}
                >
                  {/* Card */}
                  <div className="bg-[#FFF7EA] rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-700 border-2 border-gray-200">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-700">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80';
                          }}
                        />
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 sm:w-6 sm:h-6 fill-[#9a7523] transition-all duration-700"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-[#1A302A] text-xl sm:text-2xl font-lora font-semibold text-center mb-4 leading-tight transition-all duration-700">
                      {testimonial.title}
                    </h3>

                    {/* Review Text */}
                    <p style={{
                      fontFamily: "'gotham-light', sans-serif",
                      fontWeight: 100,

                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }} className="text-gray-700 text-sm sm:text-base font-karla text-center mb-6 leading-relaxed min-h-[80px] sm:min-h-[100px] transition-all duration-700">
                      {testimonial.review}
                    </p>

                    {/* Customer Name & Location */}
                    <p style={{
                      fontFamily: "'gotham2', sans-serif",
                      fontWeight: 100,

                      fontSize: '18px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                    }} className="text-[#316763] text-sm sm:text-base font-karla font-semibold text-center transition-all duration-700">
                      {testimonial.name}, {testimonial.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center gap-2 mt-8 sm:mt-10">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 700);
                  }
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-[#316763] w-8 sm:w-10'
                    : 'bg-[#f6f1e8] hover:bg-gray-800'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;

