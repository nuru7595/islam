/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        bg: '#006A4E'
      }
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"]
    },
    container: {
      padding: {
        DEFAULT: "12px"
      },
      center: true
    }
  },
  plugins: [],
}