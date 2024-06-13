/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'drinky':'#25b525 '
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%  100%' ,
        '16': '4rem',
      },
      fontFamily:{
        'Drinky_font':[' "Plus Jakarta Sans", sans-serif'],
      }
    },
  },
  plugins: [],
}

