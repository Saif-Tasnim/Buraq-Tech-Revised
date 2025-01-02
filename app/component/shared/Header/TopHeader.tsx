import React from "react";
import { Icon } from "../../core";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const TopHeader = () => {
  return (
    <div className="hidden w-full h-16 lg:flex justify-between bg-gray-800 text-gray-100 py-4 px-2 z-10">
      <div className="flex px-8 gap-6 items-center z-20 whitespace-nowrap">
        <h1 className="flex items-center gap-1">
          <Icon.BiMap className="w-7 h-7" />
          <span>Banani, Dhaka</span>
        </h1>
        <h1 className="flex items-center gap-1">
          <Icon.MdEmail className="w-7 h-7" />{" "}
          <span>buraq_it_solution@gmail.com</span>
        </h1>
      </div>

      <div className="overflow-hidden w-1/2">
        {" "}
        <Marquee loop={0} speed={100} pauseOnHover>
          We are here at 24/7 at your service. Contact with us{" "}
        </Marquee>
      </div>

      <div className="flex items-center gap-4 z-20 px-8">
        <Link href="https://www.google.com" target="_blank" title="Facebook">
          {" "}
          <Icon.FaFacebook className="w-7 h-7 text-light-primary" />{" "}
        </Link>
        <Link href="https://www.google.com" target="_blank" title="Twitter">
          {" "}
          <Icon.FaTwitter className="w-7 h-7 text-light-primary" />{" "}
        </Link>
        <Link href="https://www.google.com" target="_blank" title="LinkedIn">
          {" "}
          <Icon.FaLinkedin className="w-7 h-7 text-light-primary" />{" "}
        </Link>
        <Link href="https://www.google.com" target="_blank" title="Instagram">
          {" "}
          <Icon.FaInstagram className="w-7 h-7 text-light-primary" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
