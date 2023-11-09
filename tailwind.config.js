/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#272a37",
        bgInput: "#323644",
        bgInputFocus: "#3d404b",
        textMain: "#ffffff",
        focusColor: "#1d90f5",
        bgMain: "#272a37",
        textSecondary: "#b3b4b9",
        error: "#FF4510",
      },
      boxShadow: {
        outline: '0px 0px 5px 1px #1d90f5',
        hover: '0px 5px 40px 1px #1d90f5',
      },
    },
  },
  plugins: [],
};
