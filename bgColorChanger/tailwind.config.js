/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    containner: {
      lg:'4rem',
      center: true,
      mt: '5rem',
    }
  },
  plugins: [],
}