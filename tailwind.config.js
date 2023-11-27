/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const {createThemes} = require('tw-colors');

module.exports = withMT({
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
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
    },
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [
    createThemes({
      light: {
        base: '#FFFFFF',
        text: '#000000',
        primary: '#7BC7E8',
        secondary: '#725FFF',
        neutral: '#F4F9F9',
        neutral2: '#F3F3F3',
      },
      dark: {
        base: '#000000',
        text: '#FFFFFF',
        primary: '#4E188F',
        secondary: '#DA0037',
        neutral: '#0F0F0F',
        neutral2: '#191919',
      },
    }),
  ],
});
