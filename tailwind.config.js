/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "!./node_modules/**/*.*"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_bold: ['Poppins Bold', 'serif'], 
        poppins_regular: ['Poppins-Regular"', 'serif'], 
        poppins_medium: ['Poppins Medium"', 'serif'], 
        poppins_light: ['Poppins Light', 'serif'], 
        poppins_extrabold: ['Poppins ExtraBold', 'serif'], 
      },

      colors: {
        'custom_gray': '#C2C8DA',
        'custom_yellow': '#E6C744',
      },
      borderRadius: {
        'radius_60px': '3.75rem',
        
      },
    


    
  },
  },
  plugins: [],
}

