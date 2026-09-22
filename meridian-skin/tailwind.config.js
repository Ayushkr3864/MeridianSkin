/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        pine: {
          50: "#f2f5f2",
          100: "#dfe7e0",
          200: "#b9cabb",
          300: "#8fa992",
          400: "#5f7f64",
          500: "#3f5e44",
          600: "#2c4630",
          700: "#223328",
          800: "#1a2820",
          900: "#141f19",
        },
        clay: {
          50: "#fbf2e9",
          100: "#f4dfc6",
          200: "#e7bd8e",
          300: "#d69f60",
          400: "#c08a3e",
          500: "#a3722f",
          600: "#835a25",
        },
        stone: {
          50: "#faf9f6",
          100: "#f4f2ec",
          200: "#e8e2d6",
          300: "#d8cfbc",
        },
        ink: "#1c231d",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
