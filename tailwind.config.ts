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
          navy: "#1c3b63",
          navyDark: "#0f2038",
          orange: "#f5821f",
          yellow: "#f5c400",
          green: "#2e7d4f",
          gray: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
