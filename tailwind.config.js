/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
  },
  plugins: [],
};
