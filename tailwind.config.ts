import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#E9BCB9",
          secondary: "#ED9E59",
          primary: "#A34054",
        },
        dark: {
          bg: "#1B1931",
          secondary: "#44174E",
          primary: "#662249",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
