module.exports = {
  purge: ["/src/**/*.js", "./src/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pale-silver': {
          DEFAULT: '#BCB8B1',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#EBEAE8',
          '400': '#D4D1CC',
          '500': '#BCB8B1',
          '600': '#A49F96',
          '700': '#8D867A',
          '800': '#726C62',
          '900': '#57524A'
        },
        'cashmere': {
          DEFAULT: '#E0AFA0',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#F9F0ED',
          '400': '#EDCFC6',
          '500': '#E0AFA0',
          '600': '#D38F7A',
          '700': '#C76E53',
          '800': '#AE5439',
          '900': '#88422C'
        },
        'pampas': {
          DEFAULT: '#F4F3EE',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#F4F3EE',
          '600': '#E0DDCF',
          '700': '#CCC7B0',
          '800': '#B8B191',
          '900': '#A49C72'
        },
        'gray': {
          DEFAULT: '#8A817C',
          '50': '#F6F6F5',
          '100': '#EAE9E8',
          '200': '#D2CFCD',
          '300': '#BAB5B2',
          '400': '#A29B97',
          '500': '#8A817C',
          '600': '#6F6864',
          '700': '#554F4B',
          '800': '#3A3633',
          '900': '#1F1D1B'
        },
        'merlin': {
          DEFAULT: '#463F3A',
          '50': '#BAB2AC',
          '100': '#AEA59E',
          '200': '#978B82',
          '300': '#7E7168',
          '400': '#625851',
          '500': '#463F3A',
          '600': '#2A2623',
          '700': '#0E0D0C',
          '800': '#000000',
          '900': '#000000'
        },
        primarylight: '#E0AFA0'
      },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
    extend: {
      backgroundColor: ["active"],
      visibility: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
}
