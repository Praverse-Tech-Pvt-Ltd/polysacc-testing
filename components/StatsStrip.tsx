'use client'

import { STATS } from '@/lib/data'
import CountUp from './reactbits/CountUp'

function parseStatForCountUp(value: string) {
  if (value === '5/7')  return { to: 5, suffix: '/7', separator: '' }
  if (value.endsWith('+')) return { to: parseInt(value), suffix: '+', separator: '' }
  if (value.endsWith('%')) return { to: parseInt(value), suffix: '%', separator: '' }
  const num = parseInt(value.replace(/,/g, ''))
  return { to: num, suffix: '', separator: ',' }
}

export default function StatsStrip() {
  return (
    <section
      style={{
        background: 'var(--sage-pale)',
        position: 'relative',
        borderTop: '0.5px solid rgba(138,171,138,0.25)',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
        className="responsive-stats"
      >
        {STATS.map((stat, i) => {
          const { to, suffix, separator } = parseStatForCountUp(stat.value)
          return (
            <div
              key={stat.label}
              style={{
                borderLeft: i > 0 ? '0.5px solid rgba(138,171,138,0.25)' : 'none',
              }}
              className="responsive-stat-card"
            >
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 2rem',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '4rem',
                    fontWeight: 300,
                    color: 'var(--sage-deep)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  <CountUp
                    from={0}
                    to={to}
                    duration={1.8}
                    separator={separator}
                  />
                  {suffix && (
                    <span style={{ fontSize: '2.5rem' }}>{suffix}</span>
                  )}
                </div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    maxWidth: 180,
                    margin: '0 auto',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
