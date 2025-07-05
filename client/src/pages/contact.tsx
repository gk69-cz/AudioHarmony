import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { ContactSection } from '@/components/contact-section'

export default function Contact() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
