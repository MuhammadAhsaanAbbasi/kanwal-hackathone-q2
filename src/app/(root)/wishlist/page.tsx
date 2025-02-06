




"use client";

import React from "react";
import { useWishlist } from "../../../context/wishListContext"; // Update the path to your context file
import Link from "next/link";
import Image from "next/image";
import TopNav from "../../../components/nav";
import { ChevronLeftIcon } from "@heroicons/react/24/solid"; // Import Heroicons left arrow

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-2xl font-bold text-[#2a254b] mb-4">Your Wishlist is Empty</h1>
        <Link href="/products">
          <button className="px-6 py-3 bg-[#2A254B] text-white font-semibold rounded-md shadow-md hover:bg-blue-600">
            ✨ Browse Products✨
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 product-detail mx-auto p-6 mb-14 w-full bg-gradient-to-r from-[#F3F4F6] to-[#FFFFFF]">
      <TopNav />

      <div className="bg-[#2A254B] text-white text-center py-3 font-clash text-lg md:text-xl animate-moveSlow sm:text-[16px] mt-6">
        ✨ My wishlist! ✨
      </div>

      <div className="flex items-center mb-6">
        <Link href="/products">
          <button className="flex items-center text-[#2A254B] hover:text-blue-500">
            <ChevronLeftIcon className="w-6 h-6 mr-2 " />
            <span className="text-[#A254B] font-satoshi">Go Back to Products</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-md p-4 flex flex-col items-center mt-16"
          >
            <div className="w-[300px] h-[450px] overflow-hidden relative mb-4">
              {/* Check if item.image is a string or an object */}
              <Image
                src={typeof item.image === "string" ? item.image : item.image?.asset?.url || "/fallback-image.jpg"}
                alt={item.name}
                layout="fill" // Makes sure the image fills the container
                objectFit="cover" // Ensures the image maintains its aspect ratio
              />
            </div>

            <h2 className="text-lg font-semibold text-[#2a254b] mb-2">{item.name}</h2>
            <p className="text-[#2a254b] mb-4">${item.price.toFixed(2)}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => removeFromWishlist(item._id)}
                className="px-4 py-2 bg-[#2A254B] text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
              <Link href={`/productSanity/${item._id}`}>
                <button className="px-4 py-2 bg-[#2A254B] text-white rounded-md hover:bg-blue-600">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
