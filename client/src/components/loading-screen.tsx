import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 1000) // Wait for exit animation
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-warm-gray dark:bg-deep-black z-50 flex items-center justify-center"
      >
        <LoadingContent />
      </motion.div>
    )
  }

  return (
    <div className="fixed inset-0 bg-warm-gray dark:bg-deep-black z-50 flex items-center justify-center">
      <LoadingContent />
    </div>
  )
}

function LoadingContent() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-black tracking-extra-wide mb-8 text-jet-black dark:text-soft-white"
      >
        Zero dB
      </motion.div>
      
      <div className="flex space-x-2 justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-16 bg-gold-accent dark:bg-gold-glow"
            animate={{
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-platinum text-sm tracking-wide"
      >
        Engineering Perfect Sound
      </motion.div>
    </div>
  )
}
