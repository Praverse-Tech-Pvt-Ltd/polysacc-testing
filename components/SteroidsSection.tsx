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

export default function SteroidsSection() {
  return (
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
      </div>
    </section>
  )
}
