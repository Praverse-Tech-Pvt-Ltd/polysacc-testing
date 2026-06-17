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

const MCB_NARRATIVE = [
  `The pivotal clinical insight is disarmingly simple: cyanocobalamin is not B12 — it is a precursor your liver converts into B12, assuming hepatic enzymatic capacity is intact. Methylcobalamin is B12 as it exists in human neural tissue. No conversion. No dependency on MTHFR enzyme variants or compromised hepatic function. For most healthy patients, this distinction is metabolically irrelevant. For the growing population with impaired methylation pathways — and for patients where neurological repair is the therapeutic goal — the distinction is clinically decisive.`,
  `Peripheral neuropathy affects an estimated 2.4% of the global population, with prevalence rising sharply alongside the global diabetes epidemic. In India, diabetic peripheral neuropathy is diagnosed in 30–50% of patients with type 2 diabetes. Methylcobalamin is the first-line neurological adjunct in this indication across India, China, Japan, and most of Southeast Asia — and its superior blood-brain barrier penetration and peripheral nerve tissue retention create a pharmacokinetic advantage that cyanocobalamin cannot replicate.`,
  `The United States represents an almost paradoxical market gap. MCB is essentially absent from the US Rx market — classified as a supplement rather than a pharmaceutical — yet the clinical evidence base that supports its use in neuropathy is the same evidence base used across Asia and Latin America. This regulatory arbitrage creates a significant white-space opportunity: as US clinicians seek adjunctive approaches to diabetic neuropathy beyond pregabalin and gabapentin, methylcobalamin's re-evaluation as a Schedule-eligible therapeutic is gaining traction.`,
]

export default function MCBSection() {
  return (
    <>
    {/* Basket overview */}
    <section
      style={{ background: 'var(--charcoal)', padding: '7rem 6rem 5rem', borderBottom: '0.5px solid rgba(138,171,138,0.15)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '0.75rem' }}>Basket 04 — Methylcobalamin</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              MCB<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>Neuropathy Basket</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'rgba(248,246,241,0.6)', lineHeight: 1.75, margin: 0 }}>
              For neuropathy, vitamin B12 deficiency, nerve health and hematinic segment.
            </p>
          </div>
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>Portfolio Product</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Methylcobalamin'].map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    color: 'var(--sage)',
                    background: 'rgba(138,171,138,0.1)',
                    border: '0.5px solid rgba(138,171,138,0.3)',
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
    </section>
    {/* Narrative section */}
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
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>The Neurological Thesis</p>
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
              "Cyanocobalamin requires two hepatic conversion steps to become biologically active. Methylcobalamin is already there."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { val: '2.4%', label: 'Global prevalence of peripheral neuropathy' },
                { val: '30–50%', label: 'T2DM patients in India with diabetic neuropathy' },
                { val: '+174%', label: 'MCB API volume growth in Latin America, 2025' },
              ].map((s) => (
                <div key={s.val} style={{ borderTop: '0.5px solid rgba(138,171,138,0.4)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MCB_NARRATIVE.map((para, i) => (
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
    </>
  )
}
