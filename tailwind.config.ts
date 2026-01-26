import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
        mono: ['var(--font-orbitron)'],
      },
      colors: {
        brand: {
          neon: '#00f3ff',     // ציאן זרחני
          purple: '#bc13fe',   // סגול עתידני
          dark: '#050505',     // שחור כמעט מוחלט
          panel: '#121212',    // צבע לפאנלים
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
export default config;
