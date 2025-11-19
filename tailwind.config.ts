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
          300: "#fed7aa", // tangerina bem suave
          400: "#fdba74", // intermediário
          500: "#fb923c"  // ainda laranja, mas menos agressivo
        }
      }
    }
  },
  plugins: []
};

export default config;
