'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jean Dupont',
      location: 'Bruxelles',
      rating: 5,
      comment: 'Service exceptionnel ! Mon véhicule a été réparé rapidement et à un prix très raisonnable. L\'équipe d\'Auto DP est très professionnelle et de confiance.',
      service: 'Réparation moteur'
    },
    {
      name: 'Marie Leblanc',
      location: 'Liège',
      rating: 5,
      comment: 'Remorquage d\'urgence à 2h du matin, ils sont venus très rapidement ! Personnel très aimable et service impeccable. Je recommande vivement Auto DP.',
      service: 'Remorquage 24/7'
    },
    {
      name: 'Pierre Martin',
      location: 'Anvers',
      rating: 5,
      comment: 'J\'ai vendu ma voiture à Auto DP, transaction très transparente et prix équitable. Processus simple et rapide, très satisfait de leur service.',
      service: 'Achat véhicule'
    },
    {
      name: 'Sophie Dubois',
      location: 'Gand',
      rating: 5,
      comment: 'Excellent garage ! Diagnostic précis, réparation de qualité et conseils avisés. Auto DP est devenu mon garage de référence en Belgique.',
      service: 'Entretien complet'
    },
    {
      name: 'Marc Janssen',
      location: 'Namur',
      rating: 5,
      comment: 'Service client remarquable. Ils ont pris le temps de m\'expliquer les réparations nécessaires. Travail soigné et garantie respectée.',
      service: 'Réparation carrosserie'
    },
    {
      name: 'Isabelle Moreau',
      location: 'Charleroi',
      rating: 5,
      comment: 'Auto DP m\'a dépannée un dimanche soir ! Service de remorquage rapide et efficace. Une équipe vraiment disponible 24h/24.',
      service: 'Dépannage urgence'
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
            Ce que disent nos <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">clients</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Découvrez les témoignages de nos clients satisfaits partout en Belgique
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
