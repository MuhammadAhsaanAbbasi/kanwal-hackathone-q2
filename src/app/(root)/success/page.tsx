
import Link from "next/link";
export default function SuccessPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 shadow-lg rounded-md text-center">
          <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
          <p className="mt-4 text-gray-700">Thank you for your purchase.</p>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  