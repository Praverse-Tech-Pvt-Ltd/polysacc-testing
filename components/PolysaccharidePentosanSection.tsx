const PPS_STATS = [
  { value: '3–8%',    label: 'Women globally affected by IC/BPS' },
  { value: '5–7 yr',  label: 'Average delay to IC/BPS diagnosis' },
  { value: 'India',  label: 'Oral PPS formulation — manufactured domestically by Polysacc' },
]

const PPS_INDICATIONS = [
  { area: 'Bladder Pain',             detail: 'Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS) — first-line oral therapy' },
  { area: 'Urinary Urgency',          detail: 'Reduction of urinary urgency and frequency in chronic bladder inflammation' },
  { area: 'GAG Layer Replenishment',  detail: 'Repairs the glycosaminoglycan (GAG) protective lining of the urothelium' },
  { area: 'Antithrombotic / Lipid',   detail: 'Heparin-like activity; mild anticoagulant and lipid-lowering properties' },
  { area: 'Specialty Positioning',    detail: 'Niche polysaccharide API with limited global manufacturers and high barrier to entry' },
]

export default function PolysaccharidePentosanSection() {
  return (
    <>
      {/* Basket narrative */}
      <section
        style={{
          background: 'var(--hero-grey)',
          padding: '6rem 6rem',
          borderBottom: '0.5px solid rgba(138,171,138,0.22)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}
            className="responsive-split"
          >
            <div>
              <p className="section-tag" style={{ marginBottom: '1.5rem' }}>
                Basket 01 — Polysaccharide & Pentosan
              </p>
              <blockquote
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--charcoal)',
                  lineHeight: 1.3,
                  margin: '0 0 2.5rem',
                  borderLeft: '3px solid var(--sage)',
                  paddingLeft: '1.5rem',
                }}
              >
                "Specialty polysaccharide chemistry, built for the niche that needs it most."
              </blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {PPS_STATS.map((s) => (
                  <div key={s.value} style={{ borderTop: '0.5px solid rgba(138,171,138,0.25)', paddingTop: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.value}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                  borderTop: 'none',
                }}
              >
                Pentosan Polysulfate Sodium (PPS) is a semi-synthetic polysaccharide — a heparin-like sulphated xylan derived from beechwood hemicellulose. It is the only oral small-molecule therapy FDA-approved for Interstitial Cystitis / Bladder Pain Syndrome, a debilitating chronic condition affecting an estimated 3–8% of women globally and significantly underdiagnosed across emerging markets.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                  borderTop: '0.5px solid rgba(138,171,138,0.2)',
                  paddingTop: '1.5rem',
                }}
              >
                Its mechanism is structurally elegant: PPS replenishes and stabilises the glycosaminoglycan (GAG) layer of the bladder urothelium — the mucosal defence barrier whose breakdown is central to IC/BPS pathophysiology. Unlike symptom management approaches, PPS addresses the underlying defect.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  borderTop: '0.5px solid rgba(138,171,138,0.2)',
                  paddingTop: '1.5rem',
                }}
              >
                Polysacc manufactures oral PPS in India — removing the supply chain, cost, and regulatory barriers that previously made this therapy inaccessible to Indian and emerging-market patients. The specialty polysaccharide chemistry required to produce pharmaceutical-grade PPS represents a genuine technical capability and commercial moat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product & indications */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '7rem 6rem 5rem',
          borderBottom: '0.5px solid rgba(138,171,138,0.2)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Basket Product</p>
              <div
                style={{
                  background: 'var(--sage-pale)',
                  padding: '2rem',
                  border: '0.5px solid rgba(138,171,138,0.35)',
                  borderLeft: '3px solid var(--sage)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--sage-deep)', letterSpacing: '0.1em', margin: '0 0 0.75rem' }}>API</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
                  Pentosan Polysulfate Sodium
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                  Semi-synthetic sulphated xylan · FDA-approved · Schedule H
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Pitch</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                  For bladder health, interstitial cystitis, bladder pain syndrome, and specialty polysaccharide positioning — a defined clinical niche with very limited global competition.
                </p>
              </div>
            </div>

            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Therapeutic Indications</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {PPS_INDICATIONS.map((ind, i) => (
                  <div
                    key={ind.area}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '200px 1fr',
                      gap: '2rem',
                      padding: '1.1rem 0',
                      borderTop: i === 0 ? '0.5px solid rgba(138,171,138,0.25)' : '0.5px solid rgba(138,171,138,0.15)',
                      alignItems: 'start',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--sage-deep)', margin: 0, letterSpacing: '0.02em' }}>
                      {ind.area}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>
                      {ind.detail}
                    </p>
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
