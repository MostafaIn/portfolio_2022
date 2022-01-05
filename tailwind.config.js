const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    minHeight: {
      screen: 'calc(100vh - 6em)',
    },
    colors: {
      primary: colors.slate,
      secondary: colors.teal,
      tbg: '#0A192F',
    },
    extend: {
      fontFamily: {
        Calibre: ['Calibre'],
        Tabitha: ['Tabitha'],
        sans: ['Calibre', 'Tabitha', 'sans-serif'],
        mono: ['Tabitha', 'Calibre', 'sans-serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'index-hero': "url('/public/images/index-hero.jpeg')",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
    require('@tailwindcss/line-clamp'),
  ],
};
