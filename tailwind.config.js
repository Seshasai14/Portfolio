/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '64': '21rem', // Adding a custom spacing value
      },
      colors: {
        angular: {
          red: 'rgb(221, 27, 22)', // #dd1b16
          darkRed: 'rgb(166, 18, 13)', // #a6120d
          gray: 'rgb(179, 179, 179)', // #b3b3b3
        }
      },
    },
  },
  plugins: [],
}
