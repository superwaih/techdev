/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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


        services: "url('../components/imgs/servicesbg.png')",

      },
    },
  },
  plugins: [],
}