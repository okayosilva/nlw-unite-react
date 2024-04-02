/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        webApp: '1216px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
