/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        92: "22rem",
        51: "12rem"
      },
      colors: {
        "dark-grey": "#292F36",
        "off-white": "#F7F9FB",
        "light-blue": "#26C0E2",
      },
    },
  },
  plugins: [],
};
