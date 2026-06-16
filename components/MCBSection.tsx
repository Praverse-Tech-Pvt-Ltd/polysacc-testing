const MCB_MECHANISMS = [
  {
    title: 'Myelin Sheath Regeneration',
    body: 'Directly supports synthesis of myelin basic protein, promoting structural repair of peripheral nerve fibres — a key differentiator from cyanocobalamin.',
  },
  {
    title: 'Nerve Conduction Velocity',
    body: 'Improves electrophysiological parameters in peripheral neuropathy studies; reduces sensory latency and increases action potential amplitude.',
  },
  {
    title: 'Homocysteine Conversion',
    body: 'Acts as cofactor for methionine synthase, converting homocysteine → methionine. Elevated homocysteine is an independent cardiovascular and neuropathy risk factor.',
  },
]

const MCB_INDICATIONS = [
  { label: 'Peripheral Neuropathy', strength: 'Strong evidence' },
  { label: 'Diabetic Neuropathy', strength: 'Strong evidence' },
  { label: 'B12 Deficiency', strength: 'Established indication' },
  { label: 'Neurological Adjunct', strength: 'Emerging use' },
]

const MCB_MARKETS = [
  { region: 'Latin America', growth: '+174.3%', note: 'Volume growth CY2025' },
  { region: 'Europe', growth: '+58.9%', note: 'Volume growth CY2025' },
  { region: 'Rest of World', growth: '+37.1%', note: 'Volume growth CY2025' },
  { region: 'USA', growth: 'Absent*', note: 'Rx market essentially MCB-free' },
]

export default function MCBSection() {
  return (
    <section
      id="mcb"
      style={{
        background: 'var(--charcoal)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem', alignItems: 'end' }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '0.75rem' }}>
              Neuro-Metabolic Therapeutic
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Methylcobalamin{' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>(MCB)</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'rgba(248,246,241,0.65)',
                lineHeight: 1.8,
              }}
            >
              The active coenzyme form of B12 — natively present in human tissue, directly
              utilised without hepatic conversion. Positioned not as a commodity vitamin,
              but as a{' '}
              <em style={{ color: 'var(--sage-light)' }}>differentiated neuro-metabolic therapeutic platform</em>.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}
          >
            <div style={{ textAlign: 'center', padding: '1.5rem', border: '0.5px solid rgba(138,171,138,0.25)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--sage)', margin: '0 0 0.25rem', lineHeight: 1 }}>27,542</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'rgba(248,246,241,0.5)', letterSpacing: '0.04em', margin: 0 }}>kg API volume 2025</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem', border: '0.5px solid rgba(138,171,138,0.25)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--sage)', margin: '0 0 0.25rem', lineHeight: 1 }}>$1.3Bn</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'rgba(248,246,241,0.5)', letterSpacing: '0.04em', margin: 0 }}>Finished drug market</p>
            </div>
          </div>
        </div>

        {/* Mechanisms */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              marginBottom: '1.5rem',
            }}
          >
            Mechanism of Action
          </p>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="responsive-three"
          >
            {MCB_MECHANISMS.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '1.75rem',
                  border: '0.5px solid rgba(138,171,138,0.25)',
                  background: 'rgba(138,171,138,0.06)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    color: 'var(--cream)',
                    margin: '0 0 0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {m.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: 'rgba(248,246,241,0.6)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Indications + Markets */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}
          className="responsive-split"
        >
          {/* Indications */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '1.25rem',
              }}
            >
              Clinical Indications
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {MCB_INDICATIONS.map((ind) => (
                <div
                  key={ind.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(138,171,138,0.06)',
                    border: '0.5px solid rgba(138,171,138,0.2)',
                    gap: '1rem',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--cream)' }}>
                    {ind.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'var(--sage)', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
                    {ind.strength}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic opportunity */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '1.25rem',
              }}
            >
              Geographic Opportunity (API vol. growth)
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {MCB_MARKETS.map((m) => (
                <div
                  key={m.region}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(138,171,138,0.06)',
                    border: '0.5px solid rgba(138,171,138,0.2)',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--cream)', margin: 0 }}>{m.region}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'rgba(248,246,241,0.4)', margin: 0 }}>{m.note}</p>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.2rem',
                      fontWeight: 300,
                      color: m.growth.startsWith('+') ? 'var(--sage)' : 'var(--amber)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {m.growth}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'rgba(248,246,241,0.35)', marginTop: '0.75rem' }}>
              * MCB essentially absent from US Rx market — significant white-space opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
