'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Polysaccharide hexagonal ring glyph ──────────────────────── */
function MoleculeGlyph({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      {/* Outer ring atoms */}
      <circle cx="26" cy="5.5"  r="3.8" fill="currentColor" opacity="0.9" />
      <circle cx="44.5" cy="15.5" r="3.8" fill="currentColor" opacity="0.9" />
      <circle cx="44.5" cy="36.5" r="3.8" fill="currentColor" opacity="0.9" />
      <circle cx="26" cy="46.5" r="3.8" fill="currentColor" opacity="0.9" />
      <circle cx="7.5"  cy="36.5" r="3.8" fill="currentColor" opacity="0.9" />
      <circle cx="7.5"  cy="15.5" r="3.8" fill="currentColor" opacity="0.9" />
      {/* Hexagonal bond ring */}
      <polygon
        points="26,9.3 40.7,17.5 40.7,33.5 26,41.7 11.3,33.5 11.3,17.5"
        stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.28" fill="none"
      />
      {/* Centre atom */}
      <circle cx="26" cy="26" r="4.5" fill="currentColor" opacity="0.45" />
      {/* Spokes */}
      <line x1="26" y1="21.5" x2="26" y2="9.3"       stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="29.8" y1="23.2" x2="40.7" y2="17.5"  stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="29.8" y1="28.8" x2="40.7" y2="34.5"  stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="26" y1="30.5" x2="26" y2="42.7"      stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="22.2" y1="28.8" x2="11.3" y2="34.5"  stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="22.2" y1="23.2" x2="11.3" y2="17.5"  stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.25" />
      {/* Satellite OH groups */}
      <line x1="26" y1="1.7" x2="26" y2="5.5"         stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="44.5" y1="11.7" x2="44.5" y2="15.5"   stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="44.5" y1="40.3" x2="44.5" y2="36.5"   stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  )
}

/* ── Moving icon along SVG path ───────────────────────────────── */
interface TrailState {
  path: string         // SVG path d attribute (viewport coords)
  iconX: number        // icon centre x at start
  iconY: number        // icon centre y at start
}

