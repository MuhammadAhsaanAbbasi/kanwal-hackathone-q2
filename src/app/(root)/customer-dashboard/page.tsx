// pages/customer-dashboard/page.tsx
"use client";

import { useUser } from "@clerk/nextjs";  // Import the Clerk hook
import { useEffect, useState } from "react"; // Import hooks for client-side rendering

export default function CustomerDashboard() {
  const { user } = useUser(); // Get user data from Clerk
  const [isClient, setIsClient] = useState(false); // State to check if the component is being rendered on the client

  useEffect(() => {
    setIsClient(true); // Ensure component renders on the client side
  }, []);

  // Ensure the component is rendered only on the client side
  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  const userRole = user?.publicMetadata?.role || "customer";

  if (userRole !== "customer") {
    return <p className="text-red-500 text-center mt-10">Access Denied: You are not a customer.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Customer Dashboard</h1>
        <p className="text-gray-700 mb-4">Welcome, {user?.fullName}!</p>

        {/* Account Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Account Details</h2>
          <p><strong>Email:</strong> {user?.emailAddresses?.[0]?.emailAddress}</p>
        </div>

        {/* Recent Orders */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
          <ul className="list-disc list-inside">
            <li>Order #1234 - Status: Delivered</li>
            <li>Order #1235 - Status: Pending</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="mt-6">
          <a href="/customer-dashboard/orders" className="text-blue-500 hover:underline">View All Orders</a> | 
          <a href="/customer-dashboard/account" className="text-blue-500 hover:underline ml-2">Account Settings</a>
        </div>
      </div>
    </div>
  );
}
