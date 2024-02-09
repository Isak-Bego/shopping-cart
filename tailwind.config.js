/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'base' : '16px',
      },
      fontFamily: {
        'Montserrat' : ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

