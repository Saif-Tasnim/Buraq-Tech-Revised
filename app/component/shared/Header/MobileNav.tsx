"use client"
import { NAVBAR } from "@/app/static/nav";
import { useMenuStore } from "@/app/store/useMenuStore";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  const { open } = useMenuStore();
  const sideBar = open ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`${sideBar} w-4/5 h-full fixed flex flex-col justify-center space-y-6 z-[1050]  transform transition-all duration-500 bg-light-primary text-light-secondary dark:bg-dark-secondary dark:text-dark-text`}
    >
      {NAVBAR.map((nav) => (
        <Link
          href={nav.href}
          key={nav.id}
          className="w-fit text-xl font-medium ml-5 pb-2 border-b-2 border-light-secondary"
        >
          {nav.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
