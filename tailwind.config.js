const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'brand-main': '#3b0606',
      },
    }
  }
}
