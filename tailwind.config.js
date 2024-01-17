/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-gradient': 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
        'boxBG': 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
        'backboxBG': 'linear-gradient(45deg, #2d87b6 0%, #091d49 100%)',
      },
    },
    
  },
  plugins: [
  ],
}
