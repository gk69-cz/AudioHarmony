import { useRoute, useSearch } from 'wouter'
import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { MagneticButton } from '@/components/magnetic-button'
import { motion } from 'framer-motion'
import { fadeInUp, slideInFromLeft, slideInFromRight } from '@/lib/animations'
import { Download, Play, ArrowLeft, ShoppingCart, Heart } from 'lucide-react'
import { Link } from 'wouter'
import { useState, useMemo } from 'react'
import { getProductById, getRelatedProducts } from '../lib/product'
import { 
  EnhancedProductActions, 
  FloatingBrochureButton, 
  BrochureTab, 
} from '../components/enhanced'

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id')
  const searchParams = useSearch()
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'details'>('features')

  // Get product ID from either route params or query params
  const productId = useMemo(() => {
    // First try route params
    if (params?.id) {
      return params.id
    }
    
    // Then try query params (for URLs like /products?=fusion-bookshelf-pro)
    if (searchParams) {
      const urlParams = new URLSearchParams(searchParams)
      // Handle both ?id=product-id and ?=product-id formats
      return urlParams.get('id') || urlParams.get('') || null
    }
    
    return null
  }, [params?.id, searchParams])

  // Get product data from the products file
  const product = productId ? getProductById(productId) : null
  
  // Get related products for recommendations
  const relatedProducts = productId ? getRelatedProducts(productId, 4) : []

  if (!product) {
    return (
      <>
        <CustomCursor />
        <Navigation />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-jet-black dark:text-soft-white">
              Product Not Found
            </h1>
            <p className="text-platinum dark:text-soft-white/80 mb-8">
              The product you're looking for doesn't exist or the ID is invalid.
            </p>
            <p className="text-sm text-platinum dark:text-soft-white/60 mb-8">
              Searched for product ID: {productId || 'No ID provided'}
            </p>
            <Link href="/category">
              <MagneticButton variant="primary">
                Browse All Products
              </MagneticButton>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const renderCategorySpecificDetails = () => {
    if (!product.categoryDetails) return null

    switch (product.category) {
      case 'Subwoofer':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Audio Performance</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Crossover Frequency</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.crossoverFrequency}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Power Output</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.powerOutput}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Enclosure Type</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.enclosureType}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Control Features</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Low Pass Filter</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.lowPassFilter ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Phase Control</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.phaseControl ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Input Options</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.inputs}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Tower / Floorstand':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Driver Configuration</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Driver Array</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.driverArray}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Impedance</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.impedance}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Sensitivity</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.sensitivity}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Construction</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Bi-Amp Support</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.biAmpSupport ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Cabinet Material</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.cabinetMaterial}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Bookshelf / Standmount':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Audio Configuration</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Driver Configuration</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.driverConfiguration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Amplifier Power Range</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.amplifierPowerRange}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Installation</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Wall Mount Compatible</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.wallMountCompatible ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Ideal Room Size</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.idealRoomSize}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Center':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Audio Configuration</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Driver Configuration</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.driverConfiguration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Amplifier Power Range</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.amplifierPowerRange}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Dialog Optimization</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.dialogOptimization ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Installation Options</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Mounting Options</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.mountingOptions}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Magnetic Shielding</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.magneticShielding ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Surround / Height / On-Wall':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Audio Configuration</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Operating Mode</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.operatingMode}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Driver Configuration</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.driverConfiguration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Dispersion Pattern</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.dispersionPattern}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Installation</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Mounting Options</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.mountingOptions}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Ceiling Compatible</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.ceilingCompatible ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Accessories':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Product Specifications</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Cable Types</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.cableTypes}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Conductor Material</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.conductorMaterial}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Connector Plating</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.connectorPlating}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Package Details</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Cable Lengths</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.lengths}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Shielding</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.shielding}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Warranty</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.warranty}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Stand':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Construction</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Construction</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.construction}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Height Range</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.heightRange}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Weight Capacity</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.weightCapacity}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gold-accent dark:text-gold-glow">Features</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Cable Management</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.cableManagement}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Isolation Pads</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.isolationPads}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">Assembly</span>
                  <span className="text-gold-accent dark:text-gold-glow">{product.categoryDetails.assembly}</span>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-platinum dark:text-soft-white/80">
              Category-specific details coming soon...
            </p>
          </div>
        )
    }
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-warm-gray dark:bg-deep-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <Link href="/category">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-platinum dark:text-soft-white/80 hover:text-gold-accent dark:hover:text-gold-glow transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-20 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-16">
              <motion.div
                variants={slideInFromLeft}
                initial="initial"
                animate="animate"
                className="lg:col-span-6"
              >
                <div className="sticky top-24">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
              
              <motion.div
                variants={slideInFromRight}
                initial="initial"
                animate="animate"
                className="lg:col-span-6"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gold-accent/20 dark:bg-gold-glow/20 text-gold-accent dark:text-gold-glow text-sm font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-black mb-6 text-jet-black dark:text-soft-white">
                  {product.title}
                </h1>
                
                <div className="text-3xl font-bold text-gold-accent dark:text-gold-glow mb-8">
                  {product.price}
                </div>
                
                <p className="text-xl leading-relaxed mb-12 text-platinum dark:text-soft-white/80">
                  {product.description}
                </p>
                
                

                {/* <div className="flex gap-4"> */}
                  
                  
<EnhancedProductActions product={product} />
                  
                  
                {/* </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-20 bg-warm-gray dark:bg-deep-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-white dark:bg-satin-black rounded-xl p-2 shadow-lg">
                {(['features', 'specs', 'details'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all capitalize ${
                      activeTab === tab
                        ? 'bg-gold-accent dark:bg-gold-glow text-jet-black shadow-md'
                        : 'text-jet-black dark:text-soft-white hover:bg-gold-accent/10 dark:hover:bg-gold-glow/10'
                    }`}
                  >
                    {tab === 'details' ? `${product.category} Details` : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-satin-black rounded-2xl p-8 shadow-xl"
            >
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="flex items-start space-x-3 p-4 bg-warm-gray dark:bg-deep-black rounded-xl"
                      >
                        <div className="w-2 h-2 bg-gold-accent dark:bg-gold-glow rounded-full mt-2 flex-shrink-0" />
                        <span className="text-jet-black dark:text-soft-white">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-jet-black dark:text-soft-white">{key}</span>
                        <span className="text-gold-accent dark:text-gold-glow font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center">{product.category} Specific Details</h3>
                  {renderCategorySpecificDetails()}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-white dark:bg-satin-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">You Might Also Like</h2>
              <p className="text-platinum dark:text-soft-white/80">
                Other products in the {product.category} category
              </p>
            </motion.div>

            <div className="text-center">
              <Link href={`/product?category=${product.category}`}>
                <MagneticButton variant="primary">
                  View All {product.category} Products
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}