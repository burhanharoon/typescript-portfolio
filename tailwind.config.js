module.exports = {
  content: [
    "./pages/**/*.{html,js,tsx}",
    "./assets/**/*.{html,js,tsx}",
    "./data/**/*.{html,js,tsx}",
    "./Screens/**/*.{html,js,tsx}",
    "./Components/**/*.{html,js,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'black-prime': '#111111',
        'light-black-prime': '#2b2a2a',
        'tabs-black-prime': '#444',
        'yellow-prime': '#FFB400',
      }
    },
  },
  plugins: [],
}
