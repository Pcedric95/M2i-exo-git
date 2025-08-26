var utilisateur;
utilisateur = [1, "Jean", false];
utilisateur = [2, "Marie", true];
console.log(utilisateur);
function afficherUtilisateur(utilisateur) {
    console.log("ID : " + utilisateur[0]);
    console.log("Nom : " + utilisateur[1]);
    console.log("Actif : " + utilisateur[2]);
}
afficherUtilisateur(utilisateur);
