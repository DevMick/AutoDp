'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jan Dupont',
      location: 'Brussel',
      rating: 5,
      comment: 'Uitzonderlijke service! Mijn voertuig werd snel gerepareerd tegen een zeer redelijke prijs. Het team van Auto DP is zeer professioneel en betrouwbaar.',
      service: 'Motorreparatie'
    },
    {
      name: 'Marie Leblanc',
      location: 'Luik',
      rating: 5,
      comment: 'Noodtakeldienst om 2 uur \'s nachts, ze kwamen heel snel! Zeer vriendelijk personeel en onberispelijke service. Ik beveel Auto DP ten zeerste aan.',
      service: 'Takeldienst 24/7'
    },
    {
      name: 'Pieter Martin',
      location: 'Antwerpen',
      rating: 5,
      comment: 'Ik heb mijn auto verkocht aan Auto DP, zeer transparante transactie en eerlijke prijs. Eenvoudig en snel proces, zeer tevreden met hun service.',
      service: 'Voertuigaankoop'
    },
    {
      name: 'Sophie Dubois',
      location: 'Gent',
      rating: 5,
      comment: 'Uitstekende garage! Nauwkeurige diagnose, kwaliteitsreparatie en deskundig advies. Auto DP is mijn referentiegarage in België geworden.',
      service: 'Volledig onderhoud'
    },
    {
      name: 'Marc Janssen',
      location: 'Namen',
      rating: 5,
      comment: 'Opmerkelijke klantenservice. Ze namen de tijd om mij de noodzakelijke reparaties uit te leggen. Zorgvuldig werk en gerespecteerde garantie.',
      service: 'Carrosseriereparatie'
    },
    {
      name: 'Isabelle Moreau',
      location: 'Charleroi',
      rating: 5,
      comment: 'Auto DP heeft me geholpen op een zondagavond! Snelle en efficiënte takeldienst. Een team dat echt 24u/24 beschikbaar is.',
      service: 'Noodhulp'
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
        duration: 0.6
      }
    }
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Wat onze <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">klanten</span> zeggen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Ontdek de getuigenissen van onze tevreden klanten overal in België
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-50 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary-600 opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Service */}
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Rejoignez nos clients satisfaits !
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contactez-nous
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
