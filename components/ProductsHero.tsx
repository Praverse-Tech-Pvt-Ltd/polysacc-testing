export default function ProductsHero() {
  return (
    <section
      style={{
        background: 'var(--hero-grey)',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad-hero"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6rem' }} className="inner-pad">
        <p className="section-tag" style={{ marginBottom: '1.25rem' }}>
          Therapeutic Portfolio
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: 'var(--charcoal)',
            lineHeight: 1.15,
            maxWidth: '720px',
            marginBottom: '1.5rem',
          }}
        >
          Our Product{' '}
          <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Catalogue</span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--muted)',
            lineHeight: 1.8,
            maxWidth: '560px',
          }}
        >
          A comprehensive portfolio spanning polysaccharide therapeutics, iron complexes,
          vitamins, corticosteroids, and speciality APIs — each manufactured to international
          GMP standards and backed by clinical evidence.
        </p>
      </div>
    </section>
  )
}
