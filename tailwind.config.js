/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        margix: {
          yellow: '#FFC107',
          yellowDark: '#B08D00',
          black: '#050505',
          gray: '#222222',
          light: '#f9f9f9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
