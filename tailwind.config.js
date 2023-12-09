/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily:{
        baiJamjuree: "'Bai Jamjuree', sans-serif",
        lato: "'Lato', sans-serif"
      },
      animation: {
        'bounce': 'bounce 2s linear infinite',
      }
    },
  },
  plugins: [],
}

