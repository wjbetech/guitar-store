/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f4eded",
        secondary: "#d3d0d0",
        success: "#0F9D58",
        info: "#009DC4",
        warning: "#FFCC00",
        danger: "#B22222",
        lightBg: "#f4eded",
        lightFrame: "#d3d0d0",
        lightFont: "#596E79",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

