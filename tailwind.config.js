/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5865F2',
        'success': '#27AE60',
        'secondary': '#1C228C',
        'menu-gray': '#646464',
        'div-gray': '#EAEAEA',
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
