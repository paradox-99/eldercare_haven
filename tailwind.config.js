/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F58300",
        secondary: "#00C006",
        // background: "#fdfefe"
      },
      fontFamily: {
        nunito: '"Nunito Sans", sans-serif',
      },
    },
  },
  plugins: [],
}