export default function PhilosophyScrollGuide() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [phase, setPhase] = useState<'idle' | 'animating'>('idle')
  const [trail, setTrail] = useState<TrailState | null>(null)
  const [movingPos, setMovingPos] = useState({ x: 0, y: 0 })
  const [pathDrawn, setPathDrawn] = useState(0) // 0→1 for dash animation

  const badgeRef  = useRef<HTMLDivElement>(null)
  const svgPathEl = useRef<SVGPathElement>(null)
  const rafRef    = useRef<number>()

  /* show badge only while hero is on screen */
  useEffect(() => {
    const hero = document.querySelector('.page-hero') as HTMLElement | null
    if (!hero) return
    const obs = new IntersectionObserver(
      ([e]) => setHeroVisible(e.isIntersecting),
      { threshold: 0.05 }
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  /* ── click handler ──────────────────────────────────────── */
  const handleClick = useCallback(() => {
    if (phase !== 'idle' || !badgeRef.current) return
    const target = document.getElementById('niche')
    if (!target) return

    const badge = badgeRef.current.getBoundingClientRect()
    const sx = badge.left + badge.width  / 2
    const sy = badge.top  + badge.height / 2

    /* End point: where #niche will be after scroll (fixed viewport coords) */
    const ex = window.innerWidth  * 0.50   // centre-left
    const ey = window.innerHeight * 0.18   // near top of viewport

    /*
      Cubic bezier: start top-right → sweep outward right → arc left+down → land centre
      cp1: push right to create the outward bow
      cp2: pull back in towards the landing zone
    */
    const cp1x = sx + 140
    const cp1y = sy + (ey - sy) * 0.25
    const cp2x = ex + 80
    const cp2y = sy + (ey - sy) * 0.72

    const d = `M ${sx} ${sy} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${ex} ${ey}`

    setTrail({ path: d, iconX: sx, iconY: sy })
    setMovingPos({ x: sx, y: sy })
    setPathDrawn(0)
    setPhase('animating')

    /* Smooth scroll so the target lands near ey */
    const scrollTo = target.getBoundingClientRect().top + window.scrollY
      - window.innerHeight * 0.18 - 80
    window.scrollTo({ top: Math.max(0, scrollTo), behavior: 'smooth' })
  }, [phase])

  /* ── RAF animation: icon follows path + dash grows ───────── */
  useEffect(() => {
    if (phase !== 'animating' || !trail) return

    const DURATION = 2400 // ms
    let startTime: number | null = null

    const tick = (ts: number) => {
      if (!startTime) startTime = ts
      const raw  = (ts - startTime) / DURATION
      const t    = Math.min(raw, 1)

      /* ease-in-out cubic */
      const eased = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

      setPathDrawn(eased)

      /* position along path via SVGPathElement.getPointAtLength */
      if (svgPathEl.current) {
        const total = svgPathEl.current.getTotalLength()
        const pt    = svgPathEl.current.getPointAtLength(eased * total)
        setMovingPos({ x: pt.x, y: pt.y })
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        /* hold briefly, then reset */
        setTimeout(() => {
          setPhase('idle')
          setTrail(null)
          setPathDrawn(0)
        }, 350)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [phase, trail])

  /* ── total SVG dash for the curve ────────────────────────── */
  const totalLen = svgPathEl.current?.getTotalLength() ?? 900
  const dashOffset = totalLen * (1 - pathDrawn)

  return (
    <>
      {/* ── Floating badge (fixed, right side) ───────────────── */}
      <AnimatePresence>
        {heroVisible && phase === 'idle' && (
          <motion.div
            ref={badgeRef}
            key="badge"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={handleClick}
            title="Scroll to The Polysacc Philosophy"
            style={{
              position: 'fixed',
              right: '1.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 45,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.55rem',
              color: 'var(--sage-deep)',
              background: 'rgba(248,246,241,0.93)',
              border: '0.5px solid rgba(138,171,138,0.5)',
              borderRadius: '40px',
              padding: '1rem 0.7rem 0.85rem',
              backdropFilter: 'blur(10px)',
              boxShadow:
                '0 2px 12px rgba(0,0,0,0.07), 0 0 0 0px rgba(138,171,138,0)',
              userSelect: 'none',
            }}
          >
            {/* Pulse ring */}
            <motion.span
              animate={{
                scale:   [1, 1.18, 1],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: -7,
                borderRadius: 47,
                border: '1px solid rgba(138,171,138,0.55)',
                pointerEvents: 'none',
              }}
            />

            {/* Second outer pulse, offset phase */}
            <motion.span
              animate={{
                scale:   [1, 1.32, 1],
                opacity: [0.15, 0.32, 0.15],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
              style={{
                position: 'absolute',
                inset: -14,
                borderRadius: 54,
                border: '1px solid rgba(138,171,138,0.3)',
                pointerEvents: 'none',
              }}
            />

            {/* Icon */}
            <MoleculeGlyph size={34} />

            {/* Label */}
            <span
              style={{
                writingMode: 'vertical-rl',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.54rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--sage-deep)',
                opacity: 0.65,
                lineHeight: 1,
              }}
            >
              Philosophy
            </span>

            {/* Bouncing arrow */}
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.7rem',
                color: 'var(--sage)',
                opacity: 0.55,
                lineHeight: 1,
              }}
            >
              ↓
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full-viewport animation overlay ──────────────────── */}
      {phase === 'animating' && trail && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            pointerEvents: 'none',
          }}
        >
          {/* SVG: dashed curve + trailing glow dot */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* invisible reference path for getPointAtLength */}
            <path
              ref={svgPathEl}
              d={trail.path}
              fill="none"
              stroke="none"
            />

            {/* Animated dashed trace */}
            <path
              d={trail.path}
              fill="none"
              stroke="rgba(138,171,138,0.35)"
              strokeWidth="1.5"
              strokeDasharray={`${totalLen}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              style={{ transition: 'none' }}
            />

            {/* Faint glow behind the dashed line */}
            <path
              d={trail.path}
              fill="none"
              stroke="rgba(138,171,138,0.10)"
              strokeWidth="5"
              strokeDasharray={`${totalLen}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />

            {/* Trailing dot at current position */}
            <circle
              cx={movingPos.x}
              cy={movingPos.y}
              r="3.5"
              fill="rgba(91,130,91,0.8)"
            />
            {/* Glow behind trailing dot */}
            <circle
              cx={movingPos.x}
              cy={movingPos.y}
              r="7"
              fill="rgba(138,171,138,0.2)"
            />
          </svg>

          {/* Travelling molecule icon */}
          <div
            style={{
              position: 'absolute',
              left: movingPos.x - 24,
              top:  movingPos.y - 24,
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(248,246,241,0.92)',
              border: '0.5px solid rgba(138,171,138,0.55)',
              borderRadius: '50%',
              boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
              color: 'var(--sage-deep)',
              backdropFilter: 'blur(6px)',
              transition: 'none',
            }}
          >
            <MoleculeGlyph size={28} />
          </div>
        </div>
      )}
    </>
  )
}
