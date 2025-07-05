import { motion } from 'framer-motion'
import { Music, Volume2, Mic } from 'lucide-react'
import { Play, Pause } from 'lucide-react'
import { useAudio, AudioTrack } from '@/hooks/use-audio'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function SoundDemosSection() {
  const { currentTrack, isPlaying, progress, playTrack } = useAudio()

  const demos: AudioTrack[] = [
    {
      id: 'classical',
      title: 'Classical Precision',
      description: 'Orchestra separation demo',
      url: '/audio/classical-demo.mp3',
      duration: '1:32',
      icon: 'music'
    },
    {
      id: 'bass',
      title: 'Bass Response',
      description: 'Low frequency accuracy',
      url: '/audio/bass-demo.mp3', 
      duration: '0:45',
      icon: 'volume'
    },
    {
      id: 'vocal',
      title: 'Vocal Clarity',
      description: 'Human voice reproduction',
      url: '/audio/vocal-demo.mp3',
      duration: '2:15',
      icon: 'mic'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'music': return Music
      case 'volume': return Volume2
      case 'mic': return Mic
      default: return Music
    }
  }

  return (
    <section id="demos" className="py-32 bg-warm-gray dark:bg-deep-black">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-wide mb-8">
            Experience
            <span className="text-gold-accent dark:text-gold-glow"> Zero dB</span>
          </h2>
          <p className="text-xl text-platinum dark:text-soft-white/80 max-w-3xl mx-auto mb-12">
            Immerse yourself in our signature sound. Each demo showcases the full range and 
            precision of our engineering.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {demos.map((demo, index) => {
            const IconComponent = getIcon(demo.icon)
            const isCurrentlyPlaying = currentTrack === demo.id && isPlaying
            const currentProgress = currentTrack === demo.id ? progress : 0
            
            return (
              <motion.div
                key={demo.id}
                variants={fadeInUp}
                className="bg-white dark:bg-satin-black rounded-2xl p-8 shadow-xl"
              >
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gold-accent/20 dark:bg-gold-glow/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent className="text-gold-accent dark:text-gold-glow w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-jet-black dark:text-soft-white">
                    {demo.title}
                  </h3>
                  <p className="text-platinum dark:text-soft-white/80 text-sm mt-2">
                    {demo.description}
                  </p>
                </div>
                
                <div className="bg-warm-gray dark:bg-deep-black rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => playTrack(demo.id, demo.url)}
                      className="w-12 h-12 bg-gold-accent dark:bg-gold-glow rounded-full flex items-center justify-center"
                    >
                      {isCurrentlyPlaying ? (
                        <Pause className="text-jet-black w-5 h-5" />
                      ) : (
                        <Play className="text-jet-black w-5 h-5 ml-0.5" />
                      )}
                    </motion.button>
                    
                    <div className="flex-1 mx-4 h-2 bg-jet-black/20 dark:bg-soft-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gold-accent dark:bg-gold-glow rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${currentProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    <span className="text-xs text-platinum dark:text-soft-white/60">
                      {demo.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
