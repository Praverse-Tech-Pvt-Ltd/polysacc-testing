const UROLOGY_BASKET_PRODUCTS = [
  'Pentosan Polysulfate Sodium',
  'Mirabegron',
  'Tamsulosin',
  'Silodosin',
  'Dutasteride',
  'Vibegron',
  'Finasteride',
]

const JOURNEY_STAGES = [
  {
    age: '40s',
    title: 'The Silent Warning',
    story: 'It begins with something easy to dismiss — a slower stream, a late-night trip to the bathroom, a hesitation that wasn\'t there before. Benign Prostatic Hyperplasia (BPH) affects over 50% of men by age 60. Most wait years before seeking care.',
    molecules: ['Tamsulosin', 'Silodosin'],
    mechanism: 'Alpha-1 blockers relax smooth muscle in the prostate and bladder neck, restoring urinary flow within days of initiation.',
    color: 'var(--sage)',
  },
  {
    age: '50s',
    title: 'Managing the Progression',
    story: 'Symptom control is not disease control. As the prostate continues to enlarge, alpha-blockers alone are no longer enough. The evidence points clearly toward combination therapy — addressing both the symptom and the structural cause simultaneously.',
    molecules: ['Tamsulosin + Dutasteride', 'Silodosin + Dutasteride', 'Tamsulosin + Finasteride'],
    mechanism: '5-alpha reductase inhibitors (Dutasteride, Finasteride) reduce DHT-driven prostate volume by 20–30% over 6–12 months. Combination with alpha-blockers delivers synergistic, sustained benefit.',
    color: 'var(--amber)',
  },
  {
    age: '60s+',
    title: 'Restoring Quality of Life',
    story: 'Overactive bladder and urge incontinence are not prostate problems — they are bladder problems. For the millions of men (and women) whose bladder signals have become ungovernable, a different mechanism entirely is needed.',
    molecules: ['Mirabegron', 'Mirabegron + Solifenacin'],
    mechanism: 'Beta-3 adrenergic agonists (Mirabegron) work on the detrusor muscle — relaxing the bladder during filling. Unlike antimuscarinics, they carry no cognitive side-effect burden in older patients.',
    color: 'var(--sage-deep)',
  },
]

export default function MensHealthSection() {
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
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 07 — Men's Health</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              Urology Bladder<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>Disease Basket</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
              Urology basket for bladder pain, overactive bladder, benign prostatic hyperplasia, urinary urgency and lower urinary tract symptoms.
            </p>
          </div>
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Portfolio Products</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {UROLOGY_BASKET_PRODUCTS.map((p) => (
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
        </div>
      </div>
    </section>
    <section
      id="mens-health"
      style={{
        background: 'var(--charcoal)',
        padding: '7rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.15)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            marginBottom: '5rem',
            alignItems: 'end',
          }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
              Urology · Men&apos;s Health
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 1.12,
              }}
            >
              The conditions men{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
                live with, but rarely speak about.
              </span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'rgba(248,246,241,0.65)',
                lineHeight: 1.85,
              }}
            >
              Lower urinary tract symptoms are among the most prevalent — and most under-discussed —
              health challenges facing men from their fourth decade onwards. What begins as an
              inconvenience becomes, over years, a measurable loss of confidence, sleep, and independence.
              <br /><br />
              Our urology portfolio maps the therapeutic journey from early symptom management through
              combination disease modification and bladder-specific intervention — following the evidence
              at every stage.
            </p>
          </div>
        </div>

        {/* Journey stages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {JOURNEY_STAGES.map((stage, i) => (
            <div
              key={stage.age}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr',
                gap: '3rem',
                padding: '3rem 0',
                borderTop: i === 0 ? '0.5px solid rgba(138,171,138,0.2)' : '0.5px solid rgba(138,171,138,0.15)',
                alignItems: 'start',
              }}
              className="mens-health-row"
            >
              {/* Age marker */}
              <div style={{ paddingTop: '0.2rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: stage.color,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {stage.age}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.65rem',
                    color: 'rgba(248,246,241,0.35)',
                    letterSpacing: '0.06em',
                    margin: '0.4rem 0 0',
                  }}
                >
                  typical onset
                </p>
              </div>

              {/* Story */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: 'var(--cream)',
                    margin: '0 0 1rem',
                    lineHeight: 1.2,
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    color: 'rgba(248,246,241,0.6)',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {stage.story}
                </p>
              </div>

              {/* Science + molecules */}
              <div
                style={{
                  background: 'rgba(138,171,138,0.06)',
                  border: '0.5px solid rgba(138,171,138,0.2)',
                  padding: '1.5rem',
                }}
              >
                <div style={{ marginBottom: '1.25rem' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.6rem' }}>
                    Mechanism
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'rgba(248,246,241,0.6)', lineHeight: 1.7, margin: 0 }}>
                    {stage.mechanism}
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.6rem' }}>
                    Portfolio molecules
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {stage.molecules.map((m) => (
                      <span
                        key={m}
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.72rem',
                          fontWeight: 300,
                          color: stage.color,
                          border: `0.5px solid ${stage.color}`,
                          padding: '0.2rem 0.6rem',
                          opacity: 0.9,
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing stat */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '0.5px solid rgba(138,171,138,0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="responsive-three"
        >
          {[
            { value: '50%+', label: 'of men over 60 have BPH symptoms' },
            { value: '₹2,667 Mn', label: 'SSPL urology portfolio — MAT Mar 2026' },
            { value: '2 segments', label: 'BPH & Urinary Incontinence' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '1.5rem', border: '0.5px solid rgba(138,171,138,0.2)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 300, color: 'var(--sage)', margin: '0 0 0.4rem', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'rgba(248,246,241,0.45)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
