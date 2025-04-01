/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // ✅ Include all Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}",  // ✅ Include all components
    "./app/**/*.{js,ts,jsx,tsx}",  // ✅ If using App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


