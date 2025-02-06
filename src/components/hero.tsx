import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 lg:px-8">
      <div className="relative mt-8 mx-auto w-full max-w-[1180px] h-auto lg:my-[4rem] bg-[#2A254B] flex flex-col md:flex-row lg:gap-[2rem] gap-[2rem]">
        {/* Text Section */}
        <div className="z-10 flex-1 px-6 lg:px-[5rem] py-10 lg:py-[5rem]">
          <h2 className="text-white text-2xl sm:text-xl lg:text-[22px] leading-[32px] sm:leading-[28px] lg:leading-[44.8px] font-clash">
            The furniture brand for the future, with timeless designs
          </h2>
          <p className="mt-8 leading-[24px] sm:leading-[20px] text-white text-base sm:text-sm lg:text-lg font-satoshi">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          {/* Link to the Collection Page */}
          <Link href="/products">
            <button className="mt-10 py-[16px] px-[32px] bg-[#4E4D93] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-lightGray hover:text-darkBlue transition-all duration-300 ease-in-out">
              View collection
            </button>
          </Link>
          {/* Image Section for Small Screens */}
          <div className="mt-8 md:hidden flex justify-center">
            <Image
              src="/images/Right Image.png"
              alt="Chair"
              width={400}
              height={400}
              className="w-[80%] h-auto"
            />
          </div>
        </div>
        {/* Image Section for Medium and Larger Screens */}
        <div className="relative flex-1 md:flex hidden justify-center items-center">
          {/* <Image
            src="/images/Right Image.png"
            alt="Chair"
            width={520}
            height={584}
            className="w-[80%] lg:w-[520px] h-auto"
          /> */}


<Image
  src="/images/Right Image.png"
  alt="Chair"
  width={520}
  height={584}
  quality={75} // Optimize quality
  priority
  className="w-[80%] lg:w-[520px] h-auto"
/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
