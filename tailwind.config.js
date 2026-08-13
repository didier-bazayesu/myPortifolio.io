/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1ECDE",
        "paper-deep": "#E6DCC2",
        ink: "#1B170F",
        "ink-soft": "#5B5340",
        gold: "#AD7F27",
        forest: "#3E5A48",
        rule: "#D7CBAA",
        rust: "#8A3B2B",
      },
      fontFamily: {
        display: ["Domine", "serif"],
        body: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        page: "0 -10px 34px -14px rgba(27, 23, 15, 0.38)",
        card: "0 10px 30px -14px rgba(27, 23, 15, 0.22)",
      },
    },
  },
  plugins: [],
};
