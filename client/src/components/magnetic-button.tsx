import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function MagneticButton({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button'
}: MagneticButtonProps) {
  const baseClasses = "magnetic-button font-semibold transition-all duration-300 rounded-lg"
  
  const variantClasses = {
    primary: "bg-gold-accent dark:bg-gold-glow text-jet-black hover:shadow-2xl",
    secondary: "bg-white dark:bg-satin-black text-jet-black dark:text-soft-white border-2 border-transparent hover:border-gold-accent dark:hover:border-gold-glow",
    outline: "border-2 border-white text-white hover:bg-white hover:text-jet-black"
  }
  
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg"
  }

  return (
    <motion.button
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
