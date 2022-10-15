/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto Mono, sans-serif'
      },
      colors: {
        'gray-900':'#121214',
        'gray-800':'#202024',
        'gray-400':'#7c7c8a',
        'gray-200':'#c4c4cc',
        'gray-100':'#e1e1e6'
      }
    },
  },
  plugins: [],
}
