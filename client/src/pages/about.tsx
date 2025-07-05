import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function About() {
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
                About
                <span className="text-gold-accent dark:text-gold-glow block">Zero dB</span>
              </h1>
              <p className="text-xl text-platinum dark:text-soft-white/80 max-w-4xl mx-auto">
                The story of uncompromising audio excellence and the pursuit of perfect sound.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed mb-6 text-platinum dark:text-soft-white/80">
                  Zero dB was founded on a simple principle: sound should be reproduced exactly as 
                  the artist intended, without coloration, distortion, or compromise. Our mission 
                  is to create audio equipment that serves as a transparent window into the recording, 
                  revealing every nuance and detail with absolute precision.
                </p>
                <p className="text-lg leading-relaxed text-platinum dark:text-soft-white/80">
                  From our headquarters in Zurich, Switzerland, we combine cutting-edge technology 
                  with meticulous craftsmanship to deliver products that exceed the expectations 
                  of the world's most demanding audio professionals.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Zero dB headquarters"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
