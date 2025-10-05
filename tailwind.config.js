/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef7e7',
          500: '#d4af37',
          600: '#b8941f'
        }
      }
    }
  },
  plugins: []
};
