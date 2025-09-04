'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Truck, Car } from 'lucide-react'
import Image from 'next/image'

const Gallery = () => {
  const images = [
    {
      src: '/Image 1.jpg',
      alt: 'Auto DP - Atelier de réparation moderne',
      title: 'Atelier Professionnel',
      description: 'Notre atelier équipé des dernières technologies pour tous types de réparations',
      category: 'Garage',
      icon: Wrench
    },
    {
      src: '/Image 2.jpg',
      alt: 'Auto DP - Service de remorquage',
      title: 'Remorquage 24/7',
      description: 'Service de remorquage disponible 24h/24 et 7j/7 partout en Belgique',
      category: 'Remorquage',
      icon: Truck
    },
    {
      src: '/Diagnostic Avancé.jpg',
      alt: 'Auto DP - Diagnostic automobile',
      title: 'Diagnostic Avancé',
      description: 'Équipements de diagnostic de pointe pour identifier précisément les problèmes',
      category: 'Garage',
      icon: Wrench
    },
    {
      src: '/Achat de Véhicules.jpg',
      alt: 'Auto DP - Véhicules rachetés',
      title: 'Achat de Véhicules',
      description: 'Nous rachetons vos véhicules au meilleur prix, évaluation gratuite',
      category: 'Achat',
      icon: Car
    },
    {
      src: '/Réparation Moteur.jpg',
      alt: 'Auto DP - Réparation moteur',
      title: 'Réparation Moteur',
      description: 'Spécialistes en réparation et révision de moteurs toutes marques',
      category: 'Garage',
      icon: Wrench
    },
    {
      src: '/Équipe Experte.jpg',
      alt: 'Auto DP - Équipe professionnelle',
      title: 'Équipe Experte',
      description: 'Une équipe de mécaniciens qualifiés avec plus de 10 ans d\'expérience',
      category: 'Équipe',
      icon: Wrench
    }
  ]

  return (
    <section id="galerie" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
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
            Notre <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Galerie</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Découvrez nos installations, notre équipe et nos services en images
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative h-64 sm:h-72 lg:h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <image.icon className="w-5 h-5 text-white" />
                        <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
