import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations'
import { ArrowRight, Download, Globe, Wrench, Users, Truck } from 'lucide-react'
import { Link } from 'wouter'
import { MagneticButton } from '@/components/magnetic-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Products() {
  const productLines = [
    {
      id: 'zero-db-core-5',
      title: 'Zero dB Core 5',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: [
        'Frequency Response: 40Hz – 20kHz',
        'Power Handling: 100W RMS',
        'Impedance: 8 Ohms'
      ],
      price: '$2,499'
    },
    {
      id: 'diy-assembly-kit',
      title: 'DIY Assembly Kit',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: [
        'Complete Component Set',
        'Assembly Manual Included',
        'Professional Grade Parts'
      ],
      price: '$899'
    },
    {
      id: 'reference-monitors',
      title: 'Reference Monitors',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: [
        'Frequency Response: 20Hz – 20kHz',
        'Maximum SPL: 118dB',
        'Bi-amped Design'
      ],
      price: '$3,999'
    },
    {
      id: 'tower-series',
      title: 'Tower Series',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: [
        'Full-range Performance',
        'Floor-standing Design',
        'Premium Materials'
      ],
      price: '$4,999'
    }
  ]

  const globalCapabilities = [
    {
      region: 'India',
      flag: '🇮🇳',
      capabilities: ['Product Sales + Service', 'Bulk Orders', 'Repair Support']
    },
    {
      region: 'Ireland', 
      flag: '🇮🇪',
      capabilities: ['Custom Assembly', 'R&D Testing Lab', 'In-Person Setup']
    },
    {
      region: 'UAE',
      flag: '🇦🇪', 
      capabilities: ['Import & Export Hub', 'Distribution', 'Regional Support']
    }
  ]

  const services = [
    {
      icon: Users,
      title: 'Custom Design for Studios',
      description: 'Tailored acoustic solutions for professional recording environments'
    },
    {
      icon: Globe,
      title: 'OEM Partnerships',
      description: 'White-label manufacturing and co-development opportunities'
    },
    {
      icon: Truck,
      title: 'Global Sourcing',
      description: 'Import-export logistics and worldwide distribution network'
    },
    {
      icon: Wrench,
      title: 'After-Sales Support',
      description: 'Regional support teams providing lifetime technical assistance'
    }
  ]

  const faqs = [
    {
      question: 'Can I assemble the DIY kit myself?',
      answer: 'Yes! Our DIY kits come with detailed assembly manuals and video tutorials. Most customers can complete assembly in 4-6 hours with basic tools.'
    },
    {
      question: 'What tools do I need for assembly?',
      answer: 'You\'ll need a screwdriver set, wire strippers, and a soldering iron. All specialized components and detailed tool lists are included with each kit.'
    },
    {
      question: 'Do you offer assembly workshops?',
      answer: 'Yes! We conduct hands-on assembly workshops at our Ireland facility. These include personalized guidance from our engineers.'
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
              backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Engineered Sound.
                <span className="text-gold-accent dark:text-gold-glow block">Crafted for Performance.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-soft-white/90 max-w-4xl mx-auto mb-12">
                Precision-crafted audio solutions from our labs in Ireland, India, and UAE.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase Grid */}
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
                Product
                <span className="text-gold-accent dark:text-gold-glow"> Showcase</span>
              </h2>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {productLines.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="group"
                >
                  <div className="bg-warm-gray dark:bg-deep-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <motion.img
                      variants={scaleOnHover}
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    
                    <h3 className="text-2xl font-bold mb-4 text-jet-black dark:text-soft-white">
                      {product.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      {product.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-2 text-platinum dark:text-soft-white/80">
                          <div className="w-1 h-1 bg-gold-accent dark:bg-gold-glow rounded-full" />
                          <span className="text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gold-accent dark:text-gold-glow font-bold text-xl">
                        {product.price}
                      </span>
                      
                      <Link href={`/products/${product.id}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="magnetic-button px-6 py-2 bg-gold-accent dark:bg-gold-glow text-jet-black rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Global Capabilities */}
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
                Built Globally.
                <span className="text-gold-accent dark:text-gold-glow block">Heard Everywhere.</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {globalCapabilities.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-satin-black rounded-2xl p-8 text-center"
                >
                  <div className="text-6xl mb-4">{region.flag}</div>
                  <h3 className="text-2xl font-bold mb-6 text-jet-black dark:text-soft-white">
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    {region.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="text-platinum dark:text-soft-white/80">
                        {capability}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIY Kits & Assembly Support */}
        <section className="py-32 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
                  DIY Kits &
                  <span className="text-gold-accent dark:text-gold-glow block">Assembly Support</span>
                </h2>
                
                <p className="text-xl leading-relaxed mb-8 text-platinum dark:text-soft-white/80">
                  Build your own Zero dB speakers with our comprehensive DIY kits. Perfect for 
                  enthusiasts, educators, and audio professionals seeking hands-on experience.
                </p>
                
                <div className="space-y-6 mb-8">
                  <MagneticButton variant="primary" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Assembly Manual
                  </MagneticButton>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-jet-black dark:text-soft-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-platinum dark:text-soft-white/80">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="DIY speaker assembly workshop"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
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
                Services
                <span className="text-gold-accent dark:text-gold-glow"> We Offer</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-satin-black rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="text-gold-accent dark:text-gold-glow w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-jet-black dark:text-soft-white">
                    {service.title}
                  </h3>
                  <p className="text-platinum dark:text-soft-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
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
                Partner With Zero dB
                <span className="text-gold-accent dark:text-gold-glow block">From Blueprint to Bassline</span>
              </h2>
              
              <MagneticButton variant="primary" size="lg" className="mt-8">
                Talk to Our Engineers
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
