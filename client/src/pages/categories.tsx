import React, { useState, useMemo, useEffect } from 'react'

import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations'
import { ArrowRight, Filter, Grid, List } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { MagneticButton } from '@/components/magnetic-button'
import { useSearchParams } from 'next/navigation'

export default function Categories() {
  const [location, setLocation] = useLocation()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Parse and decode query parameters properly

 const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Subwoofer',
    'Tower / Floorstand',
    'Bookshelf / Standmount', 
    'Center',
    'Surround / Height / On-Wall',
    'Accessories',
    'Stand'
  ]

  const products = [
    {
      id: 'phantom-sub-12',
      name: 'Phantom Sub 12',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Subwoofer',
      price: '$1,299'
    },
    {
      id: 'titan-tower-pro',
      name: 'Titan Tower Pro',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Tower / Floorstand',
      price: '$2,899'
    },
    {
      id: 'compact-studio-mk2',
      name: 'Compact Studio MK2',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Bookshelf / Standmount',
      price: '$799'
    },
    {
      id: 'crystal-center-elite',
      name: 'Crystal Center Elite',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Center',
      price: '$1,199'
    },
    {
      id: 'altitude-surround-x3',
      name: 'Altitude Surround X3',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Surround / Height / On-Wall',
      price: '$899'
    },
    {
      id: 'precision-cable-kit',
      name: 'Precision Cable Kit',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Accessories',
      price: '$149'
    },
    {
      id: 'apex-floor-stand',
      name: 'Apex Floor Stand',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Stand',
      price: '$299'
    },
    {
      id: 'vortex-sub-15',
      name: 'Vortex Sub 15',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Subwoofer',
      price: '$1,899'
    },
    {
      id: 'spectrum-tower-xl',
      name: 'Spectrum Tower XL',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Tower / Floorstand',
      price: '$3,499'
    },
    {
      id: 'fusion-bookshelf-pro',
      name: 'Fusion Bookshelf Pro',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Bookshelf / Standmount',
      price: '$1,299'
    },
    {
      id: 'nexus-center-ultra',
      name: 'Nexus Center Ultra',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Center',
      price: '$1,599'
    },
    {
      id: 'orbit-wall-mount',
      name: 'Orbit Wall Mount',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Surround / Height / On-Wall',
      price: '$699'
    }
  ]

  // Update selected category when URL changes
