function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nombreMystere = nombreAleatoire(1, 100); // Le nombre mystère est compris entre 1 et 100 // Le nombre à trouver est compris entre 1 et 100
let nbEssaisMaximum = 10; // Nombre d'essais max
let nbEssaisRestants = nbEssaisMaximum; // Nombre d'essais effectués

while (nbEssaisRestants > 0) {
    
    let proposition = Number(prompt("Entrez un nombre entre 1 et 100 :")) // Demander à la personne de saisir un nombre

    if (isNaN(proposition)) { // Vérification de la saisie de la personne si c'est un nombre
        console.log("Vous devez entrer un nombre.");
        continue;        
    }

    if (proposition < 1 || proposition > 100) { // Vérification de la saisie de la personne si c'est un nombre entre 1 et 100
        console.log("Vous devez entrer un nombre entre 1 et 100.");
        continue;
    }
    console.log(proposition) // Afficher la proposition de la personne à chaque essai.
    if (proposition == nombreMystere) {
        console.log("Félicitations, vous avez trouvé le nombre mystère !"); // Si la personne trouve le nombre mystère
        break;
    }

    if (proposition < nombreMystere) {
        console.log("Le nombre mystère est plus grand."); // Si le nombre mystère est plus grand que la proposition
    }

    if (proposition > nombreMystere) {
        console.log("Le nombre mystère est plus petit."); // Si le nombre mystère est plus petit que la proposition
    }

    nbEssaisRestants -= 1; // Enlever un essai à chaque proposition de la personne
    console.log(`Il vous reste ${nbEssaisRestants} essais.`); // Afficher le nombre d'essais restants à la personne

}

if (nbEssaisRestants == 0) {
    console.log("Perdu ! Le nombre mystère était " + nombreMystere); // Afficher le nombre mystère si la personne n'a pas trouvé le nombre mystère
}