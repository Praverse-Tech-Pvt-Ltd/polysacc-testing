const PILLARS = [
  {
    number: '01',
    title: 'Science before scale',
    body: 'We enter categories where the clinical evidence is established but the commercial narrative has not been built. Our job is to connect validated science to underserved markets — not to manufacture demand for unproven molecules.',
  },
  {
    number: '02',
    title: 'Complexity as a moat',
    body: 'Polysaccharides, iron nano-complexes, active coenzyme vitamins, synthetic glucocorticoids — these are molecules that require deep chemistry, not just formulation expertise. Complexity filters out the generics-only mindset.',
  },
  {
    number: '03',
    title: 'Therapeutic depth, not breadth',
    body: 'A portfolio of 200 commoditised molecules tells no story. We build depth in fewer areas — understanding the patient journey, the prescriber\'s dilemma, and the regulatory landscape — so our partners can build real franchises.',
  },
  {
    number: '04',
    title: 'API to outcome',
    body: 'We don\'t stop at the bulk drug. Our thinking runs from the chemistry of the API through its formulation, its clinical indication, and its real-world patient impact. That end-to-end perspective is what makes us a niche house, not a trading desk.',
  },
]

export default function NicheStorylineSection() {
  return (
    <section
      id="niche"
      style={{
        background: 'var(--charcoal)',
        padding: '7rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.15)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Opening statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '5rem',
            marginBottom: '5rem',
            alignItems: 'end',
          }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
              The Polysacc Philosophy
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
              Why{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>niche</span>
              {' '}is not a limitation —{' '}
              <br />
              it is the strategy.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(248,246,241,0.7)',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}
            >
              The pharmaceutical industry runs on scale. Volume, margins, generics, tenders.
              That model works — but it leaves an entire tier of therapeutics underserved:
              molecules that are scientifically validated, clinically meaningful, but commercially
              difficult to build.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(248,246,241,0.7)',
                lineHeight: 1.85,
              }}
            >
              Polysacc was built to occupy that space deliberately. We call it
              <em style={{ color: 'var(--sage-light)', fontStyle: 'normal', fontWeight: 400 }}> polysaccharide niche therapeutics</em> —
              not because we only work with polysaccharides, but because the mindset that drives our
              PPS work drives everything we do: find the molecule with real clinical value, understand
              it better than anyone, and build the supply and narrative around it.
            </p>
          </div>
        </div>

        {/* Four pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            borderTop: '0.5px solid rgba(138,171,138,0.2)',
          }}
          className="responsive-four"
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.number}
              style={{
                padding: '2.5rem 2rem',
                borderLeft: i === 0 ? 'none' : '0.5px solid rgba(138,171,138,0.2)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '0.62rem',
                  color: 'var(--sage)',
                  letterSpacing: '0.1em',
                  margin: '0 0 1.25rem',
                }}
              >
                {p.number}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  lineHeight: 1.3,
                  margin: '0 0 1rem',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'rgba(248,246,241,0.55)',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '0.5px solid rgba(138,171,138,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(248,246,241,0.45)',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            "The mass market is well served. The niche is where patients are still waiting."
          </p>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', color: 'var(--sage)', letterSpacing: '0.06em', margin: '0 0 0.2rem', textTransform: 'uppercase' }}>Est.</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 300, color: 'var(--cream)', margin: 0, lineHeight: 1 }}>Mumbai</p>
          </div>
        </div>

      </div>
    </section>
  )
}
