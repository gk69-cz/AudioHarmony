import { Download, FileText, Heart, Play, Printer, ShoppingCart } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { ProductBrochure } from "./product-brochure"
import { motion } from "framer-motion"

interface ProductBrochureProps {
  product: {
    id: string;
    title: string;
    category: string;
    price: string;
    description: string;
    image: string;
    features: string[];
    specifications: Record<string, string>;
    categoryDetails?: any;
  };
}
const EnhancedProductActions = ({ product }: ProductBrochureProps) => {
  return (
    <div className="space-y-6">
      {/* Primary Actions */}
      {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <MagneticButton variant="primary" size="lg">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </MagneticButton>
        
        <MagneticButton variant="outline" size="lg">
          <Heart className="w-5 h-5 mr-2" />
          Add to Wishlist
        </MagneticButton>
      </div> */}

      {/* Secondary Actions with Brochure */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Download Specs */}
        <MagneticButton variant="secondary" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download Specs
        </MagneticButton>
        
        {/* Audio Demo */}
        <MagneticButton variant="secondary" size="sm">
          <Play className="w-4 h-4 mr-2" />
          Audio Demo
        </MagneticButton>
        
        {/* Premium Brochure - New Feature */}
        <div className="relative group">
          <ProductBrochure product={product} />
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-jet-black text-soft-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            
            PDF brochure
          </div>
        </div>
      </div>

      {/* Brochure Preview Banner */}
      {/* <div className="mt-8 p-4 bg-gradient-to-r from-gold-accent/10 to-gold-glow/10 border border-gold-accent/20 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-accent/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-jet-black dark:text-soft-white">
                Premium Product Brochure
              </h4>
              <p className="text-sm text-platinum dark:text-soft-white/80">
                Professional PDF with detailed specifications and engineering insights
              </p>
            </div>
          </div>
          <ProductBrochure product={product} />
        </div>
      </div> */}
    </div>
  )
}

// Alternative: Add as a floating action button
const FloatingBrochureButton = ({ product }: ProductBrochureProps ) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <div className="bg-gradient-to-r from-gold-accent to-gold-glow p-3 rounded-full shadow-2xl hover:shadow-gold-accent/25 transition-all duration-300 transform hover:scale-110">
          <ProductBrochure product={product} />
        </div>
        
        {/* Floating tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-jet-black text-soft-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Download Specs
          </div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-jet-black"></div>
        </div>
      </div>
    </div>
  )
}

// Enhanced brochure section for the tabs
const BrochureTab = ({ product }: ProductBrochureProps ) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-satin-black rounded-2xl p-8 shadow-xl"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-gold-accent to-gold-glow rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-jet-black" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Premium Product Brochure</h3>
        <p className="text-platinum dark:text-soft-white/80 max-w-2xl mx-auto">
          Download a professionally designed PDF brochure featuring detailed specifications, 
          engineering insights, and premium presentation of the {product.title}.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-warm-gray dark:bg-deep-black rounded-xl">
          <div className="w-12 h-12 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Printer className="w-6 h-6 text-gold-accent dark:text-gold-glow" />
          </div>
          <h4 className="font-semibold mb-2">Print Ready</h4>
          <p className="text-sm text-platinum dark:text-soft-white/80">
            High-resolution PDF optimized for professional printing
          </p>
        </div>

        <div className="text-center p-6 bg-warm-gray dark:bg-deep-black rounded-xl">
          <div className="w-12 h-12 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FileText className="w-6 h-6 text-gold-accent dark:text-gold-glow" />
          </div>
          <h4 className="font-semibold mb-2">Comprehensive</h4>
          <p className="text-sm text-platinum dark:text-soft-white/80">
            Complete specifications and category-specific details
          </p>
        </div>

        <div className="text-center p-6 bg-warm-gray dark:bg-deep-black rounded-xl">
          <div className="w-12 h-12 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Download className="w-6 h-6 text-gold-accent dark:text-gold-glow" />
          </div>
          <h4 className="font-semibold mb-2">Instant Download</h4>
          <p className="text-sm text-platinum dark:text-soft-white/80">
            Generate and download immediately with one click
          </p>
        </div>
      </div>

      <div className="text-center">
        <ProductBrochure product={product} />
        <p className="text-xs text-platinum dark:text-soft-white/60 mt-2">
          PDF will be generated with current product specifications
        </p>
      </div>
    </motion.div>
  )
}

export { 
  EnhancedProductActions, 
  FloatingBrochureButton, 
  BrochureTab
}
