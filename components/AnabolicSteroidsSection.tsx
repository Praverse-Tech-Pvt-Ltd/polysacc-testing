'use client'

import { useState } from 'react'

const ANABOLIC_ACCORDIONS = [
  {
    title: 'The Ester Guide — Duration Determines Dosing Protocol',
    body: 'Testosterone undecanoate achieves stable physiological levels over 10–14 weeks — quarterly injections, ideal for adherence in TRT. Enanthate and cypionate offer reliable biweekly dosing with smooth concentration curves. Propionate and phenyl propionate, with their 2–4 day half-lives, allow precise titration and rapid dose adjustment — preferred where close monitoring is required. Testosterone base (unesterified) acts within hours; rarely used for TRT but relevant in hospital acute settings. Understanding ester pharmacokinetics is the formulation science of the entire category.',
  },
  {
    title: 'Hypogonadism — The Underdiagnosed Men\'s Health Crisis',
    body: 'Conservative epidemiological estimates suggest 30–40% of men over 45 have biochemically low testosterone. The vast majority remain undiagnosed and untreated. This is not androgen deficiency in the sense of catastrophic endocrine failure — it is a gradual decline presenting as fatigue, reduced muscle mass, sexual dysfunction, mood changes, and insulin resistance. Prospective data from the TRAVERSE trial (2023) has significantly reshaped the cardiovascular safety debate, with TRT showing non-inferiority to placebo for MACE outcomes. The clinical consensus around TRT is maturing rapidly.',
  },
  {
    title: 'Regulatory Landscape: Controlled Substance Navigation',
    body: 'Testosterone preparations are Schedule III controlled substances in the USA and variously regulated across global markets. Legitimate pharmaceutical manufacturing — GMP-certified, for prescription markets — operates in an entirely separate regulatory category from grey-market supply. Regulatory compliance in this category requires precise documentation of batch provenance, controlled substance handling procedures, and export licence frameworks for each destination market. Manufacturing capability without regulatory infrastructure is commercially meaningless.',
  },
  {
    title: 'Market Structure: Who Buys Testosterone APIs',
    body: 'Primary customers for testosterone APIs are: (1) established branded TRT product manufacturers (Nebido®, Aveed®, Depo-Testosterone® generics); (2) compounding pharmacies in jurisdictions where TRT compounding is legal (US, Australia); (3) emerging market pharmaceutical manufacturers building out men\'s health portfolios. The Indian domestic TRT market is nascent but growing; the larger commercial opportunity for GMP-certified Indian API manufacturers is export to regulated markets with established TRT demand.',
  },
]

const ANABOLIC_NARRATIVE = [
  `The testosterone deficiency landscape has undergone a clinical paradigm shift over the past decade. What was historically addressed only in catastrophic primary hypogonadism is now recognised as a significant contributor to the global burden of metabolic syndrome, cardiovascular risk, and quality-of-life impairment in men over 35. The testosterone replacement therapy (TRT) conversation has moved from endocrinology subspecialty to primary care — and the commercial market has followed.`,
  `The ester portfolio represents a clinical science of its own. Different ester bonds — undecanoate, enanthate, cypionate, propionate, decanoate — produce different half-lives, release kinetics, and injection frequency requirements. A quarterly undecanoate injection (Nebido® protocol) and a weekly propionate injection are chemically the same active molecule in different pharmacokinetic packages. Selecting the right ester is matching the therapy to the patient's physiology, lifestyle, and clinical monitoring capability.`,
  `Manufacturing testosterone APIs to GMP specification for controlled substance markets requires a different organisational infrastructure than standard pharmaceutical API production. Controlled substance licences, import/export permits, batch documentation for regulatory authorities, and supply chain traceability are pre-conditions — not afterthoughts. Polysacc's capability in this category reflects a compliance infrastructure that supports legitimate pharmaceutical supply chains to regulated markets globally.`,
]

const ANABOLIC_STEROIDS = [
  { name: 'Testosterone Base', approvals: 'GMP' },
  { name: 'Testosterone Undecanoate', approvals: 'GMP' },
  { name: 'Testosterone Decanoate', approvals: 'GMP' },
  { name: 'Testosterone Cypionate', approvals: 'GMP' },
  { name: 'Testosterone Propionate', approvals: 'GMP' },
  { name: 'Testosterone Enanthate', approvals: 'GMP' },
  { name: 'Testosterone Isocaproate', approvals: 'GMP' },
  { name: 'Testosterone Phenyl Propionate', approvals: 'GMP' },
  { name: 'Methyltestosterone', approvals: 'GMP' },
]

export default function AnabolicSteroidsSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
    {/* Narrative strip */}
    <section
      style={{
        background: 'var(--sage-pale)',
        padding: '5rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.2)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>The Androgen Thesis</p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.55rem, 2.4vw, 2.1rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--charcoal)',
                lineHeight: 1.35,
                margin: '0 0 2.5rem',
                borderLeft: '3px solid var(--sage)',
                paddingLeft: '1.5rem',
              }}
            >
              "30–40% of men over 45 have biochemically low testosterone. The vast majority remain undiagnosed."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { val: '40%', label: 'Men over 45 with low testosterone (est.)' },
                { val: '9', label: 'Testosterone ester variants in Polysacc portfolio' },
                { val: '10–14 wk', label: 'Dosing interval with undecanoate (Nebido® protocol)' },
              ].map((s) => (
                <div key={s.val} style={{ borderTop: '0.5px solid rgba(138,171,138,0.4)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {ANABOLIC_NARRATIVE.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  margin: 0,
                  borderTop: i > 0 ? '0.5px solid rgba(138,171,138,0.2)' : 'none',
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
      id="anabolic-steroids"
      style={{
        background: 'var(--cream)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Androgen APIs</p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
            }}
          >
            Anabolic{' '}
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
              {ANABOLIC_STEROIDS.map((s, i) => (
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
            {ANABOLIC_ACCORDIONS.map((acc, i) => (
              <div
                key={i}
                style={{
                  borderTop: '0.5px solid rgba(138,171,138,0.3)',
                  borderBottom: i === ANABOLIC_ACCORDIONS.length - 1 ? '0.5px solid rgba(138,171,138,0.3)' : 'none',
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
