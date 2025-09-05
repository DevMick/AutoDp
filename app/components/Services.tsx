'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Truck, DollarSign, Clock, Star, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Garage Mechaniek',
      description: 'Volledige reparaties en onderhoud van alle soorten voertuigen met geavanceerde apparatuur.',
      features: ['Elektronische diagnose', 'Motorreparaties', 'Preventief onderhoud', 'Originele onderdelen'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Takeldienst 24/7',
      description: 'Spoeddienst beschikbaar 24u/24 en 7d/7 in heel België met snelle interventie.',
      features: ['Interventie 24/7', 'Heel België', 'Professioneel team', 'Transparante tarieven'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: DollarSign,
      title: 'Aankoop Voertuigen',
      description: 'Aankoop van voertuigen voor particulieren tegen de beste prijs met gratis evaluatie en onmiddellijke betaling.',
      features: ['Gratis evaluatie', 'Beste prijs gegarandeerd', 'Onmiddellijke betaling', 'Vereenvoudigde procedures'],
      color: 'from-green-500 to-green-600'
    }
  ]

  const stats = [
    { number: '24/7', label: 'Service beschikbaar', icon: Clock },
    { number: '500+', label: 'Tevreden klanten', icon: Star },
    { number: '100%', label: 'Kwaliteitsgarantie', icon: Shield }
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
            Onze <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Diensten</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Auto DP begeleidt u voor al uw automobielbehoeften met professionele diensten
            en erkende expertise.
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-6 sm:p-8 lg:p-12 mt-12 lg:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Services
