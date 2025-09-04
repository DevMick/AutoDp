'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Truck, DollarSign } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Garage Mécanique',
      description: 'Réparations et entretien complets de tous types de véhicules avec des équipements de pointe.',
      features: ['Diagnostic électronique', 'Réparations moteur', 'Entretien préventif', 'Pièces d\'origine'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Remorquage 24/7',
      description: 'Service d\'urgence disponible 24h/24 et 7j/7 dans toute la Belgique avec intervention rapide.',
      features: ['Intervention 24/7', 'Toute la Belgique', 'Équipe professionnelle', 'Tarifs transparents'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: DollarSign,
      title: 'Achat de Véhicules',
      description: 'Rachat de véhicules pour particuliers au meilleur prix avec évaluation gratuite et paiement immédiat.',
      features: ['Évaluation gratuite', 'Meilleur prix garanti', 'Paiement immédiat', 'Démarches simplifiées'],
      color: 'from-green-500 to-green-600'
    }
  ]



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nos <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Auto DP vous accompagne pour tous vos besoins automobiles avec des services professionnels 
            et une expertise reconnue.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-6 sm:p-8`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default Services
