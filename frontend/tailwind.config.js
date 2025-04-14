/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFFFFF",
        "secondary": "#F34100",
        "tertiary": "	#008080",
        "grey": "#262626"
      }
    },
  },
  plugins: [],
}
