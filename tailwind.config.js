/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    fontFamily: {
      'display': ['Orbitron'],
      'body': ['poppins']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
