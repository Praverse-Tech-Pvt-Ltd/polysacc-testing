import { notFound } from 'next/navigation'
import Link from 'next/link'
import PolysaccharidePentosanSection from '@/components/PolysaccharidePentosanSection'
import IronComplexSection from '@/components/IronComplexSection'
import MethylcobalamineSection from '@/components/MethylcobalamineSection'
import AnabolicSteroidsSection from '@/components/AnabolicSteroidsSection'
import DexamethasoneSection from '@/components/DexamethasoneSection'
import MensHealthSection from '@/components/MensHealthSection'
import WomensHealthSection from '@/components/WomensHealthSection'
import BiochipSection from '@/components/BiochipSection'
import FDA505b2Section from '@/components/FDA505b2Section'

const CATEGORY_MAP: Record<string, { label: string; component: React.ComponentType }> = {
  'polysaccharide-pentosan': { label: 'Polysaccharide Speciality',      component: PolysaccharidePentosanSection },
  'iron-complex':            { label: 'Iron Complex Finished Dosages',  component: IronComplexSection },
  'methylcobalamine':        { label: 'Methylcobalamine in Neuropathy', component: MethylcobalamineSection },
  'anabolic-steroids':       { label: 'Anabolic Steroids',              component: AnabolicSteroidsSection },
  'dexamethasone':           { label: 'High Purity Dexamethasone',      component: DexamethasoneSection },
  'mens-health':             { label: "Men's Health Urology",           component: MensHealthSection },
  'womens-health':           { label: "Women's Health",                 component: WomensHealthSection },
  'biochip':                 { label: 'Uro-Gyn Bladder Biochip',       component: BiochipSection },
  'fda-505b2':               { label: 'US FDA 505(b)(2) Ideas',         component: FDA505b2Section },
}

const CATEGORY_ORDER = [
  'polysaccharide-pentosan', 'iron-complex', 'methylcobalamine',
  'anabolic-steroids', 'dexamethasone', 'mens-health',
  'womens-health', 'biochip', 'fda-505b2',
]

export function generateStaticParams() {
  return CATEGORY_ORDER.map((category) => ({ category }))
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const entry = CATEGORY_MAP[params.category]
  if (!entry) return {}
  return {
    title: `${entry.label} | Polysacc`,
    description: `Explore Polysacc's ${entry.label} portfolio — niche therapeutics manufactured to international GMP standards.`,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const entry = CATEGORY_MAP[params.category]
  if (!entry) notFound()

  const idx = CATEGORY_ORDER.indexOf(params.category)
  const prevId = idx > 0 ? CATEGORY_ORDER[idx - 1] : null
  const nextId = idx < CATEGORY_ORDER.length - 1 ? CATEGORY_ORDER[idx + 1] : null
  const prevLabel = prevId ? CATEGORY_MAP[prevId].label : null
  const nextLabel = nextId ? CATEGORY_MAP[nextId].label : null

  const Section = entry.component

  return (
    <>
      {/* Breadcrumb / nav bar */}
      <div
        style={{
          position: 'sticky',
          top: 64,
          zIndex: 40,
          background: 'rgba(248,246,241,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '0.5px solid rgba(138,171,138,0.2)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 6rem',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="cat-nav-inner"
        >
          {/* Back */}
          <Link
            href="/products#therapeutic-portfolio"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.75rem',
              fontWeight: 400,
              color: 'var(--muted)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.2s',
            }}
          >
            ← Products
          </Link>

          {/* Current label */}
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: 'var(--sage-deep)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {entry.label}
          </span>

          {/* Prev / Next */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {prevId ? (
              <Link
                href={`/products/${prevId}`}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                  maxWidth: 140,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={prevLabel ?? ''}
              >
                ← {prevLabel}
              </Link>
            ) : <span />}
            {nextId && (
              <Link
                href={`/products/${nextId}`}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                  maxWidth: 140,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={nextLabel ?? ''}
              >
                {nextLabel} →
              </Link>
            )}
          </div>
        </div>
      </div>

      <Section />
    </>
  )
}
