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
          background: 'var(--slate)',
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
          className="grid-cols-1 lg:grid-cols-2"
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
                color: 'var(--bone)',
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
                color: 'var(--pewter)',
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
                style={{ color: 'var(--amber)', marginBottom: '0.75rem' }}
              >
                Registered Office
              </p>
              <address
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(212,201,184,0.7)',
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

            <a
              href={`mailto:${COMPANY.email}`}
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--amber)',
                textDecoration: 'none',
                marginBottom: '0.5rem',
                transition: 'color 0.2s',
              }}
            >
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'var(--pewter)',
                textDecoration: 'none',
              }}
            >
              {COMPANY.phone}
            </a>
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
