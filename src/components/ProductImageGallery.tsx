import { useState } from 'react';
import { ChevronLeft, ChevronRight, Share2, Play } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Dummy images if not provided
  const displayImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
  ];

  const handlePrev = () => {
    setSelectedImage((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productName,
        text: `Check out ${productName}`,
        url: window.location.href,
      }).catch(() => { });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="w-full  ">
      {/* Main Container - Dark Grey Background for Main Image Area */}
      <div className="rounded-2xl overflow-hidden py-4">
        <div className="flex flex-col-reverse justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Thumbnail Gallery (Vertical Stack) - Flat White Cards */}
          <div className=" lg:flex  gap-3 lg:gap-4 flex-shrink-0">
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative cursor-pointer group focus:outline-none"
              >
                {/* Flat White Rounded Rectangle Card with Shadow */}
                <div
                  className="relative bg-white overflow-hidden transition-all duration-300"
                  style={{
                    width: '98.63px',
                    height: '102.81px',
                    borderRadius: '10px',
                    boxShadow: selectedImage === index
                      ? '0 4px 12px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.8)'
                      : '0 2px 8px rgba(0, 0, 0, 0.15)',
                    transform: selectedImage === index ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <img
                    src={image}
                    alt={`${productName} thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-300 ${selectedImage === index ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'
                      }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=200&q=80';
                    }}
                  />

                  {/* Play Button on First Thumbnail - White Circle with Dark Background */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                      <div
                        className="bg-white rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          width: '36px',
                          height: '36px',
                        }}
                      >
                        <Play
                          className="w-5 h-5 text-gray-800"
                          fill="currentColor"
                          style={{ marginLeft: '3px' }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Active Indicator - White Border Glow */}
                  {selectedImage === index && (
                    <div
                      className="absolute inset-0 border-2 border-white pointer-events-none"
                      style={{
                        borderRadius: '10px',
                        boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.9), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Thumbnails - Horizontal */}
          <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6">
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className="flex-shrink-0 relative"
              >
                <div
                  className={`bg-white rounded-lg overflow-hidden shadow-md transition-all ${selectedImage === index ? 'ring-2 ring-white shadow-lg scale-105' : 'opacity-70'
                    }`}
                  style={{
                    width: '60px',
                    height: '60px',
                  }}
                >
                  <img
                    src={image}
                    alt={`${productName} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 text-gray-800 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Center Column - Main Product Image with Dark Grey Background */}
          <div className="flex-1 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[566px]">
            {/* Main Image Container - White Rounded Card on Dark Grey Background */}
            <div className="relative mx-auto">
              {/* Main Image Container - White Card */}
              <div className="relative bg-white overflow-hidden shadow-2xl"
                style={{
                  width: '543px',
                  height: '566px',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={displayImages[selectedImage]}
                  alt={productName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80';
                  }}
                />

                {/* Navigation Arrows - Left (White Circle with Black Arrow) */}
                {/* <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} fill="none" />
                </button> */}

                {/* Navigation Arrows - Right (White Circle with Black Arrow) */}
                {/* <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} fill="none" />
                </button> */}

                {/* Share Icon - Top Right (White Circle with Black Share Icon) */}
                <button
                  onClick={handleShare}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  aria-label="Share product"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path d="M25.3037 15.5L19.375 9.57123V12.7487L18.2642 12.9166C12.6971 13.7046 8.92542 16.6237 6.76833 21.0929C9.765 18.9746 13.485 17.9541 18.0833 17.9541H19.375V21.4287M16.7917 19.2716C11.0179 19.5429 6.88458 21.6225 3.875 25.8333C5.16667 19.375 9.04167 12.9166 18.0833 11.625V6.45831L27.125 15.5L18.0833 24.5416V19.2458C17.6571 19.2458 17.2308 19.2587 16.7917 19.2716Z" fill="#9A7522" />
                  </svg>
                </button>

                 <button
                  // onClick={handleShare}
                  className="absolute top-6 sm:top-20 right-3 sm:right-4 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  aria-label="Share product"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M13.9987 6.41668L13.3687 7.02335C13.4503 7.10803 13.5482 7.17539 13.6564 7.2214C13.7647 7.26741 13.8811 7.29112 13.9987 7.29112C14.1163 7.29112 14.2327 7.26741 14.341 7.2214C14.4492 7.17539 14.5471 7.10803 14.6287 7.02335L13.9987 6.41668ZM10.9957 21.3757C9.22703 19.9815 7.29387 18.62 5.7597 16.8933C4.25703 15.1993 3.20703 13.2242 3.20703 10.6598H1.45703C1.45703 13.7702 2.75203 16.1432 4.45186 18.0553C6.1202 19.9337 8.2482 21.4387 9.91187 22.75L10.9957 21.3757ZM3.20703 10.6598C3.20703 8.15151 4.62453 6.04685 6.56003 5.16135C8.4407 4.30151 10.9677 4.52901 13.3687 7.02335L14.6287 5.81118C11.782 2.85135 8.47336 2.36251 5.83203 3.57001C3.24903 4.75185 1.45703 7.49585 1.45703 10.6598H3.20703ZM9.91187 22.75C10.5104 23.2213 11.152 23.723 11.8019 24.1033C12.4517 24.4837 13.1937 24.7917 13.9987 24.7917V23.0417C13.637 23.0417 13.2124 22.9017 12.685 22.5925C12.1565 22.2845 11.6094 21.8598 10.9957 21.3757L9.91187 22.75ZM18.0855 22.75C19.7492 21.4375 21.8772 19.9348 23.5455 18.0553C25.2454 16.142 26.5404 13.7702 26.5404 10.6598H24.7904C24.7904 13.2242 23.7404 15.1993 22.2377 16.8933C20.7035 18.62 18.7704 19.9815 17.0017 21.3757L18.0855 22.75ZM26.5404 10.6598C26.5404 7.49585 24.7495 4.75185 22.1654 3.57001C19.524 2.36251 16.2177 2.85135 13.3687 5.81001L14.6287 7.02335C17.0297 4.53018 19.5567 4.30151 21.4374 5.16135C23.3729 6.04685 24.7904 8.15035 24.7904 10.6598H26.5404ZM17.0017 21.3757C16.388 21.8598 15.8409 22.2845 15.3124 22.5925C14.7839 22.9005 14.3604 23.0417 13.9987 23.0417V24.7917C14.8037 24.7917 15.5457 24.4825 16.1955 24.1033C16.8465 23.723 17.487 23.2213 18.0855 22.75L17.0017 21.3757Z" fill="#9A7522"/>
</svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;


