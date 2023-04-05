/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#e84646",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "red",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
