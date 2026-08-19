import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#4a5a2e",
          navyDark: "#2e3a1c",
          orange: "#d4a72c",
          yellow: "#e8b923",
          green: "#5c6b3a",
          gray: "#eceeea",
        },
      },
    },
  },
  plugins: [],
};

export default config;
