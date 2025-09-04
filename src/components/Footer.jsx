import React from 'react'
import { motion } from 'framer-motion'
import { Car, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 p-3 rounded-full shadow-lg transition-colors duration-300"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-primary-600 p-3 rounded-lg">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Auto DP</h3>
              <p className="text-gray-400 text-sm sm:text-base">Garage & Remorquage</p>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg">
            Votre partenaire automobile de confiance. 
            Nous offrons des services complets avec un engagement 
            total envers la satisfaction client.
          </p>

          <div className="flex items-center justify-center space-x-3">
            <span className="text-gray-300 text-sm sm:text-base">contact@auto-dp.fr</span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 sm:pt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm sm:text-base">
              © {new Date().getFullYear()} Auto DP. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
