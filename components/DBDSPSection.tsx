const DB_USES = [
  'Severe allergic reactions and anaphylaxis',
  'Inflammatory conditions: RA, IBD, lupus, asthma',
  'Cerebral oedema (primary brain tumour, surgery)',
  'COVID-19 cytokine storm (RECOVERY trial, NEJM 2020)',
  'Ophthalmic anti-inflammatory (eye drops)',
  'Palliative care and oncology adjunct',
]

const DSP_USES = [
  'Acute allergic reactions (IV/IM rapid onset)',
  'Pre- and post-operative inflammation',
  'Epidural and intra-articular injections',
  'Ophthalmic surgery (intracameral / subconjunctival)',
  'Acute COPD exacerbations in ICU settings',
  'Neonatal lung maturation (antenatal)',
]

const COMPARISON = [
  { param: 'Chemical form', db: 'Free base (lipophilic)', dsp: 'Sodium phosphate ester (water-soluble)' },
  { param: 'Solubility', db: 'Low in water', dsp: 'Freely water-soluble' },
  { param: 'Routes', db: 'Oral, topical, ophthalmic, IM', dsp: 'IV, IM, intra-articular, ophthalmic, epidural' },
  { param: 'Onset', db: 'Slower (oral/topical)', dsp: 'Rapid (IV bolus)' },
  { param: 'Setting', db: 'Outpatient / chronic', dsp: 'Hospital / acute / surgical' },
  { param: 'Potency vs cortisol', db: '~25×', dsp: '~25× (as prodrug to dexamethasone)' },
]

export default function DBDSPSection() {
  return (
    <section
      id="db-dsp"
      style={{
        background: 'var(--sage-pale)',
        padding: '6rem 6rem',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Synthetic Glucocorticoids</p>
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
            Dexamethasone{' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Base &amp; Sodium Phosphate</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.95rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: '680px',
            }}
          >
            Synthetic glucocorticoids approximately 25× more potent than cortisol. Manufactured
            at BJPPL (Bhageria &amp; Jajodia Pharmaceuticals Pvt Ltd), Vapi, Gujarat — a joint
            venture of Swati Spentose Pvt Ltd and Bhageria Industries Limited.
          </p>
        </div>

        {/* Two-panel cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}
          className="responsive-split"
        >
          {/* DB */}
          <div
            style={{
              border: '0.5px solid rgba(138,171,138,0.3)',
              background: '#fff',
              overflow: 'hidden',
            }}
          >
            <div style={{ background: 'var(--sage-deep)', padding: '1.25rem 1.75rem' }}>
              <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>DB</p>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Dexamethasone Base
              </h3>
            </div>
            <div style={{ padding: '1.75rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                }}
              >
                The lipophilic free base form — used in oral tablets, topical creams, and
                ophthalmic preparations. Preferred for chronic inflammatory conditions managed
                in outpatient settings.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                Clinical Applications
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {DB_USES.map((u, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, marginTop: '0.45rem' }} />
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.6 }}>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DSP */}
          <div
            style={{
              border: '0.5px solid rgba(138,171,138,0.3)',
              background: '#fff',
              overflow: 'hidden',
            }}
          >
            <div style={{ background: 'var(--charcoal)', padding: '1.25rem 1.75rem' }}>
              <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>DSP</p>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: 'var(--cream)',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Dexamethasone Sodium Phosphate
              </h3>
            </div>
            <div style={{ padding: '1.75rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                }}
              >
                The water-soluble prodrug ester — rapidly converted in vivo to active
                dexamethasone. Preferred for intravenous and intramuscular administration
                in acute, surgical, and intensive care settings.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                Clinical Applications
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {DSP_USES.map((u, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--amber)', flexShrink: 0, marginTop: '0.45rem' }} />
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.6 }}>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '1rem',
            }}
          >
            Head-to-Head Comparison
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                minWidth: '560px',
                borderCollapse: 'collapse',
                borderLeft: '3px solid var(--sage-deep)',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--sage-deep)' }}>
                  {['Parameter', 'Dexamethasone Base (DB)', 'Dexamethasone Sodium Phosphate (DSP)'].map((col) => (
                    <th
                      key={col}
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: '#fff',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.85rem 1.25rem',
                        textAlign: 'left',
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.param} style={{ background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)' }}>
                    <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 500, color: 'var(--charcoal)', padding: '0.85rem 1.25rem', borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}>
                      {row.param}
                    </td>
                    <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', padding: '0.85rem 1.25rem', borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}>
                      {row.db}
                    </td>
                    <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', padding: '0.85rem 1.25rem', borderBottom: '0.5px solid rgba(138,171,138,0.2)' }}>
                      {row.dsp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
