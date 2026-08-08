/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0',
        forest: '#0F1410',
        emerald: {
          deep: '#1B4332',
        },
        teal: {
          midnight: '#0D3B33',
        },
        gold: {
          muted: '#C9A66B',
        },
        terracotta: '#B0693F',
        charcoal: '#22261F',
        offwhite: '#EDEAE0',
      },
      fontFamily: {
        quran: ['"Amiri Quran"', 'Amiri', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
        heading: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
