import { motion } from 'framer-motion'
import { Link, useLocation } from 'wouter'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { MagneticButton } from './magnetic-button'

export function Navigation() {
  const [location] = useLocation()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/technology', label: 'Technology' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-40 glass-effect bg-warm-gray/80 dark:bg-deep-black/80 border-b border-jet-black/10 dark:border-soft-white/10"
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="text-2xl font-black tracking-extra-wide text-jet-black dark:text-soft-white">
                Zero dB
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-2 h-2 bg-gold-accent dark:bg-gold-glow rounded-full"
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location === item.href
                      ? 'text-gold-accent dark:text-gold-glow'
                      : 'text-jet-black dark:text-soft-white hover:text-gold-accent dark:hover:text-gold-glow'
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-jet-black/10 dark:hover:bg-soft-white/10 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-soft-white" />
              ) : (
                <Moon className="h-5 w-5 text-jet-black" />
              )}
            </motion.button>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-jet-black dark:text-soft-white" />
              ) : (
                <Menu className="h-6 w-6 text-jet-black dark:text-soft-white" />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-jet-black/10 dark:border-soft-white/10 py-4"
          >
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors cursor-pointer ${
                    location === item.href
                      ? 'text-gold-accent dark:text-gold-glow'
                      : 'text-jet-black dark:text-soft-white hover:text-gold-accent dark:hover:text-gold-glow'
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
