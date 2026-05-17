import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load service account
const serviceAccountPath = join(process.cwd(), 'firebase-admin.json');
let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
} catch (e) {
  console.error("Erreur : Impossible de lire firebase-admin.json à la racine du projet.");
  process.exit(1);
}

// Initialize Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const action = process.argv[2];
const param1 = process.argv[3];
const param2 = process.argv[4];

if (!action) {
  console.log(`
Usage:
  node scripts/manage-users.js create <email> <password>
  node scripts/manage-users.js list
  node scripts/manage-users.js list-pending
  node scripts/manage-users.js approve <email>
  node scripts/manage-users.js disapprove <email>
  node scripts/manage-users.js delete <email>
  `);
  process.exit(0);
}

const auth = admin.auth();

if (action === 'create') {
  if (!param1 || !param2) {
    console.error("Erreur : Email et mot de passe requis.");
    process.exit(1);
  }
  auth.createUser({
    email: param1,
    password: param2,
    emailVerified: true
  })
  .then((userRecord) => {
    console.log(`Succès : Utilisateur créé avec succès (UID: ${userRecord.uid})`);
    process.exit(0);
  })
  .catch((error) => {
    console.error("Erreur lors de la création de l'utilisateur :", error.message);
    process.exit(1);
  });

} else if (action === 'list') {
  auth.listUsers()
    .then((listUsersResult) => {
      console.log("=== Liste des utilisateurs inscrits ===");
      listUsersResult.users.forEach((userRecord) => {
        const approved = userRecord.customClaims?.approved === true ? "✅ VALIDÉ" : "⏳ EN ATTENTE";
        console.log(`- ${userRecord.email} [${approved}] (UID: ${userRecord.uid}, Créé le: ${userRecord.metadata.creationTime})`);
      });
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des utilisateurs :", error.message);
      process.exit(1);
    });

} else if (action === 'list-pending') {
  auth.listUsers()
    .then((listUsersResult) => {
      console.log("=== Utilisateurs en attente de validation ===");
      let count = 0;
      listUsersResult.users.forEach((userRecord) => {
        if (userRecord.customClaims?.approved !== true) {
          console.log(`- ${userRecord.email} (UID: ${userRecord.uid}, Créé le: ${userRecord.metadata.creationTime})`);
          count++;
        }
      });
      if (count === 0) {
        console.log("Aucun utilisateur en attente !");
      }
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des utilisateurs :", error.message);
      process.exit(1);
    });

} else if (action === 'approve') {
  if (!param1) {
    console.error("Erreur : Email requis.");
    process.exit(1);
  }
  auth.getUserByEmail(param1)
    .then((userRecord) => {
      return auth.setCustomUserClaims(userRecord.uid, { approved: true });
    })
    .then(() => {
      console.log(`Succès : L'utilisateur ${param1} est maintenant VALIDÉ (accès accordé).`);
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erreur lors de la validation :", error.message);
      process.exit(1);
    });

} else if (action === 'disapprove') {
  if (!param1) {
    console.error("Erreur : Email requis.");
    process.exit(1);
  }
  auth.getUserByEmail(param1)
    .then((userRecord) => {
      return auth.setCustomUserClaims(userRecord.uid, { approved: false });
    })
    .then(() => {
      console.log(`Succès : L'accès a été RÉVOQUÉ pour ${param1}.`);
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erreur lors de la révocation :", error.message);
      process.exit(1);
    });

} else if (action === 'delete') {
  if (!param1) {
    console.error("Erreur : Email requis.");
    process.exit(1);
  }
  auth.getUserByEmail(param1)
    .then((userRecord) => {
      return auth.deleteUser(userRecord.uid);
    })
    .then(() => {
      console.log(`Succès : Utilisateur ${param1} supprimé.`);
      process.exit(0);
    })
    .catch((error) => {
      console.error("Erreur lors de la suppression de l'utilisateur :", error.message);
      process.exit(1);
    });
} else {
  console.error("Action inconnue. Utilisez 'create', 'list', 'list-pending', 'approve', 'disapprove', ou 'delete'.");
  process.exit(1);
}
