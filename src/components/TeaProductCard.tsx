import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TeaProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug?: string;
  viewMode?: "grid" | "list";
}

const TeaProductCard: React.FC<TeaProductCardProps> = ({
  name,
  description,
  price,
  image,
  viewMode = "grid",
}) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const isList = viewMode === "list";

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div
      onClick={() => navigate(`/productDetails`)}
      className={`group relative cursor-pointer bg-[#f1e4b0] rounded-xl transition-all duration-300
      ${
        isList
          ? "flex flex-col sm:flex-row gap-6 sm:gap-8 p-4 sm:p-5"
          : "flex flex-col p-3 px-4"
      }`}
    >
      {/* IMAGE */}
      <div
        className={`relative rounded-lg flex items-center justify-center
        ${
          isList
            ? "w-full sm:w-[220px] h-[220px] shrink-0"
            : "aspect-square"
        }`}
      >
        <button
          className="absolute top-3 right-3 z-10"
          onClick={handleWishlistClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 26 26"
            fill={isWishlisted ? "#9a7523" : "#000"}
          >
            <path d="M12.8881 5.90682L12.3082 6.46525..." fill="white" />
          </svg>
        </button>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* CONTENT */}
      <div
        className={`flex   justify-between flex-1 pt-3 ${
          isList ? "  flex-col" : " flex flex-col-reverse gap-3"
        }`}
      >
        {/* NAME + DESCRIPTION / WEIGHT */}
        <div className="flex   flex-col  ">
          <h3
            style={{ fontFamily: "gotham-book" }}
            className={`${
              isList
                ? "text-xl sm:text-2xl lg:text-[26px] text-[#9a7523]"
                : "text-lg sm:text-[20px] text-black"
            }`}
          >
            {name}
          </h3>

          {isList ? (
            <div>
              <p className="text-sm  my-2 py-1 px-3 bg-white rounded-2xl w-fit text-[#000] mb-1">
                Net Weight 100g
              </p>
              <p
                style={{ fontFamily: "gotham-book" }}
                className="text-sm sm:text-[15px] text-gray-600 line-clamp-3"
              >
                {description}
              </p>
            </div>
          ) : (
            <p className="text-[16px] text-[#9A7523]">
              Net Weight 100g
            </p>
          )}
        </div>

        {/* PRICE + BUTTON */}
        <div
          className={`flex  ${
            isList
              ? "flex-col   sm:flex-row sm:items-center sm:justify-between gap-4"
              : "items-center border-b pb-3 border-black justify-between"
          }`}
        >
          <div className={`flex gap items-start ${isList && "flex flex-col"}`}>
            {isList && (
              <span style={{ fontFamily: "gotham-book" }} className="text-lg text-left">Price</span>
            )}
            <span
              style={{ fontFamily: "gotham-light" }}
              className={`${
                isList
                  ? "text-xl sm:text-2xl lg:text-[26px]"
                  : "text-lg sm:text-[20px]"
              } text-[#9A7522] font-semibold`}
            >
              ₹{price}
            </span>
          </div>

          <button
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "gotham-book" }}
            className={`bg-[#9a7523] text-white ${
              isList
                ? "px-3 py-3 rounded-lg"
                : "h-fit w-fit rounded-full p-2"
            } tracking-wider text-sm transition hover:bg-[#316763]`}
          >
            {isList ? (
              "Add to Cart"
            ) : (
              <svg
                className="w-3 h-3 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              > 
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeaProductCard;
