import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Determine correct workspace directory when run as a double-click .command file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectDir = join(__dirname, '..');
const serviceAccountPath = join(projectDir, 'firebase-admin.json');


let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
} catch (e) {
  console.log('\x1b[31m%s\x1b[0m', `Erreur : Impossible de lire firebase-admin.json dans ${serviceAccountPath}`);
  console.log("Appuyez sur Entrée pour quitter...");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const clearScreen = () => {
  console.clear();
  console.log('\x1b[36m%s\x1b[0m', "==========================================================");
  console.log('\x1b[36m%s\x1b[0m', "🔒  OBSERVATOIRE BÉJAÏA - GESTION DU PORTAIL D'ACCÈS");
  console.log('\x1b[36m%s\x1b[0m', "==========================================================\n");
};

const showMenu = () => {
  clearScreen();
  console.log("👉 Choisissez une action :");
  console.log("  \x1b[32m1.\x1b[0m Lister les inscriptions en attente (⏳)");
  console.log("  \x1b[32m2.\x1b[0m Valider une inscription (✅)");
  console.log("  \x1b[32m3.\x1b[0m Révoquer un accès existant (❌)");
  console.log("  \x1b[32m4.\x1b[0m Lister tous les comptes avec leur statut (👥)");
  console.log("  \x1b[32m5.\x1b[0m Supprimer définitivement un compte (🗑️)");
  console.log("  \x1b[31m6. Quitter\x1b[0m\n");
  
  rl.question("Votre choix (1-6) : ", (choice) => {
    handleChoice(choice.trim());
  });
};

const handleChoice = async (choice) => {
  try {
    switch (choice) {
      case '1':
        await listPending();
        break;
      case '2':
        await approveUser();
        break;
      case '3':
        await revokeUser();
        break;
      case '4':
        await listAll();
        break;
      case '5':
        await deleteUser();
        break;
      case '6':
        console.log("\nFermeture du portail. À bientôt Dr. Bahloul !");
        rl.close();
        process.exit(0);
      default:
        console.log('\x1b[33m%s\x1b[0m', "\nChoix invalide. Réessayez.");
        await pause();
        showMenu();
    }
  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m', `\nUne erreur est survenue : ${error.message}`);
    await pause();
    showMenu();
  }
};

const pause = () => {
  return new Promise((resolve) => {
    rl.question("\nAppuyez sur Entrée pour continuer...", () => {
      resolve();
    });
  });
};

const listPending = async () => {
  clearScreen();
  console.log('\x1b[33m%s\x1b[0m', "⏳ INSCRIPTIONS EN ATTENTE DE VALIDATION :\n");
  const listUsersResult = await auth.listUsers();
  let count = 0;
  
  listUsersResult.users.forEach((userRecord) => {
    if (userRecord.customClaims?.approved !== true) {
      console.log(`  - \x1b[1m${userRecord.email}\x1b[0m (Créé le: ${userRecord.metadata.creationTime})`);
      count++;
    }
  });
  
  if (count === 0) {
    console.log("🎉 Aucun compte en attente de validation !");
  } else {
    console.log(`\nTotal : ${count} compte(s) en attente.`);
  }
  await pause();
  showMenu();
};

const listAll = async () => {
  clearScreen();
  console.log('\x1b[36m%s\x1b[0m', "👥 TOUS LES COMPTES ENREGISTRÉS :\n");
  const listUsersResult = await auth.listUsers();
  
  listUsersResult.users.forEach((userRecord) => {
    const status = userRecord.customClaims?.approved === true 
      ? "\x1b[32m✅ VALIDÉ\x1b[0m" 
      : "\x1b[33m⏳ EN ATTENTE\x1b[0m";
    console.log(`  - \x1b[1m${userRecord.email}\x1b[0m [${status}] (UID: ${userRecord.uid})`);
  });
  
  await pause();
  showMenu();
};

const approveUser = async () => {
  clearScreen();
  console.log('\x1b[32m%s\x1b[0m', "✅ VALIDATION D'UN COMPTE :\n");
  rl.question("Saisissez l'email du compte à valider : ", async (email) => {
    const targetEmail = email.trim();
    if (!targetEmail) {
      console.log("Email invalide.");
      await pause();
      showMenu();
      return;
    }
    
    try {
      const userRecord = await auth.getUserByEmail(targetEmail);
      await auth.setCustomUserClaims(userRecord.uid, { approved: true });
      console.log('\x1b[32m%s\x1b[0m', `\nSuccès : L'accès a été ACCORDÉ pour ${targetEmail} !`);
    } catch (e) {
      console.log('\x1b[31m%s\x1b[0m', `\nErreur : ${e.message}`);
    }
    await pause();
    showMenu();
  });
};

const revokeUser = async () => {
  clearScreen();
  console.log('\x1b[31m%s\x1b[0m', "❌ RÉVOCATION D'UN ACCÈS EXISTANT :\n");
  rl.question("Saisissez l'email du compte à révoquer : ", async (email) => {
    const targetEmail = email.trim();
    if (!targetEmail) {
      console.log("Email invalide.");
      await pause();
      showMenu();
      return;
    }
    
    try {
      const userRecord = await auth.getUserByEmail(targetEmail);
      await auth.setCustomUserClaims(userRecord.uid, { approved: false });
      console.log('\x1b[32m%s\x1b[0m', `\nSuccès : L'accès a été RÉVOQUÉ pour ${targetEmail} !`);
    } catch (e) {
      console.log('\x1b[31m%s\x1b[0m', `\nErreur : ${e.message}`);
    }
    await pause();
    showMenu();
  });
};

const deleteUser = async () => {
  clearScreen();
  console.log('\x1b[31m%s\x1b[0m', "🗑️ SUPPRESSION DÉFINITIVE D'UN COMPTE :\n");
  rl.question("Saisissez l'email du compte à supprimer : ", async (email) => {
    const targetEmail = email.trim();
    if (!targetEmail) {
      console.log("Email invalide.");
      await pause();
      showMenu();
      return;
    }
    
    rl.question(`⚠️ Êtes-vous sûr de vouloir supprimer définitivement ${targetEmail} ? (o/n) : `, async (confirm) => {
      if (confirm.trim().toLowerCase() === 'o') {
        try {
          const userRecord = await auth.getUserByEmail(targetEmail);
          await auth.deleteUser(userRecord.uid);
          console.log('\x1b[32m%s\x1b[0m', `\nSuccès : Le compte ${targetEmail} a été supprimé.`);
        } catch (e) {
          console.log('\x1b[31m%s\x1b[0m', `\nErreur : ${e.message}`);
        }
      } else {
        console.log("\nSuppression annulée.");
      }
      await pause();
      showMenu();
    });
  });
};

// Start UI
showMenu();