useEffect(() => {
  const search = window.location.search
  const urlParams = new URLSearchParams(search)
  const rawCategory = urlParams.get('category')
  console.log('urlParams category from URL:', search)

  console.log('urlParams category from URL:', urlParams)
  console.log('Raw category from URL:', rawCategory)

  setSelectedCategory(rawCategory ? decodeURIComponent(rawCategory) : 'All')
}, [location])

  const filteredProducts = useMemo(() => {
    console.log('Filtering products for category:', selectedCategory)
    console.log('Available categories in products:', Array.from(new Set(products.map(p => p.category))))
    
    if (selectedCategory === 'All') return products
    
    const filtered = products.filter(product => product.category === selectedCategory)
    console.log('Filtered products:', filtered.length, 'items')
    return filtered
  }, [selectedCategory])

  // Function to handle category selection and URL update
  const handleCategorySelect = (category: string) => {
    console.log('Selecting category:', category)
    setSelectedCategory(category)
    
    if (category === 'All') {
      setLocation('/product')
    } else {
      setLocation(`/product?category=${encodeURIComponent(category)}`)
    }
  }

  // Function to handle "Show All Products" button
  const handleShowAll = () => {
    setSelectedCategory('All')
    setLocation('/product')
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="min-h-[80vh] flex items-center relative overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Audio Collection.
                <span className="text-gold-accent dark:text-gold-glow block">
                  {selectedCategory === 'All' ? 'Every Category.' : selectedCategory}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-soft-white/90 max-w-4xl mx-auto mb-12">
                {selectedCategory === 'All' 
                  ? 'Discover our complete range of premium audio equipment across all categories.'
                  : `Explore our premium ${selectedCategory} collection.`
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter & Controls */}
         <section className="py-4 bg-white/95 dark:bg-satin-black/95 backdrop-blur-sm sticky top-20 z-40 border-b border-gray-200/50 dark:border-gray-800/50">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between gap-4 min-h-[60px]">
              {/* Category Filter - Horizontal Scrollable */}
              <div className="flex-1 min-w-0">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2">
                  <div className="flex gap-2 flex-nowrap">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCategorySelect(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                          selectedCategory === category
                            ? 'bg-gold-accent dark:bg-gold-glow text-jet-black shadow-md'
                            : 'bg-transparent text-jet-black dark:text-soft-white hover:bg-gold-accent/10 dark:hover:bg-gold-glow/10 border border-gray-300 dark:border-gray-700'
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-xs text-platinum dark:text-soft-white/60 font-medium">
                  {filteredProducts.length} items
                </span>
                <div className="flex gap-1 bg-warm-gray/50 dark:bg-deep-black/50 rounded-lg p-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-gold-accent dark:bg-gold-glow text-jet-black shadow-sm' 
                        : 'text-jet-black dark:text-soft-white/70 hover:text-jet-black dark:hover:text-soft-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded transition-all ${
                      viewMode === 'list' 
                        ? 'bg-gold-accent dark:bg-gold-glow text-jet-black shadow-sm' 
                        : 'text-jet-black dark:text-soft-white/70 hover:text-jet-black dark:hover:text-soft-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid/List */}
        <section className="py-32 bg-warm-gray dark:bg-deep-black">
          <div className="max-w-8xl mx-auto px-6 lg:px-10">
            <motion.div
              key={selectedCategory} // Re-animate when category changes
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className={
                viewMode === 'grid' 
                  ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "space-y-6"
              }
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  custom={index}
                  whileHover="hover"
                  className="group"
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="bg-white dark:bg-satin-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <motion.img
                          variants={scaleOnHover}
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-jet-black/0 group-hover:bg-jet-black/20 transition-all duration-300" />
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-xs text-gold-accent dark:text-gold-glow font-semibold uppercase tracking-wider">
                            {product.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-4 text-jet-black dark:text-soft-white">
                          {product.name}
                        </h3>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gold-accent dark:text-gold-glow font-bold text-lg">
                            {product.price}
                          </span>
                          
                          <Link href={`/products?=${product.id}`}>
                            <motion.button
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 px-4 py-2 bg-gold-accent dark:bg-gold-glow text-jet-black rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                            >
                              View
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="bg-white dark:bg-satin-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <motion.img
                            variants={scaleOnHover}
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded-xl"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="mb-1">
                            <span className="text-xs text-gold-accent dark:text-gold-glow font-semibold uppercase tracking-wider">
                              {product.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-jet-black dark:text-soft-white">
                            {product.name}
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <span className="text-gold-accent dark:text-gold-glow font-bold text-xl">
                            {product.price}
                          </span>
                          
                          <Link href={`/products?=${product.id}`}>
                            <motion.button
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 px-6 py-3 bg-gold-accent dark:bg-gold-glow text-jet-black rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                              View Product
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <Filter className="w-16 h-16 text-gold-accent dark:text-gold-glow mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-jet-black dark:text-soft-white mb-4">
                  No products found
                </h3>
                <p className="text-platinum dark:text-soft-white/80 mb-8">
                  Try selecting a different category or view all products.
                </p>
                <MagneticButton 
                  onClick={handleShowAll}
                  variant="primary"
                >
                  Show All Products
                </MagneticButton>
              </motion.div>
            )}
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
                Need Custom Solutions?
                <span className="text-gold-accent dark:text-gold-glow block">We Build to Order</span>
              </h2>
              
              <p className="text-xl text-soft-white/90 max-w-3xl mx-auto mb-12">
                Can't find exactly what you're looking for? Our engineering team specializes in custom audio solutions.
              </p>
              
              <MagneticButton variant="primary" size="lg">
                Request Custom Quote
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}