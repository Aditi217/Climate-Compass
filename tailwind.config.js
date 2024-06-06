/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/media/bg.png')",
        "left":"url('/src/media/image.png')"
      }
    },
  },
  plugins: [],
}