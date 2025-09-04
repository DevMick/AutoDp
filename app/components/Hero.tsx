'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFundReception = () => {
    document.querySelector('#fund-reception')?.scrollIntoView({ behavior: 'smooth' })
  }





  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-800/70 to-primary-900/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Auto DP - Garage professionnel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
          >
            <Wrench className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-white font-medium">Service de confiance</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Auto <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">DP</span>
          </motion.h1>

          {/* Description principale */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Un service <span className="text-white font-semibold">rapide</span>, <span className="text-white font-semibold">transparent</span> et <span className="text-white font-semibold">de confiance</span> pour tous vos besoins automobiles
          </motion.p>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 text-gray-200"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm sm:text-base font-medium">24h/24 - 7j/7</span>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-xs text-black">★</span>
              </div>
              <span className="text-sm sm:text-base font-medium">+500 clients satisfaits</span>
            </div>

            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm sm:text-base font-medium">Garantie qualité</span>
            </div>
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Enregistrement
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToFundReception}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
            >
              Réception de Fond
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
