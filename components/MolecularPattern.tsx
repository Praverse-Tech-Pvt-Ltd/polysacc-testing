'use client'

import { useId } from 'react'

interface MolecularPatternProps {
  variant?: 'dark' | 'light'
}

export default function MolecularPattern({ variant = 'dark' }: MolecularPatternProps) {
  const uid = useId().replace(/:/g, '')
  const patternId = `mol-${variant}-${uid}`

  const lineColor =
    variant === 'dark'
      ? 'rgba(200,137,58,0.08)'
      : 'rgba(42,42,38,0.06)'

  const nodeColor =
    variant === 'dark'
      ? 'rgba(200,137,58,0.13)'
      : 'rgba(42,42,38,0.10)'

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ animation: 'mol-drift 22s ease-in-out infinite' }}
    >
      <svg
        width="110%"
        height="110%"
        style={{ marginLeft: '-5%', marginTop: '-5%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/*
            Flat-top hex tessellation: side S=30
            Width = 2S = 60, Height = S·√3 ≈ 51.96
            Tile: 90 × 52
            Main hex centred at (45, 26)
          */}
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="90"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            {/* Main hex at (45, 26) */}
            <path
              d="M 75 26 L 60 52 L 30 52 L 15 26 L 30 0 L 60 0 Z"
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
            {/* Corner hex top-left (0, 0) — partially visible */}
            <path
              d="M 30 0 L 15 26 L -15 26 L -30 0 L -15 -26 L 15 -26 Z"
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
            {/* Corner hex top-right (90, 0) — partially visible */}
            <path
              d="M 120 0 L 105 26 L 75 26 L 60 0 L 75 -26 L 105 -26 Z"
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
            {/* Corner hex bottom-left (0, 52) — partially visible */}
            <path
              d="M 30 52 L 15 78 L -15 78 L -30 52 L -15 26 L 15 26 Z"
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
            {/* Corner hex bottom-right (90, 52) — partially visible */}
            <path
              d="M 120 52 L 105 78 L 75 78 L 60 52 L 75 26 L 105 26 Z"
              fill="none"
              stroke={lineColor}
              strokeWidth="0.5"
            />
            {/* Atom nodes at main hex vertices */}
            <circle cx="75" cy="26" r="1.5" fill={nodeColor} />
            <circle cx="60" cy="52" r="1.5" fill={nodeColor} />
            <circle cx="30" cy="52" r="1.5" fill={nodeColor} />
            <circle cx="15" cy="26" r="1.5" fill={nodeColor} />
            <circle cx="30" cy="0"  r="1.5" fill={nodeColor} />
            <circle cx="60" cy="0"  r="1.5" fill={nodeColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}
