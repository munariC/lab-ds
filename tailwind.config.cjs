/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 16, 
      sm: 20,
      md: 24,
      lg: 28,
      xl: 32,
      

    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      cyan: {
         cyan: '#61DAFB',
         200: '#81D8F7',
         300: '#81D1F7',

      },
      
      
      gray: {   
      900: '#121214',
      800: '#3242420',
      700: '#202024',
      600: '#C4C4CC',
      500: '#7C7C78',
      400: '#E1E1E6',
      100: '#FFFFFF',
    },
      
    },
    extend: {
      fontFamily:{
        sans:'Inter,sans-serif'
      },
    },
  },
  plugins: [],
}
