




import Image from 'next/image'
import React from 'react'

const Ceramics = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-8 text-[#2A254B] mt-4 bg-white">
          {/* Title */} 
          <h1 className="text-3xl font-semibold mb-12 font-clash">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {/* Product 1 */}
            <div className="w-full h-auto mb-9">
              <Image
                src={'/images/Parent (3).png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[85%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 mt-4 font-clash">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto mb-9">
              <Image
                src={'/images/Parent.png'}
                height={700}
                width={700}
                alt="vase"
                 className="w-full h-[85%] object-cover"
              />
              <div className="mt-4 text-[#2A254B] font-clash">
                <p className="py-2 ">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Parent (1).png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash ">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/fan.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 mt-4 font-clash">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-8 flex justify-center items-center">
            <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] font-clash">
              View collection
            </button>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Ceramics;