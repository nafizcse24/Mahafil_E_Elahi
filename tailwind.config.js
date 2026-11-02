/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#02130e',
          900: '#04221a',
          850: '#072e23',
          800: '#0b3d2f',
          700: '#105642',
        },
        gold: {
          50: '#fdfbf4',
          100: '#fbf5e2',
          200: '#f6e7be',
          300: '#edd292',
          400: '#e3be66',
          500: '#d4af37', // Antique Gold
          600: '#ba9428',
          700: '#94721d',
          800: '#755819',
          900: '#5c4516',
        },
      },
      fontFamily: {
        serifBangla: ['"Noto Serif Bengali"', '"Tiro Bangla"', 'serif'],
        sansBangla: ['"Hind Siliguri"', 'sans-serif'],
        accent: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fdf4d8 0%, #e2be64 35%, #d4af37 60%, #9e7a20 100%)',
        'gold-text-gradient': 'linear-gradient(to bottom right, #fff5d6, #eec765, #c89e2c, #edd180)',
        'emerald-radial': 'radial-gradient(circle at center, #073527 0%, #031c14 55%, #010c08 100%)',
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 60px rgba(212, 175, 55, 0.45)',
        'emerald-card': '0 8px 32px 0 rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
