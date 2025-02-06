

"use client";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import { useState, useEffect } from "react";

export default function SignInPage() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDoorsOpen(true); // Open doors after delay
    }, 500);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Left Door with Gradient */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "-100%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/2 bg-blue-950"
      />

      {/* Right Door with Gradient (Mirrored) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "100%" : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 right-0 h-full w-1/2 bg-blue-950"
      />

      {/* Sign-In Form Appears After Doors Open */}
      {doorsOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="shadow-2xl bg-white p-6 rounded-lg w-full max-w-md z-10"
        >
          <SignIn />
          <Link
            href="/auth/reset-password"
            className="mt-10 text-blue-600 text-center block"
          >
            Forgot Password?
          </Link>
        </motion.div>
      )}
    </div>
  );
}
