/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Complete gold scale (50-950 for consistency)
        gold: {
          50: '#fefcf3',
          100: '#fdf9e7',
          200: '#faf0c3',
          300: '#f7e79f',
          400: '#f1d557',
          500: '#ebc30f',
          600: '#d4af0d',
          700: '#b1920b',
          800: '#8e7509',
          900: '#745f07',
        },

        // Semantic colors for better maintainability
        primary: {
          50: '#fefdf8',
          100: '#fef7e7',
          200: '#fcefc7',
          300: '#f9e298',
          400: '#f5cd58',
          500: '#d4af37',
          600: '#b8941f',
          700: '#967618',
          800: '#795e18',
          900: '#654e19',
          950: '#3a2a0a',
        },

        // Status colors for UI feedback
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        warning: {
          50: '#fefce8',
          100: '#fef9c3',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },

        // Enhanced dark mode colors
        dark: {
          bg: '#0f172a',
          'bg-secondary': '#1e293b',
          card: '#1e293b',
          'card-hover': '#334155',
          border: '#334155',
          text: '#f1f5f9',
          'text-secondary': '#cbd5e1',
          'text-muted': '#94a3b8',
        },
      },

      // Add spacing if needed for consistency
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },

      // Enhanced shadows for depth
      boxShadow: {
        gold: '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
        'gold-lg': '0 10px 40px 0 rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [
    // Add RTL support if needed
    function ({ addUtilities }) {
      addUtilities({
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      });
    },
  ],
};
