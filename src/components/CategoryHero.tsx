import React from 'react';
import texture from '../assets/images/AboutFrame.png';
import tokri from "../assets/images/tokri.png"
import TeaLeaf from "../assets/images/TealLeaf.png"
import Breadcrumb from './Breadcrumb';


interface CategoryHeroProps {
  title: string;
}

const breadcrumbItems = [
    { label: "ProductDetails", path: `ProductDetails/` },
      { label: "Cart", path: `Cart/` },
  { label: "wishlist", path: `wishlist/` },
  { label: "" },
];

const CategoryHero: React.FC<CategoryHeroProps> = ({ title }) => {
  return (
    <div
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative py-12  h-64"
      >
        <img src={tokri} className="absolute left-0 top-0 h-full object-cover opacity-50" />
        <img src={TeaLeaf} className="absolute right-0 bottom-0 h-72 object-cover opacity-50" />

        <div className="relative flex justify-center items-center flex-col container mx-auto px-4 text-center">
          <h1 style={{fontFamily:"gotham"}} className="text-3xl font-bold mb-2">My Wishlist</h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
  );
};

export default CategoryHero;

