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
      colors: {
        primary: '#1d1d95',
        colorText: '#1b1b1b'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
