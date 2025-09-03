import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: '/Notre atelier moderne.jpg',
      alt: 'Atelier de réparation Auto DP',
      title: 'Notre atelier moderne'
    },
    {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Équipe de mécaniciens',
      title: 'Notre équipe d\'experts'
    },
    {
      src: '/service de remorquage.jpg',
      alt: 'Service de remorquage Auto DP',
      title: 'Service de remorquage'
    },
    {
      src: '/Diagnostic électronique.jpg',
      alt: 'Diagnostic électronique Auto DP',
      title: 'Diagnostic avancé'
    },
    {
      src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Réparation moteur',
      title: 'Réparation moteur'
    },
    {
      src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Entretien véhicule',
      title: 'Entretien complet'
    }
  ]



  const openModal = (index) => {
    setSelectedImage(images[index])
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    setSelectedImage(images[prevIndex])
    setCurrentImageIndex(prevIndex)
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
            Notre <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Galerie</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Découvrez notre atelier moderne, notre équipe d'experts et nos réalisations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 sm:h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-full sm:max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
