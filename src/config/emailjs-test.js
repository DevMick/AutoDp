// Test de la configuration EmailJS
import { EMAILJS_CONFIG, validateEmailJSConfig } from './emailjs.js'

console.log('🧪 TEST DE LA CONFIGURATION EMAILJS')
console.log('=====================================')

// Vérifier la configuration
const isValid = validateEmailJSConfig()
console.log('✅ Configuration valide :', isValid)

if (isValid) {
  console.log('📧 Service ID :', EMAILJS_CONFIG.SERVICE_ID)
  console.log('📝 Template ID :', EMAILJS_CONFIG.TEMPLATE_ID)
  console.log('🔑 Public Key :', EMAILJS_CONFIG.PUBLIC_KEY)
  console.log('📮 Email de destination :', EMAILJS_CONFIG.DEFAULT_TO_EMAIL)
  console.log('👤 Nom du destinataire :', EMAILJS_CONFIG.DEFAULT_TO_NAME)
  
  console.log('\n🎉 Configuration EmailJS prête !')
  console.log('Vous pouvez maintenant tester le formulaire de contact.')
} else {
  console.log('❌ Configuration EmailJS manquante')
  console.log('Vérifiez que vous avez bien configuré vos clés.')
}

export { isValid }
