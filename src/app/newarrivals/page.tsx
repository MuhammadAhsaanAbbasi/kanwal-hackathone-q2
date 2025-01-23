// import React from "react";
// import { client } from "../../sanity/lib/client"; // Adjust your path as needed
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import imageUrlBuilder from "@sanity/image-url";
// import Link from "next/link"; // Import Link for navigation
// import TopNav from "@/app/components/nav";

// // Create an image builder
// const builder = imageUrlBuilder(client);
// function urlFor(source: any) {
//   return builder.image(source);
// }

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   slug: {
//     current: string; // Assuming slug is available in your data
//   };
// }

// export default async function NewArrivalsPage() {
//   // Fetch data for products tagged as "New Arrivals"
//   const query = `*[_type == "product" && "New Arrivals" in tags] {
//     _id,
//     name,
//     description,
//     price,
//     image,
//     slug
//   }`;

//   const products = await client.fetch(query);

//   if (!products || products.length === 0) {
//     notFound(); // Handle 404 for no products found
//   }

//   return (
//     <div>
//       <TopNav /> {/* Include the NavBar */}
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-6 text-[#2a254b] font-satoshi ml-10">
//           New Arrivals
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product: Product) => {
//             const imageUrl = product.image
//               ? urlFor(product.image).width(300).height(300).url()
//               : "/fallback-image.jpg";

//             return (
//               <div
//                 key={product._id}
//                 className="border p-4 rounded-lg shadow flex flex-col justify-between h-full"
//               >
//                 {/* Image Container with Fixed Dimensions */}
//                 <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
//                   <Image
//                     src={imageUrl || "/fallback-image.jpg"}
//                     alt={product.name}
//                     width={300} // You can adjust this to whatever size you want
//                     height={300} // You can adjust this to whatever size you want
//                     className="object-cover w-full h-full"
//                   />
//                 </div>

//                 {/* Product Info */}
//                 <div className="flex flex-col flex-grow mt-4">
//                   <h2 className="text-lg font-semibold text-[#2a254b] font-satoshi">
//                     {product.name}
//                   </h2>
//                   <p className="text-[#2a254b] font-satoshi mt-2 text-sm flex-grow">
//                     {product.description}
//                   </p>
//                   <p className="font-bold text-[#2a254b] font-satoshi mt-2">
//                     ${product.price}
//                   </p>
//                 </div>

//                 {/* More Info Button */}
//                 <div className="mt-4">
//                   <Link
//                     href={`/product/${product.slug.current}`} // Corrected path for product details
//                     className="block w-full px-4 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600"
//                   >
//                     More Info
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { client } from "../../sanity/lib/client"; // Adjust your path as needed
import Image from "next/image";
import { notFound } from "next/navigation";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url"; // Import SanityImageSource for type safety
import Link from "next/link"; // Import Link for navigation
import TopNav from "../components/nav";

// Create an image builder
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string; // Assuming slug is available in your data
  };
}

export default async function NewArrivalsPage() {
  // Fetch data for products tagged as "New Arrivals"
  const query = `*[_type == "product" && "New Arrivals" in tags] {
    _id,
    name,
    description,
    price,
    image,
    slug
  }`;

  const products = await client.fetch(query);

  if (!products || products.length === 0) {
    notFound(); // Handle 404 for no products found
  }

  return (
    <div>
      <TopNav /> {/* Include the NavBar */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#2a254b] font-satoshi ml-10">
          New Arrivals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => {
            const imageUrl = product.image
              ? urlFor(product.image).width(300).height(300).url()
              : "/fallback-image.jpg";

            return (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow flex flex-col justify-between h-full"
              >
                {/* Image Container with Fixed Dimensions */}
                <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={imageUrl || "/fallback-image.jpg"}
                    alt={product.name}
                    width={300} // You can adjust this to whatever size you want
                    height={300} // You can adjust this to whatever size you want
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow mt-4">
                  <h2 className="text-lg font-semibold text-[#2a254b] font-satoshi">
                    {product.name}
                  </h2>
                  <p className="text-[#2a254b] font-satoshi mt-2 text-sm flex-grow">
                    {product.description}
                  </p>
                  <p className="font-bold text-[#2a254b] font-satoshi mt-2">
                    ${product.price}
                  </p>
                </div>

                {/* More Info Button */}
                <div className="mt-4">
                  <Link
                    href={`/product/${product.slug.current}`} // Corrected path for product details
                    className="block w-full px-4 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


