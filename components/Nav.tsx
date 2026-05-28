'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Science', href: '/science' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      style={{
        position: 'fixed',
        top: '2rem',
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(15,15,15,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(200,137,58,0.2)',
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 1px 0 rgba(200,137,58,0.3)' : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: 'var(--amber)',
                textTransform: 'uppercase',
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
                color: 'var(--pewter)',
                textTransform: 'uppercase',
              }}
            >
              Chemistry Pvt Ltd
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: 'center', gap: '2.5rem' }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.85rem',
                fontWeight: 400,
                color: 'var(--pewter)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--bone)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--pewter)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex" style={{ gap: '0.75rem', alignItems: 'center' }}>
          <ExternalBtn
            href="https://elmiron.in"
            label="elmiron.in ↗"
            primary
          />
          <ExternalBtn
            href="https://missedbladderdisease.com"
            label="missedbladderdisease.com ↗"
            primary={false}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 20,
                height: '1px',
                background: 'var(--amber)',
                transition: 'all 0.3s',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'translateY(6px) rotate(45deg)'
                      : i === 2
                      ? 'translateY(-6px) rotate(-45deg)'
                      : 'scaleX(0)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--obsidian)',
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.5rem',
              color: 'var(--bone)',
            }}
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2.5rem',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--bone)',
                textDecoration: 'none',
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.borderBottomColor = 'var(--amber)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.borderBottomColor = 'transparent')
              }
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <a
              href="https://elmiron.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.85rem',
                color: 'var(--amber)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              elmiron.in ↗
            </a>
            <a
              href="https://missedbladderdisease.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.85rem',
                color: 'var(--pewter)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              missedbladderdisease.com ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function ExternalBtn({
  href,
  label,
  primary,
}: {
  href: string
  label: string
  primary: boolean
}) {
  const [hovered, setHovered] = useState(false)

  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '0.04em',
    padding: '0.45rem 0.9rem',
    textDecoration: 'none',
    borderRadius: 0,
    transition: 'all 0.25s',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }

  const primaryStyle: React.CSSProperties = {
    ...baseStyle,
    border: '0.5px solid var(--amber)',
    color: hovered ? 'var(--obsidian)' : 'var(--amber)',
    background: hovered ? 'var(--amber)' : 'transparent',
  }

  const ghostStyle: React.CSSProperties = {
    ...baseStyle,
    border: hovered
      ? '0.5px solid var(--amber)'
      : '0.5px solid rgba(212,201,184,0.4)',
    color: hovered ? 'var(--amber)' : 'var(--pewter)',
    background: 'transparent',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={primary ? primaryStyle : ghostStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}
