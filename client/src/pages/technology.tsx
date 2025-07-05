import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer } from '@/lib/animations'
import { Cpu, Atom, Zap, Waves, Settings, Volume2, Play } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'

export default function Technology() {
  const technologies = [
    {
      title: 'Crossover Design Philosophy',
      description: 'Our proprietary crossover networks eliminate phase distortion through precise component selection and advanced circuit topology.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Waves,
      details: [
        'Butterworth topology for flat response',
        'Custom-wound inductors for minimal DC resistance',
        'Polypropylene capacitors for phase accuracy'
      ]
    },
    {
      title: 'Cabinet Resonance Control',
      description: 'Advanced damping materials and structural engineering eliminate unwanted cabinet resonances that color the sound.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Settings,
      details: [
        'Multi-layer MDF construction with constrained damping',
        'Internal bracing reduces panel resonance by 40dB',
        'Acoustic foam specifically tuned for each enclosure'
      ]
    },
    {
      title: 'Material Science Innovation',
      description: 'Carbon-fiber cones and dampened wood composites deliver unprecedented clarity and natural sound reproduction.',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Atom,
      details: [
        'Carbon-fiber woven driver cones for rigidity',
        'Rubber-dampened wood composite cabinets',
        'Titanium dome tweeters for extended frequency response'
      ]
    }
  ]

  const assemblySteps = [
    {
      step: 1,
      title: 'Precision Manufacturing',
      description: 'Each component is manufactured to aerospace tolerances in our Ireland facility',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      step: 2,
      title: 'Quality Testing',
      description: 'Every driver undergoes individual frequency response testing and matching',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      step: 3,
      title: 'Final Assembly',
      description: 'Hand-assembled by certified technicians with final acoustic verification',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-jet-black/70 dark:bg-deep-black/80" />
          
          <div className="relative max-w-8xl mx-auto px-6 lg:px-10 py-20 w-full text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-6xl lg:text-8xl font-black tracking-wide mb-8 text-white">
                Engineering
                <span className="text-gold-accent dark:text-gold-glow block">Perfect Sound</span>
              </h1>
              <p className="text-xl lg:text-2xl text-soft-white/90 max-w-4xl mx-auto mb-12">
                Discover the cutting-edge innovations and proprietary technologies that define our audio excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Technology - Two Column Layouts */}
        <section className="py-32 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
                Our
                <span className="text-gold-accent dark:text-gold-glow"> Technology</span>
              </h2>
            </motion.div>

            {technologies.map((tech, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center mb-32 ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
                <motion.div
                  variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-xl flex items-center justify-center">
                      <tech.icon className="text-gold-accent dark:text-gold-glow w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-jet-black dark:text-soft-white">
                      {tech.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl leading-relaxed text-platinum dark:text-soft-white/80">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-4">
                    {tech.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gold-accent dark:bg-gold-glow rounded-full" />
                        <span className="text-platinum dark:text-soft-white/80">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  variants={index % 2 === 0 ? slideInFromRight : slideInFromLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src={tech.image}
                    alt={tech.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Assembly Process Video Section */}
        <section className="py-32 bg-warm-gray dark:bg-deep-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
                Assembly Process
                <span className="text-gold-accent dark:text-gold-glow block">Ireland Facility</span>
              </h2>
              <p className="text-xl text-platinum dark:text-soft-white/80 max-w-3xl mx-auto">
                Watch our master craftsmen assemble each speaker with precision and care in our 
                state-of-the-art Irish facility.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {assemblySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-satin-black rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-gold-accent dark:bg-gold-glow rounded-full flex items-center justify-center">
                      <span className="text-jet-black font-bold">{step.step}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-jet-black dark:text-soft-white">
                      {step.title}
                    </h3>
                    <p className="text-platinum dark:text-soft-white/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video Player Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-jet-black rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Assembly process video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-jet-black/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-gold-accent dark:bg-gold-glow rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play className="text-jet-black w-8 h-8 ml-1" />
                </motion.button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm opacity-80">Assembly Process</div>
                <div className="text-lg font-semibold">Behind the Scenes at Zero dB Ireland</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Animated Waveform Graphics */}
        <section className="py-32 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
                Frequency
                <span className="text-gold-accent dark:text-gold-glow"> Response</span>
              </h2>
              <p className="text-xl text-platinum dark:text-soft-white/80 max-w-3xl mx-auto">
                Our speakers deliver ruler-flat frequency response across the entire audible spectrum, 
                ensuring every note is reproduced with mathematical precision.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-warm-gray dark:bg-deep-black rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-jet-black dark:text-soft-white text-center">
                    Live Frequency Analysis
                  </h3>
                  
                  {/* Animated Frequency Bars */}
                  <div className="flex items-end justify-center space-x-2 h-40 mb-6">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <motion.div
                        key={index}
                        className="bg-gold-accent dark:bg-gold-glow w-4 rounded-t"
                        animate={{
                          height: [
                            Math.random() * 120 + 20,
                            Math.random() * 120 + 20,
                            Math.random() * 120 + 20
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-gold-accent dark:text-gold-glow font-semibold mb-2">
                      20Hz - 20kHz | ±0.5dB
                    </div>
                    <div className="text-platinum dark:text-soft-white/60 text-sm">
                      THD: &lt;0.1% | SNR: &gt;120dB
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <Volume2 className="text-gold-accent dark:text-gold-glow w-8 h-8" />
                  <div>
                    <h4 className="text-xl font-bold text-jet-black dark:text-soft-white">
                      Extended Range
                    </h4>
                    <p className="text-platinum dark:text-soft-white/80">
                      From sub-bass fundamentals to air frequencies, every detail preserved
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Cpu className="text-gold-accent dark:text-gold-glow w-8 h-8" />
                  <div>
                    <h4 className="text-xl font-bold text-jet-black dark:text-soft-white">
                      Digital Precision
                    </h4>
                    <p className="text-platinum dark:text-soft-white/80">
                      DSP-corrected response ensures consistent performance
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Zap className="text-gold-accent dark:text-gold-glow w-8 h-8" />
                  <div>
                    <h4 className="text-xl font-bold text-jet-black dark:text-soft-white">
                      Zero Phase Shift
                    </h4>
                    <p className="text-platinum dark:text-soft-white/80">
                      Linear phase crossovers maintain temporal accuracy
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-jet-black dark:bg-deep-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8 text-white">
                Experience the
                <span className="text-gold-accent dark:text-gold-glow block">Technology</span>
              </h2>
              
              <p className="text-xl text-soft-white/90 max-w-3xl mx-auto mb-12">
                Schedule a demonstration at our facility or request detailed technical specifications 
                to experience Zero dB technology firsthand.
              </p>
              
              <MagneticButton variant="primary" size="lg" className="mt-8">
                Schedule Demo
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
