// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'part-back': "url('@/assets/parts/back.jpeg')",
        'part-chest': "url('@/assets/parts/chest.jpeg')",
        'part-shoulder': "url('@/assets/parts/shoulder.jpeg')",
        'part-bichps': "url('@/assets/parts/bichps.jpeg')",
        'part-leg': "url('@/assets/parts/leg.jpeg')",
        'part-sixpack': "url('@/assets/parts/sixpack.jpeg')",
        'part-triceps': "url('@/assets/parts/triceps.jpeg')"
      },
      height: {
        navbar: '8vh',
        category: '6vh',
        main: '86vh'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
