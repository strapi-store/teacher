/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'dark-blue': '#020617',
      'white': '#fff',
      'blue': '#111827',
      'yellow': '#EAB308',
      'F3F4F6': '#F3F4F6',
      'grey': '#6B7280',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
}