import {
  HeroSection,
  BuildAnything,
  ProductionPatterns,
  FeaturedComponents,
  DeveloperExperience,
  WhyForgeui,
  Cta,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className='bg-background text-foreground min-h-screen overflow-hidden'>
      <HeroSection />
      <BuildAnything />
      <ProductionPatterns />
      <FeaturedComponents />
      <DeveloperExperience />
      <WhyForgeui />
      <Cta />
    </main>
  );
}
