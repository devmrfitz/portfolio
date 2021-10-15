import { defineConfig } from 'windicss/helpers'
import defaultTheme from 'windicss/defaultTheme'

const PRODUCTION = process.env.NODE_ENV !== 'production'

export default defineConfig({
  safelist: 'invisible',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git', 'dist', 'personal'],
  },
  darkMode: 'class',
  attributify: {
    prefix: 'wn',
    separator: ':',
  },
  presets: [require('frontend-commons/tailwind/preset')],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Biotif', ...defaultTheme.fontFamily.sans],
      banner: ['Secular One', 'sans-serif'],
      heading: ['Bogart', 'sans-serif'],
    },
    extend: {
      animation: {
        'bounce-transform': 'bounceTransform 800ms ease-in-out',
      },
      colors: {
        darkest: '#161616',
        brand: {
          light: '#F9F9F9',
          dark: '#a3a1ab',
          accent: '#fa4d56',
          scarce: '#c0a062',
        },
      },
      keyframes: {
        bounceTransform: {
          '0%, 100%': {
            transform: 'matrix(1, 0, 0, 1, 0, 0)',
          },
          '50%': {
            transform: 'matrix(0.8, 0, 0, 1.2, 0, 0) translateY(-10px)',
          },
          '25%, 75%': {
            transform: 'matrix(1.1, 0, 0, 0.8, 0, 0)',
          },
        },
      },
    },
  },
  shortcuts: {
    'debug-screens': PRODUCTION
      ? 'before:bottom-0 before:left-0 before:fixed before:z-[2147483647] before:px-1 before:text-12px before:bg-black before:text-white before:shadow-xl @sm:before:content-["screen:sm"] @md:before:content-["screen:md"] @lg:before:content-["screen:lg"] @xl:before:content-["screen:xl"] @2xl:before:content-["screen:2xl"] <sm:before:content-["screen:none"]'
      : '',
  },
})
