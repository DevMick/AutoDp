# 🚀 Configuration EmailJS pour Auto DP

## 📋 Prérequis
- Compte EmailJS (gratuit) : [emailjs.com](https://www.emailjs.com/)
- Compte email (Gmail, Outlook, etc.) pour envoyer les emails

## 🔧 Étapes de Configuration

### 1. Créer un compte EmailJS
1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez votre compte
3. Confirmez votre email

### 2. Ajouter un Service Email
1. Dans votre dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail recommandé)
4. Suivez les instructions d'authentification
5. **Notez le Service ID** (ex: `service_abc123`)

### 3. Créer un Template d'Email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. **Important** : Configurez le destinataire principal sur `mickael.andjui.21@gmail.com`
4. Utilisez ce template HTML :

```html
<!DOCTYPE html>
<html>
<head>
    <title>🚗 Nouvelle demande de devis - Auto DP</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
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
</body>
</html>
```

4. **Notez le Template ID** (ex: `template_xyz789`)

### 4. Récupérer votre Public Key
1. Dans votre dashboard, allez dans "Account" → "API Keys"
2. **Copiez votre Public Key** (ex: `user_abc123def456`)

### 5. Configurer le Code
1. Ouvrez le fichier `src/config/emailjs.js`
2. Remplacez les valeurs par vos vraies clés :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',        // Votre Service ID
  TEMPLATE_ID: 'template_xyz789',      // Votre Template ID
  PUBLIC_KEY: 'user_abc123def456',     // Votre Public Key
  // ... autres configurations
}
```

## 🧪 Test de Configuration

1. Redémarrez votre serveur de développement
2. Remplissez le formulaire de contact
3. Vérifiez dans la console du navigateur qu'il n'y a pas d'erreurs
4. Vérifiez que vous recevez bien l'email

## 🔒 Sécurité et Limitations

- **Limite gratuite** : 200 emails/mois
- **Clés publiques** : Les clés EmailJS sont visibles dans le code frontend
- **Validation** : Toujours valider les données côté serveur pour la production

## 🚨 Dépannage

### Erreur "Configuration EmailJS manquante"
- Vérifiez que vous avez bien remplacé les clés dans `src/config/emailjs.js`
- Vérifiez que le fichier est bien importé

### Erreur "Service not found"
- Vérifiez votre Service ID
- Assurez-vous que le service est bien activé

### Erreur "Template not found"
- Vérifiez votre Template ID
- Assurez-vous que le template est bien publié

### Pas d'email reçu
- Vérifiez vos spams
- Vérifiez que votre compte email est bien configuré
- Regardez la console du navigateur pour les erreurs

## 📞 Support

- Documentation EmailJS : [docs.emailjs.com](https://docs.emailjs.com/)
- Support EmailJS : [support@emailjs.com](mailto:support@emailjs.com)
- Limites et tarifs : [emailjs.com/pricing](https://www.emailjs.com/pricing)

## 🎯 Configuration Spéciale pour Mickael Andjui

**📧 Email principal configuré : mickael.andjui.21@gmail.com**

Tous les formulaires de contact seront automatiquement envoyés à votre adresse Gmail.

### Template d'email optimisé
Un template professionnel et moderne a été créé dans `src/config/email-template.js` avec :
- 🎨 Design responsive et professionnel
- 📱 Compatible mobile et desktop
- ⚡ Boutons d'action rapide (répondre, appeler)
- 📊 Mise en page claire des informations
- 🎯 Destinataire principal : mickael.andjui.21@gmail.com

## 🎯 Prochaines Étapes

Une fois EmailJS configuré, vous pourrez :
1. ✅ **Personnaliser le template d'email** (déjà fait !)
2. ✅ **Notifications de succès/erreur** (déjà implémentées !)
3. Implémenter un système de suivi des demandes
4. Ajouter une validation côté serveur pour la production
5. **Recevoir tous les emails sur mickael.andjui.21@gmail.com**
