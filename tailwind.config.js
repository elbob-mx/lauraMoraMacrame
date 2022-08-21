/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
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
      }
    },
  },
  plugins: [],
}
