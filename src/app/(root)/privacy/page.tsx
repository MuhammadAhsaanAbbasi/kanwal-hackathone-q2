import React from "react";
import TopNav from "../../../components/nav"; // Import TopNav if available

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen">
      <TopNav />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          {/* Page Title */}
          <h1 className="text-4xl font-bold font-clash text-[#2a254b] mb-6 text-center">
            Privacy Policy
          </h1>
          
          {/* Intro Section */}
          <p className="text-lg md:text-xl font-satoshi text-[#2a254b] text-center mb-8">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
          </p>

          {/* Section 1: Information We Collect */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold font-clash text-[#2a254b] mb-4">
              Information We Collect
            </h2>
            <p className="text-[#2a254b] font-satoshi text-base md:text-lg">
              We collect personal information such as your name, email address, shipping address, and phone number to process your orders.
            </p>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold font-clash text-[#2a254b] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[#2a254b] font-satoshi text-base md:text-lg">
              We use your personal information to fulfill your orders, provide customer support, and send you marketing communications (if subscribed).
            </p>
          </div>

          {/* Section 3: Security of Your Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold font-clash text-[#2a254b] mb-4">
              Security of Your Information
            </h2>
            <p className="text-[#2a254b] font-satoshi text-base md:text-lg">
              We implement strict security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          {/* Section 4: Changes to This Privacy Policy */}
          <div>
            <h2 className="text-2xl font-semibold font-clash text-[#2a254b] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-[#2a254b] font-satoshi text-base md:text-lg">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
