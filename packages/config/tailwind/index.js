const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('./colors');
const fontSize = require('./fontSize');

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors,
    fontSize,
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = config;
