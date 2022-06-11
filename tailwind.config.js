module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#051D4D',
      'secondary' : '#7A0BC0',
      'secondary-highlight' : '#A61DFC',
      'tertiary': '#91BAD6',
      'primary-blend-dark' : '#172339',
      'dark' : '#20262F',
      'card-dark' : '#17005C',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray': '#8492a6',
      'gray-dark': '#273444',
      'gray-300': '#D1D5DB',
      'gray-400': '#9CA3AF',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'white': '#ffffff',
      'link-highlight': '#5BC0BE',
      'blue-light': '#D9E8F6',
      'see-through': '#343434'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      pridi: ['Pridi', 'serif'],
    },
    extend: {
      backgroundImage: {
        'recipe': "url('/img/recipe.jpg')",
      }
    },
  },
  plugins: [],
}
