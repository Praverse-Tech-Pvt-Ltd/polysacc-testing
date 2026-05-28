'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MolecularPattern from './MolecularPattern'
import BlurText from './reactbits/BlurText'
import { SCIENCE_PILLARS } from '@/lib/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export default function ScienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--parchment)',
        padding: '8rem 6rem',
        overflow: 'hidden',
      }}
      className="section-pad"
    >
      <MolecularPattern variant="light" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '1rem' }}
        >
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            The Science
          </p>
          <BlurText
            text="The Science of Polysaccharide Therapeutics"
            tag="h2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              maxWidth: 640,
            }}
            delay={90}
            stepDuration={0.32}
            direction="bottom"
          />
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--pewter)',
              maxWidth: 600,
              lineHeight: 1.75,
              marginBottom: '4rem',
            }}
          >
            Polysaccharides are nature's most sophisticated polymers — the molecular scaffolding
            of biological surfaces, immune signalling, and structural integrity. We work within
            this complexity to build therapeutics of exceptional precision.
          </p>
        </motion.div>

        {/* 3-column card grid — 1px gap on parchment = visible dividers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--parchment)',
          }}
          className="responsive-three"
        >
          {SCIENCE_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.name}
              variants={fadeUp}
              style={{
                background: 'var(--bone)',
                padding: '2.5rem 2rem',
              }}
              className="mobile-card-pad"
            >
              {/* Formula */}
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  color: 'var(--amber)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.02em',
                }}
              >
                {pillar.formula}
              </p>
              <div
                style={{
                  width: 30,
                  height: '0.5px',
                  background: 'var(--amber)',
                  marginBottom: '1.25rem',
                }}
              />
              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--ink)',
                  marginBottom: '0.9rem',
                  lineHeight: 1.3,
                }}
              >
                {pillar.name}
              </h3>
              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  color: 'var(--pewter)',
                  lineHeight: 1.8,
                }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
