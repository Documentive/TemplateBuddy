/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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