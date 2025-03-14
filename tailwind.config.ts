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
          "50": "#f5f6f6",
          "100": "#e5e7e8",
          "200": "#ced2d3",
          "300": "#adb3b3",
          "400": "#838c8d",
          "500": "#687072",
          "600": "#595f61",
          "700": "#4c5152",
          "800": "#3A3C3F",
          "900": "#1f2022",
          "950": "#020202",
        },
      },
    },
  },
  plugins: [bracketuiPlugin],
};
export default config;
