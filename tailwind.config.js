/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '4.5rem',
      },
      width: {
        '275': '16.87rem',
      },
      height: {
        '273': '17.18rem'
      },
      
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    colors: {
      'bg-body': '#F5F5F5',
    },
    fontSize: {
      sm:['8px']
    }
  },
  },
  plugins: [],
}