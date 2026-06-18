const PATHWAY_CONCEPTS = [
  {
    type: 'New Dosage Form',
    description: 'Converting an existing approved drug into a new physical form — tablet to patch, solution to microsphere, immediate-release to modified-release. The 505(b)(2) pathway allows reliance on the safety and efficacy data of the reference listed drug (RLD), requiring only bridging studies for the new form.',
    examples: 'Oral → transdermal, IM injectable → subcutaneous depot, immediate-release → extended-release capsule',
    effort: 'Medium',
  },
  {
    type: 'New Route of Administration',
    description: 'Repurposing an approved molecule via a different delivery route that achieves a meaningfully different pharmacokinetic or clinical outcome. The regulatory argument centres on the new clinical benefit while retaining reliance on the known safety database of the parent compound.',
    examples: 'Oral → intravesical, systemic → topical, IV → inhalation',
    effort: 'Medium–High',
  },
  {
    type: 'Modified-Release Concept',
    description: 'Engineering the release kinetics of an approved molecule to reduce dosing frequency, smooth plasma concentration curves, reduce peak-related adverse effects, or achieve site-specific release. A well-characterised pharmacokinetic-pharmacodynamic model underpins the regulatory submission.',
    examples: 'Once-daily formulation of a twice-daily molecule, gastric-retention systems, colon-targeted delivery',
    effort: 'Medium',
  },
  {
    type: 'Fixed-Dose Combination',
    description: 'Combining two or more individually approved molecules into a single dosage form where the combination demonstrates additive or synergistic clinical value, simplifies treatment, or improves adherence meaningfully over co-administration. The 505(b)(2) route allows reliance on each component\'s existing approval while adding combination-specific bridging data.',
    examples: 'Alpha-blocker + 5-ARI combination tablets, OCP combination optimisation, anti-emetic combinations',
    effort: 'Medium–High',
  },
  {
    type: 'New Strength or Packaging',
    description: 'Regulatory opportunities exist where an approved molecule lacks a clinically useful dose strength or patient-appropriate packaging format — paediatric doses, geriatric unit-dose packaging, or precision dose strengths for specific subpopulations.',
    examples: 'Paediatric dosing strengths, geriatric blister unit doses, precision microdose formulations',
    effort: 'Low–Medium',
  },
  {
    type: 'Repurposing / New Use Concept',
    description: 'Extending an approved molecule into a new indication where existing safety data supports the regulatory argument and the clinical evidence base is emerging. The 505(b)(2) pathway is ideally suited: the full safety database is inherited; only efficacy for the new indication requires demonstration.',
    examples: 'IC/BPS indications for existing urological molecules, neuropathy adjunct use for metabolic drugs',
    effort: 'High — indication-specific trials required',
  },
]

const REGULATORY_NOTE = `The US FDA 505(b)(2) pathway is not a shortcut — it is a legitimate regulatory framework that allows new drug applications to rely, in part, on published literature or existing FDA drug approval findings for at least some portion of the evidence needed for approval. For a manufacturer with GMP-certified API capability and niche therapeutic focus, 505(b)(2) represents an entry mechanism into the US regulated market that does not require a full de novo clinical programme for each molecule.`

export default function FDA505b2Section() {
  return (
    <>
    {/* Hero */}
    <section
      style={{ background: 'var(--hero-grey)', padding: '7rem 6rem 5rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 09 — Regulatory Strategy</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              US FDA<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>505(b)(2) Ideas</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 1.5rem' }}>
              Potential repurposing, new dosage form, new route, new combination and lifecycle extension opportunities under the US FDA 505(b)(2) pathway.
            </p>
            <div
              style={{
                padding: '1.1rem 1.4rem',
                background: 'rgba(138,171,138,0.06)',
                border: '0.5px solid rgba(138,171,138,0.2)',
                borderLeft: '3px solid var(--sage)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.4rem' }}>
                Status
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                Ideas basket — concept and opportunity stage. Specific product names to be finalised after internal review.
              </p>
            </div>
          </div>
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Concept Areas</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {PATHWAY_CONCEPTS.map((c) => (
                <span
                  key={c.type}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    color: 'var(--sage)',
                    background: 'rgba(138,171,138,0.1)',
                    border: '0.5px solid rgba(138,171,138,0.3)',
                    padding: '0.35rem 0.85rem',
                  }}
                >
                  {c.type}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(138,171,138,0.06)',
                border: '0.5px solid rgba(138,171,138,0.18)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                {REGULATORY_NOTE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Concept breakdown */}
    <section
      id="fda-505b2"
      style={{ background: 'var(--sage-pale)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.25)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Pathway Mechanics</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2 }}>
            Six{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>regulatory opportunity types</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {PATHWAY_CONCEPTS.map((concept, i) => (
            <div
              key={concept.type}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
                padding: '2.5rem 0',
                borderTop: '0.5px solid rgba(138,171,138,0.25)',
                borderBottom: i === PATHWAY_CONCEPTS.length - 1 ? '0.5px solid rgba(138,171,138,0.25)' : 'none',
                alignItems: 'start',
              }}
              className="responsive-split"
            >
              <div>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>{concept.type}</p>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    color: concept.effort.startsWith('High') ? 'var(--amber)' : 'var(--sage-deep)',
                    border: `0.5px solid ${concept.effort.startsWith('High') ? 'var(--amber)' : 'var(--sage)'}`,
                    padding: '0.15rem 0.55rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {concept.effort}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.82, margin: 0 }}>
                  {concept.description}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--sage-deep)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  {concept.examples}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
