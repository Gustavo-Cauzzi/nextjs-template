module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          ebony: "#281C2D",
          violet: "#8155ba",
          purple: "#695e93",
          gray: "#beafc2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
