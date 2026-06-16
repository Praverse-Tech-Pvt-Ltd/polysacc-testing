const PPS_APPLICATIONS = [
  {
    code: 'DN',
    title: 'Diabetic Nephropathy',
    subtitle: 'Renal Protective Polysaccharide Therapy',
    mechanism: [
      'Restores glycosaminoglycan (GAG) layer on glomerular basement membrane, reducing albuminuria and proteinuria.',
      'Exerts anti-inflammatory and anti-fibrotic effects, attenuating TGF-β–driven mesangial expansion and interstitial fibrosis.',
      'Inhibits heparanase activity, preserving heparan sulphate proteoglycans critical to glomerular filtration selectivity.',
      'Studied in the CAPPA clinical programme (Controlled Assessment of Pentosan Polysulfate in Proteinuric Nephropathy); early data demonstrated significant reductions in urine protein-creatinine ratio versus placebo.',
    ],
    evidence: 'Trials: CAPPA programme | Journals: JASN, Nephrology Dialysis Transplantation',
    colour: 'var(--sage)',
  },
  {
    code: 'OA',
    title: 'Osteoarthritis',
    subtitle: 'Disease-Modifying Articular Candidate',
    mechanism: [
      'Inhibits catabolic enzymes — matrix metalloproteinases (MMPs) and aggrecanases — that degrade articular cartilage extracellular matrix.',
      'Stimulates chondrocyte synthesis of proteoglycans and hyaluronic acid, promoting cartilage matrix restoration.',
      'Anti-coagulant and fibrinolytic properties improve synovial microcirculation, reducing intra-articular oedema and inflammatory mediators.',
      'Intra-articular and intramuscular preparations (Cartrofen®, Arthropen®) used in veterinary and early human OA trials with statistically significant WOMAC and VAS improvements.',
    ],
    evidence: 'Trials: Cartrofen OA studies | Journals: Osteoarthritis & Cartilage, Rheumatology',
    colour: 'var(--amber)',
  },
]

export default function PPSSection() {
  return (
    <section
      id="pps"
      style={{
        background: 'var(--cream)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>
            Polysaccharide Therapeutics
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Pentosan Polysulphate{' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>(PPS)</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.95rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: '680px',
            }}
          >
            A semi-synthetic sulphated polysaccharide derived from beech wood hemicellulose.
            Beyond its established role in interstitial cystitis, PPS demonstrates compelling
            disease-modifying activity in two high-unmet-need indications.
          </p>
        </div>

        {/* Application cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
          className="responsive-split"
        >
          {PPS_APPLICATIONS.map((app) => (
            <div
              key={app.code}
              style={{
                border: '0.5px solid rgba(138,171,138,0.3)',
                background: 'var(--sage-pale)',
                padding: '2.5rem',
              }}
            >
              {/* Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '0.7rem',
                    fontWeight: 400,
                    color: 'var(--cream)',
                    background: app.colour,
                    padding: '0.25rem 0.65rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  {app.code}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.72rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {app.subtitle}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.2,
                }}
              >
                {app.title}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {app.mechanism.map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: app.colour,
                        flexShrink: 0,
                        marginTop: '0.5rem',
                      }}
                    />
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 300,
                        color: 'var(--muted)',
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  borderTop: '0.5px solid rgba(138,171,138,0.35)',
                  paddingTop: '1rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.72rem',
                    color: 'var(--sage-deep)',
                    letterSpacing: '0.03em',
                    margin: 0,
                  }}
                >
                  {app.evidence}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Origin note */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            borderLeft: '2px solid var(--sage)',
            background: 'rgba(138,171,138,0.07)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.82rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ fontWeight: 500, color: 'var(--charcoal)' }}>Molecular origin:</strong>{' '}
            PPS is derived via controlled sulphation of xylan — a hemicellulose from Fagus sylvatica
            (European beech). The resulting heterogeneous polysaccharide closely mimics endogenous
            heparan sulphate, enabling its pleiotropic biological activity across multiple organ systems.
          </p>
        </div>
      </div>
    </section>
  )
}
