import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, validateEmailJSConfig } from '../config/emailjs.js'
import '../config/emailjs-test.js' // Test de la configuration

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      // Préparer le template avec les données formatées
      const templateParams = {
        from_name: `${data.prenom} ${data.nom}`,
        from_email: data.email,
        phone: data.telephone,
        address: data.adresse,
        account_number: data.compte,
        amount: `${data.montant} €`,
        message: data.message || 'Aucun message',
        to_name: 'Mickael Andjui',
        to_email: 'mickael.andjui.21@gmail.com',
        reply_to: data.email,
        // Informations supplémentaires pour le template
        service_type: 'Demande de devis',
        date_demande: new Date().toLocaleDateString('fr-FR'),
        heure_demande: new Date().toLocaleTimeString('fr-FR')
      }

      // Vérifier la configuration EmailJS
      if (!validateEmailJSConfig()) {
        throw new Error('Configuration EmailJS manquante')
      }

      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      console.log('Email envoyé avec succès:', result)
    setIsSubmitted(true)
    reset()

    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setError('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contact@auto-dp.fr',
      subinfo: 'Réponse sous 24h'
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
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
            Nous <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Contacter</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4">
            Besoin d'un devis, d'une réparation ou d'un remorquage ? 
            Contactez-nous dès maintenant pour un service rapide et professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Informations de Contact
              </h3>
              
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-900 mb-1">{item.title}</h4>
                      <p className="text-primary-600 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.subinfo}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Urgence Remorquage
              </h4>
                             <p className="text-red-100 mb-4">
                 Panne, accident ou problème mécanique ? Nous intervenons 24h/24 et 7j/7 partout aux Pays-Bas.
               </p>
              
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Demander un Devis Gratuit
            </h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="font-semibold text-green-800">Message envoyé !</h4>
                  <p className="text-green-700 text-sm">Nous vous recontacterons dans les plus brefs délais.</p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
              >
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <h4 className="font-semibold text-red-800">Erreur</h4>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              {/* Nom et Prénom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    {...register('nom', { required: 'Le nom est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.nom ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.nom && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.nom.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    {...register('prenom', { required: 'Le prénom est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.prenom ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre prénom"
                  />
                  {errors.prenom && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.prenom.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email et Téléphone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'L\'email est obligatoire',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Email invalide'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    {...register('telephone', { required: 'Le téléphone est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.telephone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="01 23 45 67 89"
                  />
                  {errors.telephone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.telephone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Adresse de réparation */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse de réparation *
                </label>
                <input
                  type="text"
                  {...register('adresse', { required: 'L\'adresse est obligatoire' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.adresse ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Adresse complète"
                />
                {errors.adresse && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.adresse.message}
                  </p>
                )}
              </div>

              {/* Numéro de compte et Montant */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Numéro de compte bancaire *
                  </label>
                  <input
                    type="text"
                    {...register('compte', { required: 'Le numéro de compte est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.compte ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="FR76 1234 5678 9012 3456 7890 123"
                  />
                  {errors.compte && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.compte.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Montant à recevoir *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('montant', { required: 'Le montant est obligatoire' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.montant ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0.00 €"
                  />
                  {errors.montant && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.montant.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer la demande</span>
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
