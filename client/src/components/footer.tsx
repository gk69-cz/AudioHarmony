import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'wouter'

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Reference Monitors', href: '/products/reference-monitors' },
        { label: 'Tower Series', href: '/products/tower-series' },
        { label: 'Subwoofers', href: '/products/subwoofers' },
        { label: 'Custom Builds', href: '/products/custom' },
      ]
    },
    {
      title: 'Technology',
      links: [
        { label: 'Neural DSP', href: '/technology/neural-dsp' },
        { label: 'Quantum Drivers', href: '/technology/quantum-drivers' },
        { label: 'Zero Distortion', href: '/technology/zero-distortion' },
        { label: 'Research', href: '/technology/research' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Investors', href: '/investors' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Warranty', href: '/warranty' },
        { label: 'Privacy', href: '/privacy' },
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-jet-black dark:bg-deep-black text-white py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl font-black tracking-extra-wide">Zero dB</div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-2 h-2 bg-gold-glow rounded-full"
              />
            </div>
            
            <p className="text-soft-white/80 leading-relaxed mb-8">
              Engineering perfect sound through relentless innovation and uncompromising quality.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--gold-glow)' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3 text-soft-white/80">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <motion.a
                        whileHover={{ x: 5, color: 'var(--gold-glow)' }}
                        className="transition-all duration-300 cursor-pointer"
                      >
                        {link.label}
                      </motion.a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-soft-white/60 text-sm">
              © 2024 Zero dB. All rights reserved.
            </p>
            <p className="text-soft-white/60 text-sm mt-4 md:mt-0">
              Engineered in Switzerland. Perfected worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
