



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import { useWishlist } from "../context/wishListContext";
import { useUser, SignOutButton } from "@clerk/nextjs";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  const isAdmin = user?.publicMetadata?.role === "admin";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Cart", href: "/cart" },
    { label: "Products", href: "/products" },
    { label: "Plant Pots", href: "/category/plant-pots" },
    { label: "Ceramics", href: "/category/ceramics" },
    { label: "Tables", href: "/category/tables" },
    { label: "Chairs", href: "/category/chairs" },
    { label: "Crockery", href: "/category/crockery" },
    { label: "Tableware", href: "/category/tableware" },
    { label: "Cutlery", href: "/category/cutlery" },
  ];

  if (isSignedIn) {
    navLinks.unshift({
      label: isAdmin ? "Admin Dashboard" : "Customer Dashboard",
      href: isAdmin ? "/admin-dashboard" : "/customer-dashboard",
    });
  }

  return (
    <div className="w-full bg-white flex flex-col mx-auto relative mt-4 ">
      {/* Top Section */}
      <div className="flex justify-end px-4 py-2 animate-shutter-down">
        {isSignedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-blue-800">Welcome, {user.firstName}</span>
            <SignOutButton>
              <button className="text-black">Sign Out</button>
            </SignOutButton>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link href="/auth/sign-in" className="text-black">Sign In</Link>
            <Link href="/auth/sign-up" className="text-black">Sign Up</Link>
          </div>
        )}
      </div>

      {/* Navbar */}
      <div className=" animate-shutter-down w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 border-b-2 border-gray-200">
        {/* Hamburger Menu - Visible on sm and md (below 768px) */}
        <button className="block md:hidden text-black" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="animate-shutter-down text-[#22202E] font-clash text-[20px] md:text-[24px] leading-[30px] text-center">
          FURNIO
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/wishlist">
            <div className="relative">
              <FaHeart className="text-black" size={16} />
              {wishlistItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                  {wishlistItemCount}
                </span>
              )}
            </div>
          </Link>

          <Link href="/cart">
            <div className="relative">
              <FaShoppingCart className="text-black" size={14} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop Navigation (Hidden on md & below) */}
      <div className="hidden md:flex w-full justify-center mt-4 text-[18px] hover:text-blue-950 font-clash">
        <div className="flex gap-4 animate-shutter-down">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-gray-700 hover:text-black transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Visible on sm & md) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-black">Menu</span>
          <button onClick={closeMenu}>
            <FaTimes size={22} className="text-black" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-800 text-lg hover:text-white hover:bg-gray-900 py-2 px-3 rounded transition"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>}
    </div>
  );
}
