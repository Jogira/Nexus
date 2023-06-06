/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#0c0e1f",
        button: "#020617",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 15px 80px -15px #30052c",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url("https://raw.githubusercontent.com/Jogira/Nexus/main/src/assets/herobg.png")',
      },
    },
  },
  plugins: [],
};
