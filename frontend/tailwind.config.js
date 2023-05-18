/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // Adding Custom Fonts
    fontFamily: {
      'inter': ['Inter'],
      'montserrat': ['Montserrat']
    }
  },
  plugins: [],
}