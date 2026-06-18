'use client'

import { useState } from 'react'

const IRON_BASKET_PRODUCTS = [
  'Iron III Polymaltose',
  'Iron Sucrose',
  'Iron Dextran',
  'Ferric Carboxymaltose',
  'Iron Isomaltoside',
  'Iron Polysaccharide',
]

const SULPHATE_BASKET_PRODUCTS = [
  'Magnesium Sulphate',
  'Copper Sulphate',
  'Zinc Sulphate',
]

const IRON_BASKET_PITCH = 'Selected iron complex finished dosage and mineral salt basket for haematology, anaemia and mineral supplementation — for website approval.'

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

const IRON_STORY_STATS = [
  { value: '1.2Bn', label: 'People affected by iron deficiency anaemia globally' },
  { value: '57%', label: 'Indian women aged 15–49 with anaemia (NFHS-5)' },
  { value: '40–60%', label: 'Oral iron discontinuation rate due to GI intolerance' },
]

export default function IronComplexSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
    {/* Basket overview */}
    <section
      style={{ background: 'var(--sage-pale)', padding: '7rem 6rem 5rem', borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 02 — Iron Complex Finished Dosages</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              Iron Complex<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>Finished Dosage Basket</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
              {IRON_BASKET_PITCH}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '0.65rem' }}>Iron Products</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {IRON_BASKET_PRODUCTS.map((p) => (
                  <span
                    key={p}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 400,
                      color: 'var(--sage-deep)',
                      background: 'rgba(138,171,138,0.12)',
                      border: '0.5px solid rgba(138,171,138,0.35)',
                      padding: '0.35rem 0.85rem',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="section-tag" style={{ marginBottom: '0.65rem' }}>Sulphate Products</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {SULPHATE_BASKET_PRODUCTS.map((p) => (
                  <span
                    key={p}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 400,
                      color: 'var(--amber)',
                      background: 'rgba(176,125,58,0.08)',
                      border: '0.5px solid rgba(176,125,58,0.3)',
                      padding: '0.35rem 0.85rem',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Narrative storyline */}
    <section
      style={{
        background: 'var(--cream)',
        padding: '5rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.22)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}
          className="responsive-split"
        >
          {/* Left — pull quote + stats */}
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1.5rem' }}>The Clinical Case</p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--charcoal)',
                lineHeight: 1.35,
                margin: '0 0 2.5rem',
                borderLeft: '3px solid var(--sage)',
                paddingLeft: '1.5rem',
              }}
            >
              "Simple ferrous salts were first-line for half a century — but 40–60% of patients stop before reaching therapeutic iron targets."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {IRON_STORY_STATS.map((s) => (
                <div key={s.value} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.9rem',
                      fontWeight: 300,
                      color: 'var(--sage)',
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: '80px',
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                      paddingTop: '0.25rem',
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — narrative paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              `Iron deficiency anaemia affects 1.2 billion people worldwide — the most prevalent nutritional deficiency on the planet. In India, NFHS-5 data shows 57% of women aged 15–49 and 67% of children under five are anaemic. It remains the leading cause of preventable maternal mortality. The scale is not a distant public health statistic; it is the clinical reality facing every haematologist, obstetrician, and general physician in this country daily.`,
              `The clinical management of IDA has changed radically over two decades. Simple ferrous salts — the default for half a century — carry GI intolerance that causes 40–60% of patients to discontinue before reaching therapeutic targets. Polysaccharide-iron complexes represent the next chapter: a protected matrix that delivers elemental iron past the stomach without the oxidative irritation of free ferrous ions. Superior tolerability translates directly to superior adherence — and adherence is the primary determinant of therapeutic outcome in chronic iron supplementation.`,
              `The inflection point in IV iron came with high-stability complexes — Ferric Carboxymaltose and Iron Isomaltoside. These allow a clinician to replace the entire iron deficit (1,000–1,500 mg) in a single 15-minute infusion. For a post-bariatric patient, a Crohn's patient, or a chronic kidney disease patient on ESA therapy, this is not a convenience — it is the difference between therapeutic success and failure. The system cost economics are compelling: one TDI visit versus five multi-session iron sucrose visits at the same hospital.`,
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

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
    </>
  )
}
