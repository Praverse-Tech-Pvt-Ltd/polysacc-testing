import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Polysaccharide Chemistry Pvt Ltd',
    template: '%s | Polysaccharide Chemistry',
  },
  description:
    'Polysaccharide Chemistry Pvt Ltd — advancing polysaccharide-based pharmaceutical science. Manufacturer of Elmiron® (Pentosan Polysulfate Sodium). Mumbai, India.',
  keywords: [
    'polysaccharide chemistry',
    'pentosan polysulfate sodium',
    'pharmaceutical chemistry India',
    'elmiron manufacturer',
    'GAG layer therapeutics',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Polysaccharide Chemistry Pvt Ltd',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
