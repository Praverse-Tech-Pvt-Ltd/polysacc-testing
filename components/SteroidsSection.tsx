'use client'

import { useState } from 'react'

const STEROIDS = [
  { name: 'Clobetasol Propionate', approvals: 'GMP / WHO GMP' },
  { name: 'Betamethasone Dipropionate', approvals: 'GMP / WHO GMP' },
  { name: 'Betamethasone Valerate', approvals: 'GMP / WHO GMP' },
  { name: 'Betamethasone Sodium Phosphate', approvals: 'GMP' },
  { name: 'Beclomethasone Dipropionate', approvals: 'GMP / WHO GMP' },
  { name: 'Dexamethasone Base', approvals: 'GMP / WHO GMP' },
  { name: 'Dexamethasone Sodium Phosphate', approvals: 'GMP / WHO GMP' },
  { name: 'Mometasone Furoate', approvals: 'GMP / WHO GMP' },
]

const STEROID_ACCORDIONS = [
  {
    title: 'Why Ester Chemistry Determines Clinical Outcome',
    body: 'Each corticosteroid ester — dipropionate, valerate, acetate, sodium phosphate — creates a distinct pharmacokinetic profile: onset speed, duration, tissue penetration, systemic absorption. Betamethasone dipropionate penetrates dermally to the deep reticular layer; betamethasone valerate to the mid-dermis. Sodium phosphate salts are water-soluble and suited for injection, achieving rapid peak plasma. A clinician selecting beclomethasone dipropionate for inhaled asthma and clobetasol propionate for recalcitrant psoriasis uses the same molecular class through entirely different mechanisms.',
  },
  {
    title: 'GMP Complexity — Why This Market Doesn\'t Commoditise',
    body: 'The API market for corticosteroids is mature but never truly commoditised. WHO GMP certification requirements, the precision of ester synthesis (minor impurity profiles determine regulatory acceptance), and the diversity of delivery systems — topical, inhaled, injectable, ophthalmic, intranasal — maintain technical and regulatory barriers that reward manufacturers with deep process chemistry expertise. A supplier that can reliably produce Mometasone Furoate to inhaled-grade specification is a different class of operation from a standard bulk API facility.',
  },
  {
    title: 'Market Dynamics: Topical vs. Inhaled vs. Injectable',
    body: 'Topical corticosteroids represent the largest volume segment by prescription count. Clobetasol propionate (ultra-high potency) and betamethasone dipropionate (high potency) dominate dermatology. Inhaled corticosteroids — beclomethasone, mometasone — are the cornerstone of asthma and COPD maintenance therapy. Injectable corticosteroids (betamethasone sodium phosphate, dexamethasone sodium phosphate) address acute inflammatory episodes. Each delivery segment has distinct formulation requirements and regulatory pathways.',
  },
  {
    title: 'Regulatory Landscape: EU, US, India',
    body: 'EMA requires ester-specific bioequivalence data for topical corticosteroid generics — pharmacokinetic equivalence is not sufficient; vasoconstrictor assay data is required. FDA follows similar principles under its skin blanching model. India\'s CDSCO has historically applied a less prescriptive approach, creating a large generic topical market — but export-to-EU/US from Indian facilities requires WHO GMP certification, which filters the supplier base considerably.',
  },
]

const STEROID_NARRATIVE = [
  `Corticosteroids are the bedrock of modern anti-inflammatory and immunosuppressive medicine. From acute allergic reactions and severe asthma to inflammatory bowel disease, rheumatoid arthritis, post-surgical inflammation, and dermatological crises — the clinical breadth spans virtually every medical specialty. No drug class has a wider primary care and specialist footprint.`,
  `The complexity — and the intellectual challenge — lies in formulation chemistry. A corticosteroid is not simply a molecule; it is the molecule paired with a specific ester, delivered through a specific vehicle, to a specific tissue compartment. Each combination creates a distinct therapeutic tool. Misunderstanding ester pharmacokinetics means selecting the wrong tool for the clinical task — achieving systemic absorption where local action was intended, or insufficient potency where aggressive intervention is required.`,
  `Manufacturing corticosteroids to export-grade specification is not a commodity operation. The synthesis routes are multi-step; intermediate purity profiles are tightly controlled; and the final ester bond chemistry requires consistent process conditions that separate reliable API suppliers from opportunistic ones. WHO GMP certification is the entry ticket to regulated markets — and the certificate is only as good as the process behind it.`,
]

export default function SteroidsSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
    {/* Narrative + context */}
    <section
      style={{
        background: 'var(--charcoal)',
        padding: '5rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.12)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1.5rem' }}>The Clinical Foundation</p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.55rem, 2.4vw, 2.15rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--cream)',
                lineHeight: 1.35,
                margin: '0 0 2.5rem',
                borderLeft: '3px solid var(--sage)',
                paddingLeft: '1.5rem',
              }}
            >
              "A corticosteroid is not a molecule — it is a molecule, an ester, a vehicle, and a tissue target. The combination defines the therapy."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { val: '8', label: 'Distinct corticosteroid APIs in Polysacc portfolio' },
                { val: 'WHO GMP', label: 'Certification standard across all products' },
                { val: '4', label: 'Delivery routes: topical, inhaled, injectable, ophthalmic' },
              ].map((s) => (
                <div key={s.val} style={{ borderTop: '0.5px solid rgba(138,171,138,0.3)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'rgba(248,246,241,0.45)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {STEROID_NARRATIVE.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(248,246,241,0.72)',
                  lineHeight: 1.9,
                  margin: 0,
                  borderTop: i > 0 ? '0.5px solid rgba(138,171,138,0.12)' : 'none',
                  paddingTop: i > 0 ? '1.25rem' : 0,
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
      id="steroids"
      style={{
        background: 'var(--sage-pale)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Corticosteroid APIs</p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Steroids</span>
          </h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              minWidth: '480px',
              borderCollapse: 'collapse',
              borderLeft: '3px solid var(--sage-deep)',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--sage-deep)' }}>
                <th
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#fff',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                  }}
                >
                  Product Name
                </th>
                <th
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#fff',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '1rem 1.5rem',
                    textAlign: 'left',
                    width: '200px',
                  }}
                >
                  Approvals
                </th>
              </tr>
            </thead>
            <tbody>
              {STEROIDS.map((s, i) => (
                <tr
                  key={s.name}
                  style={{ background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)' }}
                >
                  <td
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      color: 'var(--charcoal)',
                      padding: '1rem 1.5rem',
                      borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                    }}
                  >
                    {s.name}
                  </td>
                  <td
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: 'var(--sage-deep)',
                      padding: '1rem 1.5rem',
                      borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                    }}
                  >
                    {s.approvals}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Market intelligence accordion */}
        <div style={{ marginTop: '3.5rem' }}>
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
            {STEROID_ACCORDIONS.map((acc, i) => (
              <div
                key={i}
                style={{
                  borderTop: '0.5px solid rgba(138,171,138,0.3)',
                  borderBottom: i === STEROID_ACCORDIONS.length - 1 ? '0.5px solid rgba(138,171,138,0.3)' : 'none',
                }}
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
    </section>
    </>
  )
}
