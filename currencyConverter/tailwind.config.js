/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '340':'340px'
      },
      height:{
        '250':'250px'
      }
    },
  },
  plugins: [],
}

