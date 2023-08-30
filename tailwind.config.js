/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['light']
  },
  content: [
    // Example content paths...
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-tc': ['Noto Sans TC', 'sans-serif'],
        'serif-tc': ['Noto Serif TC', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '0.75rem',
        md: '0.75rem',
        lg: '0.75rem',
        xl: '0.75rem',
        '2xl': '0.75rem',
        '3xl': '18.75rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      }
    }
  },
  plugins: [require('daisyui')]
}
