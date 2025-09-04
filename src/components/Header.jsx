import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Car } from 'lucide-react'

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


  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToFundReception = () => {
    document.querySelector('#fund-reception').scrollIntoView({ behavior: 'smooth' })
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


          {/* CTA Buttons Desktop */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base"
              >
                <span className="hidden sm:inline">Enregistrement</span>
                <span className="sm:hidden">Contact</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFundReception}
                className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base"
              >
                <span className="hidden lg:inline">Réception de fond</span>
                <span className="lg:hidden">Fond</span>
              </motion.button>
            </div>
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
            <div className="px-4 space-y-3">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full text-sm sm:text-base"
              >
                Enregistrement
              </button>
              <button
                onClick={scrollToFundReception}
                className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full text-sm sm:text-base"
              >
                Formulaire de réception de fond
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
