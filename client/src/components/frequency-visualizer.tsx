import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FrequencyVisualizer() {
  const [bars, setBars] = useState<number[]>(Array(10).fill(20))

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 80 + 20))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/10 dark:bg-satin-black/50 backdrop-blur-lg rounded-2xl p-8">
      <h3 className="text-white text-xl font-semibold mb-6">Live Frequency Response</h3>
      <div className="flex items-end space-x-2 h-32">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="bg-gold-accent dark:bg-gold-glow w-3 rounded-t"
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="text-white/80 text-sm mt-4">20Hz - 20kHz | 0.1% THD</div>
    </div>
  )
}
