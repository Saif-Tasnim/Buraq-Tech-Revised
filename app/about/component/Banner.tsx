import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="/img/carousel-1.jpg"
        alt="about_image"
        width={800}
        height={800}
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="max-w-lg mx-auto absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <Image
          src="/img/about_img.png"
          alt="about_image"
          width={900}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
