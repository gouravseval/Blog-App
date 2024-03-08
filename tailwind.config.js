/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#091B2A",
        "text": '#EEF0E5',
        "button": '#1173A4',
        "header": "#091B2A"
      },
    },
  },
  plugins: [],
}

