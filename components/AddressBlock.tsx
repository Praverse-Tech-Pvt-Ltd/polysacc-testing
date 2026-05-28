import { COMPANY } from '@/lib/data'

interface AddressBlockProps {
  variant?: 'dark' | 'light'
}

export default function AddressBlock({ variant = 'light' }: AddressBlockProps) {
  const textColor = variant === 'dark' ? 'rgba(248,246,241,0.7)' : 'var(--muted)'

  return (
    <div>
      <p
        className="section-tag mb-3"
        style={{ color: 'var(--sage)' }}
      >
        Registered Office
      </p>
      <address
        className="not-italic leading-loose"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.88rem',
          fontWeight: 300,
          color: textColor,
          lineHeight: '2',
        }}
      >
        {COMPANY.address.line1}<br />
        {COMPANY.address.line2}<br />
        {COMPANY.address.line3}<br />
        {COMPANY.address.city} – {COMPANY.address.pin}<br />
        {COMPANY.address.state}
      </address>
    </div>
  )
}
