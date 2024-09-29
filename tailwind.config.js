/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#B7323B",
        seconday: "#25242E",
        tertiary: "#862D36",
        "hover-beige": "#EBEBEB"
      }
    },
  },
  plugins: [],
}

