import React, { useEffect, useState } from 'react';
import { getWhyChooseUsFeatures } from '../services/homepage.service';
import { getStrapiImageUrl } from '../config/strapi.config';
import AboutFrame from "../assets/images/AboutFrame.png"
import mountain from "../assets/images/mountain.png"
import ladies from "../assets/images/ladies.jpg"
import grass from "../assets/images/grass.jpg"
import greenVision from "../assets/images/greenVision.jpg"
import vision from "../assets/images/vision.jpg"
interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  order: number;
}

// Fallback features if Strapi is not available
const FALLBACK_FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Wellness Enhancing',
    description: 'A lifestyle designed to elevate your body, mind, and spirit.',
    image: ladies,
    order: 1,
  },
  {
    id: 2,
    title: 'Direct From Growers',
    description: 'From the hands that harvest to yours — pure, authentic, and direct.',
    image:grass,
    order: 2,
  },
  {
    id: 3,
    title: 'Sourced Fresh in Small Batches',
    description: 'Crafted in small batches to ensure unmatched freshness and quality.',
    image: greenVision,
    order: 3,
  },
  {
    id: 4,
    title: 'Lead By Visionaries',
    description: 'Shaped By Leaders who believed in innovation and progress.',
    image: vision,
    order: 4,
  },
];

const WhyChooseUsSection: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>(FALLBACK_FEATURES);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await getWhyChooseUsFeatures();
        if (response?.data && response.data.length > 0) {
          const featuresData: Feature[] = response.data.map((item: any) => {
            // Strapi v5 format - handle image (can be object or direct)
            let imageUrl = '';
            if (item.image) {
              if (typeof item.image === 'string') {
                imageUrl = getStrapiImageUrl(item.image);
              } else if (item.image.url) {
                imageUrl = getStrapiImageUrl(item.image.url);
              }
            }
            
            return {
              id: item.id,
              title: item.title || '',
              description: item.description || '',
              image: imageUrl,
              order: item.order || 0,
            };
          }).sort((a, b) => a.order - b.order);
          
          setFeatures(featuresData);
          console.log('Why Choose Us features loaded:', featuresData);
        }
      } catch (error) {
        console.error('Error fetching why choose us features:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  const displayFeatures = features.length > 0 ? features : FALLBACK_FEATURES;
  
  // Background image style
  const bgStyle = {
    backgroundImage: `url(${AboutFrame})`,
    backgroundColor: '#f6f2e3',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
   <section
  className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden"
  style={bgStyle}
>
  {/* Background image layer */}
  <div
    style={{ backgroundImage: `url(${mountain})` }}
    className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
  />

  {/* Optional dark/light overlay tint (remove if not needed) */}
  {/* <div className="absolute inset-0 bg-black/20 z-0" /> */}

  {/* Content Wrapper */}
  <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
      <p
        style={{
          fontFamily: "'gotham', sans-serif",
          fontWeight: 100,
          fontSize: '18px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
        className="text-black text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-karla font-semibold"
      >
        AWESOME PRODUCTS
      </p>

      <h2
        style={{
          fontFamily: "'gotham', sans-serif",
          fontWeight: 100,
          fontSize: '38px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
        className="text-[#B89B49] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-lora font-medium leading-tight mb-4 sm:mb-6"
      >
        Why Choose Us
      </h2>

      <p
        style={{
          fontFamily: "'gotham2', sans-serif",
          fontWeight: 100,
          fontSize: '18px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
        className="text-[#1A302A] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4"
      >
        Sublime House of Tea was born with a vision to redefine tea drinking into an elevated sublime tea experience. Through meticulous sourcing, blending, and crafting.
      </p>
    </div>

    {/* Timeline + Features */}
    {isLoading ? (
      <div className="flex justify-center items-center py-12">
        <div className="w-16 h-16 border-4 border-[#316763] border-t-transparent rounded-full animate-spin"></div>
      </div>
    ) : (
      <>
        {/* Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[10px] left-0 right-0 h-[2px] bg-[#B99F66] z-0"></div>

          <div className="absolute top-[10px] -left-0 -translate-y-1/2 z-10">
            <div className="w-5 h-5 rounded-full border-[3px] bg-[#B99F66] border-[#B99F66] shadow-md"></div>
          </div>

          <div className="absolute top-[10px] right-0 -translate-y-1/2 z-10">
            <div className="w-5 h-5 rounded-full border-[3px] bg-[#B99F66] border-[#B99F66] shadow-md"></div>
          </div>

          <div className="relative grid grid-cols-4 gap-6 lg:gap-8 mb-0">
            {displayFeatures.map((feature, index) => (
              <div key={`dot-${feature.id}`} className="relative flex flex-col items-center z-10">
                <div
                  className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
                    index === displayFeatures.length - 1
                      ? 'bg-[#B99F66] border-[#B99F66] shadow-lg shadow-[#B99F66]/30'
                      : 'bg-[#B99F66] border-[#B99F66] shadow-md'
                  }`}
                ></div>
                <div
                  className={`w-[2px] ${
                    index === displayFeatures.length - 1
                      ? 'bg-[#B99F66]'
                      : 'bg-[#B99F66]'
                  }`}
                  style={{ height: '48px' }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-32 sm:h-36 lg:h-40 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target;
                    target.src =
                      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <div className="p-5 sm:p-6 text-center">
                <h3
                  style={{
                    fontFamily: "'gotham', sans-serif",
                    fontWeight: 100,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                  className="text-[#B99F66] text-lg sm:text-xl font-lora font-semibold mb-3 leading-tight"
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'gotham2', sans-serif",
                    fontWeight: 100,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                  className="text-gray-600 text-sm sm:text-base font-karla leading-relaxed"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
</section>

  );
};

export default WhyChooseUsSection;

