/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-yellow':'#FFBE34',
        'theme-maroon':'#880000',
      }
    },
  },
  plugins: [require("daisyui")],
}