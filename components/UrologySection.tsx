const UROLOGY_PRODUCTS = [
  { name: 'Tamsulosin + Dutasteride', segment: 'BPH', dosageForms: 'Capsules / Tablets', mat26: '594.96' },
  { name: 'Silodosin + Dutasteride', segment: 'BPH', dosageForms: 'Capsules / Combi Kit / Tablets', mat26: '553.21' },
  { name: 'Tamsulosin', segment: 'BPH', dosageForms: 'Capsules / Tablets', mat26: '421.58' },
  { name: 'Silodosin', segment: 'BPH', dosageForms: 'Capsules / Tablets', mat26: '329.06' },
  { name: 'Mirabegron', segment: 'Urinary Incontinence', dosageForms: 'Tablets', mat26: '197.86' },
  { name: 'Mirabegron + Solifenacin', segment: 'Urinary Incontinence', dosageForms: 'Tablets', mat26: '119.30' },
  { name: 'Tamsulosin + Finasteride', segment: 'BPH', dosageForms: 'Capsules / Tablets', mat26: '98.56' },
  { name: 'Finasteride', segment: 'BPH', dosageForms: 'Tablets', mat26: '93.15' },
  { name: 'Dutasteride', segment: 'BPH', dosageForms: 'Capsules / Tablets', mat26: '62.07' },
  { name: 'Deflazacort + Tamsulosin', segment: 'Corticosteroids', dosageForms: 'Capsules / Tablets', mat26: '57.04' },
]

const SEGMENT_COLORS: Record<string, string> = {
  BPH: 'var(--sage-deep)',
  'Urinary Incontinence': 'var(--amber)',
  Corticosteroids: 'var(--muted)',
}

export default function UrologySection() {
  return (
    <section
      id="urology"
      style={{
        background: 'var(--sage-pale)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}
        >
          <div>
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Market Presence</p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.2,
              }}
            >
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Urology</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>₹ 2,667 Mn</p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.04em', margin: 0 }}>Total SSPL Portfolio — MAT Mar 2026</p>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              minWidth: '680px',
              borderCollapse: 'collapse',
              borderLeft: '3px solid var(--sage-deep)',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--sage-deep)' }}>
                {['Product', 'Segment', 'Dosage Form', 'MAT Mar \'26 Sales'].map((col) => (
                  <th
                    key={col}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: '#fff',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.9rem 1.25rem',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {UROLOGY_PRODUCTS.map((p, i) => (
                <tr key={p.name} style={{ background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)' }}>
                  <td
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 400,
                      color: 'var(--charcoal)',
                      padding: '0.9rem 1.25rem',
                      borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                    }}
                  >
                    {p.name}
                  </td>
                  <td
                    style={{
                      padding: '0.9rem 1.25rem',
                      borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.68rem',
                        color: '#fff',
                        background: SEGMENT_COLORS[p.segment] || 'var(--muted)',
                        padding: '0.2rem 0.55rem',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {p.segment}
                    </span>
                  </td>
                  <td
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      padding: '0.9rem 1.25rem',
                      borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                    }}
                  >
                    {p.dosageForms}
                  </td>
                  <td
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.05rem',
                      fontWeight: 300,
                      color: 'var(--charcoal)',
                      padding: '0.9rem 1.25rem',
                      borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.mat26}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.68rem', color: 'var(--muted)', marginTop: '0.75rem' }}>
          Source: IQVIA / IMS market data. Sales figures in ₹ Mn (MAT = Moving Annual Total).
        </p>
      </div>
    </section>
  )
}
