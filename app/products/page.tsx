import ProductsHero from '@/components/ProductsHero'
import ProductCategoryNav from '@/components/ProductCategoryNav'
import NicheStorylineSection from '@/components/NicheStorylineSection'
import IronComplexSection from '@/components/IronComplexSection'
import VitaminB12Section from '@/components/VitaminB12Section'
import MCBSection from '@/components/MCBSection'
import SteroidsSection from '@/components/SteroidsSection'
import AnabolicSteroidsSection from '@/components/AnabolicSteroidsSection'
import MensHealthSection from '@/components/MensHealthSection'
import WomensHealthSection from '@/components/WomensHealthSection'
import DevicesSection from '@/components/DevicesSection'
import DBDSPSection from '@/components/DBDSPSection'
import TeamSection from '@/components/TeamSection'

export const metadata = {
  title: 'Product Catalogue | Polysacc',
  description:
    'A niche pharmaceutical portfolio spanning iron complexes, vitamins, corticosteroids, men\'s health, women\'s health, and specialty APIs — manufactured to international GMP standards.',
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategoryNav />
      <NicheStorylineSection />
      <IronComplexSection />
      <VitaminB12Section />
      <MCBSection />
      <SteroidsSection />
      <AnabolicSteroidsSection />
      <MensHealthSection />
      <WomensHealthSection />
      <DevicesSection />
      <DBDSPSection />
      <TeamSection />
    </>
  )
}
