const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,js,cjs,mjs,ts}",
  ],
  mode: "jit",
  theme: {
    safelist: [
      "animate-[tada]",
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[slide-right_1s_ease-in-out]",
    ],
    extend: {
      colors: {
        error: "#F26255",
        primary: "#232323",
        secondary: "#31AAB7",
        "neutral-black": "#0A0A0A",
        "neutral-gray": "#E7E7E7",
        orange: "#FA9E66",
        "pink-dark": "#EC407A",
        "pink-dark-hover": "#CC2960",
        "pink-light": "#FFE5EF",
        purple: "#63224D",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        success: "#24B296",
      },
      fontFamily: {
        arcade: ["Arcade", "sans-serif"],
        league: ["League Spartan", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
});
