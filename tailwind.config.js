/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "hsl(240,67%,8%)",
      },
      backgroundImage: {
        "bg-img": "url('./src/assets/background-stars.svg')",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
      },
    },
  },
  plugins: [],
};
