import { IProduct } from "@src/interfaces/Product.interface";

interface Props {
  readonly productData: IProduct[];
}

import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  asin: string;
  title: string;
  price: string;
  imgUrl: string;
  stars: string;
  reviews: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  asin = "",
  title = "Product Name",
  price = "0",
  imgUrl = "/placeholder.svg?height=200&width=200",
  stars = "0",
  reviews = "0",
}) => {
  const truncateName = (str: string, num: number) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative pb-[75%] sm:pb-[100%]">
        <img
          src={imgUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3
          className="text-base sm:text-lg font-semibold text-gray-800 mb-2"
          title={title}
        >
          {truncateName(title, 10)}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <span className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-0">
            ${parseInt(price).toFixed(2)}
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={asin}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(parseFloat(stars)) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-xs sm:text-sm text-gray-600 ml-1">
              ({reviews})
            </span>
          </div>
        </div>
        <button className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base">
          <FaShoppingCart className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function ProductDisplay({ productData }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {productData.map((product) => (
          <ProductCard key={product.asin} {...product} />
        ))}
      </div>
    </div>
  );
}
