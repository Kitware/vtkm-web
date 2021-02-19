// This is a minimal config.
// If you need the full config, get it from here:
// https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Nunito, sans-serif'
    },
    extend: {
      colors: {
        'accent': {
            '50': '#fafef6',
            '100': '#f5fdec',
            '200': '#e5fad0',
            '300': '#d5f7b4',
            '400': '#b6f07b',
            '500': '#96ea43',
            '600': '#87d33c',
            '700': '#71b032',
            '800': '#5a8c28',
            '900': '#4a7321'
        },'secondary': {
            '50': '#fafafa',
            '100': '#f4f4f5',
            '200': '#e4e5e5',
            '300': '#d3d5d6',
            '400': '#b3b5b7',
            '500': '#929598',
            '600': '#838689',
            '700': '#6e7072',
            '800': '#58595b',
            '900': '#48494a'
        },'primary': {
            '50': '#f3f6f9',
            '100': '#e6edf3',
            '200': '#c1d3e2',
            '300': '#9bb9d1',
            '400': '#5184ae',
            '500': '#064F8B',
            '600': '#05477d',
            '700': '#053b68',
            '800': '#042f53',
            '900': '#032744'
        }
      },
      fontSize: {
        '2xs': '.7rem',
        '3xs': '.63rem',
      },
      maxWidth: {
        '2xs': '16rem',
        '3xs': '12rem',
      },
      minWidth: {
        '2xs': '16rem',
        '3xs': '12rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      display: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
}
