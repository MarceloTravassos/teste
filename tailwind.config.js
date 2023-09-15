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
        'light-gray': '#D9D9D9',
        'div-gray': '#EAEAEA',
        'success-hover': '#2ABD68',
        'primary-hover': '#505CDE',
        'secondary-hover': '#2028AB',
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
