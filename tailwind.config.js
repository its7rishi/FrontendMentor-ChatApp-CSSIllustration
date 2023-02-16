/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: ['Rubik', 'sans'],
      colors: {
        subHeadViolet: 'hsl(276, 100%, 81%)',
        chatLeftViolet: 'hsl(276, 55%, 52%)',
        chatRightViolet: 'hsl(271, 15%, 43%)',
        placeholderBlue: 'hsl(206, 6%, 79%)',
        headingViolet: 'hsl(271, 36%, 24%)',
        paragraphViolet: 'hsl(270, 7%, 64%)',
        gradientMagenta: 'hsl(293, 100%, 63%)',
        gradientViolet: 'hsl(264, 100%, 61%)',
        appBackground: 'hsl(270, 20%, 96%)',
        buttonBg: 'hsl(271, 36%, 24%)',
        radioOutline: 'hsl(289, 100%, 72%)',
      },
    },
  },
  plugins: [],
}
