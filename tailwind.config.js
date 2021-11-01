module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: false,
      padding: '2rem',
    },
    colors: {
      background: 'var(--background)',
    },
    textColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['45px', {
        letterSpacing: '2px'
      }],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
