import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        'pulse-core': 'pulse-core 2s ease-in-out infinite',
        expand: 'expand 2s linear infinite',
        orbit: 'orbit 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 8s linear infinite',
        'rotate-reverse': 'rotate-reverse 6s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(180deg)' },
        },
        'pulse-core': {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.1)',
            opacity: '0.8',
          },
        },
        expand: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(0.8)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.2)',
            opacity: '0.4',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1.5)',
            opacity: '0',
          },
        },
        orbit: {
          '0%': {
            transform:
              'translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg)',
            opacity: '1',
          },
          '50%': { opacity: '0.7' },
          '100%': {
            transform:
              'translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg)',
            opacity: '1',
          },
        },
        glow: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.2)',
            opacity: '0.3',
          },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
