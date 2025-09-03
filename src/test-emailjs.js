// Test simple pour vérifier qu'EmailJS fonctionne
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, validateEmailJSConfig } from './config/emailjs.js'

console.log('✅ EmailJS importé avec succès')
console.log('📧 Configuration EmailJS:', EMAILJS_CONFIG)
console.log('🔍 Validation de la configuration:', validateEmailJSConfig())

// Test des variables du template
const testParams = {
  from_name: 'Test Client',
  from_email: 'test@example.com',
  phone: '01 23 45 67 89',
  address: '123 Rue Test, 75000 Paris',
  account_number: 'FR76 1234 5678 9012 3456 7890 123',
  amount: '1500.00 €',
  message: 'Ceci est un test du formulaire de contact',
  to_name: 'Mickael Andjui',
  to_email: 'mickael.andjui.21@gmail.com',
  reply_to: 'test@example.com',
  service_type: 'Test de devis',
  date_demande: new Date().toLocaleDateString('fr-FR'),
  heure_demande: new Date().toLocaleTimeString('fr-FR')
}

console.log('📝 Paramètres de test:', testParams)
console.log('🎯 Email de destination:', testParams.to_email)

export { testParams }
