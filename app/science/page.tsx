import type { Metadata } from 'next'
import MolecularPattern from '@/components/MolecularPattern'
import { CLINICAL_STUDIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'The Science',
  description:
    'The polysaccharide science behind Elmiron® — GAG layer biology, PPS mechanism, and 35 years of clinical evidence.',
}

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          background: 'var(--hero-grey)',
          padding: '14rem 6rem 8rem',
          overflow: 'hidden',
          borderBottom: '0.5px solid rgba(91,99,94,0.18)',
        }}
        className="page-hero"
      >
        <MolecularPattern variant="heroGrey" />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Science
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.05,
              marginBottom: '1.75rem',
              maxWidth: 820,
            }}
          >
            The Polysaccharide Science
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--muted)',
              maxWidth: 580,
              lineHeight: 1.75,
            }}
          >
            From carbohydrate polymer chemistry to precision bladder repair — the molecular
            story behind our therapeutics.
          </p>
        </div>
      </section>

      {/* What is a Polysaccharide */}
      <section
        style={{ background: 'var(--cream)', padding: '8rem 6rem' }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'start',
            }}
            className="responsive-split mobile-gap"
          >
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>
                The Molecule
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                What is a Polysaccharide?
              </h2>
              <div
                style={{
                  width: 40,
                  height: '0.5px',
                  background: 'var(--sage)',
                  marginBottom: '2rem',
                }}
              />
              {/* Molecular formula display */}
              <div
                style={{
                  background: 'var(--sage-pale)',
                  border: '0.5px solid rgba(138,171,138,0.3)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '1.2rem',
                    color: 'var(--sage-deep)',
                    marginBottom: '0.5rem',
                  }}
                >
                  (C₅H₈O₄)ₙ
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Xylopyranose repeat unit — Pentosan
                </p>
              </div>
            </div>
            <div>
              {[
                `Polysaccharides are long-chain carbohydrate polymers composed of monosaccharide units linked by glycosidic bonds. Unlike proteins or nucleic acids, polysaccharides derive their biological activity not from a linear sequence code, but from three-dimensional conformation, chain length, branching pattern, and — crucially for pharmaceutical applications — the degree and position of chemical modification.`,
                `In biological systems, polysaccharides serve structural roles (cellulose, chitin), energy storage functions (glycogen, starch), and — most relevant to our work — surface coating and signalling roles. Glycosaminoglycans (GAGs) are a family of linear polysaccharides that coat the epithelial surfaces of organs and mediate protection, lubrication, and cellular recognition. The bladder urothelium relies entirely on its GAG layer for barrier integrity.`,
                `The pharmaceutical application of polysaccharides represents one of the most demanding areas of pharmaceutical chemistry — the synthesis of semi-synthetic analogues that replicate natural GAG function with molecular precision and clinical reliability.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.9,
                    marginBottom: '1.5rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The GAG Layer */}
      <section
        style={{
          position: 'relative',
          background: 'var(--sage-pale)',
          padding: '8rem 6rem',
          overflow: 'hidden',
        }}
        className="section-pad"
      >
        <MolecularPattern variant="light" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              Bladder Biology
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              The Glycosaminoglycan Layer
            </h2>
            <div
              style={{
                width: 40,
                height: '0.5px',
                background: 'var(--sage)',
                marginBottom: '2rem',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
            className="responsive-split mobile-gap"
          >
            <div>
              {[
                `The inner surface of the bladder urothelium is coated by a continuous layer of glycosaminoglycans — predominantly heparan sulphate, chondroitin sulphate, hyaluronic acid, and dermatan sulphate. This GAG layer is not merely a passive barrier; it is an active, dynamic surface that regulates the interaction between urine and the underlying urothelial cells.`,
                `In healthy physiology, the GAG layer prevents the adhesion of bacteria, crystals, ions, and proteins to the urothelial surface. It maintains the integrity of the epithelium, regulates water permeability, and modulates local immunological responses. Its absence — even partial disruption — correlates directly with urothelial hypersensitivity, chronic pain, and the characteristic symptom complex of Interstitial Cystitis.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.9,
                    marginBottom: '1.5rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
            <div>
              {[
                `Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS) is now understood, in significant part, as a disease of GAG layer dysfunction. Patients demonstrate quantifiably reduced GAG layer density on cytoscopic biopsy, elevated permeability to potassium (the "potassium sensitivity test"), and characteristic urothelial histopathology consistent with chronic irritant exposure.`,
                `The logical therapeutic response is GAG layer replenishment — providing the bladder with an exogenous polysaccharide that mimics the natural GAG coating, restores barrier integrity, and allows the urothelium to heal. This is precisely what Pentosan Polysulfate Sodium (PPS) achieves.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.9,
                    marginBottom: '1.5rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PPS as Biomimetic Therapy */}
      <section
        style={{ background: 'var(--charcoal)', padding: '8rem 6rem' }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Mechanism of Action
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.2,
              marginBottom: '3.5rem',
              maxWidth: 640,
            }}
          >
            PPS as Biomimetic Therapy
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(138,171,138,0.15)',
            }}
            className="responsive-three"
          >
            {[
              {
                formula: 'C₁₂H₁₇O₁₇S₄⁻',
                title: 'Structure',
                body: 'Pentosan Polysulfate Sodium is a semi-synthetic, polydisperse polysaccharide prepared from beechwood hemicellulose (xylan). Its backbone is a β-1,4-linked D-xylopyranose chain, sulfated at the 2 and 3 positions, with methyl ester branches at the 4 position of the terminal xylose units.',
              },
              {
                formula: 'GAG → PPS',
                title: 'Biomimicry',
                body: "PPS structurally resembles the heparan sulphate components of the bladder's natural GAG layer. When administered — orally or intravesically — it adsorbs to the urothelial surface, restoring barrier function and reducing the permeability that characterises IC/BPS pathology. The mechanism is physical restoration, not pharmacological suppression.",
              },
              {
                formula: 'MW ≈ 4,000–6,000 Da',
                title: 'Pharmacokinetics',
                body: 'Following oral administration, approximately 3% of PPS is absorbed systemically. The remainder transits to the bladder via renal excretion. Urinary PPS concentrations reach levels sufficient for GAG replenishment within hours of dosing. Steady-state benefit is typically evident at 4–8 weeks, with full effect at 6 months of continuous therapy.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--charcoal)',
                  padding: '2.5rem 2rem',
                  borderLeft: '0.5px solid rgba(138,171,138,0.15)',
                }}
                className="mobile-card-pad"
              >
                <p
                  style={{
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '1rem',
                    color: 'var(--sage)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {card.formula}
                </p>
                <div
                  style={{
                    width: 30,
                    height: '0.5px',
                    background: 'var(--sage)',
                    marginBottom: '1.25rem',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '0.9rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: 'var(--sage-light)',
                    lineHeight: 1.8,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section
        style={{ background: 'var(--cream)', padding: '8rem 6rem' }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Clinical Evidence
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            35 years. 5 positive trials. One clear conclusion.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--muted)',
              marginBottom: '4rem',
              lineHeight: 1.7,
            }}
          >
            PPS has one of the most robust evidence bases in urogynaecology.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(138,171,138,0.2)' }}>
            {CLINICAL_STUDIES.map((study, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--cream)',
                  padding: '2rem 2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '240px 1fr',
                  gap: '3rem',
                  alignItems: 'start',
                }}
                className="responsive-clinical-row mobile-card-pad"
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--charcoal)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {study.authors}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 300,
                      color: 'var(--muted)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {study.journal}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '0.75rem',
                      color: 'var(--sage-deep)',
                    }}
                  >
                    {study.year} · {study.patients} patients
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.92rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.8,
                  }}
                >
                  {study.finding}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
