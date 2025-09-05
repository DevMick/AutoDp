'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Truck, Car } from 'lucide-react'
import Image from 'next/image'

const Gallery = () => {
  const images = [
    {
      src: '/Atelier Professionnel.jpg',
      alt: 'Auto DP - Moderne reparatiewerkplaats',
      title: 'Professionele Werkplaats',
      description: 'Onze werkplaats uitgerust met de nieuwste technologieën voor alle soorten reparaties',
      category: 'Garage',
      icon: Wrench
    },
    {
      src: '/Image 2.jpg',
      alt: 'Auto DP - Takeldienst',
      title: 'Takeldienst 24/7',
      description: 'Takeldienst beschikbaar 24u/24 en 7d/7 overal in België',
      category: 'Takeldienst',
      icon: Truck
    },
    {
      src: '/Diagnostic Avancé.jpg',
      alt: 'Auto DP - Autodiagnose',
      title: 'Geavanceerde Diagnose',
      description: 'Geavanceerde diagnoseapparatuur om problemen nauwkeurig te identificeren',
      category: 'Garage',
      icon: Wrench
    },
    {
      src: '/Achat de Véhicules.jpg',
      alt: 'Auto DP - Aangekochte voertuigen',
      title: 'Aankoop Voertuigen',
      description: 'Wij kopen uw voertuigen tegen de beste prijs, gratis evaluatie',
      category: 'Aankoop',
      icon: Car
    },
    {
      src: '/Réparation Moteur.jpg',
      alt: 'Auto DP - Motorreparatie',
      title: 'Motorreparatie',
      description: 'Specialisten in reparatie en revisie van motoren van alle merken',
      category: 'Garage',
      icon: Wrench
    },
    {
      src: '/Équipe Experte.jpg',
      alt: 'Auto DP - Professioneel team',
      title: 'Expert Team',
      description: 'Een team van gekwalificeerde monteurs met meer dan 10 jaar ervaring',
      category: 'Team',
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
            Onze <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Galerij</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Ontdek onze installaties, ons team en onze diensten in beelden
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
