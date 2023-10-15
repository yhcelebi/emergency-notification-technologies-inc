/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "E63946",
        secondary: "F1FAEE",
        tertiary: "A8DADC",
        quaternary: "457B9D",
        quinary: "1D3557",
      },
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["light", "dark"],
  },
};
