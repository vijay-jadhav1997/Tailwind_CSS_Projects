/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'min500': "500px",
      }
    },
  },
  plugins: [],
}

