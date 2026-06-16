import ProductsHero from '@/components/ProductsHero'
import NicheStorylineSection from '@/components/NicheStorylineSection'
import ProductGrid from '@/components/ProductGrid'

export const metadata = {
  title: 'Products | Polysacc',
  description:
    "A niche pharmaceutical portfolio spanning iron complexes, vitamins, corticosteroids, men's health, women's health, and specialty APIs — manufactured to international GMP standards.",
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <NicheStorylineSection />
      <ProductGrid />
    </>
  )
}
