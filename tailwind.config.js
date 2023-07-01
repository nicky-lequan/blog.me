/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
  },
});
