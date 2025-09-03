# 🚗 Auto DP - Site Web Professionnel

## 📋 Description

Auto DP est un site web moderne et responsive pour une entreprise de services automobiles, incluant réparations, remorquage et diagnostics électroniques. Le site est développé avec React et utilise EmailJS pour la gestion des formulaires de contact.

## ✨ Fonctionnalités

- 🎨 **Design moderne et responsive** avec Tailwind CSS
- 📱 **Interface mobile-first** optimisée pour tous les appareils
- 📧 **Formulaire de contact intelligent** avec EmailJS
- 🎭 **Animations fluides** avec Framer Motion
- 🔒 **Validation des formulaires** avec React Hook Form
- 📊 **Sections complètes** : Accueil, Services, À propos, Galerie, Contact

## 🛠️ Technologies Utilisées

- **Frontend** : React 18, Vite
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form
- **Email** : EmailJS
- **Icônes** : Lucide React
- **Build Tool** : Vite

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/DevMick/AutoDp.git
cd AutoDp

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la build de production
npm run lint         # Linter le code
```

## 📁 Structure du Projet

```
AutoDp/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.jsx      # En-tête du site
│   │   ├── Hero.jsx        # Section principale
│   │   ├── Services.jsx    # Services proposés
│   │   ├── About.jsx       # À propos de l'entreprise
│   │   ├── Gallery.jsx     # Galerie d'images
│   │   ├── Contact.jsx     # Formulaire de contact
│   │   └── Footer.jsx      # Pied de page
│   ├── config/             # Configuration EmailJS
│   │   ├── emailjs.js      # Configuration principale
│   │   └── email-template.js # Templates d'email
│   ├── assets/             # Ressources statiques
│   ├── App.jsx             # Composant principal
│   └── main.jsx            # Point d'entrée
├── public/                 # Fichiers publics
├── .gitignore             # Fichiers ignorés par Git
├── package.json           # Dépendances et scripts
├── tailwind.config.js     # Configuration Tailwind
└── vite.config.js         # Configuration Vite
```

## 📧 Configuration EmailJS

Le site utilise EmailJS pour l'envoi automatique des emails depuis le formulaire de contact.

### Configuration
1. Créer un compte sur [emailjs.com](https://www.emailjs.com/)
2. Configurer un service Gmail
3. Créer un template d'email
4. Mettre à jour les clés dans `src/config/emailjs.js`

### Variables du Template
- `{{from_name}}` - Nom complet du client
- `{{from_email}}` - Email du client
- `{{phone}}` - Téléphone du client
- `{{address}}` - Adresse de réparation
- `{{account_number}}` - Numéro de compte bancaire
- `{{amount}}` - Montant à recevoir
- `{{message}}` - Message du client

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- **Primary** : Bleu (#2563eb)
- **Secondary** : Gris (#6b7280)
- **Accent** : Orange (#f59e0b)

### Styles
Le site utilise Tailwind CSS avec des classes utilitaires personnalisées pour une cohérence visuelle parfaite.

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Déploiement sur Vercel/Netlify
1. Connecter le repository GitHub
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Mickael Andjui** - [GitHub](https://github.com/DevMick)

## 📞 Contact

- **Email** : mickael.andjui.21@gmail.com
- **Site Web** : [Auto DP](https://auto-dp.fr)

---

⭐ N'oubliez pas de donner une étoile au projet si vous l'aimez !
