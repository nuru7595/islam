/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      },
      colors: {
        bg: '#006A4E'
      }
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