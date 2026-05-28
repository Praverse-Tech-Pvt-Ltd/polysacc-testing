'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import MolecularPattern from './MolecularPattern'
import BlurText from './reactbits/BlurText'
import ShinyText from './reactbits/ShinyText'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--obsidian)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 5rem',
        overflow: 'hidden',
      }}
    >
      <MolecularPattern variant="dark" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, width: '100%' }}>
        {/* Section tag — ShinyText amber shine */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <ShinyText
              text="Polysaccharide Chemistry Pvt Ltd"
              color="rgba(200,137,58,0.7)"
              shineColor="#f5e9d6"
              speed={4}
              spread={90}
            />
          </p>
          <div
            style={{
              width: 60,
              height: '0.5px',
              background: 'rgba(200,137,58,0.6)',
              margin: '0 auto 3rem',
            }}
          />
        </motion.div>

        {/* Heading — BlurText word-by-word reveal */}
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3.5rem, 7vw, 7rem)',
            lineHeight: 1.05,
            marginBottom: '2rem',
            letterSpacing: '0.01em',
            fontWeight: 300,
          }}
        >
          <BlurText
            text="Advancing the science of"
            tag="div"
            style={{
              fontStyle: 'italic',
              color: 'var(--bone)',
              justifyContent: 'center',
              marginBottom: '0.1em',
            }}
            delay={80}
            stepDuration={0.38}
            direction="top"
          />
          <BlurText
            text="polysaccharide therapeutics"
            tag="div"
            style={{
              color: 'var(--amber)',
              justifyContent: 'center',
            }}
            delay={100}
            stepDuration={0.38}
            direction="bottom"
          />
        </h1>

        {/* Subheading */}
        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.05rem',
            fontWeight: 300,
            color: 'var(--pewter)',
            maxWidth: 560,
            margin: '0 auto 3rem',
            lineHeight: 1.7,
          }}
        >
          A Mumbai-based pharmaceutical chemistry company specialising in
          polysaccharide-based therapeutics for unmet clinical needs.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/portfolio" className="btn-primary">
            Our Portfolio
          </Link>
          <Link href="/about" className="btn-ghost-bone">
            About the Company
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginTop: '5rem' }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 400,
              margin: '0 auto',
              borderTop: '0.5px solid rgba(212,201,184,0.15)',
              paddingTop: '1.5rem',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.78rem',
              fontWeight: 300,
              color: 'var(--pewter)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            ↓ Scroll
          </p>
        </motion.div>
      </div>
    </section>
  )
}
