/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cartelRed: '#E9001A',      // Primary vibrant red
        cartelDarkRed: '#840014',  // Deep accent red
        cartelDark: '#1A1A1A',     // Deep premium black
        cartelGray: '#E6E6E6',     // Light gray for contrast
      },
    },
  },
  plugins: [],
}