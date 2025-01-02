import React from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed h-20 w-full transition-all duration-200 z-[100]">
      <NavBar />
      <MobileNav />
    </header>
  );
};

export default Header;
