/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend : {
     
        colors: {
          investment: 'rgba(96, 94, 251, 0.1)',
          payment: ' rgba(91, 205, 240, 0.1)',
          saving: 'rgba(255, 97, 239, 0.1)',
          navshadow: 'rgba(46, 92, 255, 0.1)',
          savingshadow: 'rgba(255, 97, 239, 0.15)',
          investmentshadow: 'rgba(96, 94, 251, 0.15)',
          paymentshadow: 'rgba(91, 205, 240, 0.15)',
    
        },
    },
   },
  plugins: [],
}
