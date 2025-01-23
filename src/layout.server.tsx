// // // layout.server.tsx (Server-side component)
// // import { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "FURNIO",
// //   description: "Generated by create next app",
// // };

// // export default function LayoutServer({ children }: { children: React.ReactNode }) {
// //   return <>{children}</>;
// // }



// // layout.server.tsx
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "FURNIO",
//   description: "Generated by create next app",
// };

// export default function LayoutServer({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="layout-container">
//       {/* Optionally add Header or other global elements here */}
//       {children}
//       {/* Optionally add Footer or other global elements here */}
//     </div>
//   );
// }



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FURNIO", // Title here will be set globally
  description: "Furniture and Home Decor Store - FURNIO", // Optional description for SEO
};

export default function LayoutServer({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      {/* Optional: You can add a header here to show FURNIO */}
      <header>
        <h1 className="text-center text-xl font-bold text-[#2A254B]">
          FURNIO - Your Trusted Furniture Brand
        </h1>
      </header>

      {/* Render children dynamically */}
      {children}

      {/* Optional: Add a Footer here */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 FURNIO. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
