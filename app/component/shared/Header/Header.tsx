"use client"
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const Header = () => {
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 30) setNavShadow(true);
      else setNavShadow(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed h-20 w-full transition-all duration-200 z-[100] ${
        navShadow ? "bg-dark-bg shadow-md transition-all ease-in-out duration-500" : ""
      }`}
    >
      <NavBar />
      <MobileNav />
    </header>
  );
};

export default Header;
