module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'hsl(0, 0%, 100%)',
      gray: {
        lighter: 'hsl(225, 64%, 95%)',
        light: 'hsl(224, 49%, 87%)',
        DEFAULT: 'hsl(226, 20%, 60%)',
        dark: 'hsl(226, 36%, 25%)'
      },
      green: {
        lighter: 'hsl(174, 77%, 80%)',
        light: 'hsl(174, 100%, 75%)',
        DEFAULT: 'hsl(174, 86%, 45%)',
        dark: 'hsl(174, 65%, 41%)',
      },
      orange: {
        lighter: 'hsl(15, 90%, 95%)',
        DEFAULT: 'hsl(15, 100%, 70%)',
      }
    },
    fontFamily: {
      'sans': ['Manrope', 'sans-serif']
    },
    fontSize: {
      'xxs': '.625rem',
      'xs': '.75rem',
      'sm': '.8125rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      spacing: {
        '8.5': '2.125rem',
        43: '10.75rem',
        58: '14.5rem',
        66: '16.5rem'
      },
      maxWidth: {
        'larger': '33.75rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
