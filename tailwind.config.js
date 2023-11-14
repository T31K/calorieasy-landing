/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/landing/src/**/*.{js,ts,jsx,tsx}", // for everything inside the src directory
    "./packages/landing/**/*.{js,ts,jsx,tsx}", // for everything inside the packages/landing directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
