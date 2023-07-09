/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kalpurush': ['KALPURUSH'],
        'sutonnyMJ' : ['sutonnyMJ']
      }
    },
  },
  plugins: [require("daisyui")],
}

