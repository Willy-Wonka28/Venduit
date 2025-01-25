import React from 'react';
import Image from 'next/image';

interface CardProps {
  cardH1: string;
  cardH2: string;
  cardBio: string;
  imageAlt: string;
  imageSrc: string;
  bgColor: string
}

function Card({ cardH1, cardH2, cardBio, imageAlt, imageSrc, bgColor }: CardProps) {
  return (
    <div
    style={{ backgroundColor: bgColor }}
    className="flex flex-col w-full lg:flex-row p-6 lg:p-10 rounded-xl max-w-4xl mx-auto justify-center items-left mt-12 lg:mt-[100px] mb-16 lg:mb-[100px]">
      {/* Card Image */}
      <div className="w-full flex justify-center items-left lg:w-1/2 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          layout='responsive'
        />
      </div>

      {/* Card Content */}
      <div className="w-full pl-7 lg:w-1/2 text-left">
        <h1 className="text-purple-600 text-sm font-semibold uppercase mb-2">
          {cardH1}
        </h1>
        <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-4">
          {cardH2}
        </h2>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          {cardBio}
        </p>
      </div>
    </div>
  );
}

export default Card;
