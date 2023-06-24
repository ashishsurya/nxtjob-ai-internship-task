/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#FE5BAC',
        'primary-2': '#8246FD',
        'primary-3': '#57A4F2',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
};
