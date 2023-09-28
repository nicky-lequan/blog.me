/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const {createThemes} = require('tw-colors');

module.exports = withMT({
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [
    createThemes({
      light: {
        primary: '#D0E8F2',
        focus: '#A3D8F4',
        paper: '#F4F9F9',
      },
      dark: {
        primary: '#35155D',
        focus: '#DA0037',
        paper: '#0F0F0F',
      },
    }),
  ],
});
