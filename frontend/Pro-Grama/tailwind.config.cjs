/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      BlueDark: "#000C18",
      Blue: "#011627",
      BlueLink: "#E9F9FF",
      GreenLight: "#BCF0C0",
      Green: "#6BFF81",
      GrayDark: "#161616",
      GrayLight: "#F4F4F4",
    },
    // fontFamily: {
    //   Lato: ["Lato", "OpenSans"],
    // },
    extend: {},
  },
  plugins: [],
};
