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
      'ibmPlex': ['"IBM Plex Sans"', 'sans-serif']
      },
      colors: {
        kraft: "#AC9276",
        cold: "#404C4C",
        string: "#EFE5D3",
        stringObscuro: "#999793",
      },
      dropShadow: {
        'darker': '0 5px 5px rgba(58, 25, 0, 0.30)',
      }
    },
  },
  plugins: [],
}
