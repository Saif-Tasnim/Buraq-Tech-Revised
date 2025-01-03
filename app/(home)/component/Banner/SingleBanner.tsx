import Image from "next/image";
import React, { FC } from "react";

interface ISingleBannerProps {
  title: string;
  description: string;
  image: string;
}

const SingleBanner: FC<ISingleBannerProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="relative">
      {/* Image with a dark overlay */}
      <Image
        src={image}
        alt="banner_image"
        width={800}
        height={800}
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text content */}
      <div className="max-w-lg mx-auto absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl lg:text-6xl font-semibold leading-relaxed">
          {title}
        </h1>
        <p className="mt-2 text-sm sm:text-base lg:text-lg py-4">
          {description}
        </p>
      </div>

      <div className="absolute left-3 lg:left-1/3 bottom-16">
        <div className="flex items-center gap-4 lg:gap-9">
          <button className="transition-all duration-500 p-4 bg-light-secondary rounded-md hover:bg-light-primary hover:text-gray-100">Connect With Us</button>
          <button className="transition-all duration-500 p-4 bg-dark-primary text-gray-100 rounded-md hover:bg-light-secondary hover:text-gray-900"> Learn More </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
