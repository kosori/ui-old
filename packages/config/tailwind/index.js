const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};

module.exports = config;
