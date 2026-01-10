/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          50: '#F5F5F5',
          700: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        primary: {
          50: '#f4f6f3',
          100: '#e8ede7',
          200: '#d1dccd',
          300: '#b9cab3',
          400: '#a1b899',
          500: '#89a67f',
          600: '#6d8566',
          700: '#52644d',
          800: '#374233',
          900: '#1b211a',
          950: '#0e110d',
        },
      },
    },
  },
  plugins: [],
}