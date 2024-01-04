/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto mono, monospace",
    },

    extend: {
      width: {
        112: "28rem",
        42: "42rem",
        45: "45rem",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
