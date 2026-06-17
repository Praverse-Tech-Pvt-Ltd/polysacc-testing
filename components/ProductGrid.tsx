'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const QUANTITY   = 10
const AUTO_SPEED = 0.038
const DRAG_SENS  = 0.40
const FRICTION   = 0.91
const STEP       = 360 / QUANTITY   // 36° per card slot

const CATEGORIES = [
  { id: 'polysaccharide-pentosan', num: '01', label: 'Polysaccharide & Pentosan', tag: 'Bladder Health',        color: '100, 160, 155' },
  { id: 'iron-complex',            num: '02', label: 'Iron Complex',              tag: 'Haematology',           color: '138, 171, 138' },
  { id: 'vitamin-b12',             num: '03', label: 'Vitamin B12',               tag: 'Metabolic',             color: '160, 195, 160' },
  { id: 'mcb',                     num: '04', label: 'MCB · Neuropathy',          tag: 'Neurology',             color: '74, 122, 74'   },
  { id: 'steroids',                num: '05', label: 'Steroids',                  tag: 'Corticosteroids',       color: '110, 155, 110' },
  { id: 'anabolic-steroids',       num: '06', label: 'Anabolic Steroids',         tag: 'Endocrinology',         color: '90, 140, 90'   },
  { id: 'mens-health',             num: '07', label: 'Urology · Bladder',         tag: 'Bladder Disease',       color: '176, 125, 58'  },
  { id: 'womens-health',           num: '08', label: "Women's Health",            tag: 'Gynaecology · OCP',     color: '184, 205, 160' },
  { id: 'devices',                 num: '09', label: 'Uro-Gyn Devices',           tag: 'Medical Devices',       color: '130, 165, 140' },
  { id: 'sleep',                   num: '10', label: 'Sleep Solutions',           tag: 'Neuroscience',          color: '115, 100, 158' },
]

/* ─── styled shell ─────────────────────────────────────────── */
const Shell = styled.div`
  .stage {
    width: 100%;
    height: 620px;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: none;
    outline: none;
  }
  .stage.dragging { cursor: grabbing; }
  .c-ring { outline: none; }

  /* soft left / right fade */
  .stage::before,
  .stage::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 120px;
    z-index: 20;
    pointer-events: none;
  }
  .stage::before { left:  0; background: linear-gradient(to right, var(--charcoal) 10%, transparent); }
  .stage::after  { right: 0; background: linear-gradient(to left,  var(--charcoal) 10%, transparent); }

  /* the spinning ring */
  .c-ring {
    --w: 155px;
    --h: 228px;
    --tz: 430px;           /* larger radius = more gap between cards */
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 70px;
    left: calc(50% - var(--w) / 2);
    transform-style: preserve-3d;
  }

  /* individual card */
  .card {
    position: absolute;
    inset: 0;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(var(--color-card), 0.32);
    outline: none;
    transform:
      rotateY(calc(360deg / ${QUANTITY} * var(--idx)))
      translateZ(var(--tz));
    cursor: pointer;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .card:focus, .card:focus-visible { outline: none; }
  .card:hover {
    border-color: rgba(var(--color-card), 0.9);
    box-shadow: 0 0 28px rgba(var(--color-card), 0.32), 0 0 6px rgba(var(--color-card), 0.18) inset;
  }

  /* card face */
  .face {
    width: 100%;
    height: 100%;
    padding: 1.4rem 1.2rem 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:
      linear-gradient(
        175deg,
        rgba(var(--color-card), 0.10) 0%,
        rgba(var(--color-card), 0.58) 50%,
        rgba(var(--color-card), 0.96) 100%
      );
    position: relative;
  }

  .face::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: radial-gradient(ellipse at 20% 15%, rgba(255,255,255,0.10) 0%, transparent 60%);
    pointer-events: none;
  }

  .c-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.56rem;
    letter-spacing: 0.14em;
    color: rgba(248,246,241,0.5);
    position: relative; z-index: 1;
  }

  .c-body {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative; z-index: 1;
  }

  .c-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.48rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(248,246,241,0.52);
  }

  .c-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.22rem;
    font-weight: 300;
    line-height: 1.15;
    color: rgba(248,246,241,1);
    text-shadow: 0 2px 12px rgba(0,0,0,0.45);
  }

  .c-cta {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 0.5px solid rgba(248,246,241,0.18);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(248,246,241,0.38);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  .card:hover .c-cta { color: rgba(248,246,241,1); }

  /* drag hint */
  .hint {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.56rem;
    font-weight: 300;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(138,171,138,0.28);
    z-index: 30;
    pointer-events: none;
    white-space: nowrap;
  }
`

