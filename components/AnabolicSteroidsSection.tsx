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
  return (
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
      </div>
    </section>
  )
}
