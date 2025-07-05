import { motion } from 'framer-motion'
import { MagneticButton } from './magnetic-button'
import { FrequencyVisualizer } from './frequency-visualizer'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-jet-black/60 dark:bg-deep-black/70" />
      
      <div className="relative max-w-8xl mx-auto px-6 lg:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-7 text-white"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-black tracking-extra-wide leading-tight mb-8"
            >
              Engineering
              <span className="block text-gold-accent dark:text-gold-glow">Perfect Sound</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl lg:text-2xl font-light leading-relaxed mb-12 text-soft-white/90"
            >
              Zero dB represents the pinnacle of audio engineering. Every speaker, every component, 
              every detail crafted for absolute sonic perfection.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={scrollToProducts}
              >
                Explore Products
              </MagneticButton>
              
              <MagneticButton
                variant="outline"
                size="lg"
              >
                Watch Demo
              </MagneticButton>
            </motion.div>
          </motion.div>
          
          {/* Frequency Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-5"
          >
            <FrequencyVisualizer />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
