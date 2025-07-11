import { motion } from 'framer-motion'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'

export function AboutSection() {
  const achievements = [
    "25+ Years of Engineering Excellence",
    "200+ Patents in Audio Technology", 
    "Global Network of 50+ Partners"
  ]

  return (
    <section id="about" className="py-32 bg-white dark:bg-satin-black">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
              Redefining
              <span className="text-gold-accent dark:text-gold-glow block">Audio Excellence</span>
            </h2>
            
            <p className="text-xl leading-relaxed mb-8 text-platinum dark:text-soft-white/80">
              Founded by audio engineers who refused to compromise, Zero dB emerged from the pursuit 
              of absolute sonic truth. Every product embodies decades of research, innovation, and an 
              unwavering commitment to perfection.
            </p>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-2 h-2 bg-gold-accent dark:bg-gold-glow rounded-full" />
                  <span className="text-lg font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
            <motion.div
              variants={slideInFromRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-6 flex justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="/assets/images/about.jpg"
                alt="Premium speaker engineering detail"
                className="rounded-2xl shadow-2xl w-full max-w-md animate-float"
              />
            </motion.div>
        </div>
      </div>
    </section>
  )
}
