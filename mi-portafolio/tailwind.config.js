/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1e3a8a',
        'primary-medium': '#3b82f6',
        'primary-light': '#60a5fa',
        'accent': '#93c5fd',
      },
    },
  },
  plugins: [],
}
