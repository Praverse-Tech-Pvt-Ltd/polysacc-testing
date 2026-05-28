import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#f8f6f1',
        'sage-pale': '#e8f0e8',
        sage: {
          DEFAULT: '#8aab8a',
          light:   '#b8cdb8',
          pale:    '#e8f0e8',
          deep:    '#4a7a4a',
        },
        charcoal: '#2c2c2a',
        muted:    '#6b6b68',
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
