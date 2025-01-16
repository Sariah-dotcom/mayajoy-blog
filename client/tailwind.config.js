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
        'libre': ['Libre Calson Display', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'bright-green': '#095200',
        "dark-green": "#1A5319",
        "med-green": "#508D4E",
        "light-green": "#BFD8AF",
        "lighter-green": "#D4E7C5",
        "grey":"#6B6B6B",
        "eggshell": "#fffff2"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('tailwind-scrollbar'),
  ],
}