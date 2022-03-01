module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter']
      },
      colors: {
        'primary': '#1DA69A',
        'secondary': '#FDC365',
        'light-yellow': '#FFF9F0',
        'light-green': '#E8F5F4',
        'dark-green': '#2D4843'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
