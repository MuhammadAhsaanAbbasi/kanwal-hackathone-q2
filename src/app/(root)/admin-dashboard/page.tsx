"use client"; 

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {client} from "../../../sanity/lib/client";

export default function AdminDashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [salesData, setSalesData] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  const userRole = user?.publicMetadata?.role || "customer";

  useEffect(() => {
    if (userRole !== "admin") {
      router.push("/customer-dashboard");
    }

    // Fetching data
    async function fetchData() {
      const salesDataQuery = await client.fetch(`
        *[_type == "order" && status == "delivered" && orderDate >= "${startDate}" && orderDate <= "${endDate}"] {
          totalAmount
        }
      `);
      setSalesData(salesDataQuery.reduce((acc, order) => acc + order.totalAmount, 0));

      // Fetching user count
      const newUsers = await client.fetch(`
        *[_type == "customer" && createdAt >= "${startDate}" && createdAt <= "${endDate}"] {
          _id
        }
      `);
      setUserCount(newUsers.length);

      // Fetching recent orders
      const recentOrdersQuery = await client.fetch(`
        *[_type == "order" && orderDate >= "${yesterdayDate}"] | order(orderDate desc) {
          orderId, customer->name, status, orderDate
        }
      `);
      setRecentOrders(recentOrdersQuery);

      // Fetching product and category data
      const productData = await client.fetch(`
        *[_type == "product"] {
          _id,
          name,
          slug,
          image,
          price,
          quantity,
          tags,
          description,
          features,
          dimensions {
            height,
            width,
            depth
          },
          category-> {
            name
          }
        }
      `);
      setProducts(productData);

      const categoryData = await client.fetch(`
        *[_type == "category"] {
          _id,
          name,
          slug
        }
      `);
      setCategories(categoryData);

      // Fetching all orders
      const orderData = await client.fetch(`
        *[_type == "order"] {
          _id,
          orderId,
          customer-> { name, email },
          items[] {
            product-> { name, price },
            quantity,
            price
          },
          totalAmount,
          status,
          orderDate,
          paymentStatus,
          shippingAddress {
            name,
            phone,
            address,
            city,
            postalCode,
            country
          }
        }
      `);
      setOrders(orderData);
    }

    fetchData();
  }, [userRole]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome, {user?.fullName} (Admin)</p>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">Daily Sales</h3>
            <p>${salesData}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">Daily User Count</h3>
            <p>{userCount}</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">Total Products</h3>
            <p>{products.length}</p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mt-4 space-y-3">
          <a href="/admin-dashboard/products" className="block bg-blue-500 text-white p-3 rounded-lg text-center">
            Manage Products
          </a>
          <a href="/admin-dashboard/categories" className="block bg-green-500 text-white p-3 rounded-lg text-center">
            Manage Categories
          </a>
          <a href="/admin-dashboard/orders" className="block bg-red-500 text-white p-3 rounded-lg text-center">
            View Orders
          </a>
        </div>

        {/* Recent Orders */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Recent Orders</h2>
          <ul>
            {recentOrders.map((order) => (
              <li key={order.orderId} className="flex justify-between mt-2">
                <span>{order.customer.name}</span>
                <span>{order.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
