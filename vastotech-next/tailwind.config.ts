import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './constants/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          50: '#eef3fb',
          100: '#d4e0f3',
          200: '#a8c1e6',
          300: '#7ba2d9',
          400: '#4f82cc',
          500: '#2363bf',
          600: '#194f9a',
          700: '#123c75',
          800: '#0B1F4D',
          900: '#06143a',
        },
        orange: {
          50: '#fff4e8',
          100: '#ffe2c4',
          200: '#ffc485',
          300: '#ffa547',
          400: '#FF7A00',
          500: '#e66c00',
          600: '#cc5f00',
          700: '#a64d00',
          800: '#803c00',
          900: '#592a00',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(11, 31, 77, 0.06)',
        card: '0 8px 32px rgba(11, 31, 77, 0.08)',
        'card-hover': '0 16px 48px rgba(11, 31, 77, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
