/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   Lato: ["Lato", "OpenSans"],
    // },
    extend: {
      colors: {
        BlueDark: "#000C18",
        Blue: "#011627",
        BlueLink: "#E9F9FF",
        GreenLight: "#BCF0C0",
        Green: "#6BFF81",
        GrayDark: "#161616",
        GrayLight: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
