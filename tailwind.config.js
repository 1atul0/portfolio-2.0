/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/src/assets/bg-image.jpg')",
        dark: "url('/src/assets/darkbg.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
