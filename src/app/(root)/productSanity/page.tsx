

"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const ProductSanityPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const params = useParams(); // Get dynamic route params
  const id = params?.id; // Access the `id` from the route

  // Normalize the id to ensure it's a string
  const productId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const query = `*[_type == "product"] {
        _id,
        name,
        price,
        image { asset -> { url } }
      }`;

      try {
        const productsResult = await client.fetch(query);
        setProducts(productsResult);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Mock function for isProductInWishlist
  const isProductInWishlist = (id: string) => {
    // Replace with your actual wishlist logic
    return products.some((product) => product._id === id);
  };

  // Check if the current product is in the wishlist
  const isInWishlist = productId ? isProductInWishlist(productId) : false;

  if (loading) return <div className="text-center py-10">Loading products...</div>;

  return (
    <div className="product-listing">
      <h1 className="text-3xl font-bold text-[#2A254B] text-center mt-8 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-200 p-4 rounded-lg shadow-md flex flex-col"
          >
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image?.asset?.url || "/fallback-image.jpg"}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-[#2A254B]">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <p className="text-sm mt-2">
              {isInWishlist && product._id === productId ? "In Wishlist" : "Not in Wishlist"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSanityPage;




