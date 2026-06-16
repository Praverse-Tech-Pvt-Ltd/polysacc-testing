'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import ShinyText from './reactbits/ShinyText'

const Threads = dynamic(() => import('./Threads'), { ssr: false })

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
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
        background: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 1.5rem 5rem',
        overflow: 'hidden',
      }}
    >
      {/* Running threads background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.22,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <Threads
          color={[0.29, 0.48, 0.29]}
          amplitude={1.4}
          distance={0.75}
        />
      </div>

      {/* Subtle radial vignette to lift centre content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(248,246,241,0.82) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, width: '100%' }}>
        {/* Logo */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '2.5rem' }}
        >
          <Image
            src="/logo.png"
            alt="Polysacc"
            width={340}
            height={120}
            priority
            style={{
              width: 'clamp(200px, 45vw, 340px)',
              height: 'auto',
              margin: '0 auto',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Section tag */}
        <motion.div
          custom={0.12}
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
              color="rgba(138,171,138,0.7)"
              shineColor="#4a7a4a"
              speed={4}
              spread={90}
            />
          </p>
          <div
            style={{
              width: 60,
              height: '0.5px',
              background: 'rgba(138,171,138,0.6)',
              margin: '0 auto 2.5rem',
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
            lineHeight: 1.08,
            marginBottom: '1.75rem',
            letterSpacing: '0.01em',
            fontWeight: 300,
          }}
        >
          <span style={{ fontStyle: 'italic', color: 'var(--charcoal)', display: 'block', marginBottom: '0.1em' }}>
            Advancing the science of
          </span>
          <span style={{ color: 'var(--sage)', display: 'block' }}>
            polysaccharide niche therapeutics
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={0.38}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.05rem',
            fontWeight: 300,
            color: 'var(--muted)',
            maxWidth: 540,
            margin: '0 auto 3rem',
            lineHeight: 1.75,
          }}
        >
          A Mumbai-based pharmaceutical chemistry company specialising in
          polysaccharide-based therapeutics for unmet clinical needs.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={0.5}
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
          <Link href="/about" className="btn-ghost-charcoal">
            About the Company
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginTop: '4.5rem' }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 400,
              margin: '0 auto',
              borderTop: '0.5px solid rgba(138,171,138,0.25)',
              paddingTop: '1.5rem',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.78rem',
              fontWeight: 300,
              color: 'var(--muted)',
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
