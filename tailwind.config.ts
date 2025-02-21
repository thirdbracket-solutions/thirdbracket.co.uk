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
    extend: {},
  },
  plugins: [bracketuiPlugin],
};
export default config;
