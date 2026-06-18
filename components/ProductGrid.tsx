'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  { id: 'polysaccharide-pentosan', num: '01', label: 'Polysaccharide Speciality',         tag: 'Bladder Health · IC/BPS',  color: '100, 160, 155' },
  { id: 'iron-complex',            num: '02', label: 'Iron Complex Finished Dosages',     tag: 'Haematology · Anaemia',    color: '138, 171, 138' },
  { id: 'methylcobalamine',        num: '03', label: 'Methylcobalamine in Neuropathy',    tag: 'Neuropathy · Hematinics',  color: '160, 195, 160' },
  { id: 'anabolic-steroids',       num: '04', label: 'Anabolic Steroids',                 tag: 'Endocrinology',            color: '90, 140, 90'   },
  { id: 'dexamethasone',           num: '05', label: 'High Purity Dexamethasone',         tag: 'Corticosteroids',          color: '110, 155, 110' },
  { id: 'mens-health',             num: '06', label: "Men's Health Urology",              tag: 'Urology · BPH',            color: '176, 125, 58'  },
  { id: 'womens-health',           num: '07', label: "Women's Health",                    tag: 'Gynaecology · HRT',        color: '184, 205, 160' },
  { id: 'biochip',                 num: '08', label: 'Uro-Gyn Bladder Biochip',           tag: 'Biochip · Concept Stage',  color: '130, 165, 140' },
  { id: 'fda-505b2',               num: '09', label: 'US FDA 505(b)(2) Reformulations',   tag: 'Regulatory Strategy',      color: '115, 100, 158' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.065, ease: [0.22, 1, 0.36, 1] },
  }),
}

function CategoryCard({ cat, index }: { cat: typeof CATEGORIES[number]; index: number }) {
  const router = useRouter()
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true })
  }

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      onClick={() => router.push(`/products/${cat.id}`)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setMouse(m => ({ ...m, active: false })); setHovered(false) }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        background: hovered ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.58)',
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        border: hovered ? '1px solid rgba(255,255,255,0.9)' : '1px solid rgba(255,255,255,0.65)',
        boxShadow: hovered
          ? '0 12px 40px rgba(44,44,42,0.12), inset 0 1px 0 rgba(255,255,255,0.95)'
          : '0 4px 20px rgba(44,44,42,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
        padding: '2.25rem 2rem 2rem',
        minHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* Reactbits-style mouse spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: mouse.active
            ? `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(${cat.color}, 0.14), transparent 70%)`
            : 'transparent',
          transition: mouse.active ? 'none' : 'background 0.5s',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ghost oversized number — uiverse signature depth layer */}
      <span
        style={{
          position: 'absolute',
          right: '0.5rem',
          bottom: '-2rem',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '9rem',
          fontWeight: 300,
          lineHeight: 1,
          color: hovered
            ? `rgba(${cat.color}, 0.22)`
            : `rgba(${cat.color}, 0.09)`,
          userSelect: 'none',
          pointerEvents: 'none',
          transition: 'color 0.35s',
          zIndex: 0,
        }}
      >
        {cat.num}
      </span>

      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.57rem',
            fontWeight: 600,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            color: hovered ? `rgba(${cat.color}, 1)` : `rgba(${cat.color}, 0.55)`,
            background: hovered ? `rgba(${cat.color}, 0.12)` : `rgba(${cat.color}, 0.06)`,
            border: `0.5px solid rgba(${cat.color}, ${hovered ? '0.45' : '0.2'})`,
            padding: '0.22rem 0.65rem',
            transition: 'all 0.25s',
          }}
        >
          {cat.tag}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '0.55rem',
            color: 'rgba(44,44,42,0.18)',
            letterSpacing: '0.1em',
          }}
        >
          {cat.num}
        </span>
      </div>

      {/* Bottom: label + CTA */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.45rem',
            fontWeight: 300,
            color: hovered ? `rgba(${cat.color}, 0.9)` : 'var(--charcoal)',
            lineHeight: 1.2,
            margin: '0 0 1rem',
            transition: 'color 0.25s',
          }}
        >
          {cat.label}
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            borderTop: `0.5px solid rgba(${cat.color}, ${hovered ? '0.3' : '0.1'})`,
            paddingTop: '0.6rem',
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
              color: hovered ? `rgba(${cat.color}, 0.9)` : 'var(--pewter)',
              transition: 'color 0.25s',
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: hovered ? `rgba(${cat.color}, 0.9)` : 'var(--pewter)',
              fontSize: '0.78rem',
              transition: 'color 0.25s, transform 0.25s',
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
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

export default function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const inView  = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <section
      id="therapeutic-portfolio"
      style={{ padding: '7rem 6rem 7rem' }}
      className="section-pad basket-section"
    >
      <style>{`
        @keyframes gradientFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .basket-section {
          background: linear-gradient(-45deg, var(--hero-grey), var(--sage-pale), #eef4ee, var(--hero-grey));
          background-size: 400% 400%;
          animation: gradientFlow 18s ease infinite;
        }
        .basket-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .basket-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .basket-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            marginBottom: '4rem',
            alignItems: 'end',
          }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
              Therapeutic Portfolio
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.15,
              }}
            >
              Nine baskets.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>One discipline.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.85,
            }}
          >
            Each category represents sourcing depth, regulatory navigation, and market
            understanding built over years. Click any card to navigate.
          </p>
        </div>

        {/* Spotlight grid */}
        <motion.div
          ref={gridRef}
          className="basket-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
