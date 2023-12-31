/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: '575px',
      sm: '640px',
      md: '768px',
      xmd: '991px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#AD54F2',
        'primary-100': '#BA6EF4',
        'primary-200': '#C687F6',
        'primary-300': '#D2A1F8',
        'primary-400': '#DEBBFA',
        'primary-500': '#E8CFFB',
        'primary-600': '#EFDDFC',
        'primary-700': '#F5EAFD',
        'primary-800': '#FBF6FE',
        'primary-900': '#FDFCFF',

        'secondary': '#7854F7',
        'secondary-dark': '#9E88B2',

        // 'text-main': 'linear-gradient(128.7deg, #7854F7 -287.43%, #110833 100%)',
        'light-text': '#5D5775',
        'main-text': '#110833',
        'dark-text': '#282046',

        'back-white': '#FAFAFA',
        'back-black': '#0D0C0D',
        'icon-bg': '#FFF6FF',

        'divider-main': '#F2EEFE',
        'divider-light': '#EFEEF1',

        'link-main': '#1496F5',

        'dark-blue': '#8a43c2'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'btnShadow': '0px 8px 20px rgba(120, 84, 247, 0.06)',
        'btnShadow-Dropdown': '0px 0px 30px rgba(182, 89, 255, 0.04), 0px 8px 40px rgba(0, 0, 0, 0.06);',
      }
    },
  },
  plugins: [],
}
