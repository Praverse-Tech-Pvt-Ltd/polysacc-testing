import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import CompanyStatement from '@/components/CompanyStatement'
import ScienceSection from '@/components/ScienceSection'
import PortfolioGrid from '@/components/PortfolioGrid'
import ContactForm from '@/components/ContactForm'
import { COMPANY } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CompanyStatement />
      <ScienceSection />
      <PortfolioGrid />

      {/* Contact section */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: '8rem 6rem',
        }}
        className="section-pad"
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'start',
          }}
          className="responsive-split mobile-gap"
        >
          {/* Left: contact info */}
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              Business enquiries &amp; partnerships
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'var(--sage-light)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              We welcome enquiries from healthcare professionals, pharmaceutical
              distributors, research institutions, and potential business partners.
            </p>

            {/* Address */}
            <div style={{ marginBottom: '2rem' }}>
              <p
                className="section-tag"
                style={{ color: 'var(--sage)', marginBottom: '0.75rem' }}
              >
                Registered Office
              </p>
              <address
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(248,246,241,0.65)',
                  lineHeight: 2,
                  fontStyle: 'normal',
                }}
              >
                {COMPANY.address.line1}<br />
                {COMPANY.address.line2}<br />
                {COMPANY.address.line3}<br />
                {COMPANY.address.city} – {COMPANY.address.pin}<br />
                {COMPANY.address.state}
              </address>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
