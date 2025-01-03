/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Yellow": "hsl(47, 88%, 63%)",
        "White": "hsl(0, 0%, 100%)",
        "Gray_500": "hsl(0, 0%, 42%)",
        "Gray_950": "hsl(0, 0%, 7%)",

      },
      fontFamily:{
        "Figtree": ["Figtree", "serif"]
      }

    },
  },
  plugins: [],
}