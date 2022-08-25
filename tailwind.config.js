/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '0px',
      md: '650px',
      lg: '920px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      fontFamily: {
      'ibmPlex': ['"IBM Plex Sans"', 'sans-serif'],
      'courier': ['"Courier Prime"', 'monospace'],
      },
      colors: {
        kraft: "#AC9276",
        cold: "#404C4C",
        string: "#EFE5D3",
        stringObscuro: "#999793",
        calmViolet: "#5F33FF"
      },
      dropShadow: {
        'darker': '0 3px 3px rgba(58, 25, 0, 0.30)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
