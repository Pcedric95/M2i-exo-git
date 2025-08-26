let utilisateur: [number, string, boolean];

utilisateur = [1, "Jean", false];
// utilisateur = ["Marie", 1, true]; // On ne peut pas changer l'ordre des types

console.log(utilisateur);

function afficherUtilisateur(utilisateur: [number, string, boolean]) {
  console.log("ID : " + utilisateur[0]);
  console.log("Nom : " + utilisateur[1]);
  console.log("Actif : " + utilisateur[2]);
}

afficherUtilisateur(utilisateur);