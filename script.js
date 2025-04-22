//  Sélectionner la grille ddu html
const grille = document.getElementById("grille");


// La liste des mots possibles
const motsPossibles = [
    "POMME", "PLAGE", "TENTE", "ROUGE", "GRAIN",
    "POINT", "VERRE", "LIVRE", "NAGER", "SAUTE"
];

// Choisir un mot au hasard
const motMystere = motsPossibles[Math.floor(Math.random() * motsPossibles.length)];
console.log("Le mot mystère est : " + motMystere);


// Générer 6 lignes de 5 cases

for (let ligne = 0; ligne < 6 ; ligne ++){ // Créer les 6 lignes
    const ligneDiv = document.createElement("div");
    ligneDiv.classList.add("ligne")

    for (let colonne = 0; colonne < 5 ; colonne ++){ // Créer les 5 cases
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case");
        ligneDiv.appendChild(caseDiv);
    }
    grille.appendChild(ligneDiv); //  Ici, ajouter chaque case dans chaque lignes
}

/* ----------------- Ecoute des touches + Ecriture dans la grille -------------------------*/

let ligneActuelle = 0; // numéro de la ligne actuelle
let caseActuelle = 0 // numéro de la case actuelle

// sélectionner toutes les cases de grille
const touteLesCases = document.querySelectorAll(".case");

// listener sur le clavier
document.addEventListener("keydown", (e) => {
    const touches = e.key // récupérer la lettre tapée

    // Vérifier i c'est une lettre valide ou non
    if (/^[a-zA-Z]$/.test(touches)) {
        //Vérifier si on a atteint ou pas 5 lettres dans la ligne
        if (caseActuelle < 5 ) {
            const positionDansGrille = ligneActuelle * 5 + caseActuelle;

            // Insérer la lettre dans la case correspondante
            touteLesCases[positionDansGrille].textContent = touches;

            caseActuelle ++; // Passer à la case suivante
        }
    }

    // Si la touche est Retour arrière
    if ( touches === 'Backspace' && caseActuelle > 0) {
        caseActuelle--; // On recule d'une case
        const positionDansGrille = ligneActuelle * 5 + caseActuelle
        touteLesCases[positionDansGrille].textContent = ""; // Effacement de la case
    }

    if ( touches === 'Enter' && caseActuelle === 5 ){
        const positionDansGrille = ligneActuelle * 5 + caseActuelle
    }
})
