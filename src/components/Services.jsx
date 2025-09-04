import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Truck, DollarSign, Shield, Star, Settings, Zap, Car } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Garage Mécanique',
      description: 'Réparations et entretien complets de votre véhicule par nos mécaniciens experts.',
      features: [
        'Diagnostic électronique',
        'Réparation moteur',
        'Entretien périodique',
        'Contrôle technique'
      ],
      color: 'from-blue-500 to-primary-600',
      image: null,
      logoIcon: Settings,
      logoColor: 'text-blue-600'
    },
    {
      icon: Truck,
      title: 'Remorquage 24/7',
      description: 'Service de remorquage disponible 24h/24 et 7j/7 pour tous types de véhicules.',
      features: [
        'Intervention rapide',
        'Disponible 24h/24',
        'Tous types de véhicules',
        'Équipe professionnelle'
      ],
      color: 'from-red-500 to-orange-600',
      image: null,
      logoIcon: Truck,
      logoColor: 'text-red-600'
    },
    {
      icon: DollarSign,
      title: 'Rachat de Véhicules',
      description: 'Nous rachetons votre véhicule au meilleur prix avec une procédure simple et rapide.',
      features: [
        'Évaluation gratuite',
        'Procédure simplifiée',
        'Paiement immédiat',
        'Tous états acceptés'
      ],
      color: 'from-green-500 to-emerald-600',
      image: null,
      logoIcon: Car,
      logoColor: 'text-green-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
            Des solutions complètes pour tous vos besoins automobiles, 
            avec un service de qualité et une expertise reconnue.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 group cursor-pointer border border-gray-100"
            >
                            {/* Logo Icon */}
              <div className="w-full h-32 sm:h-40 flex items-center justify-center mb-4 sm:mb-6 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-all duration-300">
                <div className="relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.logoIcon className={`w-8 h-8 sm:w-10 sm:h-10 ${service.logoColor}`} />
                  </div>
                  {/* Decorative elements */}
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${service.color} opacity-80`}></div>
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r ${service.color} opacity-60`}></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 sm:mt-6 w-full py-2 sm:py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary-50 hover:to-primary-100 text-gray-800 hover:text-primary-700 font-semibold rounded-lg transition-all duration-300 border border-gray-200 hover:border-primary-200 text-sm sm:text-base"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Services
