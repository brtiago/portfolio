/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        color1: "#253D89",
        color2: "#4379FB",
        color3: "#46AEFC",
        color4: "#FD5C63",
        color5: "#272940",
        color6: "#6A707B",
        color7: "#D1D3D1",
        color8: "#F4F5F6",
        color9: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
    plugins: [],
  },
};
