const OCP_BASKET_PRODUCTS = [
  'Drospirenone', 'Desogestrel', 'Dienogest', 'Levonorgestrel',
  'Norgestrel', 'Gestodene', 'Ethinyl Estradiol', 'Estradiol Valerate',
  'Estradiol Cypionate', 'Estradiol Hemihydrate', 'Tibolone', 'Ulipristal Acetate',
]

const LIFECYCLE_STAGES = [
  {
    phase: 'Reproductive Years',
    subtitle: 'Contraception, cycle regulation & hormonal balance',
    story: 'The first question is always hormonal. Whether managing an irregular cycle, preventing pregnancy, or treating PCOS — oestrogen and progestogen combinations form the pharmacological foundation of women\'s reproductive health. The science is decades deep; the art is in choosing the right combination for the right patient.',
    molecules: [
      { name: 'Ethinylestradiol + Levonorgestrel', use: 'Combined OCP' },
      { name: 'Ethinylestradiol + Cyproterone', use: 'OCP / PCOS / anti-androgen' },
      { name: 'Ethinylestradiol + Dienogest', use: 'Combined OCP / endometriosis' },
      { name: 'Levonorgestrel', use: 'Emergency & regular contraception' },
    ],
    accent: 'var(--sage)',
  },
  {
    phase: 'Endometriosis & Gynaecological Disorders',
    subtitle: 'A condition affecting 1 in 10 women — still widely under-diagnosed',
    story: 'Endometriosis takes an average of 7–10 years to diagnose. By the time a woman has a name for her pain, her quality of life has often been compromised for nearly a decade. Modern progestogen therapy — particularly with high-selectivity molecules — has transformed the management approach.',
    molecules: [
      { name: 'Dienogest', use: 'High-specificity progestogen for endometriosis' },
      { name: 'Norethisterone', use: 'Endometriosis / menstrual disorders' },
      { name: 'Medroxyprogesterone', use: 'Endometriosis / HRT' },
      { name: 'Dydrogesterone', use: 'Luteal support / recurrent miscarriage' },
    ],
    accent: 'var(--amber)',
  },
  {
    phase: 'Perimenopause & Beyond',
    subtitle: 'Hormonal transition — managing the continuum',
    story: 'Menopause is not a disease. But the hormonal transition surrounding it — the vasomotor symptoms, the urogenital changes, the mood disruption — deserves the same rigorous clinical attention as any chronic condition. Hormone replacement therapy, when prescribed thoughtfully, is one of the most evidence-backed interventions in medicine.',
    molecules: [
      { name: 'Estradiol', use: 'HRT — vasomotor & urogenital symptoms' },
      { name: 'Progesterone', use: 'Endometrial protection in HRT' },
      { name: 'Dydrogesterone', use: 'HRT progestogen component' },
      { name: 'Medroxyprogesterone', use: 'Systemic HRT' },
    ],
    accent: 'var(--sage-deep)',
  },
]

export default function WomensHealthSection() {
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
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 07 — Women's Health</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              Women's Health<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>Gynaecology Basket</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
              Women's health and hormone basket for oral contraceptives, emergency contraception, endometriosis and hormone therapy opportunities.
            </p>
          </div>
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Portfolio Products — 12 molecules</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {OCP_BASKET_PRODUCTS.map((p) => (
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
      id="womens-health"
      style={{
        background: 'var(--cream)',
        padding: '7rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
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
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              Gynaecology · Women&apos;s Health
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.12,
              }}
            >
              Every decade brings{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
                a different hormonal question.
              </span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.85,
              }}
            >
              Women&apos;s health is not a single condition — it is a lifelong hormonal narrative.
              From the first menstrual cycle to the last, the central characters are oestrogen and
              progesterone. When they are balanced, life proceeds. When they shift — through contraceptive
              choice, endometriosis, pregnancy, or menopause — clinical intervention becomes a question
              of quality of life.
              <br /><br />
              Our gynaecology portfolio spans the full arc of that journey: contraception, disorder
              management, fertility support, and hormonal restoration.
            </p>
          </div>
        </div>

        {/* Lifecycle stages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {LIFECYCLE_STAGES.map((stage, i) => (
            <div
              key={stage.phase}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                paddingTop: '3rem',
                borderTop: '0.5px solid rgba(138,171,138,0.25)',
                alignItems: 'start',
              }}
              className="responsive-split"
            >
              {/* Left: Story */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: stage.accent,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      margin: 0,
                    }}
                  >
                    Phase {i + 1}
                  </p>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.65rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    margin: '0 0 0.4rem',
                    lineHeight: 1.2,
                  }}
                >
                  {stage.phase}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    color: stage.accent,
                    margin: '0 0 1.25rem',
                    fontStyle: 'italic',
                  }}
                >
                  {stage.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    lineHeight: 1.82,
                    margin: 0,
                  }}
                >
                  {stage.story}
                </p>
              </div>

              {/* Right: Molecules */}
              <div
                style={{
                  background: 'var(--sage-pale)',
                  border: '0.5px solid rgba(138,171,138,0.3)',
                  padding: '1.75rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    margin: '0 0 1.25rem',
                  }}
                >
                  Portfolio Molecules
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {stage.molecules.map((m) => (
                    <div
                      key={m.name}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        paddingBottom: '0.85rem',
                        borderBottom: '0.5px solid rgba(138,171,138,0.2)',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.88rem',
                          fontWeight: 400,
                          color: 'var(--charcoal)',
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {m.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.72rem',
                          fontWeight: 300,
                          color: stage.accent,
                          margin: 0,
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {m.use}
                      </p>
                    </div>
                  ))}
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
            borderTop: '0.5px solid rgba(138,171,138,0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="responsive-three"
        >
          {[
            { value: '1 in 10', label: 'Women affected by endometriosis globally' },
            { value: '₹1,632 Mn', label: 'SSPL gynaecology portfolio — MAT Mar 2026' },
            { value: '3 phases', label: 'Reproductive · Disorders · Perimenopause' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '1.5rem', border: '0.5px solid rgba(138,171,138,0.25)', background: '#fff' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.4rem', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
