const SLEEP_STATS = [
  { value: '30%',    label: 'Adults globally with clinically significant insomnia symptoms' },
  { value: '2.5 hr', label: 'Average melatonin advance achievable for phase-delay disorders' },
  { value: '55+',    label: 'Age cohort where endogenous melatonin production declines most sharply' },
]

const SLEEP_APPLICATIONS = [
  { use: 'Sleep Cycle Regulation',   detail: 'Primary insomnia in adults 55+ — prolonged-release melatonin (Circadin® protocol) is EU-approved as a prescription product' },
  { use: 'Jet Lag',                  detail: 'Phase-shift correction for transmeridian travel — most evidence-backed melatonin application with consistent clinical effect' },
  { use: 'Shift Work Disorder',      detail: 'Circadian realignment for rotating shift workers; reduces sleep latency when taken before the target sleep window' },
  { use: 'Paediatric Sleep',         detail: 'Delayed Sleep-Wake Phase Disorder (DSWPD) in children and adolescents — licensed indication in several EU markets' },
  { use: 'Sleep Quality',            detail: 'Adjunct to sleep hygiene protocols; reduces sleep onset time and improves subjective sleep quality in sub-clinical presentations' },
]

const MARKET_NOTES = [
  { market: 'EU',       note: 'Prescription product (Circadin®) for 55+; prolonged-release formulation. EMA licensed indication.' },
  { market: 'India',    note: 'Rapidly expanding nutraceutical and sleep-support market; pharmaceutical-grade melatonin commands premium positioning.' },
  { market: 'USA',      note: 'OTC supplement market; largest global volume. Pharmaceutical-grade API creates quality differentiation.' },
  { market: 'Asia',     note: 'High-growth market; sleep health awareness growing significantly post-COVID with digital lifestyle disruption.' },
]

export default function SleepSection() {
  return (
    <>
      {/* Narrative */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: '6rem 6rem',
          borderBottom: '0.5px solid rgba(115,100,158,0.2)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}
            className="responsive-split"
          >
            <div>
              <p className="section-tag" style={{ color: 'rgba(180,160,220,0.75)', marginBottom: '1.5rem' }}>
                Basket 10 — Sleep Solutions
              </p>
              <blockquote
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  lineHeight: 1.35,
                  margin: '0 0 2.5rem',
                  borderLeft: '3px solid rgba(180,160,220,0.45)',
                  paddingLeft: '1.5rem',
                }}
              >
                "Melatonin is not a sedative — it is the body's own timing signal."
              </blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {SLEEP_STATS.map((s) => (
                  <div key={s.value} style={{ borderTop: '0.5px solid rgba(180,160,220,0.18)', paddingTop: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'rgba(180,160,220,0.85)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.value}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'rgba(248,246,241,0.5)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                `Sleep is not a luxury — it is physiological infrastructure. The circadian system governs hormone secretion, immune function, metabolic regulation, and cognitive consolidation. When it is disrupted — by shift work, transmeridian travel, age-related melatonin decline, or environmental light exposure — the downstream consequences span every system in the body.`,
                `Melatonin is not a sedative. It is the body's own chronobiotic signal — released by the pineal gland in response to darkness, it communicates the timing of night to every cell in the body. Exogenous melatonin does not force sleep; it repositions the circadian clock to align with the desired sleep window. This distinction is clinically significant: it explains why melatonin works best for phase-related insomnia rather than sleep maintenance disorders.`,
                `The commercial landscape for melatonin has transformed from a niche supplement into a regulated pharmaceutical in key markets. In the EU, prolonged-release melatonin is a prescription product for patients over 55 with primary insomnia. In India and across Asia, pharmaceutical-grade melatonin is positioning above commodity supplement grade — driven by growing sleep-health awareness and digital-lifestyle disruption of circadian rhythms.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: 'rgba(248,246,241,0.7)',
                    lineHeight: 1.9,
                    margin: 0,
                    borderTop: i > 0 ? '0.5px solid rgba(180,160,220,0.12)' : 'none',
                    paddingTop: i > 0 ? '1.5rem' : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product + Applications */}
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
                  background: 'var(--charcoal)',
                  padding: '2rem',
                  borderLeft: '3px solid rgba(180,160,220,0.5)',
                  marginBottom: '1.5rem',
                }}
              >
                <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'rgba(180,160,220,0.65)', letterSpacing: '0.1em', margin: '0 0 0.75rem' }}>API</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--cream)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
                  Melatonin
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'rgba(248,246,241,0.45)', margin: 0, lineHeight: 1.6 }}>
                  Endogenous chronobiotic · N-acetyl-5-methoxytryptamine
                </p>
              </div>
              <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Pitch</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                Sleep support product for sleep cycle regulation, jet lag, shift work disorder and sleep quality — pharmaceutical-grade API with growing regulated-market demand.
              </p>
            </div>

            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Clinical Applications</p>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '3rem' }}>
                {SLEEP_APPLICATIONS.map((app, i) => (
                  <div
                    key={app.use}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '200px 1fr',
                      gap: '2rem',
                      padding: '1.1rem 0',
                      borderTop: i === 0 ? '0.5px solid rgba(138,171,138,0.25)' : '0.5px solid rgba(138,171,138,0.15)',
                      alignItems: 'start',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--sage-deep)', margin: 0 }}>{app.use}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{app.detail}</p>
                  </div>
                ))}
              </div>

              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Market Landscape</p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1px',
                  background: 'rgba(138,171,138,0.15)',
                }}
                className="responsive-two"
              >
                {MARKET_NOTES.map((m) => (
                  <div key={m.market} style={{ background: 'var(--cream)', padding: '1.25rem 1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--sage-deep)', letterSpacing: '0.1em', margin: '0 0 0.5rem', textTransform: 'uppercase' }}>{m.market}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{m.note}</p>
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
