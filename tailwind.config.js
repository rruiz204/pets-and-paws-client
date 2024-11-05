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
        "cs-gray-100": "#D4D4D4",
        "cs-gray-200": "#C5C5C5",
        "cs-gray-300": "#919191"
      },
    },
  },
  plugins: [],
}

