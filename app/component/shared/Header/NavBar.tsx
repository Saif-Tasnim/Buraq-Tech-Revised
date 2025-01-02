"use client";
import { NAVBAR } from "@/app/static/nav";
import { useMenuStore } from "@/app/store/useMenuStore";
import ThemeSwitcher from "@/app/switcher/theme-switcher";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { open, setToggle } = useMenuStore();

  return (
    <div className="fixed h-20 w-full transition-all duration-200">
      <div className="flex h-full justify-between items-center w-11/12 lg:w-4/5 mx-auto text-gray-100">
        {/* logo + title */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/logo.jpg"
            alt="logo_buraq_tech"
            width={600}
            height={600}
            className="w-12 h-12 object-contain rounded-full"
          />
          <h1 className="uppercase font-bold text-2xl hidden lg:block">
            {" "}
            Buraq Tech
          </h1>
        </div>

        {/* nav link */}
        <div className="hidden lg:flex items-center gap-6">
          {NAVBAR.map((nav) => (
            <Link
              href={nav.href}
              key={nav.id}
              className={`pb-2 border-b-[1.5px] border-transparent hover:border-dark-secondary`}
            >
              {nav.label}{" "}
            </Link>
          ))}
        </div>

        {/* theme switcher + button */}
        <div className="flex items-center gap-1 lg:gap-5">
          <ThemeSwitcher />
          
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center p-3 lg:px-5 lg:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Contact With Us</span>
          </Link>
        </div>

        <div className="lg:hidden">
          {" "}
          <Hamburger toggled={open} toggle={() => setToggle(open)} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
