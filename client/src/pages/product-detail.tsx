import { useRoute } from 'wouter'
import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { MagneticButton } from '@/components/magnetic-button'
import { motion } from 'framer-motion'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'
import { Download, Play } from 'lucide-react'

export default function ProductDetail() {
  const [, params] = useRoute('/products/:id')
  const productId = params?.id

  // Mock product data
  const product = {
    title: 'Reference Monitors',
    price: '$2,499',
    description: 'Studio-grade precision for professional audio production and critical listening.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Frequency Response: 20Hz - 20kHz (±0.5dB)',
      'Maximum SPL: 118dB',
      'Driver: Custom 6.5" Quantum Driver',
      'Amplification: 200W Bi-amped',
      'Connectivity: XLR, TRS, USB-C'
    ],
    specifications: {
      'Frequency Response': '20Hz - 20kHz (±0.5dB)',
      'Maximum SPL': '118dB @ 1m',
      'Driver Configuration': '6.5" Woofer + 1" Tweeter',
      'Amplification': '200W (120W LF + 80W HF)',
      'Connectivity': 'XLR, TRS, USB-C',
      'Dimensions': '350 x 220 x 280mm',
      'Weight': '8.5kg',
      'Finish': 'Satin Black'
    }
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="pt-20">
        <section className="py-32 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-16">
              <motion.div
                variants={slideInFromLeft}
                initial="initial"
                animate="animate"
                className="lg:col-span-6"
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                variants={slideInFromRight}
                initial="initial"
                animate="animate"
                className="lg:col-span-6"
              >
                <h1 className="text-5xl lg:text-6xl font-black mb-6">
                  {product.title}
                </h1>
                
                <div className="text-3xl font-bold text-gold-accent dark:text-gold-glow mb-8">
                  {product.price}
                </div>
                
                <p className="text-xl leading-relaxed mb-12 text-platinum dark:text-soft-white/80">
                  {product.description}
                </p>
                
                <div className="space-y-4 mb-12">
                  <h3 className="text-xl font-bold">Key Features</h3>
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-gold-accent dark:bg-gold-glow rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  
                  
                  <MagneticButton variant="primary" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Specs
                  </MagneticButton>
                  
                  <MagneticButton variant="outline" size="lg">
                    <Play className="w-5 h-5 mr-2" />
                    Listen Demo
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
            
            {/* Specifications Table */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-32"
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
              <div className="bg-warm-gray dark:bg-deep-black rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-jet-black/10 dark:border-soft-white/10">
                      <span className="font-medium">{key}</span>
                      <span className="text-gold-accent dark:text-gold-glow">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
