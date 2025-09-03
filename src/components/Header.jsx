import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Car, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#galerie' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-primary-600 p-2 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-dark-900">Auto DP</h1>
              <p className="text-xs text-gray-600 -mt-1 hidden sm:block">Garage & Remorquage</p>
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-sm xl:text-base px-2 py-1"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-primary-600">
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">24/7</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              <span className="hidden sm:inline">Enregistrement</span>
              <span className="sm:hidden">Contact</span>
            </motion.button>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden bg-white border-t border-gray-200 py-3 sm:py-4"
          >
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200 text-sm sm:text-base"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-3 sm:pt-4 border-t border-gray-200">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full text-sm sm:text-base"
                >
                  Enregistrement
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
