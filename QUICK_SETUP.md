# 🚀 Configuration Rapide EmailJS - Auto DP

## ⚡ Configuration en 5 minutes

### 1. **Créer un compte EmailJS**
- Allez sur [emailjs.com](https://www.emailjs.com/)
- Cliquez sur "Sign Up" et créez votre compte
- Confirmez votre email

### 2. **Ajouter un Service Gmail**
- Dans votre dashboard, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez **Gmail**
- Suivez l'authentification Google
- **Notez le Service ID** (ex: `service_abc123`)

### 3. **Créer un Template d'Email**
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- **Destinataire principal** : `richtingklantautodp.be@gmail.com`
- **Sujet** : `Nouvelle demande de devis - Auto DP`
- **Contenu** : Copiez le code HTML depuis `src/config/email-template.js`
- **Notez le Template ID** (ex: `template_xyz789`)

### 4. **Récupérer votre Public Key**
- Dans "Account" → "API Keys"
- **Copiez votre Public Key** (ex: `user_abc123def456`)

### 5. **Configurer le Code**
Ouvrez `src/config/emailjs.js` et remplacez :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',        // ← Votre Service ID
  TEMPLATE_ID: 'template_xyz789',      // ← Votre Template ID
  PUBLIC_KEY: 'user_abc123def456',     // ← Votre Public Key
  
  // Configuration par défaut
  DEFAULT_SUBJECT: 'Nouvelle demande de devis - Auto DP',
  DEFAULT_TO_EMAIL: 'richtingklantautodp.be@gmail.com',
  DEFAULT_TO_NAME: 'Auto DP'
}
```

## 🧪 Test Rapide

1. **Redémarrez le serveur** : `npm run dev`
2. **Ouvrez la console** du navigateur
3. **Remplissez le formulaire** de contact
4. **Vérifiez la console** pour les erreurs
5. **Vérifiez votre Gmail** : `richtingklantautodp.be@gmail.com`

## 🎯 Variables du Template

Le template utilise ces variables :
- `{{from_name}}` - Nom complet du client
- `{{from_email}}` - Email du client
- `{{phone}}` - Téléphone du client
- `{{address}}` - Adresse de réparation
- `{{account_number}}` - Numéro de compte bancaire
- `{{amount}}` - Montant à recevoir
- `{{message}}` - Message du client
- `{{date_demande}}` - Date de la demande
- `{{heure_demande}}` - Heure de la demande

## 🚨 Dépannage Rapide

### Erreur "Configuration EmailJS manquante"
- Vérifiez que vous avez remplacé les clés dans `src/config/emailjs.js`

### Erreur "Service not found"
- Vérifiez votre Service ID
- Assurez-vous que le service Gmail est activé

### Erreur "Template not found"
- Vérifiez votre Template ID
- Assurez-vous que le template est publié

### Pas d'email reçu
- Vérifiez vos spams Gmail
- Vérifiez la console du navigateur

## 📞 Support

- **Documentation** : [docs.emailjs.com](https://docs.emailjs.com/)
- **Support** : [support@emailjs.com](mailto:support@emailjs.com)
- **Limite gratuite** : 200 emails/mois

## ✅ Checklist Finale

- [ ] Compte EmailJS créé
- [ ] Service Gmail configuré
- [ ] Template d'email créé avec destinataire `richtingklantautodp.be@gmail.com`
- [ ] Clés copiées dans `src/config/emailjs.js`
- [ ] Serveur redémarré
- [ ] Formulaire testé
- [ ] Email reçu sur Gmail

**🎉 Votre formulaire de contact est maintenant prêt à envoyer des emails !**
