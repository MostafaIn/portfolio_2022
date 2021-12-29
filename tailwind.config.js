const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    colors: {
      primary: colors.slate,
      secondary:colors.teal,
    },
    extend: {
      fontFamily:{
          Calibre: ['Calibre'],
          sans:['Calibre','sans-serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants:{
    extend:{
      fontFamily:['hover','focus'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
    require('@tailwindcss/line-clamp'),
  ],
}
