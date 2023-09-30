/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007aff",
        secondary: "#C6DEF9",
        tertiary: "#333333",
      },
    },
  },
  plugins: [],
};
