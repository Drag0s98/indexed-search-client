const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color-orange": "#febd69",
        "secondary-color-blue": "#232f3e",
        "white-color": "#eaeded"
      }
    },
  },
  plugins: [addIconSelectors(["mdi", "mdi-light"])],
};
