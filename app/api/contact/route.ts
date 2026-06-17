import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  company: z.string().optional(),
  email:   z.string().email(),
  phone:   z.string().optional(),
  type:    z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')

    await resend.emails.send({
      from: 'website@polysaccharidechemistry.com',
      to: process.env.CONTACT_EMAIL ?? 'info@polysacc.com',
      cc: process.env.CONTACT_CC_EMAIL ?? 'vishal@polysacc.com',
      subject: `New Enquiry — ${data.type || 'General'} — ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: `
        <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600; width: 140px;">Name</td><td style="padding: 10px 12px; border: 1px solid #eee;">${data.name}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Company</td><td style="padding: 10px 12px; border: 1px solid #eee;">${data.company || '—'}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Email</td><td style="padding: 10px 12px; border: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Phone</td><td style="padding: 10px 12px; border: 1px solid #eee;">${data.phone || '—'}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600;">Enquiry Type</td><td style="padding: 10px 12px; border: 1px solid #eee;">${data.type || '—'}</td></tr>
          <tr><td style="padding: 10px 12px; border: 1px solid #eee; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 10px 12px; border: 1px solid #eee; white-space: pre-wrap;">${data.message}</td></tr>
        </table>
        <p style="font-family: sans-serif; font-size: 12px; color: #999; margin-top: 20px;">Sent from polysaccharidechemistry.com contact form</p>
      `,
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Failed to send message' }, { status: 400 })
  }
}
