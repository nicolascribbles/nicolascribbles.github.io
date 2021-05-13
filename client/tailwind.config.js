module.exports = {
  purge: ["/src/**/*.js", "./src/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primarylight: '#66b2f3'
      },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
