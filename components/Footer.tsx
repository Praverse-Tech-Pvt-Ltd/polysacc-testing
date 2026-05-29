import Link from 'next/link'
import { COMPANY } from '@/lib/data'

const companyLinks = [
  { label: 'About',     href: '/about' },
  { label: 'Science',   href: '/science' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact',   href: '/contact' },
]

const colHeading: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.72rem',
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--sage-light)',
  marginBottom: '1.25rem',
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--charcoal)',
        borderTop: '0.5px solid rgba(138,171,138,0.2)',
        padding: '4rem 6rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
        className="responsive-footer-grid"
      >
        {/* Column 1 — Brand */}
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: 'var(--sage)',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}
            >
              Polysaccharide
            </div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.6rem',
                fontWeight: 300,
                letterSpacing: '0.15em',
                color: 'var(--sage-light)',
                textTransform: 'uppercase',
              }}
            >
              Chemistry Pvt Ltd
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.85rem',
              fontWeight: 300,
              color: 'var(--sage-light)',
              lineHeight: '1.8',
              maxWidth: 280,
            }}
          >
            Advancing polysaccharide-based therapeutics.
            <br />
            Mumbai, India.
          </p>
        </div>

        {/* Column 2 — Company links */}
        <div>
          <p style={colHeading}>Company</p>
          {companyLinks.map((l) => (
            <Link key={l.href} href={l.href} className="footer-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Column 3 — Products */}
        <div>
          <p style={colHeading}>Products &amp; Initiatives</p>
          <a
            href="https://elmiron.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-sage"
          >
            Elmiron® ↗
          </a>
          <a
            href="https://missedbladderdisease.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-sage"
          >
            Missed Bladder Disease ↗
          </a>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <p style={colHeading}>Contact</p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="footer-link-amber"
          >
            {COMPANY.contactPerson}, {COMPANY.contactRole}
            <br />
            {COMPANY.email}
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="footer-link"
          >
            {COMPANY.phone}
          </a>
          <address
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'var(--sage-light)',
              lineHeight: '1.8',
              fontStyle: 'normal',
              marginTop: '0.5rem',
            }}
          >
            {COMPANY.address.line1}<br />
            {COMPANY.address.line2}<br />
            {COMPANY.address.line3}<br />
            {COMPANY.address.city} – {COMPANY.address.pin}
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '0.5px solid rgba(138,171,138,0.15)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'rgba(184,205,184,0.4)',
            letterSpacing: '0.03em',
          }}
        >
          © 2026 Polysaccharide Chemistry Pvt Ltd. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'rgba(184,205,184,0.4)',
            letterSpacing: '0.03em',
          }}
        >
          Rx products for healthcare professionals only.
        </p>
      </div>
    </footer>
  )
}
