'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ZoomIn, Wrench, Truck } from 'lucide-react'
import Image from 'next/image'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: '/Image 1.jpg',
      alt: 'Auto DP - Garage Professionnel',
      title: 'Garage Mécanique',
      description: 'Notre atelier équipé des dernières technologies pour l\'entretien et la réparation de tous types de véhicules.',
      icon: Wrench,
      category: 'Garage'
    },
    {
      src: '/Image 2.jpg', 
      alt: 'Auto DP - Service de Remorquage',
      title: 'Remorquage & Achat',
      description: 'Service de remorquage 24/7 et rachat de véhicules pour particuliers. Intervention rapide dans toute la Belgique.',
      icon: Truck,
      category: 'Services'
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

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
            Notre <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Entreprise</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Découvrez Auto DP, votre partenaire de confiance pour le garage, le remorquage 24/7 
            et l'achat de véhicules pour particuliers.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <image.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {image.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {image.description}
                </p>

                <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                  <span>Voir en grand</span>
                  <ZoomIn className="w-4 h-4 ml-2" />
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
