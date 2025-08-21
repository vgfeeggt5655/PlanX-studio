/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22D3EE', // Bright Cyan
        secondary: '#EC4899', // Vivid Magenta/Pink
        background: '#111827', // Slate 900
        surface: '#1F2937', // Slate 800
        'border-color': '#374151', // Slate 700
        'text-primary': '#F9FAFB', // Gray 50
        'text-secondary': '#9CA3AF', // Gray 400
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(1rem)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [],
}
