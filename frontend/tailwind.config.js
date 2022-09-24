/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        serviceBg: "../assets/images/service-banner.png",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3164DA",
          secondary: "#355FD9",
          accent: "#0E254E",
          neutral: "#8d8d8d",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
