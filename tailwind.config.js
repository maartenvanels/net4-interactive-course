/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0073f5',
          600: '#005cc4',
          700: '#004593',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#e6f7f5',
          100: '#ccefea',
          200: '#99dfd5',
          300: '#66cfbf',
          400: '#33bfaa',
          500: '#00af95',
          600: '#008c77',
          700: '#006959',
          800: '#00463c',
          900: '#00231e',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
} 