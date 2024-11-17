/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins_black: ['Poppins Black', 'serif'], 
        poppins_bold: ['Poppins Bold', 'serif'], 
        poppins_regular: ['Poppins-Regular"', 'serif'], 
        poppins_medium: ['Poppins Medium"', 'serif'], 
      },

      colors: {
        'custom_gray': '#C2C8DA',
      },
      borderRadius: {
        'radius_60px': '3.75rem',
      }

    
  },
  },
  plugins: [],
}

