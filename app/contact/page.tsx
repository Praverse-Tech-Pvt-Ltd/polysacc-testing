import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import MolecularPattern from '@/components/MolecularPattern'
import { COMPANY } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Polysaccharide Chemistry Pvt Ltd — business partnerships, medical affairs, and investor enquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          background: 'var(--hero-grey)',
          padding: '14rem 6rem 6rem',
          overflow: 'hidden',
          borderBottom: '0.5px solid rgba(91,99,94,0.18)',
        }}
        className="page-hero"
      >
        <MolecularPattern variant="heroGrey" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Contact
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 5vw, 5rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              maxWidth: 680,
            }}
          >
            Let&apos;s build something exceptional
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'var(--muted)',
              maxWidth: 520,
              lineHeight: 1.75,
            }}
          >
            We welcome enquiries from healthcare professionals, pharmaceutical distributors,
            research institutions, investors, and business partners.
          </p>
        </div>
      </section>

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
          {/* Left: info */}
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              How can we help?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'var(--sage-light)',
                lineHeight: 1.8,
                marginBottom: '3rem',
              }}
            >
              Whether you are a prescribing physician, a pharmaceutical distributor, a
              research collaborator, or a potential investor — we look forward to hearing
              from you.
            </p>

            {/* Address */}
            <div style={{ marginBottom: '2.5rem' }}>
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

            {/* Email & Phone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
              <div>
                <p
                  className="section-tag"
                  style={{ color: 'var(--amber)', marginBottom: '0.35rem' }}
                >
                  Contact Person
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: 'var(--amber)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {COMPANY.contactPerson}, {COMPANY.contactRole} · {COMPANY.email}
                </a>
              </div>
              <div>
                <p
                  className="section-tag"
                  style={{ color: 'var(--amber)', marginBottom: '0.35rem' }}
                >
                  Phone
                </p>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  style={{
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
            </div>

            {/* Embedded map */}
            <div
              style={{
                border: '0.5px solid rgba(138,171,138,0.2)',
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Sona+Chambers+Kalbadevi+Mumbai+400002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Polysaccharide Chemistry Pvt Ltd — Sona Chambers, Mumbai"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sage-light)',
                marginBottom: '1.5rem',
              }}
            >
              Enquiry Form
            </p>
            <ContactForm showEnquiryType />
          </div>
        </div>
      </section>
    </>
  )
}
