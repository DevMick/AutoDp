import React from 'react'
import { motion } from 'framer-motion'
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#galerie' },
    
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Réparation automobile',
    'Entretien véhicules',
    'Diagnostic électronique',
    'Remorquage 24/7',
    'Rachat de véhicules'
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 p-3 rounded-full shadow-lg transition-colors duration-300"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Auto DP</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Garage & Remorquage</p>
              </div>
            </div>
            
                         <p className="text-gray-300 leading-relaxed">
               Votre partenaire automobile de confiance. 
               Nous offrons des services complets avec un engagement 
               total envers la satisfaction client.
             </p>

                         <div className="space-y-3">
               <div className="flex items-center space-x-3">
                 <Mail className="w-5 h-5 text-primary-500" />
                 <span className="text-gray-300">contact@auto-dp.fr</span>
               </div>
             </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg sm:rounded-xl p-4 sm:p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Urgence Remorquage 24/7</h3>
                             <p className="text-red-100">Panne, accident ou problème mécanique ? Nous intervenons partout aux Pays-Bas !</p>
            </div>
            
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Auto DP. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400 gap-2">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
