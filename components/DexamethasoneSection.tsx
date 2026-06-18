const DEX_PRODUCTS = [
  {
    name: 'Dexamethasone Base',
    form: 'API — Oral / Injectable',
    note: 'Free base form; used in oral tablets, eye drops and topical preparations',
  },
  {
    name: 'Dexamethasone Sodium Phosphate',
    form: 'API — Injectable',
    note: 'Water-soluble salt; preferred for parenteral formulations and infusions',
  },
]

const DEX_NARRATIVE = [
  `Dexamethasone is among the most precisely characterised glucocorticoids in medicine. Its potency — approximately 25 times that of cortisol — and its minimal mineralocorticoid activity make it the agent of choice where anti-inflammatory or immunosuppressant action is required without fluid retention. From cerebral oedema to COVID-19 critical care (RECOVERY trial), from nausea prophylaxis in chemotherapy to neonatal lung maturation, dexamethasone's clinical footprint spans more indications than almost any other single molecule.`,
  `The quality differentiation in dexamethasone manufacturing is not trivial. Impurity profiles — particularly related process impurities and degradation products — are scrutinised intensely by regulated-market pharmacopoeias (USP, BP, EP). High-purity dexamethasone API, manufactured to GMP standards with full analytical characterisation, commands a distinct position against commodity-grade supply. The BJPPL Vapi facility brings that regulatory-grade manufacturing discipline to both base and sodium phosphate salt forms.`,
  `The sodium phosphate salt offers the water solubility required for intravenous and intramuscular injection — the route that matters in acute care. Its use in corticosteroid infusion protocols, dexamethasone suppression tests, and anti-emetic prophylaxis keeps it in constant demand across hospital pharmacy procurement channels. For manufacturers seeking a regulated-market dexamethasone supply partnership, both forms together provide a complete offering.`,
]

const DEX_INDICATIONS = [
  { area: 'Cerebral Oedema', detail: 'Established first-line IV corticosteroid' },
  { area: 'Anti-emesis (Chemotherapy)', detail: 'Pre-treatment prophylaxis protocol' },
  { area: 'COVID-19 Critical Care', detail: 'RECOVERY trial — mortality reduction proven' },
  { area: 'Neonatal Lung Maturation', detail: 'Antenatal corticosteroid therapy' },
  { area: 'Inflammatory Conditions', detail: 'Arthritis, dermatitis, IBD, allergy' },
  { area: 'Dexamethasone Suppression Test', detail: 'Cushing syndrome diagnostic standard' },
]

export default function DexamethasoneSection() {
  return (
    <>
    {/* Basket overview */}
    <section
      style={{ background: 'var(--hero-grey)', padding: '7rem 6rem 5rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 05 — High Purity Dexamethasone</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              Dexamethasone<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>High Purity Basket</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 1rem' }}>
              High-purity steroid basket for regulated-market quality positioning. BJPPL Vapi product basket.
            </p>
            <div
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                background: 'rgba(138,171,138,0.1)',
                border: '0.5px solid rgba(138,171,138,0.3)',
                padding: '0.3rem 0.75rem',
              }}
            >
              BJPPL Vapi · GMP Manufactured
            </div>
          </div>
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Portfolio Products</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {DEX_PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(138,171,138,0.07)',
                    border: '0.5px solid rgba(138,171,138,0.25)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.92rem', fontWeight: 400, color: 'var(--charcoal)', margin: '0 0 0.3rem' }}>{p.name}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.25rem', letterSpacing: '0.04em' }}>{p.form}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--pewter)', margin: 0, lineHeight: 1.5 }}>{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Narrative */}
    <section
      style={{ background: 'var(--sage-pale)', padding: '5rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>The Glucocorticoid Standard</p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.55rem, 2.4vw, 2.1rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--charcoal)',
                lineHeight: 1.35,
                margin: '0 0 2.5rem',
                borderLeft: '3px solid var(--sage)',
                paddingLeft: '1.5rem',
              }}
            >
              "25 times more potent than cortisol — with negligible mineralocorticoid effect. The benchmark synthetic glucocorticoid."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { val: '×25', label: 'Anti-inflammatory potency vs. cortisol' },
                { val: '36–54 hr', label: 'Biological half-life (extended duration)' },
                { val: 'RECOVERY', label: '2020 landmark trial — ICU mortality reduction in COVID-19' },
              ].map((s) => (
                <div key={s.val} style={{ borderTop: '0.5px solid rgba(138,171,138,0.4)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {DEX_NARRATIVE.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  margin: 0,
                  borderTop: i > 0 ? '0.5px solid rgba(138,171,138,0.2)' : 'none',
                  paddingTop: i > 0 ? '1.25rem' : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Indications grid */}
    <section
      id="dexamethasone"
      style={{ background: 'var(--cream)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.25)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Clinical Footprint</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2 }}>
            Indications{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>spanning acute and chronic care</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(138,171,138,0.15)' }} className="responsive-three">
          {DEX_INDICATIONS.map((ind, i) => (
            <div
              key={i}
              style={{
                padding: '1.75rem',
                background: 'var(--cream)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.5rem', lineHeight: 1.3 }}>{ind.area}</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{ind.detail}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'var(--sage-pale)',
            border: '0.5px solid rgba(138,171,138,0.3)',
            borderLeft: '3px solid var(--sage)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage-deep)', margin: '0 0 0.5rem' }}>
            Quality Positioning
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            Both Dexamethasone Base and Dexamethasone Sodium Phosphate are manufactured at BJPPL Vapi to regulated-market GMP standards. Impurity profiling, analytical characterisation and pharmacopoeial compliance (USP / BP / EP) are integral to the supply offering — not optional add-ons.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
