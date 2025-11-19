import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          300: "#fed7aa", // tangerina clara
          400: "#fb923c", // tangerina média
          500: "#f97316"  // tangerina principal
        }
      }
    }
  },
  plugins: []
};

export default config;
