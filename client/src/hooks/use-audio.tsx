import { useState, useRef, useCallback } from 'react'

export interface AudioTrack {
  id: string
  title: string
  description: string
  url: string
  duration: string
  icon: string
}

export function useAudio() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playTrack = useCallback((trackId: string, audioUrl?: string) => {
    if (currentTrack === trackId && isPlaying) {
      // Pause current track
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setIsPlaying(false)
      return
    }

    if (currentTrack !== trackId) {
      // Stop current track and start new one
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      
      if (audioUrl) {
        audioRef.current = new Audio(audioUrl)
        audioRef.current.addEventListener('ended', () => {
          setIsPlaying(false)
          setCurrentTrack(null)
          setProgress(0)
        })
        
        audioRef.current.addEventListener('timeupdate', () => {
          if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
            setProgress(progress)
          }
        })
      }
      
      setCurrentTrack(trackId)
    }

    // Play or resume
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      // Simulate audio playback for demo
      setCurrentTrack(trackId)
      setIsPlaying(true)
      
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsPlaying(false)
            setCurrentTrack(null)
            return 0
          }
          return prev + 1
        })
      }, 100)
    }
  }, [currentTrack, isPlaying])

  const stopTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTrack(null)
    setProgress(0)
  }, [])

  return {
    currentTrack,
    isPlaying,
    progress,
    playTrack,
    stopTrack,
  }
}
