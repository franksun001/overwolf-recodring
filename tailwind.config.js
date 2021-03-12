const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Graphik Web", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        d00: "#191A1F",
        d10: "#242630",
        r00: "#F14343",
        r10: "#BE3434",
        g00: "#798694",
      },
      opacity: {},
      letterSpacing: {
        0.01: "0.01em",
      },
      zIndex: {
        "-1": -1,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
