import Image from "next/image";
import React from "react";
import { Icon } from "../../core";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-28 pt-12 w-11/12 mx-auto pb-8 border-b">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* company address */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/img/logo.jpg"
              alt="logo_buraq_tech"
              width={600}
              height={600}
              className="w-12 h-12 object-contain rounded-full"
            />
            <h1 className="uppercase font-bold text-2xl"> Buraq Tech</h1>
          </div>

          <p className="flex items-center gap-2 font-medium text-lg mt-4">
            <Icon.BiMap className="w-8 h-8 text-dark-secondary dark:text-light-primary" />{" "}
            Banani, Dhaka, Bangladesh{" "}
          </p>
          <p className="flex items-center gap-2 font-medium text-lg">
            <Icon.MdEmail className="w-8 h-8 text-dark-secondary dark:text-light-primary" />{" "}
            buraq_it_solution@gmail.com
          </p>
          <p className="flex items-center gap-2 font-medium text-lg">
            <Icon.FaPhone className="w-8 h-8 text-red-600" /> 999999999999
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h1 className="text-lg font-medium mb-5"> Our Services </h1>
          <div className="flex flex-col gap-4">
            <Link
              href="/services/web-develop"
              className="pb-2 border-b border-light-primary"
            >
              Web Development{" "}
            </Link>
            <Link
              href="/services/ui-design"
              className="pb-2 border-b border-light-primary"
            >
              UIX Design{" "}
            </Link>
            <Link
              href="/services/graphic-design"
              className="pb-2 border-b border-light-primary"
            >
              Graphic Design{" "}
            </Link>
            <Link
              href="/services/cyber-security"
              className="pb-2 border-b border-light-primary"
            >
              Cyber Security{" "}
            </Link>
            <Link
              href="/services/digital-marketing"
              className="pb-2 border-b border-light-primary"
            >
              Digital Marketing{" "}
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h1 className="text-lg font-medium mb-5"> Important Links </h1>
          <div className="flex flex-col gap-4">
            <Link
              href="/services"
              className="pb-2 border-b border-light-primary"
            >
              Our Services
            </Link>
            <Link
              href="/portfolio"
              className="pb-2 border-b border-light-primary"
            >
              Our Portfolio
            </Link>
            <Link href="Blogs" className="pb-2 border-b border-light-primary">
              Blogs
            </Link>
            <Link href="/about" className="pb-2 border-b border-light-primary">
              About Buraq Tech
            </Link>
            <Link href="/" className="pb-2 border-b border-light-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* copyright */}
        <div className="flex justify-center items-center pt-5">
          <p className="text-sm">
            &copy; all rights reserved to Buraq Tech Solution
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
