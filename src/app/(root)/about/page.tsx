


"use client";

import Link from "next/link";
import { MdLocalShipping } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import TopNav from "../../../components/nav";
import Image from "next/image";

export default function AboutNav() {
  return (
    <div className="w-full bg-white flex flex-col mx-auto relative">
      {/* Top Banner */}
      <div className="w-full bg-[#2A254B] flex items-center justify-center px-6 py-2 h-[41px] relative">
        <div className="flex items-center space-x-2">
          <MdLocalShipping className="text-white" size={16} />
          <p className="text-white text-[14px] sm:text-[16px] font-[Satoshi] font-normal leading-[22px] text-center ">
            ✨ Free Delivery on Orders Over €500! ✨
          </p>
        </div>
       
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between sm:px-8 py-6 gap-4 md:gap-0">
        <TopNav />
        <div className="flex items-center flex-wrap justify-center space-x-6 md:space-x-8 text-[16px] sm:text-[20px] mt-4">
          <Link
            href="/about"
            className="text-[#726E8D] font-satoshi leading-[22px] text-center"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-[#726E8D] font-satoshi leading-[22px] text-center"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-[#726E8D] font-satoshi leading-[22px] text-center"
          >
            Blog
          </Link>
        </div>
      </div>

      {/* Custom Section */}
      <div className="w-full bg-[#2A254B] flex flex-col sm:flex-row items-center justify-between px-8 py-8 sm:h-[277px] mt-12">
        <div className="w-full sm:w-[704px] text-white font-clash text-[18px] sm:text-[22px] md:text- [26px] leading-[28px] sm:leading-[32px] md:leading-[38px] mt-8 sm:mt-0 sm:ml-20 text-center sm:text-left">
          A brand built on the love of craftsmanship, quality, and outstanding
          customer service.
        </div>
        <Link href="/products">
          <button className="w-[192px] h-[56px] bg-[#4E4D93] text-white font-satoshi text-[16px] rounded-md mt-8 sm:mt-0 sm:ml-8 mx-auto flex justify-center items-center">
            View More
          </button>
        </Link>
      </div>

      {/* Furniture Brand Section */}
      <div className="w-full bg-white flex flex-col items-center justify-center py-8 px-4 sm:px-8 md:px-16">
        <div className="w-full max-w-[1200px] bg-[#2A254B] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 sm:px-12 md:px-16 py-8 rounded-lg">
          {/* Text Section */}
          <div className="text-white text-center lg:text-left lg:w-1/2">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-light font-clash leading-tight mt-4">
              It started with a small idea
            </h2>
            <p className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[540px] mx-auto lg:mx-0">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
            <div className="mt-6">
              <Link href="/products">
                <button className="w-[192px] h-[56px] text-white font-satoshi text-[16px] rounded-md bg-[#4E4D93]">
                  View Collection
                </button>
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-[48%] mt-8 lg:mt-0">
            <Image
              src="/images/About main.png"
              alt="Furniture Design"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <section className="flex justify-center items-center min-h-screen bg-white">
        <div className="py-12 text-[#2A254B] w-full max-w-7xl px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[890px] h-auto">
              <Image
                src={"/images/About second.png"}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between text-center md:text-left font-clash">
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium">
                Our service isn’t just personal, it’s actually hyper personally
                exquisite
              </h1>
              <h1 className="py-6 text-lg sm:text-xl md:text-xl font-normal">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
              </h1>
              <h1 className="text-base sm:text-lg md:text-lg font-normal">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe, and design.
              </h1>
              <Link href="/contact">
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B] mt-8">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
