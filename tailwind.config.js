/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "cs-red-100": "#B7323B",
        "cs-red-200": "#862d36",
        "cs-red-300": "#552832",
        "cs-blue-300": "#25242E",
        "cs-white-100": "#FCFCFC",
        "cs-white-200": "#F9F9F9",
        "cs-white-300": "#EBEBEB",
      },
    },
  },
  plugins: [],
}

