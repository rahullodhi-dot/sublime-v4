import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/categories.service';
import { getStrapiImageUrl } from '../config/strapi.config';

// Import category images
import product1Img from '../assets/images/product1.png';
import product2Img from '../assets/images/product2.png';
import product3Img from '../assets/images/product3.png';
import product4Img from '../assets/images/product4.png';
import ArrowButton from './ui/ArrowButton';

interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

const FALLBACK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'LOOSE TEA',
    slug: 'loose-tea',
    image: product1Img,
  },
  {
    id: 2,
    name: 'HONEY',
    slug: 'honey',
    image: product2Img,
  },
  {
    id: 3,
    name: 'DRY FRUITS',
    slug: 'dry-fruits',
    image: product3Img,
  },
  {
    id: 4,
    name: 'SPICES',
    slug: 'spices',
    image: product4Img,
  },
];

const CategoriesSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response?.data && response.data.length > 0) {
          const formattedCategories: Category[] = response.data.map((item: any) => {
            const attributes = item.attributes || {};
            const imageUrl = attributes.image?.data?.attributes?.url
              ? getStrapiImageUrl(attributes.image.data.attributes.url)
              : '';

            return {
              id: item.id,
              name: attributes.name || '',
              slug: attributes.slug || '',
              image: imageUrl,
            };
          });
          // Take first 4 categories and repeat them
          const firstFour = formattedCategories.slice(0, 4);
          setCategories(firstFour.length > 0 ? firstFour : FALLBACK_CATEGORIES);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Use fallback categories on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width + gap
      const isDesktop = window.innerWidth >= 1024;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = isDesktop ? containerWidth / 4 : containerWidth; // 1 card on desktop, full width on mobile
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll by one card width + gap
      const isDesktop = window.innerWidth >= 1024;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount = isDesktop ? containerWidth / 4 : containerWidth; // 1 card on desktop, full width on mobile
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const displayCategories = categories.length > 0 ? categories : FALLBACK_CATEGORIES;
  const repeatedCategories = [...displayCategories, ...displayCategories, ...displayCategories];

  return (
    <section
      className=" py-12 sm:py-16  bg-[#F6F1E8] lg:py-20 lg:min-h-screen"
      style={{
        fontFamily: "'gotham-book', sans-serif",
        fontWeight: 100,
      }}
    >

      <div className="mx-auto h-full   max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between mb-8 sm:mb-10">
          <div className="space-y-2 mx-auto text-center">
            {/* EXPLORE NEW RANGE with Icon */}
            <div className="flex items-center   gap-2 justify-center md:justify-start">
              {/* <svg className="h-3 w-3 sm:h-4 sm:w-4 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg> */}
              <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
            
              }} className="text-[10px] text-center w-fit font-semibold  mx-auto sm:text-xs  tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
                EXPLORE NEW RANGE
              </p>
            </div>
            {/* Our Categories Title */}
            <h2 style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]">
              Our Categories
            </h2>
          </div>
        </div>

        {/* Categories Carousel */}
        {isLoading ? (
          <div className="flex gap-5 lg:gap-6 overflow-hidden">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[312px] h-[442px] bg-gray-200 rounded-[20px] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Navigation Arrow - Left */}
            {/* <button
        
              className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:bg-gray-100 active:scale-90"
              aria-label="Scroll left"
            > */}
              
              <ArrowButton direction="left" onClick={scrollLeft} isDefaultSvg={true} />
              {/* </button> */}
              {/* Scrollable Categories Container */}
              <div className="overflow-hidden ">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-5 lg:gap-6 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory hide-scrollbar"
                >
                  {repeatedCategories.map((category, index) => (
                    <Link
                      key={`${category.id}-${index}`}
                      // to={`/products?category=${category.slug}`}
                      to={"/productDetails"}
                      className="group flex-shrink-0 w-[312px] h-[442px] relative overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.02] snap-start shadow-lg hover:shadow-2xl"
                    >
                      {/* Category Image */}
                      <div className="absolute inset-0">
                        <img
                          src={category.image || 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'}
                          alt={category.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Category Label - Bottom Overlay with Gray Background */}
                      <div
                        className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
                        style={{
                          height: '55px',
                          background: '#000000B2',
                          borderBottomLeftRadius: '20px',
                          borderBottomRightRadius: '20px'
                        }}
                      >
                        <div className="text-[#F6F1E8] text-center">
                          {/* Category Name */}
                          <h3 className="text-[20px] font-medium uppercase tracking-[0.04em] leading-[100%]" style={{
                            fontFamily: "'gotham2', sans-serif",
                            fontWeight: 100,

                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                          }} >{category.name}</h3>
                          {/* Red Line Below */}
                          <div className="h-0.5 w-16 lg:w-20 bg-[#B89B4A] mx-auto mt-2"></div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Arrow - Right */}

                  <ArrowButton direction="right" onClick={scrollRight} isDefaultSvg={true} />
        

              {/* Mobile Scroll Hint */}
              <div className="lg:hidden text-center mt-6">
                <p className="text-xs text-gray-500">← Swipe to explore more →</p>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
