'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

const BASKETS = [
  {
    id: 'polysaccharide-pentosan',
    num: '01',
    label: 'Polysaccharide Speciality',
    tag: 'Bladder Health · IC/BPS',
    detail: 'PPS — the GAG-layer repair molecule',
    accent: '100, 160, 155',
  },
  {
    id: 'iron-complex',
    num: '02',
    label: 'Iron Complex Finished Dosages',
    tag: 'Haematology · Anaemia',
    detail: 'Nano-complex iron for IV & oral therapy',
    accent: '138, 171, 138',
  },
  {
    id: 'methylcobalamine',
    num: '03',
    label: 'Methylcobalamine in Neuropathy',
    tag: 'Neuropathy · Hematinics',
    detail: 'Active coenzyme B12 for nerve repair',
    accent: '160, 195, 160',
  },
  {
    id: 'anabolic-steroids',
    num: '04',
    label: 'Anabolic Steroids',
    tag: 'Endocrinology',
    detail: 'Testosterone ester portfolio — 9 variants',
    accent: '90, 140, 90',
  },
  {
    id: 'dexamethasone',
    num: '05',
    label: 'High Purity Dexamethasone',
    tag: 'Corticosteroids',
    detail: 'BJPPL Vapi — GMP manufactured',
    accent: '110, 155, 110',
  },
  {
    id: 'mens-health',
    num: '06',
    label: "Men's Health Urology",
    tag: 'Urology · BPH',
    detail: 'Alpha blockers, 5-ARIs & beta-3 agonists',
    accent: '176, 125, 58',
  },
  {
    id: 'womens-health',
    num: '07',
    label: "Women's Health",
    tag: 'Gynaecology · HRT',
    detail: 'Hormonal & gynaecological APIs',
    accent: '184, 205, 160',
  },
  {
    id: 'biochip',
    num: '08',
    label: 'Uro-Gyn Bladder Biochip',
    tag: 'Biochip · Concept Stage',
    detail: 'In-body IC/BPS flare sensing concept',
    accent: '130, 165, 140',
  },
  {
    id: 'fda-505b2',
    num: '09',
    label: 'US FDA 505(b)(2) Reformulations',
    tag: 'Regulatory Strategy',
    detail: 'Reformulation & new-route pipeline',
    accent: '115, 100, 158',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.2 },
  },
}

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

