// Configuration EmailJS
// Remplacez ces valeurs par vos propres clés EmailJS

export const EMAILJS_CONFIG = {
  // Service ID - Votre service Gmail configuré
  SERVICE_ID: 'service_6drciyu',
  
  // Template ID - Template "Contactez-nous"
  TEMPLATE_ID: 'template_fxv8vlv',
  
  // Public Key - Clé publique de votre compte
  PUBLIC_KEY: '6XK0GxTNO8AckXrs3',
  
  // Configuration par défaut
  DEFAULT_SUBJECT: 'Nouvelle demande de devis - Auto DP',
  DEFAULT_TO_EMAIL: 'mickael.andjui.21@gmail.com',
  DEFAULT_TO_NAME: 'Mickael Andjui'
}

// Template d'email par défaut (si vous n'utilisez pas EmailJS)
export const EMAIL_TEMPLATE = {
  subject: 'Nouvelle demande de devis - Auto DP',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        🚗 Nouvelle demande de devis - Auto DP
      </h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-top: 0;">👤 Informations du client</h3>
        <p><strong>Nom complet :</strong> {{from_name}}</p>
        <p><strong>Email :</strong> {{from_email}}</p>
        <p><strong>Téléphone :</strong> {{phone}}</p>
        <p><strong>Adresse :</strong> {{address}}</p>
      </div>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e293b; margin-top: 0;">💰 Détails de la demande</h3>
        <p><strong>Numéro de compte :</strong> {{account_number}}</p>
        <p><strong>Montant à recevoir :</strong> {{amount}}</p>
        <p><strong>Type de service :</strong> {{service_type}}</p>
        <p><strong>Date de demande :</strong> {{date_demande}} à {{heure_demande}}</p>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #92400e; margin-top: 0;">💬 Message du client</h3>
        <p style="font-style: italic;">{{message}}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 14px;">
          Cet email a été envoyé depuis le formulaire de contact du site Auto DP.<br>
          Répondez directement à cet email pour contacter le client.
        </p>
      </div>
    </div>
  `
}

// Fonction utilitaire pour valider la configuration
export const validateEmailJSConfig = () => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG
  
  if (SERVICE_ID === 'YOUR_SERVICE_ID' || 
      TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
      PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('⚠️ EmailJS non configuré. Veuillez configurer vos clés dans src/config/emailjs.js')
    return false
  }
  
  return true
}
