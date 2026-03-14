import daisyui from "daisyui";
import tailwindcssTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-yellow": "#FFBE34",
        "theme-maroon": "#880000",
        primary: "#FFBE34",
        "primary-dark": "#880000",
        "white-mute": "#F4F4F4",
        "black-soft": "#222222",
      },
      spacing: {
        navbar: "8vh",
      },
    },
  },
  plugins: [
    tailwindcssTypography,
    daisyui
  ],
};