/* ─── component ────────────────────────────────────────────── */
export default function ProductGrid() {
  const router   = useRouter()
  const ringRef  = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number>()

  const rotY     = useRef(0)
  const vel      = useRef(0)
  const dragging = useRef(false)
  const startX   = useRef(0)
  const startRot = useRef(0)
  const lastX    = useRef(0)
  const frameVel = useRef(0)
  const movedPx  = useRef(0)

  /* animation loop */
  useEffect(() => {
    const tick = () => {
      if (!dragging.current) {
        if (Math.abs(vel.current) > 0.08) {
          rotY.current += vel.current
          vel.current  *= FRICTION
        } else {
          vel.current   = 0
          rotY.current += AUTO_SPEED
        }
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `perspective(1100px) rotateX(-10deg) rotateY(${rotY.current}deg)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  /* pointer handlers — window listeners instead of setPointerCapture to avoid Chrome's blue capture border */
  const onDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return
    dragging.current = true
    startX.current   = e.clientX
    startRot.current = rotY.current
    lastX.current    = e.clientX
    frameVel.current = 0
    movedPx.current  = 0
    vel.current      = 0
    stageRef.current?.classList.add('dragging')

    const handleMove = (ev: PointerEvent) => {
      if (!dragging.current) return
      const dx = ev.clientX - startX.current
      movedPx.current  = Math.abs(dx)
      frameVel.current = (ev.clientX - lastX.current) * DRAG_SENS
      lastX.current    = ev.clientX
      rotY.current     = startRot.current + dx * DRAG_SENS
    }

    const handleUp = () => {
      dragging.current = false
      stageRef.current?.classList.remove('dragging')
      vel.current = frameVel.current
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)

      if (movedPx.current < 10) {
        const raw = Math.round(-rotY.current / STEP)
        const idx = ((raw % QUANTITY) + QUANTITY) % QUANTITY
        router.push(`/products/${CATEGORIES[idx].id}`)
      }
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
  }, [router])

  return (
    <section
      id="therapeutic-portfolio"
      style={{ background: 'var(--charcoal)', padding: '7rem 6rem 3rem' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* section header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            marginBottom: '3rem',
            alignItems: 'end',
          }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
              Therapeutic Portfolio
            </p>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.15,
            }}>
              Ten areas.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>One discipline.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.9rem',
            fontWeight: 300,
            color: 'rgba(248,246,241,0.45)',
            lineHeight: 1.85,
          }}>
            Each category represents sourcing depth, regulatory navigation, and market
            understanding built over years. Drag to explore — click any card to navigate.
          </p>
        </div>

        {/* carousel */}
        <Shell>
          <div
            ref={stageRef}
            className="stage"
            onPointerDown={onDown}
          >
            <div
              ref={ringRef}
              className="c-ring"
              style={{ '--quantity': QUANTITY } as React.CSSProperties}
            >
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.id}
                  className="card"
                  style={{ '--idx': i, '--color-card': cat.color } as React.CSSProperties}
                >
                  <div className="face">
                    <span className="c-num">{cat.num}</span>
                    <div className="c-body">
                      <span className="c-tag">{cat.tag}</span>
                      <span className="c-name">{cat.label}</span>
                      <span className="c-cta">Explore ↗</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <span className="hint">⟵ &nbsp; drag to rotate · click to open &nbsp; ⟶</span>
          </div>
        </Shell>

      </div>
    </section>
  )
}
