/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
      colors: {
        orange: '#FF5C00',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('../components/imgs/homebg.png')",
        heromobile: "url('../components/imgs/heromobile.png')",
        agency: "url('../components/imgs/agency.png')",
        aboutbg: "url('../components/imgs/about.png')",
        business: "url('../components/imgs/business.png')",
        quality: "url('../components/imgs/quality.svg')",





        services: "url('../components/imgs/servicesbg.png')",

      },
    },
  },
  plugins: [],
}