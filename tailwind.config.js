/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html','./src/**/*.{vue,js,ts,tsx,jsx}'],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'lightcream': '#F7F5ED',
          'cream': '#F0EDDC',
          'sunset': '#D66F2D',
          'night': '#281C1C',
          'morning': '#D2E7EC',
        },
      },
    },
    plugins: [],
  }