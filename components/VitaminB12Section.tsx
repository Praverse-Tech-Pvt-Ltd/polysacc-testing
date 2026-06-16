const B12_FORMS = [
  {
    name: 'Cyanocobalamin',
    type: 'Synthetic',
    conversion: 'Requires hepatic conversion to active forms',
    apiVolume: '12,445 kg',
    fdValue: '$5,974 Mn',
    growth: '+10.3%',
    notes: '46 FDA-approved products; dominant legacy form. Oral tablets, nasal sprays, injectable vials.',
    tag: 'Conventional',
    tagColor: 'var(--muted)',
  },
  {
    name: 'Methylcobalamin',
    type: 'Active coenzyme',
    conversion: 'Directly utilised — no conversion needed',
    apiVolume: '27,542 kg',
    fdValue: '$1,301 Mn',
    growth: '+58.9%',
    notes: 'Fastest growing B12 form. Neurological focus. Under-penetrated in US & EU markets.',
    tag: 'Active · High Growth',
    tagColor: 'var(--sage-deep)',
  },
  {
    name: 'Hydroxocobalamin',
    type: 'Injectable precursor',
    conversion: 'Converted to methyl- and adenosylcobalamin in vivo',
    apiVolume: '637 kg',
    fdValue: '$276 Mn',
    growth: 'Stable',
    notes: 'Clinical injectable form. Used in cyanide poisoning antidote protocols. Limited commercial base.',
    tag: 'Specialty / Clinical',
    tagColor: 'var(--amber)',
  },
]

export default function VitaminB12Section() {
  return (
    <section
      id="vitamin-b12"
      style={{
        background: 'var(--cream)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Vitamins & Cobalamins</p>
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
            Vitamin{' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>B12</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.95rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: '640px',
            }}
          >
            The cobalamin family encompasses three clinically distinct forms. Not all B12 is equal —
            bioavailability, mechanism, and therapeutic positioning differ fundamentally across forms.
          </p>
        </div>

        {/* Forms grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}
          className="responsive-three"
        >
          {B12_FORMS.map((form) => (
            <div
              key={form.name}
              style={{
                border: '0.5px solid rgba(138,171,138,0.3)',
                padding: '2rem',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    color: '#fff',
                    background: form.tagColor,
                    padding: '0.2rem 0.6rem',
                    letterSpacing: '0.06em',
                    display: 'inline-block',
                    marginBottom: '0.75rem',
                  }}
                >
                  {form.tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.45rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    margin: '0 0 0.25rem',
                    lineHeight: 1.2,
                  }}
                >
                  {form.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'var(--sage-deep)', margin: 0 }}>
                  {form.type}
                </p>
              </div>

              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                {form.conversion}
              </p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', borderTop: '0.5px solid rgba(138,171,138,0.25)', paddingTop: '1rem' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 0.2rem' }}>API Vol. 2025</p>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0 }}>{form.apiVolume}</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 0.2rem' }}>FD Value</p>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0 }}>{form.fdValue}</p>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 0.2rem' }}>YoY Growth</p>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--sage-deep)', margin: 0 }}>{form.growth}</p>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
                {form.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Key insight banner */}
        <div
          style={{
            background: 'var(--charcoal)',
            padding: '2rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="responsive-split"
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.35rem',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--cream)',
                margin: '0 0 0.5rem',
              }}
            >
              "Cyanocobalamin dominance is driven by legacy, cost, and regulation — not biological superiority."
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', color: 'rgba(248,246,241,0.5)', margin: 0 }}>
              Source: SWATI Vitamin B12 Product Playbook, Eisai Co. Ltd. clinical data
            </p>
          </div>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--sage)', margin: '0 0 0.25rem', lineHeight: 1 }}>+58.9%</p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', color: 'rgba(248,246,241,0.5)', margin: 0, letterSpacing: '0.04em' }}>MCB API vol. growth 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
