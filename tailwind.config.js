/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verydarkgray: 'hsl(0, 0%, 17%)',
        darkgray: 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        rubik: ['Rubik'],
      },
    },
  },
  plugins: [],
};
