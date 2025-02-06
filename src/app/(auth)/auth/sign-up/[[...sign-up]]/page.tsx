



"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion"; // Import Framer Motion
import { useState, useEffect } from "react";

export default function SignUpPage() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDoorsOpen(true); // Open doors after a delay
    }, 500);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "-100%" : 0 }} // Slide left
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/2 bg-blue-950
 "
      />

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "100%" : 0 }} // Slide right
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 right-0 h-full w-1/2 bg-blue-950"
      />

      {/* Sign-Up Form (Appears after doors open) */}
      {doorsOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="shadow-2xl bg-white p-6 rounded-xl w-full max-w-md z-10"
        >
          <SignUp />
        </motion.div>
      )}
    </div>
  );
}
