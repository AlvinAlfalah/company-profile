/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "540px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1180px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    backgroundImage: {
      "hero-pattern": "url('/assets/img/3.jpg')",
    },
    keyframes: {
      move: {
        "50%": { transform: "translateV(-1rem" },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Jost: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
