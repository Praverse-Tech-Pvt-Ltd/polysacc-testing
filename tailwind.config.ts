import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian:  '#0f0f0f',
        bone:      '#f2ede6',
        parchment: '#e8e0d5',
        amber: {
          DEFAULT: '#c8893a',
          light:   '#e0a855',
          pale:    '#f5e9d6',
        },
        slate:    '#1c2028',
        pewter:   '#8a8a82',
        linen:    '#d4c9b8',
        ink:      '#2a2a26',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
