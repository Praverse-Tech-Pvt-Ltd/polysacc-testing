'use client'

import { useState, useEffect, useRef } from 'react'

const CATEGORIES = [
  { id: 'niche', label: 'Our Niche' },
  { id: 'iron-complex', label: 'Iron Complex' },
  { id: 'vitamin-b12', label: 'Vitamin B12' },
  { id: 'mcb', label: 'MCB' },
  { id: 'steroids', label: 'Steroids' },
  { id: 'anabolic-steroids', label: 'Anabolic Steroids' },
  { id: 'mens-health', label: "Men's Health" },
  { id: 'womens-health', label: "Women's Health" },
  { id: 'devices', label: 'Devices' },
  { id: 'db-dsp', label: 'DB / DSP' },
  { id: 'team', label: 'Team' },
]

export default function ProductCategoryNav() {
  const [active, setActive] = useState('niche')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    CATEGORIES.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 112
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setActive(id)
  }

  return (
    <div
      style={{
        position: 'sticky',
        top: 64,
        zIndex: 40,
        background: 'rgba(248,246,241,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
        boxShadow: '0 1px 0 rgba(138,171,138,0.15)',
      }}
    >
      <div
        ref={scrollRef}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 6rem',
          display: 'flex',
          gap: 0,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="cat-nav-inner"
      >
        {CATEGORIES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.78rem',
              fontWeight: active === id ? 500 : 300,
              letterSpacing: '0.04em',
              color: active === id ? 'var(--sage-deep)' : 'var(--muted)',
              background: 'none',
              border: 'none',
              borderBottom: active === id ? '2px solid var(--sage)' : '2px solid transparent',
              padding: '1rem 1.25rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
