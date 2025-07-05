import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { LoadingScreen } from '@/components/loading-screen'
import { CustomCursor } from '@/components/custom-cursor'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProductsSection } from '@/components/products-section'
import { TechnologySection } from '@/components/technology-section'
import { SoundDemosSection } from '@/components/sound-demos-section'
import { MediaGallery } from '@/components/media-gallery'
import { GlobalPresence } from '@/components/global-presence'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TechnologySection />
        <SoundDemosSection />
        <MediaGallery />
        <GlobalPresence />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
