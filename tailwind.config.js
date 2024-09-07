const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#3b0606',
        'brand-secondary': '#f87171',
        'brand-tertiary': '#00a0d6',
      },
    }
  }
}
