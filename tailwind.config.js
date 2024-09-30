/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["opera/**/*.{html,js}"],
  // content: [
  //   './pages/**/*.{html,js}',
  //   './components/**/*.{html,js}',
  //   './**/*.{html,js}'
  // ],
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#976843',
        'dark-gray': '#3d3d3d',
        'ivory-cream': '#faf1e6',
        'light-beige': '#d9c9b2',
        'lightGrayTwo': '#CDCDCD',
        'brown': '#A4311D',
      },
      fontFamily: {
        "Montserrat": 'Montserrat'
      },
      boxShadow: {
        'shadow': '4px 2px 16.6px 0px #0000001A'

      }
    },
  },
  plugins: [],
}
