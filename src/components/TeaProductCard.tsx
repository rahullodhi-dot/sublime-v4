// import React from 'react';

// interface TeaProductCardProps {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   onClick: () => void;
//   viewMode?: 'grid' | 'list';
// }

// const TeaProductCard: React.FC<TeaProductCardProps> = ({
//   name,
//   description,
//   price,
//   image,
//   onClick,
//   viewMode = 'grid'
// }) => {
//   if (viewMode === 'list') {
//     return (
//       <div 
//         className="bg-[#d6c27a] hover:bg-gray-100 transition-all duration-300 group relative grid grid-cols-[1fr_150px_180px] gap-8 items-start p-5 rounded-xl mb-4"
//       >
//         {/* Column 1: PRODUCTS - Image + Content */}
//         <div className="flex items-start gap-6">
//           {/* Product Image with Heart Icon */}
//           <div className="relative bg-white rounded-lg w-[248px] h-[224px] flex-shrink-0 flex items-center justify-center ">
//             {/* Heart Icon */}
//             <button 
//               className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 // TODO: Add to wishlist
//               }}
//             >
//               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//               </svg>
//             </button>

//             <img 
//               src={image} 
//               alt={name}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col gap-2 min-w-0 max-w-[500px]">
//             <h3 
//               onClick={onClick}
//               className="font-lora font-medium text-[26px] leading-[100%] text-[#316763] cursor-pointer hover:text-[#285853] transition-colors"
//             >
//               {name}
//             </h3>
//             <p className="font-karla font-light text-[15px] leading-[22px] capitalize text-gray-600 line-clamp-3">
//               {description}...
//               <button 
//                 className="text-[#D32F2F] text-[15px] font-karla font-medium hover:underline ml-1"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onClick();
//                 }}
//               >
//                 Read More
//               </button>
//             </p>
//           </div>
//         </div>

//         {/* Column 2: PRICE */}
//         <div className="flex items-start justify-center pt-1">
//           <span className="font-karla font-semibold text-[26px] text-[#316763] whitespace-nowrap">
//             ₹{price}
//           </span>
//         </div>

//         {/* Column 3: CART */}
//         <div className="flex items-start justify-end pt-1">
//           <button 
//             className="bg-[#316763] text-white px-5 py-2.5 rounded-md text-[16px] font-karla font-medium hover:bg-[#285853] transition-colors whitespace-nowrap flex items-center gap-2"
//             onClick={(e) => {
//               e.stopPropagation();
//               // TODO: Add to cart
//             }}
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Grid View (Default)
//   return (
//     <div 
//       onClick={onClick}
//       className="bg-[#d6c27a] p-2 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden rounded-lg"
//     >
//       {/* Product Image */}
//       <div className="relative  overflow-hidden bg-gradient-to-br from-purple-100 to-yellow-50 aspect-square flex items-center justify-center ">
//         <img 
//           src={image} 
//           alt={name}
//           className="w-full h-full object-cover  transition-transform duration-500"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <h3 className="product-title mb-2 group-hover:text-[#316763] transition-colors">
//           {name}
//         </h3>
//         <p className="text-karla font-light text-[15px] leading-[24px] text-gray-600 mb-3 line-clamp-2">
//           {description}
//         </p>

//         {/* Price and Cart */}
//         <div className="flex items-center justify-between">
//           <span className="text-karla font-semibold text-[20px] text-[#316763]">
//             ₹{price}
//           </span>
//           <button 
//             className="bg-[#316763] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1A302A] transition-colors"
//             onClick={(e) => {
//               e.stopPropagation();
//               // TODO: Add to cart
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeaProductCard;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TeaProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug?: string;
  viewMode?: 'grid' | 'list';
  isBestseller?: boolean;
}

const TeaProductCard: React.FC<TeaProductCardProps> = ({
  name,
  description,
  price,
  image,
  slug,
  viewMode = 'grid',
  isBestseller = true,
}) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(prev => !prev);
  };

  const isList = viewMode === 'list';

  return (
    <div
      onClick={() => navigate(`/productDetails`)}
      className={`tea-card group relative cursor-pointer bg-[#f1e4b0] rounded-xl transition-all duration-300
      ${isList
        ? "grid grid-cols-[220px_1fr_200px] gap-8 items-center p-5"
        : "flex flex-col p-3 px-4 overflow-hidden"}
      `}
    >
      {/* Image */}
      <div className={`relative bg-white rounded-lg flex items-center justify-center
        ${isList ? "h-[220px]" : "aspect-square"}
      `}>
        <button
          className="absolute top-3 right-3 z-10"
          onClick={handleWishlistClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill={isWishlisted ? '#fff' : '#000'}>
            <path d="M12.8881 5.90682L12.3082 6.46525..." fill="white" />
          </svg>
        </button>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Middle Content */}
      <div className={`flex flex-col ${isList ? "gap-3" : "py-3 px-2"}`}>
        <h3 style={{ fontFamily: "gotham2" }} className={`${isList ? "text-[26px] text-[#9a7523]" : "text-[20px] text-black"}`}>
          {name}
        </h3>

        {isList ? (
          <p style={{ fontFamily: "gotham-book" }} className="text-[15px] text-gray-600 line-clamp-3">
            {description}
          </p>
        ) : (
          <p className="text-sm text-[#9A7523]">New Weight 100g</p>
        )}
      </div>

      {/* Price / Cart */}
      <div className={`flex ${isList ? "flex-col items-end gap-4" : "items-center justify-between px-2 pb-3"}`}>
        <span style={{ fontFamily: "gotham-light" }} className={`${isList ? "text-[26px]" : "text-[20px]"} text-[#9A7522] font-semibold`}>
          ₹{price}
        </span>

        <button
          onClick={(e) => e.stopPropagation()}
          className="bg-[#9a7523] text-white px-4 py-3 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TeaProductCard;

