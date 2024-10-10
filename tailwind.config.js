
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        maxWidth:{
          container:"1280px"
        },
         fontFamily: {
            'pops': ['Poppins', 'sans-seri'],
      },
      backgroundColor:{
        hbg:"#282828"
      },
      backgroundImage:{
        banbg: "url(./src/assets/banner.png)",
        banSugar: "url(./src/assets/sugar.png)",
        dancool:"url(./src/assets/cool.png)",
        banguut:"url(./src/assets/guut.png)",
        doonImg:"url(./src/assets/doon.png)"
      }
    },
  },
  plugins: [],
}

