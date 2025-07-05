import { motion } from 'framer-motion'
import { Cpu, Atom, Zap } from 'lucide-react'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'

export function TechnologySection() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Neural DSP Processing',
      description: 'AI-driven signal processing that adapts to room acoustics in real-time.'
    },
    {
      icon: Atom,
      title: 'Quantum Driver Technology',
      description: 'Molecular-level material engineering for unprecedented clarity.'
    },
    {
      icon: Zap,
      title: 'Zero Distortion Architecture',
      description: 'Proprietary crossover design eliminating phase distortion entirely.'
    }
  ]

  return (
    <section id="technology" className="py-32 bg-white dark:bg-satin-black">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Audio engineering laboratory"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
          
          <motion.div
            variants={slideInFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
              Advanced
              <span className="text-gold-accent dark:text-gold-glow block">Engineering</span>
            </h2>
            
            <p className="text-xl leading-relaxed mb-12 text-platinum dark:text-soft-white/80">
              Our proprietary technologies push the boundaries of what's possible in audio reproduction, 
              delivering experiences that transcend traditional listening.
            </p>
            
            <div className="space-y-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex space-x-6"
                >
                  <div className="w-16 h-16 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-xl flex items-center justify-center">
                    <tech.icon className="text-gold-accent dark:text-gold-glow w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-jet-black dark:text-soft-white">
                      {tech.title}
                    </h3>
                    <p className="text-platinum dark:text-soft-white/80">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
