/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    maxWidth: {
      'container': '1460px'
    },
    extend: {
      colors: {
        accent: {
          100: '#6BFFA5',
          200: '#5AFB92',
          300: '#49E97F',
          400: '#38D76C',
          500: '#22C55E',
          600: '#11B34B',
          700: '#00A138',
          800: '#008F25',
          900: '#007D12',
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}