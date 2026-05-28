'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { COMPANY, ENQUIRY_TYPES } from '@/lib/data'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  type:    z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '0.5px solid rgba(138,171,138,0.25)',
  color: 'var(--cream)',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.9rem',
  fontWeight: 300,
  padding: '0.9rem 1rem',
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactForm({ showEnquiryType = false }: { showEnquiryType?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // silently handle
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          border: '0.5px solid rgba(138,171,138,0.3)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '2rem',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--cream)',
            marginBottom: '0.75rem',
          }}
        >
          Thank you.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.9rem',
            fontWeight: 300,
            color: 'var(--sage-light)',
          }}
        >
          We&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Row: name + company */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
           className="responsive-form-row">
        <div>
          <input
            {...register('name')}
            placeholder="Full Name *"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(138,171,138,0.25)')}
          />
          {errors.name && <ErrorMsg msg={errors.name.message!} />}
        </div>
        <div>
          <input
            {...register('company')}
            placeholder="Company / Institution"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(138,171,138,0.25)')}
          />
        </div>
      </div>

      {/* Row: email + phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
           className="responsive-form-row">
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address *"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(138,171,138,0.25)')}
          />
          {errors.email && <ErrorMsg msg={errors.email.message!} />}
        </div>
        <div>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone (optional)"
            style={fieldStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(138,171,138,0.25)')}
          />
        </div>
      </div>

      {/* Enquiry type */}
      {showEnquiryType && (
        <div>
          <select
            {...register('type')}
            style={{ ...fieldStyle, color: 'var(--sage-light)' }}
            defaultValue=""
            onFocus={(e) => (e.target.style.borderColor = 'var(--sage)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(138,171,138,0.25)')}
          >
            <option value="" disabled style={{ background: 'var(--charcoal)' }}>
              Enquiry Type
            </option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t} style={{ background: 'var(--charcoal)' }}>
                {t}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <textarea
          {...register('message')}
          placeholder="Your message *"
          rows={5}
          style={{ ...fieldStyle, resize: 'vertical' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--sage)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(138,171,138,0.25)')}
        />
        {errors.message && <ErrorMsg msg={errors.message.message!} />}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        style={{
          width: '100%',
          padding: '1rem',
          background: submitting ? 'rgba(138,171,138,0.6)' : 'var(--sage)',
          color: 'var(--cream)',
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.9rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: 'none',
          borderRadius: 0,
          cursor: submitting ? 'not-allowed' : 'pointer',
          transition: 'background 0.25s',
        }}
        onMouseEnter={(e) => {
          if (!submitting)
            (e.currentTarget as HTMLElement).style.background = 'var(--sage-deep)'
        }}
        onMouseLeave={(e) => {
          if (!submitting)
            (e.currentTarget as HTMLElement).style.background = 'var(--sage)'
        }}
      >
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '0.75rem',
        color: '#c87070',
        marginTop: '0.3rem',
        fontWeight: 300,
      }}
    >
      {msg}
    </p>
  )
}
