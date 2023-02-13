/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EC",
        "gray-50": "#EFE6E7",
        "gray-100": "#DFCCCD",
        "gray-500": "#5E0001",
        "primary-100": "#45B6FE",
        "primary-300": "#3792CB",
        "primary-500": "#1C4966",
        "secondary-400": "#FFA6A4",
        "secondary-500": "#FF6B67",
      },
      backgroundImage: (theme) => ({
        "gradient-blue-purple":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(85,9,121,1) 35%, rgba(0,212,255,1) 100%);",
        "mobile-home": "url('./assets/homePageGraphic.jpeg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        logotext: "url('./assets/text-light.png')",
        abstractwaves: "url('./assets/abstractWaves.png')",
        circles: "url('./assets/circles.png')",
        sparkles: "url('./assets/sparkles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
