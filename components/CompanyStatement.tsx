'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BlurText from './reactbits/BlurText'
import { COMPANY } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function CompanyStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bone)',
        padding: '8rem 6rem',
      }}
      className="section-pad"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="grid-cols-1 lg:grid-cols-[2fr_3fr]"
      >
        {/* Left column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            The Company
          </p>
          <BlurText
            text="A different kind of pharmaceutical company"
            tag="h2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '3rem',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}
            delay={85}
            stepDuration={0.32}
            direction="bottom"
          />
          <div
            style={{
              width: 40,
              height: '0.5px',
              background: 'var(--amber)',
            }}
          />
        </motion.div>

        {/* Right column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {[
            `Polysaccharide Chemistry Pvt Ltd is a pharmaceutical chemistry company headquartered in Mumbai, India. We specialise in the development, manufacture, and commercialisation of polysaccharide-based therapeutics — molecules engineered to replicate, restore, or augment the body's own carbohydrate chemistry.`,
            `Our flagship therapeutic, Elmiron® (Pentosan Polysulfate Sodium), is India's only oral PPS formulation — a semi-synthetic heparin analogue that repairs the bladder's glycosaminoglycan (GAG) layer in patients with Interstitial Cystitis and Bladder Pain Syndrome. Backed by 35+ years of global clinical evidence across 7 randomised controlled trials, it represents the gold standard in bladder mucosal repair therapy.`,
            `Alongside our product portfolio, we lead the Missed Bladder Disease initiative — a structured physician education programme addressing the diagnostic gap in women's bladder health across India, led by Dr. Sanjay Pandey and Team BladderHealthWomen.`,
          ].map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                fontWeight: i === 0 ? 300 : 300,
                color: 'var(--ink)',
                lineHeight: 1.9,
                marginBottom: '1.75rem',
              }}
            >
              {para}
            </motion.p>
          ))}

          {/* Divider */}
          <div
            style={{
              borderTop: '0.5px solid rgba(42,42,38,0.15)',
              margin: '2rem 0',
            }}
          />

          {/* Address */}
          <motion.div variants={fadeUp}>
            <p
              className="section-tag"
              style={{ color: 'var(--amber)', marginBottom: '0.75rem' }}
            >
              Registered Office
            </p>
            <address
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.88rem',
                fontWeight: 300,
                color: 'var(--pewter)',
                lineHeight: 2,
                fontStyle: 'normal',
              }}
            >
              {COMPANY.address.line1}<br />
              {COMPANY.address.line2}<br />
              {COMPANY.address.line3}<br />
              {COMPANY.address.city} – {COMPANY.address.pin}<br />
              {COMPANY.address.state}
            </address>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
