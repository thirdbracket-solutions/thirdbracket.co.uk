import type { Config } from "tailwindcss";

const { bracketuiPlugin } = require("@thirdbracket/bracketui");
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#fff1f2",
          100: "#ffe1e3",
          200: "#ffc8cb",
          300: "#ffa1a6",
          400: "#fe6b73",
          500: "#f73c46",
          600: "#e5202b",
          700: "#c0151f",
          800: "#9f151d",
          900: "#84181e",
          950: "#48070b",
        },
        primary: {
          "50": "#f2f2f2",
          "100": "#e5e5e5",
          "200": "#cccccc",
          "300": "#b2b2b2",
          "400": "#999999",
          "500": "#808080",
          "600": "#666666",
          "700": "#4d4d4d",
          "800": "#333333",
          "900": "#171717",
          "950": "#0d0d0d",
        },
      },
    },
  },
  plugins: [bracketuiPlugin],
};
export default config;
