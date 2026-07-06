/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette de marque « éditoriale premium » (voir plan de refonte produit).
        // navy = confiance/titres ; accent = CTA uniquement ; neutres chauds.
        brand: {
          navy: '#002D62',
          navyDark: '#001C40',
          accent: '#C85000',
          accentDark: '#A63F00',
        },
        ink: '#1A1A1A',
        paper: '#FAFAF7',
        hairline: '#E7E5DF',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
