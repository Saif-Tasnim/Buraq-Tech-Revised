"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Icon } from "../component/core";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mount, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mount) {
    return null;
  }
  return (
    <button
      className="hover:scale-125 transition-all duration-300"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={theme === "light" ? "Dark" : "Light"}
    >
      {theme === "light" ? (
        <Icon.LuMoon className="w-6 h-6" />
      ) : (
        <Icon.LuSunMedium className="w-6 h-6" />
      )}
    </button>
  );
};
export default ThemeSwitcher;
