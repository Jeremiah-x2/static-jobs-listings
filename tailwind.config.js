/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      spartan: "'League Spartan', sans-serif",
    },
    extend: {
      colors: {
        DesaturatedDKCyan: "hsl(180, 29%, 50%)",
        lthGrayishCyan: "hsl(180, 52%, 96%)",
        lthGrayishCyanFilTab: "hsl(180, 31%, 95%)",
        dkGrayishCyan: "hsl(180, 8%, 52%)",
        vDKGrayishCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
