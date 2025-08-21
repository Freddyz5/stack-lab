import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A2E',      // corresponde a --background
        foreground: '#F0F0F0',      // corresponde a --foreground
        card: '#34344E',            // corresponde a --card
        'card-foreground': '#F0F0F0',
        popover: '#34344E',
        'popover-foreground': '#F0F0F0',
        primary: '#F72585',
        'primary-foreground': '#F0F0F0',
        secondary: '#7209B7',
        'secondary-foreground': '#F0F0F0',
        muted: '#444466',
        'muted-foreground': '#B3B3CC',
        accent: '#4361EE',
        'accent-foreground': '#F0F0F0',
        destructive: '#DE3866',
        'destructive-foreground': '#F0F0F0',
        border: '#59597A',
        input: '#444466',
        ring: '#4CC9F0',
        'chart-1': '#F72585',
        'chart-2': '#7209B7',
        'chart-3': '#3A0CA3',
        'chart-4': '#4361EE',
        'chart-5': '#4CC9F0',

        // Sidebar
        sidebar: '#34344E',
        'sidebar-foreground': '#F0F0F0',
        'sidebar-primary': '#7209B7',
        'sidebar-primary-foreground': '#F0F0F0',
        'sidebar-accent': '#4361EE',
        'sidebar-accent-foreground': '#F0F0F0',
        'sidebar-border': '#59597A',
        'sidebar-ring': '#4CC9F0',
      },

      borderRadius: {
        sm: '0.375rem', // radius - 4px
        md: '0.5rem',   // radius - 2px
        lg: '0.625rem', // radius
        xl: '0.875rem', // radius + 4px
      },

      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.15)',
      },

      keyframes: {
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },

      animation: {
        shimmer: 'shimmer 1.5s infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  darkMode: 'class', // aún puedes usar dark mode si lo deseas
  plugins: [heroui()],
};

export default config;
