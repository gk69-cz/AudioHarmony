import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'wouter'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations'

export function ProductsSection() {
  const products = [
    {
      id: 'reference-monitors',
      title: 'Reference Monitors',
      description: 'Studio-grade precision for professional audio production and critical listening.',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'tower-series',
      title: 'Tower Series',
      description: 'Full-range floor-standing speakers delivering uncompromising performance.',
      price: '$4,999',
      image: 'https://pixabay.com/get/g96783f8e61d45c32ef440d726244597592a9293d07cf60577d4066967c779fb7ba82613ab7157ff7eb560cb50bdb5eaf1cb6b1c0b1a044782d10c8bddb4726bf_1280.jpg'
    },
    {
      id: 'signature-subwoofer',
      title: 'Signature Subwoofer',
      description: 'Deep, articulate bass response that defines the foundation of perfect sound.',
      price: '$1,799',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="products" className="py-32 bg-warm-gray dark:bg-deep-black">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
            Premium
            <span className="text-gold-accent dark:text-gold-glow"> Collection</span>
          </h2>
          <p className="text-xl text-platinum dark:text-soft-white/80 max-w-3xl mx-auto">
            Each speaker in our collection represents the pinnacle of acoustic engineering, 
            meticulously crafted for discerning audiophiles.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover="hover"
              className="group"
            >
              <div className="bg-white dark:bg-satin-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <motion.img
                  variants={scaleOnHover}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-2xl font-bold mb-4 text-jet-black dark:text-soft-white">
                  {product.title}
                </h3>
                
                <p className="text-platinum dark:text-soft-white/80 mb-6">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  {/* <span className="text-gold-accent dark:text-gold-glow font-semibold text-lg">
                    {product.price}
                  </span> */}
                  
                  {/* <Link href={`/products/${product.id}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-sm font-medium hover:text-gold-accent dark:hover:text-gold-glow transition-colors flex items-center gap-2"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
