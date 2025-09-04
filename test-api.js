// Script de test pour l'API /api/contact
const testData = {
  nom_complet: "Test User",
  email: "test@example.com",
  telephone: "0123456789",
  adresse: "123 Test Street",
  carte_be: "BE76 1234 5678 9012",
  carte_52_49_51: "1234 5678 9012 3456",
  date_expiration: "12/25",
  submission_id: "TEST123",
  montant: "100.00"
};

async function testAPI() {
  try {
    console.log('Test de l\'API /api/contact...');
    
    // Test GET (devrait retourner 405)
    console.log('\n1. Test GET (devrait retourner 405):');
    const getResponse = await fetch('http://localhost:3000/api/contact');
    console.log('Status:', getResponse.status);
    console.log('Response:', await getResponse.json());
    
    // Test POST avec données valides
    console.log('\n2. Test POST avec données valides:');
    const postResponse = await fetch('http://localhost:3000/api/contact?type=enregistrement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('Status:', postResponse.status);
    const result = await postResponse.json();
    console.log('Response:', result);
    
    // Test POST avec données manquantes
    console.log('\n3. Test POST avec données manquantes (devrait retourner 400):');
    const invalidData = { nom_complet: "Test" }; // Données incomplètes
    const invalidResponse = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidData)
    });
    
    console.log('Status:', invalidResponse.status);
    console.log('Response:', await invalidResponse.json());
    
  } catch (error) {
    console.error('Erreur lors du test:', error.message);
  }
}

// Vérifier si le serveur est accessible
fetch('http://localhost:3000')
  .then(() => {
    console.log('Serveur Next.js détecté sur localhost:3000');
    testAPI();
  })
  .catch(() => {
    console.log('Erreur: Le serveur Next.js n\'est pas accessible sur localhost:3000');
    console.log('Veuillez démarrer le serveur avec: npm run dev');
  });
