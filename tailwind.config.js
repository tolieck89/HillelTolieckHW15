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
        roboto: ['Roboto'],
      },

      colors: {
        'custom_gray': '#C2C8DA',
        'custom_yellow': '#E6C744',
        'custom_gray_2': '#7C7C7C',
        'custom_gray_footer':'#8E8E8E',
        'gray_footer_list':'#D9D9D9',
      },
      borderRadius: {
        'radius_60px': '3.75rem',
        'radius_8px': '8px',
        
      },

      height: {
        'custom-44rem': '44rem',
        'custom-4.25rem': '4.25rem',
        'custom-36rem' : '36rem',
        'custom-546px' : '546px',
        'custom624px':'39rem',

      },

      fontSize: {
        'custom_112':'7rem',
        'custom_32':'3.25rem',
        'font55px': '55px',
        'font40px':'2.5rem',

      },

      width: {
        'w-31.5':'31.5rem',
        '36rem':'36rem',
        '416px':'416px'
      },

      margin: {
        'custom_120px': '7.5rem',
      },

      gap: {
        "gap416px":'26rem',
      },
      
      lineHeight: {
        'custom_72px': '4.5rem',
      },
     


    


    
  },
  },
  plugins: [],
}

