import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations'

export function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Speaker engineering detail',
      category: 'Engineering'
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Audio mixing console',
      category: 'Studio'
    },
    {
      src: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Speaker grille detail',
      category: 'Products'
    },
    {
      src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Recording studio setup',
      category: 'Studio'
    }
  ]

  return (
    <section id="media" className="py-32 bg-white dark:bg-satin-black">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8 text-jet-black dark:text-soft-white">
            Gallery
          </h2>
          <p className="text-xl text-platinum dark:text-soft-white/80 max-w-3xl mx-auto">
            Explore the artistry behind our acoustic engineering through detailed imagery and 
            behind-the-scenes content.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <motion.img
                variants={scaleOnHover}
                src={image.src}
                alt={image.alt}
                className="rounded-xl shadow-lg h-64 object-cover w-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-jet-black/50 rounded-xl flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <div className="text-sm font-medium">{image.category}</div>
                  <div className="text-xs opacity-80">{image.alt}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-jet-black/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
