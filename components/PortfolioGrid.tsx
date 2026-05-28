'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MolecularPattern from './MolecularPattern'
import BlurText from './reactbits/BlurText'
import { PORTFOLIO } from '@/lib/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export default function PortfolioGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--obsidian)',
        padding: '8rem 6rem',
        overflow: 'hidden',
      }}
      className="section-pad"
    >
      <MolecularPattern variant="dark" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Portfolio
          </p>
          <BlurText
            text="Two distinct platforms."
            tag="h2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--bone)',
              lineHeight: 1.1,
              marginBottom: '1rem',
              justifyContent: 'center',
            }}
            delay={100}
            stepDuration={0.32}
            direction="bottom"
          />
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--pewter)',
              letterSpacing: '0.04em',
            }}
          >
            One scientific foundation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
          className="responsive-split"
        >
          {PORTFOLIO.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(200,137,58,0.2)',
                borderLeft: '3px solid var(--amber)',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="mobile-card-pad-lg"
            >
              {/* Tag */}
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--amber-pale)',
                  color: 'var(--amber)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem',
                  marginBottom: '1.5rem',
                  alignSelf: 'flex-start',
                }}
              >
                {item.tag}
              </span>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: 'var(--bone)',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                {item.name}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'var(--pewter)',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.03em',
                }}
              >
                {item.subtitle}
              </p>

              {/* Divider */}
              <div style={{ borderTop: '0.5px solid rgba(212,201,184,0.15)', marginBottom: '1.25rem' }} />

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(138,138,130,0.85)',
                  lineHeight: 1.85,
                  marginBottom: '1.5rem',
                  flex: 1,
                }}
              >
                {item.description}
              </p>

              {/* Detail */}
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '0.78rem',
                  color: 'rgba(200,137,58,0.7)',
                  marginBottom: '2rem',
                  letterSpacing: '0.02em',
                }}
              >
                {item.detail}
              </p>

              {/* Link button — CSS class handles hover */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-external-link"
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
