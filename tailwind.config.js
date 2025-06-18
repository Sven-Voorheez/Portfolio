/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue'
  ],
  darkMode: 'class',
  theme: {
  extend: {
    colors: {
      lightBlue: '#c3e0ff',
      lightPurple: '#d6c8ff',
      darkGray1: '#7d7d7d',
      darkGray2: '#4b4b4b'
    },
    backgroundImage: {
      'custom-light': 'linear-gradient(to right, #c3e0ff, #d6c8ff)',
      'custom-dark': 'linear-gradient(to right, #7d7d7d, #4b4b4b)'
    },
    animation: {
    'fade-in': 'fadeIn 0.8s ease-out forwards'
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    }
  }
  }
},
  plugins: []
}


