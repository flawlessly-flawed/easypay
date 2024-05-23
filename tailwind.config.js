/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5p': '5%',  // 5% spacing
        '10p': '10%', 
        '7p': '7%',// 10% spacing
        
      },
      colors: {
        'orange': '#FF3200',
        'customBlack': '#191919',
      },
    },
  },
  plugins: [],
}

