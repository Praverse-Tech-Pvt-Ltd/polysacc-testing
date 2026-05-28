import type { Metadata } from 'next'
import MolecularPattern from '@/components/MolecularPattern'
import { COMPANY, LEADERSHIP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Polysaccharide Chemistry Pvt Ltd — our founding story, scientific philosophy, and corporate purpose.',
}

const philosophyCards = [
  {
    title: 'Molecular Precision',
    body:
      'Every therapeutic we develop begins at the molecular level. Polysaccharide chemistry is unforgiving — chain length, sulfation pattern, and degree of substitution each determine clinical outcome. We engineer with exactness.',
  },
  {
    title: 'Clinical Evidence',
    body:
      'We do not speculate. Our decisions are grounded in peer-reviewed evidence. 35+ years of PPS data, 7 randomised controlled trials, and a rigorous meta-analysis underpin every clinical claim we make.',
  },
  {
    title: 'Unmet Need',
    body:
      'We focus where the system has failed patients — conditions that are misdiagnosed for years, dismissed as psychosomatic, or simply untreatable because no Indian manufacturer had taken the risk. We take the risk.',
  },
]

export default function AboutPage() {
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
            About
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.05,
              marginBottom: '1.75rem',
              maxWidth: 800,
            }}
          >
            About the Company
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
            A pharmaceutical chemistry company with a singular focus: making the most
            sophisticated molecules in nature into the most effective medicines available.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '8rem 6rem',
        }}
        className="section-pad"
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '6rem',
            alignItems: 'start',
          }}
          className="responsive-split mobile-gap"
        >
          {/* Left */}
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              Origin
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(3rem, 15vw, 5rem)',
                fontWeight: 300,
                color: 'var(--sage)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              Mumbai
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.7,
              }}
            >
              Kalbadevi, the historic heart of Mumbai's pharmaceutical and chemical trade.
              Our offices at Sona Chambers sit at the centre of India's most dynamic
              science and commerce district.
            </p>
          </div>

          {/* Right */}
          <div>
            {[
              `Polysaccharide Chemistry Pvt Ltd was founded with a clear mandate: to bring polysaccharide-based therapeutics — the most structurally sophisticated class of pharmaceutical compounds — to Indian patients who had long been denied access to them. Our founding team identified a critical gap: India's pharmaceutical industry, despite its generic manufacturing strength, had no local presence in the complex polysaccharide therapeutic space.`,
              `Our first act was the development and commercialisation of Elmiron® (Pentosan Polysulfate Sodium), a semi-synthetic polysaccharide derived from beechwood hemicellulose. It is among the best FDA-approved oral therapies for Interstitial Cystitis and Bladder Pain Syndrome — a condition that, in India, had been virtually undiagnosed and entirely untreated. Elmiron® is now available in two formulations: 100mg oral capsules and 50mg/mL intravesical solution, manufactured to international standards.`,
              `We are headquartered in Mumbai's Kalbadevi district — a location that speaks to our roots in India's pharmaceutical and chemical trading heritage, combined with our forward-looking clinical mission. Our work sits at the crossroads of organic chemistry, polymer science, clinical pharmacology, and medical education.`,
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  lineHeight: 1.9,
                  marginBottom: '1.75rem',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        style={{
          background: 'var(--sage-pale)',
          padding: '8rem 6rem',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Philosophy
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.15,
              marginBottom: '4rem',
            }}
          >
            Three principles. No compromises.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(138,171,138,0.2)',
            }}
            className="responsive-three"
          >
            {philosophyCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--cream)',
                  padding: '2.5rem 2rem',
                }}
                className="mobile-card-pad"
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: 'var(--sage)',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    opacity: 0.4,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--charcoal)',
                    marginBottom: '0.9rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
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

      {/* Leadership */}
      <section
        style={{ background: 'var(--cream)', padding: '8rem 6rem' }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Leadership
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.15,
              marginBottom: '3.5rem',
            }}
          >
            The team behind the science
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(138,171,138,0.2)',
            }}
            className="responsive-three"
          >
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                style={{ background: 'var(--sage-pale)', padding: '2.5rem 2rem' }}
                className="mobile-card-pad"
              >
                <div
                  style={{
                    width: 32,
                    height: '0.5px',
                    background: 'var(--sage)',
                    marginBottom: '1.5rem',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--sage-deep)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {person.role}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.75rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.15,
                    marginBottom: '0.35rem',
                  }}
                >
                  {person.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    marginBottom: '1.25rem',
                    letterSpacing: '0.03em',
                  }}
                >
                  {person.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                  }}
                >
                  {person.bio}
                </p>
                <a
                  href={`mailto:${person.email}`}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    color: 'var(--sage-deep)',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    borderBottom: '0.5px solid rgba(138,171,138,0.5)',
                    paddingBottom: '1px',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: '6rem',
          textAlign: 'center',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {/* Map pin icon */}
          <div style={{ marginBottom: '2rem' }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: '0 auto', display: 'block' }}
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="rgba(138,171,138,0.7)"
              />
            </svg>
          </div>

          <p className="section-tag" style={{ marginBottom: '1.25rem' }}>
            Registered Office
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.75rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--cream)',
              lineHeight: 1.4,
              marginBottom: '1.5rem',
            }}
          >
            Sona Chambers, Kalbadevi
            <br />
            Mumbai, India
          </p>
          <address
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'rgba(248,246,241,0.6)',
              lineHeight: 2,
              fontStyle: 'normal',
            }}
          >
            {COMPANY.address.full}
          </address>
        </div>
      </section>
    </>
  )
}
