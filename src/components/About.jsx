import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Clock, Shield, Target, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Transparence',
      description: 'Des tarifs clairs et des devis détaillés pour une confiance totale.'
    },
    {
      icon: Award,
      title: 'Fiabilité',
      description: 'Plus de 8 ans d\'expérience et une expertise reconnue dans le secteur.'
    },
    {
      icon: Clock,
      title: 'Rapidité',
      description: 'Interventions rapides et efficaces pour minimiser vos contraintes.'
    }
  ]

  const stats = [
    { number: '8+', label: 'Années d\'expérience' },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '24/7', label: 'Disponibilité' },
    { number: '100%', label: 'Satisfaction' }
  ]

  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Équipe Auto DP au travail"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
              >
                À propos de{' '}
                <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
                  Auto DP
                </span>
              </motion.h2>
              
                             <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="text-xl text-gray-600 leading-relaxed"
               >
                 Auto DP s'est imposé comme une référence dans le domaine automobile. 
                 Notre passion pour l'excellence et notre engagement envers nos clients nous ont permis 
                 de bâtir une réputation solide basée sur la confiance et la qualité.
               </motion.p>
            </div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-dark-900 flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                Notre Histoire
              </h3>
                           <p className="text-gray-700 leading-relaxed">
               Créée par une équipe de passionnés de mécanique, Auto DP a débuté comme un petit garage 
               de quartier. Grâce à notre approche personnalisée et notre expertise technique, nous avons 
               progressivement élargi nos services pour devenir un acteur incontournable de la région.
             </p>
             <p className="text-gray-700 leading-relaxed">
               Aujourd'hui, nous combinons savoir-faire traditionnel et technologies modernes pour offrir 
               des services complets : réparation, remorquage 24/7 et rachat de véhicules.
             </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-dark-900 flex items-center">
                <Target className="w-6 h-6 text-primary-600 mr-3" />
                Nos Valeurs
              </h3>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200"
            >
              {stats.slice(2).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Nous faire confiance
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
