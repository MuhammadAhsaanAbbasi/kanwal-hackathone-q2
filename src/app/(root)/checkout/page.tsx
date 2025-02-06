"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "../../../sanity/lib/client";
import { useCart } from "../../../context/cartContext";
import TopNav from "../../../components/nav";

export default function CheckoutPage() {
  const { user } = useUser();
  const { cartItems, clearCart } = useCart();

  const [customerDetails, setCustomerDetails] = useState({
    name: user?.fullName || "",
    email: user?.primaryEmailAddress?.emailAddress || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    try {
      // Sanity order creation
      const orderData = {
        _type: "order",
        orderId: `ORD-${Date.now()}`,
        customer: {
          _type: "customer",
          name: customerDetails.name,
          email: customerDetails.email,
          phone: customerDetails.phone,
        },
        shippingAddress: {
          name: customerDetails.name,
          address: customerDetails.address,
          city: customerDetails.city,
          postalCode: customerDetails.postalCode,
          country: "Pakistan",
        },
        items: cartItems.map((item) => ({
          productId: item.product._id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
        })),
        totalAmount: cartItems.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ),
        orderDate: new Date().toISOString(),
        status: "Pending",
        paymentStatus: "Unpaid",
      };

      await client.create(orderData);

      // API Call for Stripe Checkout
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();
      if (!data.url) throw new Error("Failed to create Stripe session");

      clearCart(); // Empty the cart after placing the order
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full mx-auto p-8 bg-gray-50 shadow-lg mb-4">
      <TopNav />
      <h2 className="text-3xl font-bold mb-6 text-[#2a254b] text-center mt-5">
        Checkout
      </h2>

      <h2 className="text-2xl font-bold mb-6 text-[#2a254b] text-center">
        Complete Your Purchase and Enjoy Your Order!
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8">
        You are just a few steps away from receiving your items! <br />
        Please provide your details below, and we will handle the rest. From
        secure payment to fast delivery, we have got you covered.
      </p>

      <div className="space-y-4 text-blue-950">
        <input
          type="text"
          name="name"
          value={customerDetails.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          value={customerDetails.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-3 text-blue-950 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="phone"
          value={customerDetails.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="address"
          value={customerDetails.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="city"
          value={customerDetails.city}
          onChange={handleChange}
          placeholder="City"
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="postalCode"
          value={customerDetails.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-indigo-900 text-white px-6 py-3 rounded-lg mt-6 w-full sm:w-[200px] mx-auto hover:bg-indigo-700 transition duration-300"
      >
        Place Order & Pay
      </button>
    </div>
  );
}
