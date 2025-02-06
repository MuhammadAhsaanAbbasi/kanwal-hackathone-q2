


"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useCart } from "../../../context/cartContext";
import Image from "next/image";
import TopNav from "../../../components/nav";
import { useRouter } from "next/navigation";

const CartPage: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    // If the user is not signed in, redirect to the sign-in page
    if (!isSignedIn) {
      router.push("/auth/sign-in");
    }
  }, [isSignedIn, router]);

  // Remove an item from the cart
  const handleRemove = (productId: string) => {
    removeFromCart(productId);
  };

  // Update quantity of an item
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 500 ? 0 : 40; // Adjust shipping calculation as needed
  const total = subtotal + shipping;

  // Handle Checkout
  const handleCheckout = async () => {
    try {
      if (cartItems.length > 0) {
        // Proceed to checkout page
        await router.push("/checkout");
      } else {
        alert("Your cart is empty. Please add items to proceed.");
      }
    } catch (error) {
      console.error("Error during checkout redirect:", error);
      alert("Something went wrong while redirecting to checkout. Please try again.");
    }
  };

  return (
    <div className="cart-page min-h-screen bg-gray-50 ml-4">
      <TopNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="lg:text-3xl sm:text-xl font-bold font-clash text-[#2A254B] text-center mb-14">
          Your Cart
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-start mt-10 shadow-md">
          {/* Cart Items */}
          <div className="bg-white p-6 shadow-md rounded-lg w-full mx-auto">
            {cartItems.length === 0 ? (
              <p className="text-center font-satoshi shadow-md">
                Your cart is empty
              </p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.product._id}
                    className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b pb-4 w-full"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <Image
                        src={item.product.image.asset.url}
                        alt={item.product.name}
                        width={100}
                        height={100}
                        className="rounded-lg w-24 h-24 sm:w-28 sm:h-28 object-cover"
                      />
                      <div>
                        <p className="text-lg font-semibold text-[#2A254B]">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          € {item.product.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 sm:mt-0">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.product._id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="font-medium text-[#2A254B]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.product._id, item.quantity + 1)
                        }
                        className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemove(item.product._id)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                        ❌
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 shadow-md rounded-lg w-full mx-auto max-w-sm">
            <h2 className="text-xl font-semibold text-[#2A254B] mb-4 text-center font-clash">
              Order Summary
            </h2>
            <div className="flex justify-between text-[#2A254B] mb-2 font-satoshi">
              <span>Subtotal:</span>
              <span>€ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#2A254B] mb-2">
              <span>Shipping:</span>
              <span>
                {shipping === 0 ? "Free" : `€ ${shipping.toFixed(2)}`}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-semibold text-[#2A254B] font-satoshi">
              <span>Total:</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className={`w-full py-2 mt-6 rounded ${
                cartItems.length > 0
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
