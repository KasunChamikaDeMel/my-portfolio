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
        'primary': {
          400: '#3b82f6',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
    },
  },
  plugins: [],
}