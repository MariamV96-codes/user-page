/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      mainColor: '#244C5A',
      secondaryColor: '#D3BC8D'
    },

    fontSize:{
      sm: ['16px'],
      base: ['19px'],
      lg: ['24px'],
    },
    extend: {
      fontFamily:{
        'CairoRegular': ['CairoRegular', 'sans-serif'],
        'CairoBold': ['CairoBold', 'sans-serif']
      },
      textUnderlineOffset: {
        6: '6px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
