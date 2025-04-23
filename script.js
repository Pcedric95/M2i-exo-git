//  Sélectionner la grille ddu html
const grille = document.getElementById("grille");


// La liste des mots possibles
const motsPossibles = [
    "POMME", "PLAGE", "TENTE", "ROUGE", "GRAIN",
    "POINT", "VERRE", "LIVRE", "NAGER", "SAUTE",
    "AIDER", "FAIRE", "PLANS", "UNIES", "PLACE"
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

let ligneActuelle = 0; // numéro de la ligne actuelle de l'entrée utilisateur
let caseActuelle = 0; // numéro de la case actuelle

// sélectionner toutes les cases de grille
const toutesLesCases = document.querySelectorAll(".case");

// listener sur le clavier
document.addEventListener("keydown", (e) => {
    const touches = e.key // récupérer la lettre tapée

    // Vérifier si c'est une lettre valide ou non
    if (/^[a-zA-Z]$/.test(touches)) {
        //Vérifier si on a atteint ou pas 5 lettres dans la ligne
        if (caseActuelle < 5 ) {
            const positionDansGrille = ligneActuelle * 5 + caseActuelle;

            // Insérer la lettre dans la case correspondante
            toutesLesCases[positionDansGrille].textContent = touches;

            caseActuelle ++; // Passer à la case suivante
        }
    }

    // Si la touche est Retour arrière
    if ( touches === 'Backspace' && caseActuelle > 0) {
        caseActuelle--; // On recule d'une case
        const positionDansGrille = ligneActuelle * 5 + caseActuelle
        toutesLesCases[positionDansGrille].textContent = ""; // Effacement de la case
    }


     // Si l'utilisateur appuie sur Entrée, validation

    if (touches === 'Enter' && caseActuelle === 5) {
        // Récupérer le mot tapé sur la ligne en cours
        let motTape = "";
        for (let i = 0; i < 5; i++) {
            const position = ligneActuelle * 5 + i;
            motTape += toutesLesCases[position].textContent;
        }

        console.log("Le mot tapé est " , motTape);

        // Comparaison des différentes lettres tapées avec le mot mystère

        for (let i = 0 ; i < 5 ; i++){

        const lettre = motTape[i];
        const caseGrille = toutesLesCases[ligneActuelle * 5 + i] //

            if (lettre === motMystere[i]) {
                // Lettre bien placée → vert
                caseGrille.style.backgroundColor = "green";
                caseGrille.style.color = "white";
           
            } else if (motMystere.includes(lettre)) {
                // Lettre présente mais mal placée → jaune
                caseGrille.style.backgroundColor = "gold";
                caseGrille.style.color = "black";
           
            } else {
                // Lettre absente → gris
                caseGrille.style.backgroundColor = "#aaa";
                caseGrille.style.color = "white";
            }
        }
    
        // Vérifier si le mot est correct > Victoire ou Perdu
        if (motTape.toUpperCase() === motMystere) {
            document.getElementById("message").textContent = " Bravo ! Vous avez trouvé le mot !";
       
        } else {
            ligneActuelle++;
            caseActuelle = 0;
            
            // Si on a dépassé la 6e ligne
            if (ligneActuelle === 6) {
                document.getElementById("message").textContent = ` Perdu ! Le mot mystère était "${motMystere}".`;
            }
        }
    }

})
