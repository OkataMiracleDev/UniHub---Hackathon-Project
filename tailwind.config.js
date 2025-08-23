/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./scripts/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
    require('@iconify/tailwind')(),
  ],
}
