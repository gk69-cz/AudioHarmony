import { motion } from 'framer-motion'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'

export function GlobalPresence() {
  const stats = [
    { number: '2+', label: 'Countries' },
    { number: '20+', label: 'Partners' },
    { number: '1000+', label: 'Studios' },
    { number: '1', label: 'Years' }
  ]

  const offices = [
    { region: 'Ireland', locations: 'Cork' },
    { region: 'UAE', locations: 'Abudhabi' },
    { region: 'India', locations: 'Kerala,' },
  ]

  return (
    <section id="global" className="py-32 bg-warm-gray dark:bg-deep-black">
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
              Global
              <span className="text-gold-accent dark:text-gold-glow block">Presence</span>
            </h2>
            
            <p className="text-xl leading-relaxed mb-12 text-platinum dark:text-soft-white/80">
              Zero dB products are trusted by audio professionals and enthusiasts across six continents, 
              from world-class recording studios to prestigious concert halls.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-black text-gold-accent dark:text-gold-glow mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-jet-black dark:text-soft-white">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={slideInFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="bg-white dark:bg-satin-black rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-jet-black dark:text-soft-white">
                Regional Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-3 border-b border-jet-black/10 dark:border-soft-white/10 last:border-b-0"
                  >
                    <span className="font-medium text-jet-black dark:text-soft-white">
                      {office.region}
                    </span>
                    <span className="text-gold-accent dark:text-gold-glow text-sm">
                      {office.locations}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
