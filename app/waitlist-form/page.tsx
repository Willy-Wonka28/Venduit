import React from 'react';
import Button from '@/app/components/Button';

function page() {
  return (
    <>
    <div className="bg-white p-3 lg:p-8 rounded-lg border border-gray-400 shadow-xl w-[75%] lg:w-full max-w-md mx-auto my-16 md:my-24">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Be the <span className="text-purple-600">first</span> to know
      </h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            autoComplete='name'
            id="firstName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            autoComplete='name'
            id="lastName"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            autoComplete='email'
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
        <div className="flex items-center justify-center">
        <Button buttonColor="white" text="Join now" color="black" boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'/> 
        </div>
      </form>
    </div>
    </>
  );
}

export default page;