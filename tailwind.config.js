/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "!./node_modules/**/*.*"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_bold: ['Poppins Bold'], 
        poppins_regular: ['Poppins-Regular'], 
        poppins_medium: ['Poppins Medium'], 
        poppins_light: ['Poppins Light'], 
        poppins_extrabold: ['Poppins ExtraBold'], 
      },

      colors: {
        'custom_gray': '#C2C8DA',
        'custom_yellow': '#E6C744',
        'custom_gray_2': '#7C7C7C',
      },
      borderRadius: {
        'radius_60px': '3.75rem',
        
      },
      height: {
        'custom-44rem': '44rem',
        'custom-4.25rem': '4.25rem',
        'custom-36rem' : '36rem',
      },
      fontSize: {
        'custom_112':'7rem',
        'custom_32':'3.25rem',
      },

      width: {
        'w-31.5':'31.5rem',
      },

      margin: {
        'custom_120px': '7.5rem',
      },


    


    
  },
  },
  plugins: [],
}

