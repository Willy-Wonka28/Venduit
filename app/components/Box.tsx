import React from 'react';
import Button from '@/app/components/Button'
import Link from 'next/link'

const Box = () => {
  return (
    <div className="py-10 px-4 md:px-0 flex flex-col items-center font-sans">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#805ad5] mb-10 font-serif">Why Venduit?</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-4/5 max-w-6xl">
        <div className="md:w-1/2">
          <div className="mb-6 flex items-start">
            <div className="w-8 h-8  rounded-full bg-gray-300 flex items-center justify-center mr-4 text-lg">
              1
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-medium mb-1">Early Access</h2>
              <p className="text-gray-700 text-sm md:text-base">
                Be among the first to try our revolutionary platform.
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-4 text-lg">
              2
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-medium mb-1">Exclusive Benefits</h2>
              <p className="text-gray-700 text-sm md:text-base">
                Unlock special perks and bonuses for the OG squad.
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-4 text-lg">
              3
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-medium mb-1">Secure Your Future</h2>
              <p className="text-gray-700 text-sm md:text-base">
                Start building wealth with a trusted, innovative platform.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[400px] bg-[#805ad5] mx-3 p-10 rounded-[30px] shadow-md flex flex-col justify-center items-center">
          <p className="text-lg md:text-xl text-white text-center mb-6">
            Saving in dollars hits different when you&apos;re winning with your squad.
          </p>
          <div className='flex justify-center items-center w-full'>
          <Link href="/waitlist-form"><Button buttonColor="black" text="Join waitlist" color="white" boxShadow="none"/></Link>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Box;