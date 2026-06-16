'use client'

import { useState } from 'react'

const IRON_PRODUCTS = [
  { name: 'Iron III Polymaltose', category: 'Oral Complex', route: 'Oral', note: 'Fewer GI side effects vs. ferrous salts' },
  { name: 'Iron Polysaccharide', category: 'Oral Complex', route: 'Oral', note: 'Protected matrix; superior tolerability' },
  { name: 'Iron Sucrose', category: 'IV — Multi-session', route: 'Intravenous', note: '~200 mg per session; 5+ visits for full dose' },
  { name: 'Iron Dextran', category: 'IV — Older generation', route: 'Intravenous', note: 'First-generation IV iron; higher allergy vigilance' },
  { name: 'Ferric Carboxymaltose', category: 'IV — TDI High-dose', route: 'Intravenous', note: 'Up to 1,000 mg in a single infusion' },
  { name: 'Iron Isomaltoside', category: 'IV — TDI Full-dose', route: 'Intravenous', note: 'Up to 1,500 mg in one session (20 mg/kg)' },
]

const ACCORDIONS = [
  {
    title: 'Oral vs. Intravenous Iron',
    body: 'Oral iron salts (ferrous/ferric) are first-line for most patients. IV iron bypasses gastrointestinal absorption entirely — critical for patients with IBD, Crohn\'s disease, or post-bariatric surgery. Modern high-stability IV complexes (Ferric Carboxymaltose, Iron Isomaltoside) allow Total Dose Infusion — replacing the entire iron deficit in a single 15–60 minute visit.',
  },
  {
    title: 'Total Dose Infusion vs. Multi-Session',
    body: 'Multi-session protocols (Iron Sucrose) deliver ~200 mg over 5+ hospital visits. Total Dose Infusion (TDI) with high-stability complexes delivers 1,000–1,500 mg in a single session. While per-vial cost is higher for TDI, total system cost is lower due to reduced nursing time and hospital footprint.',
  },
  {
    title: 'Global Market Leaders',
    body: 'CSL Vifor (Switzerland) leads with Ferinject® (Ferric Carboxymaltose), commanding >50% market share in many EU regions. Pharmacosmos (Denmark) challenges with Monoferric® (Iron Isomaltoside), optimised for single-session full-dose administration. Both companies have faced European Commission scrutiny for anti-competitive conduct.',
  },
  {
    title: 'Regulatory Landscape',
    body: 'EU: EMA classifies IV irons as Non-Biological Complex Drugs (NBCDs), requiring clinical trials for generics — not simple bioequivalence. Brazil (ANVISA): strong local Iron Sucrose manufacturing (Blau, Eurofarma). Mexico (COFEPRIS): dual private-public market. China (NMPA): Ferinject reimbursed since 2024; 24.4% CAGR in IV iron market.',
  },
]

export default function IronComplexSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="iron-complex"
      style={{
        background: 'var(--sage-pale)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Haematinics</p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
            }}
          >
            Iron{' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Complex</span>
          </h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}
          className="responsive-split"
        >
          {/* Left: Product table */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1rem',
              }}
            >
              API Portfolio
            </p>
            <div style={{ border: '0.5px solid rgba(138,171,138,0.3)', overflow: 'hidden' }}>
              {/* Table head */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  background: 'var(--sage-deep)',
                  padding: '0.85rem 1.25rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 500, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Product</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 500, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Route</span>
              </div>
              {IRON_PRODUCTS.map((p, i) => (
                <div
                  key={p.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    padding: '1rem 1.25rem',
                    borderTop: i === 0 ? 'none' : '0.5px solid rgba(138,171,138,0.2)',
                    background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)',
                    gap: '1rem',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 400, color: 'var(--charcoal)', margin: '0 0 0.2rem' }}>{p.name}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0 }}>{p.note}</p>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 400,
                      color: p.route === 'Oral' ? 'var(--sage-deep)' : 'var(--amber)',
                      border: `0.5px solid ${p.route === 'Oral' ? 'var(--sage)' : 'var(--amber)'}`,
                      padding: '0.15rem 0.5rem',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {p.route}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accordion editorial */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1rem',
              }}
            >
              Market Intelligence
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {ACCORDIONS.map((acc, i) => (
                <div
                  key={i}
                  style={{ borderTop: '0.5px solid rgba(138,171,138,0.3)', borderBottom: i === ACCORDIONS.length - 1 ? '0.5px solid rgba(138,171,138,0.3)' : 'none' }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '1.1rem 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.88rem',
                        fontWeight: open === i ? 500 : 300,
                        color: open === i ? 'var(--charcoal)' : 'var(--muted)',
                        textAlign: 'left',
                        transition: 'all 0.2s',
                      }}
                    >
                      {acc.title}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '1rem',
                        color: 'var(--sage)',
                        transform: open === i ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.2s',
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <div style={{ paddingBottom: '1.25rem' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.83rem',
                          fontWeight: 300,
                          color: 'var(--muted)',
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                      >
                        {acc.body}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
