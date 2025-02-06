




'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';



const Product = () => {
  // Initialize the router
  const router = useRouter();

  // Handle navigation on button click
  const handleNavigation = () => {
    // Replace with the URL you want to navigate to
    router.push('/products');  // For example, navigate to a "/products" page
  };

  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-white">
        <div className='px-8 py-12 text-[#2A254B] mt-12 w-full max-w-7xl'>
          <h1 className='text-3xl text-center font-clash'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8 justify-center'>

            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto'>
              <Image
                src={'/images/Large.png'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto'>
              <Image
                src={'/images/Parent (3).png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto'>
              <Image
                src={'/images/Parent (4).png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
            <button
              className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] font-satoshi'
              onClick={handleNavigation}
            >
              View products
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;