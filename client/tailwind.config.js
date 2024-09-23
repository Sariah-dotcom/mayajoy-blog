const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        "dark-green": "#114418",
        "med-green": "#99BC85",
        "light-green": "#BFD8AF",
        "lighter-green": "#D4E7C5",
        "grey":"#6B6B6B"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}