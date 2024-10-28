/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-color': "#159947",
        'secondary-color': "#1FD363",
        'grey-color': '#B5B5B5'
      }
    },
    fontFamily: {
      TitanOne: ['Titan One', 'sans-serif'],
      Nunito: ['Nunito', 'sans-serif'],
      JakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}

