/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        blood: '#8B0000',
        crimson: '#DC143C',
        gold: '#C9A84C',
        offwhite: '#F5F0EB',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s both',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'slide-up': 'slideUp 0.8s ease-out both',
        'expand': 'expand 1.5s ease-out 0.5s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 0, 0, 0.6)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '8rem' },
        },
      },
    },
  },
  plugins: [],
}
