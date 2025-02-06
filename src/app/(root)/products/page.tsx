



// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import TopNav from "../components/nav";
// import { client } from "../../sanity/lib/client";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// const ProductsComponent: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(1);

//   const fetchProducts = useCallback(async () => {
//     setLoading(true);

//     // Base query to fetch all products
//     let query = `*[_type == "product"] | order(name asc) {
//       _id,
//       name,
//       price,
//       image {
//         asset -> {
//           url
//         }
//       }
//     }`;

//     // Apply pagination (skip and limit)
//     const itemsPerPage = 12; // Example number of items per page
//     const skip = (currentPage - 1) * itemsPerPage;
//     query += ` [${skip}..${skip + itemsPerPage - 1}]`;

//     try {
//       const result = await client.fetch(query);
//       const totalItemsQuery = `count(*[_type == "product"])`;
//       const totalItems = await client.fetch(totalItemsQuery);

//       setTotalPages(Math.ceil(totalItems / itemsPerPage)); 
//       if (Array.isArray(result)) {
//         setProducts(result);
//       } else {
//         setProducts([]);   
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [currentPage]);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center w-full bg-[#f9f9f9] min-h-screen ">
//       <TopNav />

//       <div className="relative w-full h-[200px] mt-10 ">
//   <Image
//     src="/images/productBg.png"
//     alt="Product Background"
//     fill
//     style={{ objectFit: "contain" }}  // Use 'contain' to ensure the image is fully visible
//     className="w-full max-w-[1400px] h-[900px] rounded-b-lg shadow-md sm:h-[auto] sm:max-h-[700px]"
//   />
// </div>


//       <h1 className="sm:text-xl lg:text-4xl font-extrabold text-center text-[#2a254b] my-8 px-4">
//         Explore an Exclusive Selection of Timeless and Elegant Products
//       </h1>

//       {/* Product Grid */}
    

//         <div className="w-full flex justify-center mt-10 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
//           {loading ? (
//             <div className="col-span-4 text-center text-[#2a254b]">Loading...</div>
//           ) : (
//             products.length === 0 ? (
//               <div className="col-span-4 text-center text-[#2a254b]">No products found</div>
//             ) : (
//               products.map((product) => (
//                 <Link key={product._id} href={`/productSanity/${product._id}`} passHref>
//                   <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer w-full h-full flex flex-col items-center">
//                   <Image
//                       src={product.image.asset.url}
//                       alt={product.name}
//                       width={320}
//                       height={320}
//                       className="rounded-md object-cover w-80 h-80"
//                       loading="lazy"
//                     />
//                     <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
//                     <p className="text-[#2A254B] text-sm">€ {product.price}</p>
//                   </div>
//                 </Link>
//               ))
//             )
//           )}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 px-4 md:px-0">
//         <button
//           onClick={() => goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
//         >
//           Previous
//         </button>
//         <span className="mx-3 sm:mx-4 text-[#2a254b] font-semibold text-xs sm:text-sm">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductsComponent;


"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNav from "../../../components/nav";
import { client } from "../../../sanity/lib/client";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

const ProductsComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    // Base query to fetch all products
    let query = `*[_type == "product"] | order(name asc) {
      _id,
      name,
      price,
      image {
        asset -> {
          url
        }
      }
    }`;

    // Apply pagination (skip and limit)
    const itemsPerPage = 12; // Example number of items per page
    const skip = (currentPage - 1) * itemsPerPage;
    query += ` [${skip}..${skip + itemsPerPage - 1}]`;

    try {
      const result = await client.fetch(query);
      const totalItemsQuery = `count(*[_type == "product"])`;
      const totalItems = await client.fetch(totalItemsQuery);

      setTotalPages(Math.ceil(totalItems / itemsPerPage)); 
      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        setProducts([]);   
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full bg-[#f9f9f9] min-h-screen">
      <TopNav />

      <div className="relative w-full mt-10 overflow-hidden">
        <div className="slide-down">
          <Image
            src="/images/productBg.png"
            alt="Product Background"
            fill
            priority
            style={{ objectFit: "contain" }} 
            className="w-full max-w-[1400px] h-[900px] rounded-b-lg shadow-md sm:h-[auto] sm:max-h-[700px]"
          />
        </div>
      </div>

      <h1 className="sm:text-xl lg:text-4xl font-extrabold text-center text-[#2a254b] my-8 px-4 slide-down">
        Explore an Exclusive Selection of Timeless and Elegant Products
      </h1>

      {/* Product Grid */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
          {loading ? (
            <div className="col-span-4 text-center text-[#2a254b]">Loading...</div>
          ) : (
            products.length === 0 ? (
              <div className="col-span-4 text-center text-[#2a254b]">No products found</div>
            ) : (
              products.map((product) => (
                <Link key={product._id} href={`/productSanity/${product._id}`} passHref>
                  <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer w-full h-full flex flex-col items-center slide-down">
                    <Image
                      src={product.image.asset.url}
                      alt={product.name}
                      width={320}
                      height={320}
                      className="rounded-md object-cover w-80 h-80"
                      loading="lazy"
                    />
                    <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
                    <p className="text-[#2A254B] text-sm">€ {product.price}</p>
                  </div>
                </Link>
              ))
            )
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 px-4 md:px-0">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
        >
          Previous
        </button>
        <span className="mx-3 sm:mx-4 text-[#2a254b] font-semibold text-xs sm:text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
        >
          Next
        </button>
      </div>
      
      <style jsx>{`
        .slide-down {
          animation: slideDown 1s ease-out forwards;
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductsComponent;