function BasketCard({ basket, index }: { basket: typeof BASKETS[number]; index: number }) {
  const router = useRouter()
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false })
  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top, active: true })
  }

  const handleClick = () => {
    setClicking(true)
    setTimeout(() => router.push(`/products/${basket.id}`), 320)
  }

  return (
    <motion.div
      variants={card}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setMouse(m => ({ ...m, active: false })); setHovered(false) }}
      animate={clicking ? { scale: 0.96, opacity: 0.7 } : { scale: 1, opacity: 1 }}
      transition={clicking ? { duration: 0.25, ease: 'easeIn' } : undefined}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        background: hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(24px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.5)',
        border: hovered
          ? `1px solid rgba(${basket.accent}, 0.45)`
          : '1px solid rgba(255,255,255,0.75)',
        boxShadow: hovered
          ? `0 16px 48px rgba(44,44,42,0.12), inset 0 1px 0 rgba(255,255,255,0.95)`
          : '0 4px 24px rgba(44,44,42,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
        padding: '2.5rem 2.25rem 2.25rem',
        minHeight: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: hovered
          ? 'background 0.25s, border 0.25s, box-shadow 0.25s, transform 0.3s cubic-bezier(0.22,1,0.36,1)'
          : 'background 0.4s, border 0.4s, box-shadow 0.4s, transform 0.5s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: mouse.active
            ? `radial-gradient(320px circle at ${mouse.x}px ${mouse.y}px, rgba(${basket.accent}, 0.18), transparent 65%)`
            : 'transparent',
          transition: mouse.active ? 'none' : 'background 0.6s',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ghost number */}
      <span
        style={{
          position: 'absolute',
          right: '0.75rem',
          bottom: '-2.5rem',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '10rem',
          fontWeight: 300,
          lineHeight: 1,
          color: hovered
            ? `rgba(${basket.accent}, 0.28)`
            : `rgba(${basket.accent}, 0.1)`,
          userSelect: 'none',
          pointerEvents: 'none',
          transition: 'color 0.4s',
          zIndex: 0,
        }}
      >
        {basket.num}
      </span>

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.57rem',
            fontWeight: 600,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            color: hovered ? `rgba(${basket.accent}, 1)` : `rgba(${basket.accent}, 0.7)`,
            background: hovered ? `rgba(${basket.accent}, 0.18)` : `rgba(${basket.accent}, 0.1)`,
            border: `0.5px solid rgba(${basket.accent}, ${hovered ? '0.55' : '0.25'})`,
            padding: '0.22rem 0.65rem',
            transition: 'all 0.25s',
          }}
        >
          {basket.tag}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '0.55rem',
            color: 'rgba(44,44,42,0.18)',
            letterSpacing: '0.1em',
          }}
        >
          {basket.num}
        </span>
      </div>

      {/* Bottom */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.5rem',
            fontWeight: 300,
            color: hovered ? `rgba(${basket.accent}, 0.9)` : 'var(--charcoal)',
            lineHeight: 1.2,
            margin: '0 0 0.55rem',
            transition: 'color 0.25s',
          }}
        >
          {basket.label}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.72rem',
            fontWeight: 300,
            color: hovered ? `rgba(${basket.accent}, 0.9)` : 'var(--muted)',
            margin: '0 0 1.1rem',
            letterSpacing: '0.02em',
            transition: 'color 0.25s',
          }}
        >
          {basket.detail}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            borderTop: `0.5px solid rgba(${basket.accent}, ${hovered ? '0.4' : '0.15'})`,
            paddingTop: '0.7rem',
            transition: 'border-color 0.25s',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.54rem',
              fontWeight: 600,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: hovered ? `rgba(${basket.accent}, 0.9)` : 'var(--pewter)',
              transition: 'color 0.25s',
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: hovered ? `rgba(${basket.accent}, 0.9)` : 'var(--pewter)',
              fontSize: '0.78rem',
              transition: 'color 0.25s, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
              transform: hovered ? 'translateX(5px)' : 'translateX(0)',
              display: 'inline-block',
            }}
          >
            →
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function CataloguePage() {
  return (
    <>
      <style>{`
        @keyframes bgShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .catalogue-bg {
          background: linear-gradient(
            -40deg,
            var(--hero-grey),
            var(--sage-pale),
            #eef4ee,
            var(--cream),
            var(--hero-grey)
          );
          background-size: 400% 400%;
          animation: bgShift 22s ease infinite;
        }
        .catalogue-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .catalogue-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .catalogue-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        className="catalogue-bg"
        style={{ minHeight: '100vh', padding: '8rem 5rem 6rem' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '4rem' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-jetbrains)',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                margin: '0 0 1rem',
              }}
            >
              Therapeutic Catalogue
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.05,
                margin: '0 0 1rem',
              }}
            >
              Nine baskets.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>
                One discipline.
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--muted)',
                maxWidth: '520px',
                lineHeight: 1.8,
              }}
            >
              Each category represents sourcing depth, regulatory navigation, and market
              understanding built over years. Select any basket to explore.
            </p>
          </motion.div>

          {/* 3×3 Grid */}
          <motion.div
            className="catalogue-grid"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {BASKETS.map((basket, i) => (
              <BasketCard key={basket.id} basket={basket} index={i} />
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.72rem',
              fontWeight: 300,
              color: 'var(--pewter)',
              letterSpacing: '0.05em',
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            Polysaccharide Chemistry Pvt Ltd · Mumbai · All APIs GMP-certified
          </motion.p>

        </div>
      </section>
    </>
  )
}
