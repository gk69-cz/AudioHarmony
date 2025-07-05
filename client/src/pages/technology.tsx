import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { TechnologySection } from '@/components/technology-section'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function Technology() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="pt-20">
        <section className="py-32 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-center mb-20"
            >
              <h1 className="text-6xl lg:text-8xl font-black tracking-wide mb-8">
                Our
                <span className="text-gold-accent dark:text-gold-glow block">Technology</span>
              </h1>
              <p className="text-xl text-platinum dark:text-soft-white/80 max-w-4xl mx-auto">
                Discover the cutting-edge innovations and proprietary technologies that power 
                our audio equipment.
              </p>
            </motion.div>
          </div>
        </section>
        <TechnologySection />
      </main>
      <Footer />
    </>
  )
}
