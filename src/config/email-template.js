// Template d'email optimisé pour Mickael Andjui
// À copier-coller dans EmailJS

export const EMAIL_TEMPLATE_FOR_MICKAEL = `
<!DOCTYPE html>
<html>
<head>
    <title>🚗 Nouvelle demande de devis - Auto DP</title>
    <meta charset="utf-8">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; border-radius: 15px 15px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 600;">🚗 Auto DP</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Nouvelle demande de devis</p>
    </div>
    
    <!-- Contenu principal -->
    <div style="background: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
        
        <!-- Informations du client -->
        <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                👤 <span style="margin-left: 10px;">Informations du client</span>
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                    <strong style="color: #374151;">Nom complet :</strong><br>
                    <span style="color: #1f2937; font-size: 16px;">{{from_name}}</span>
                </div>
                <div>
                    <strong style="color: #374151;">Email :</strong><br>
                    <span style="color: #1f2937; font-size: 16px;">{{from_email}}</span>
                </div>
                <div>
                    <strong style="color: #374151;">Téléphone :</strong><br>
                    <span style="color: #1f2937; font-size: 16px;">{{phone}}</span>
                </div>
                <div>
                    <strong style="color: #374151;">Adresse :</strong><br>
                    <span style="color: #1f2937; font-size: 16px;">{{address}}</span>
                </div>
            </div>
        </div>
        
        <!-- Détails de la demande -->
        <div style="background: #f0f9ff; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
            <h2 style="color: #0c4a6e; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                💰 <span style="margin-left: 10px;">Détails de la demande</span>
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                    <strong style="color: #0c4a6e;">Numéro de compte :</strong><br>
                    <span style="color: #0c4a6e; font-size: 16px; font-family: monospace; background: #e0f2fe; padding: 5px 10px; border-radius: 6px; display: inline-block;">{{account_number}}</span>
                </div>
                <div>
                    <strong style="color: #0c4a6e;">Montant à recevoir :</strong><br>
                    <span style="color: #0c4a6e; font-size: 18px; font-weight: 600;">{{amount}}</span>
                </div>
                <div>
                    <strong style="color: #0c4a6e;">Type de service :</strong><br>
                    <span style="color: #0c4a6e; font-size: 16px;">{{service_type}}</span>
                </div>
                <div>
                    <strong style="color: #0c4a6e;">Date de demande :</strong><br>
                    <span style="color: #0c4a6e; font-size: 16px;">{{date_demande}} à {{heure_demande}}</span>
                </div>
            </div>
        </div>
        
        <!-- Message du client -->
        <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
            <h2 style="color: #92400e; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                💬 <span style="margin-left: 10px;">Message du client</span>
            </h2>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #fde68a;">
                <p style="color: #92400e; font-style: italic; margin: 0; font-size: 16px; line-height: 1.6;">{{message}}</p>
            </div>
        </div>
        
        <!-- Actions rapides -->
        <div style="background: #f1f5f9; padding: 25px; border-radius: 12px; text-align: center;">
            <h3 style="color: #475569; margin: 0 0 15px 0; font-size: 18px;">⚡ Actions rapides</h3>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="mailto:{{from_email}}?subject=Devis Auto DP - {{from_name}}" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 500; display: inline-block;">📧 Répondre au client</a>
                <a href="tel:{{phone}}" style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 500; display: inline-block;">📞 Appeler le client</a>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; margin-top: 20px; padding: 20px; color: #64748b; font-size: 14px;">
        <p style="margin: 0;">
            Cet email a été envoyé depuis le formulaire de contact du site Auto DP<br>
            <strong>Destinataire principal : mickael.andjui.21@gmail.com</strong><br>
            <span style="color: #94a3b8;">Envoyé le {{date_demande}} à {{heure_demande}}</span>
        </p>
    </div>
    
</body>
</html>
`

// Variables du template EmailJS
export const TEMPLATE_VARIABLES = {
  from_name: "Nom et prénom du client",
  from_email: "Email du client",
  phone: "Téléphone du client",
  address: "Adresse de réparation",
  account_number: "Numéro de compte bancaire",
  amount: "Montant à recevoir",
  message: "Message optionnel du client",
  service_type: "Type de service demandé",
  date_demande: "Date de la demande",
  heure_demande: "Heure de la demande"
}

// Instructions de configuration
export const CONFIG_INSTRUCTIONS = `
🎯 CONFIGURATION EMAILJS POUR MICKAEL ANDJUI

1. Créez un template EmailJS avec le code HTML ci-dessus
2. Configurez le destinataire principal sur : mickael.andjui.21@gmail.com
3. Assurez-vous que toutes les variables {{variable}} sont bien reconnues
4. Testez l'envoi avec des données d'exemple
5. Vérifiez que l'email arrive bien dans votre boîte Gmail

📧 Tous les formulaires de contact seront envoyés à : mickael.andjui.21@gmail.com
`
