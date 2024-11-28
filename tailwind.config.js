/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Great Vibes', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        //gold: '#C6A96C',
        //gold: '#C49A91', //rosa1
        //gold: '#E8A69B', //rosa2
        //gold: '#C78B9B', //rosa3
        //gold: '#996666', //rosa4
        gold: '#B89180', //rosa5
        //gold: '#D1A6D1', //rosa6
        //gold: '#F6D1D1', //rosa7
        //gold: '#D4A5A5', //rosa8
        //gold: '#B89180', //rosa9
        //gold: '#B89180', //rosa10
        anthracite: '#1A1A1A',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#ffffff',
            p: {
              marginBottom: '1.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
