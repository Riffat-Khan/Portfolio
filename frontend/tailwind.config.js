/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#12121b',
        card: '#15151f',
        line: '#23232f',
        accent: '#5eead4',
        accent2: '#a78bfa',
        muted: '#8b8b9a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
