import type { Metadata } from 'next'
import MolecularPattern from '@/components/MolecularPattern'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Polysaccharide Chemistry Pvt Ltd — our product portfolio and medical education initiatives.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          background: 'var(--hero-grey)',
          padding: '14rem 6rem 8rem',
          overflow: 'hidden',
          borderBottom: '0.5px solid rgba(91,99,94,0.18)',
        }}
        className="page-hero"
      >
        <MolecularPattern variant="heroGrey" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Portfolio
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.05,
              marginBottom: '1.75rem',
              maxWidth: 760,
            }}
          >
            Products &amp; Initiatives
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--muted)',
              maxWidth: 520,
              lineHeight: 1.75,
            }}
          >
            Two distinct platforms built on a single molecular foundation — the therapeutic
            potential of polysaccharide chemistry.
          </p>
        </div>
      </section>

      {/* Elmiron card */}
      <section style={{ background: 'var(--sage-pale)', padding: '8rem 6rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--cream)',
              border: '0.5px solid rgba(138,171,138,0.3)',
              borderLeft: '4px solid var(--sage)',
              padding: '4rem',
            }}
            className="mobile-card-pad-lg"
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(138,171,138,0.2)',
                    color: 'var(--sage-deep)',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.75rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  Pharmaceutical Product
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.05,
                    marginBottom: '0.5rem',
                  }}
                >
                  Elmiron®
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    letterSpacing: '0.04em',
                  }}
                >
                  Pentosan Polysulfate Sodium
                </p>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '1rem',
                  color: 'var(--sage-deep)',
                  letterSpacing: '0.02em',
                }}
              >
                C₁₂H₁₇O₁₇S₄⁻
              </p>
            </div>

            <div style={{ borderTop: '0.5px solid rgba(138,171,138,0.25)', marginBottom: '2.5rem' }} />

            <div
              style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="responsive-split mobile-gap"
          >
              <div>
                {[
                  `Elmiron® (Pentosan Polysulfate Sodium) is India's only oral PPS formulation — a semi-synthetic, heparin-like polysaccharide that acts by replenishing the glycosaminoglycan (GAG) layer of the bladder urothelium. It is among the best FDA-approved oral therapies for Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS), a debilitating chronic condition characterised by pelvic pain, urinary urgency, frequency, and nocturia.`,
                  `IC/BPS affects an estimated 3–8% of women globally and is significantly underdiagnosed in India. The Elmiron® formulation by Polysaccharide Chemistry represents the first and only locally manufactured oral PPS product, removing barriers of cost, availability, and supply chain that had previously made this therapy inaccessible to Indian patients.`,
                  `Available in two evidence-based formulations — 100mg oral capsules (standard-of-care, first-line PPS therapy) and 50mg/mL intravesical solution (for patients requiring direct bladder installation) — Elmiron® delivers the same active molecule through routes optimised for individual clinical presentations.`,
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: 'var(--charcoal)',
                      lineHeight: 1.9,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Specs table */}
              <div>
                <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
                  Product Specifications
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-dm-sans)' }}>
                  {[
                    ['Active',        'Pentosan Polysulfate Sodium'],
                    ['Classification','Schedule H'],
                    ['Oral form',     '100mg capsules'],
                    ['Intravesical',  '50mg/mL solution'],
                    ['Indication',    'IC/BPS'],
                    ['Route',         'Oral / Intravesical'],
                    ['Evidence',      '7 RCTs (5 positive)'],
                    ['Approval',      'FDA-approved API'],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}>
                      <td
                        style={{
                          padding: '0.65rem 0',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'var(--muted)',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          width: '45%',
                        }}
                      >
                        {label}
                      </td>
                      <td style={{ padding: '0.65rem 0', fontSize: '0.85rem', fontWeight: 300, color: 'var(--charcoal)' }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="https://elmiron.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-large"
              >
                Visit elmiron.in ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Missed Bladder Disease card */}
      <section style={{ background: 'var(--charcoal)', padding: '8rem 6rem' }} className="section-pad">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '0.5px solid rgba(138,171,138,0.2)',
              borderLeft: '4px solid var(--sage)',
              padding: '4rem',
            }}
            className="mobile-card-pad-lg"
          >
            <div style={{ marginBottom: '2.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(138,171,138,0.15)',
                  color: 'var(--sage)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                Medical Education Initiative
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 300,
                  color: 'var(--cream)',
                  lineHeight: 1.05,
                  marginBottom: '0.5rem',
                }}
              >
                Missed Bladder Disease
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: 'var(--sage-light)',
                  letterSpacing: '0.04em',
                }}
              >
                Physician Education Hub
              </p>
            </div>

            <div style={{ borderTop: '0.5px solid rgba(138,171,138,0.15)', marginBottom: '2.5rem' }} />

            <div
              style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="responsive-split mobile-gap"
          >
              <div>
                {[
                  `The Missed Bladder Disease initiative is a structured physician education programme addressing one of India's most significant diagnostic gaps: the systemic under-recognition of Interstitial Cystitis and Bladder Pain Syndrome in women. Surveys consistently show IC/BPS patients waiting 5–7 years for diagnosis, cycling through multiple misdiagnoses including recurrent UTI, endometriosis, and irritable bowel syndrome.`,
                  `Led by Dr. Sanjay Pandey and Team BladderHealthWomen, the initiative provides urologists, gynaecologists, and primary care physicians with a structured diagnostic framework — the GIBBS Method — alongside clinical case presentations, pathophysiology education, and treatment pathway guidance.`,
                  `The platform at missedbladderdisease.com serves as the central resource hub: clinical evidence summaries, diagnostic algorithms, patient profiling tools, and professional education content, updated continuously as the body of evidence evolves.`,
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      color: 'rgba(248,246,241,0.8)',
                      lineHeight: 1.9,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div>
                <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
                  Initiative Details
                </p>
                {[
                  ['Led by',   'Dr. Sanjay Pandey'],
                  ['Team',     'BladderHealthWomen'],
                  ['Focus',    'IC/BPS Diagnosis'],
                  ['Framework','GIBBS Method'],
                  ['Audience', 'Urologists, Gynaecologists, GPs'],
                  ['Format',   'Digital education hub'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      borderBottom: '0.5px solid rgba(138,171,138,0.12)',
                      padding: '0.65rem 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--sage-light)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 300,
                        color: 'var(--cream)',
                        textAlign: 'right',
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="https://missedbladderdisease.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-sage"
              >
                Visit missedbladderdisease.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline teaser */}
      <section
        style={{
          position: 'relative',
          background: 'var(--sage-pale)',
          padding: '8rem 6rem',
          textAlign: 'center',
          overflow: 'hidden',
        }}
        className="section-pad"
      >
        <MolecularPattern variant="light" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '620px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Pipeline</p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            Further in the pipeline
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Additional polysaccharide-based therapeutics are in development. Enquire for
            partnership and licensing opportunities.
          </p>
          <Link href="/contact" className="btn-ghost-sage">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
