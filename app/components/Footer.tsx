'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, Wrench, Truck, DollarSign } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { icon: Wrench, name: 'Garage Mechaniek', desc: 'Reparaties en onderhoud' },
    { icon: Truck, name: 'Takeldienst 24/7', desc: 'Spoeddienst' },
    { icon: DollarSign, name: 'Aankoop Voertuigen', desc: 'Aankoop tegen beste prijs' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'registratie@autodp.org', href: 'mailto:registratie@autodp.org' },
    { icon: Phone, text: 'Service 24/7', href: 'tel:+32' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                Auto <span className="text-primary-400">DP</span>
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              <strong>Auto DP</strong> is uw betrouwbare partner voor al uw automobielbehoeften.
              Wij bieden professionele garagediensten, 24/7 noodtakeldiensten,
              en wij kopen ook voertuigen van particulieren tegen de beste prijs.
            </p>

            <div className="flex items-center space-x-2 text-primary-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Service beschikbaar 24u/24 - 7d/7</span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-primary-400">Onze Diensten</h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <service.icon className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white">{service.name}</h5>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-primary-400">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  <contact.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>


          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center">
              © {currentYear} <span className="font-semibold text-white">Auto DP</span>.
              Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
