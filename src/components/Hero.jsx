import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Star } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFundReception = () => {
    document.querySelector('#fund-reception').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-800/70 to-primary-900/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Garage Auto DP - Atelier mécanique professionnel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
          >
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-xs sm:text-sm font-medium">Service de confiance</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-white">Auto DP</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-blue-300 bg-clip-text text-transparent">
              Garage & Remorquage 24/7
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto px-4"
          >
            Un service <span className="text-primary-300 font-semibold">rapide</span>, 
            <span className="text-primary-300 font-semibold"> transparent</span> et 
            <span className="text-primary-300 font-semibold"> de confiance</span> pour tous vos besoins automobiles
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 px-4"
          >
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-400" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold">24h/24 - 7j/7</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold">+500 clients satisfaits</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold">Garantie qualité</span>
            </div>
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              Enregistrement
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToFundReception}
              className="bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              Formulaire de réception de fond
            </motion.button>

          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

export default Hero
