/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand color - varies by template
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        // Accent color - varies by template
        accent: {
          50: 'rgb(var(--color-accent-50) / <alpha-value>)',
          100: 'rgb(var(--color-accent-100) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200) / <alpha-value>)',
          300: 'rgb(var(--color-accent-300) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600) / <alpha-value>)',
          700: 'rgb(var(--color-accent-700) / <alpha-value>)',
          800: 'rgb(var(--color-accent-800) / <alpha-value>)',
          900: 'rgb(var(--color-accent-900) / <alpha-value>)',
        },
        // CTA button color - high contrast action color
        cta: {
          DEFAULT: 'rgb(var(--color-cta) / <alpha-value>)',
          hover: 'rgb(var(--color-cta-hover) / <alpha-value>)',
          text: 'rgb(var(--color-cta-text) / <alpha-value>)',
        },
        // Surface/background colors
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          alt: 'rgb(var(--color-surface-alt) / <alpha-value>)',
        },
      },
      fontFamily: {
        // Dynamic font families set by theme
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      fontSize: {
        // Fluid typography scale for mobile-first design
        'fluid-xs': 'clamp(0.75rem, 1.5vw + 0.25rem, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 1.5vw + 0.25rem, 1rem)',
        'fluid-base': 'clamp(1rem, 2vw + 0.25rem, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2vw + 0.5rem, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 2.5vw + 0.5rem, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 3vw + 0.5rem, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 4vw + 0.5rem, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 5vw + 0.5rem, 3rem)',
      },
      spacing: {
        // Touch-friendly spacing
        'touch': '48px',
        'touch-lg': '56px',
      },
      borderRadius: {
        // CTA button radius (rounded corners convert better)
        'cta': '12px',
      },
      minHeight: {
        // Minimum touch target size (48px per council consensus)
        'touch': '48px',
        'cta': '56px',
      },
      animation: {
        // Pulse animation for urgent CTAs
        'pulse-cta': 'pulse-cta 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Shimmer effect for buttons
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        'pulse-cta': {
          '0%, 100%': { 
            boxShadow: '0 4px 14px rgba(var(--color-cta), 0.4)',
          },
          '50%': { 
            boxShadow: '0 4px 24px rgba(var(--color-cta), 0.6)',
          },
        },
        'shimmer': {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
      },
      boxShadow: {
        'cta': '0 4px 14px rgba(var(--color-cta), 0.3)',
        'cta-hover': '0 6px 20px rgba(var(--color-cta), 0.4)',
        'sticky': '0 -4px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
