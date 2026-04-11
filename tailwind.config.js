/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        terracotta: '#C4702B',
        'terracotta-dark': '#A05820',
        'kiko-green': '#1B4332',
        brass: '#B8960C',
        'dark': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
