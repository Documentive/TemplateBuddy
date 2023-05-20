/** @type {import('tailwindcss').Config} */
module.exports = {
  // Need to use data-attribute to toggle dark mode as css modules are hindering
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // Adding Custom Fonts
    fontFamily: {
      inter: ["Inter"],
      montserrat: ["Montserrat"],
    },
  },
  plugins: [],
};
