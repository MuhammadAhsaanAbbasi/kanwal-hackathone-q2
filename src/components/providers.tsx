// "use client"; 
// import { ClerkProvider } from "@clerk/nextjs";
// import { CartProvider } from "../../context/cartContext";
// import { WishlistProvider } from "@/context/wishListContext";
// import { useState, useEffect } from "react";

// export default function Providers({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
//       <CartProvider>
//         <WishlistProvider>
//           {children}
//         </WishlistProvider>
//       </CartProvider>
//     </ClerkProvider>
//   );
// }


"use client"; 
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "../context/cartContext";
import { WishlistProvider } from "@/context/wishListContext";
import { useState, useEffect } from "react";
import LoadingAnimation from "./loadingAnimation"; // Assuming your loading animation component is in this path

export default function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Set the loading state to false after 3 seconds
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return <LoadingAnimation />; // Render your loading animation while loading is true
  }

  return (
    <ClerkProvider>
      <CartProvider>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </CartProvider>
    </ClerkProvider>
  );
}
