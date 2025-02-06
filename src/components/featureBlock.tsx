

import React from 'react';
import { FaTruck, FaRegCheckCircle, FaLaptop, FaSeedling } from 'react-icons/fa';

const features = [
  {
    icon: <FaTruck className="text-xl md:text-2xl lg:text-3xl text-gray-700" />,
    title: "Fast delivery",
    description: "We ensure your products arrive quickly and safely .",
  },
  {
    icon: <FaRegCheckCircle className="text-xl md:text-2xl lg:text-3xl text-gray-700" />,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship.",
  },
  {
    icon: <FaLaptop className="text-3xl md:text-4xl lg:text-5xl text-gray-700" />,
    title: "Unbreakable prices",
    description: "For our material and quality you won’t find better prices anywhere.",
  },
  {
    icon: <FaSeedling className="text-3xl md:text-4xl lg:text-5xl text-gray-700" />,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] bg-white py-10 px-6 mx-auto">
      <h3 className="text-center font-clash text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold text-[#2A254B] mb-10">
        What makes our brand different
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 sm:items-start text-center sm:text-left"
          >
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] flex items-center justify-center">
              {feature.icon}
            </div>
            <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-Clash  font-medium text-[#2A254B]">
              {feature.title}
            </h4>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] font-Satoshi text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;