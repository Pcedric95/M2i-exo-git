// Fonction pour choisir un mot aléatoire dans une liste
function choisirMotMystere(listeMots) {
    return listeMots[Math.floor(Math.random() * listeMots.length)];
}


//  Sélectionner la grille ddu html
const grille = document.getElementById("grille");
let jeuFini = false; // Suivre si le jeu est terminé ou non

// La liste des mots possibles
let motsPossibles = [];
let motMystere = "";

// Charger les mots depuis le JSON
fetch("dictionnaireMots.json") // Fait une requête HTTP pour lire dictionnaireMots.json
    .then((res) => res.json()) // convertir son contenu en objet une fois le fichier chargé
    .then((data) => { // contient la liste de mots
        motsPossibles = data;
        motMystere = choisirMotMystere(motsPossibles).toUpperCase(); // sélection du mot mystère (hasard)
        console.log("Le mot mystère est : " + motMystere);
    });


// Générer 6 lignes de 5 cases
for (let ligne = 0; ligne < 5 ; ligne ++){ // Créer les 6 lignes
    const ligneDiv = document.createElement("div"); // crée la div pour chaque ligne
    ligneDiv.classList.add("ligne") // Ajout de la classe ligne

    for (let colonne = 0; colonne < 5 ; colonne ++){ // Créer les 5 cases
        const caseDiv = document.createElement("div"); // crée la div pour chaque ligne
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
    if (jeuFini || !motMystere) return; // Si le jeu est fini ou mot non prêt

    const touches = e.key // récupérer la lettre tapée

    // Vérifier si c'est une lettre valide ou non
    if (/^[a-zA-Z]$/.test(touches)) {
        //Vérifier si on a atteint ou pas 5 lettres dans la ligne
        if (caseActuelle < 5 ) {
            const positionDansGrille = ligneActuelle * 5 + caseActuelle;
            toutesLesCases[positionDansGrille].textContent = touches.toUpperCase();
            caseActuelle ++; // Passer à la case suivante
        }
    }

    // Si la touche est Retour arrière
    if ( touches === 'Backspace' && caseActuelle > 0) {
        caseActuelle--; // On recule d'une case
        const positionDansGrille = ligneActuelle * 5 + caseActuelle;
        toutesLesCases[positionDansGrille].textContent = ""; // Effacement de la case
    }

    // Si l'utilisateur appuie sur Entrée, validation
    if (touches === 'Enter' && caseActuelle === 5) {
        let motTape = "";
        for (let i = 0; i < 5; i++) {
            const position = ligneActuelle * 5 + i;
            motTape += toutesLesCases[position].textContent;
        }

        console.log("Le mot tapé est : " + motTape);

        for (let i = 0 ; i < 5 ; i++){
            const lettre = motTape[i]; // recupérer la lettre donnée de l'user
            const caseGrille = toutesLesCases[ligneActuelle * 5 + i]; // quel case c'est

            // Lettre bien placée = vert
            if (lettre === motMystere[i]) {
                caseGrille.style.backgroundColor = "green";
                caseGrille.style.color = "white";
            } else if (motMystere.includes(lettre)) {
                caseGrille.style.backgroundColor = "gold"; // Lettre valide mais pas au bon endroit = jaune
                caseGrille.style.color = "black";
            } else {
                caseGrille.style.backgroundColor = "#aaa"; // pas de bonne lettre = gris
                caseGrille.style.color = "white";
            }
        }

        // Vérifier si le mot est correct > Victoire ou Perdu
        if (motTape === motMystere) {
            document.getElementById("message").textContent = " Bravo ! Vous avez trouvé le mot !";
            jeuFini = true;
            boutonRejouer.style.display = "inline-block";
        } else {
            ligneActuelle++;
            caseActuelle = 0;
            if (ligneActuelle === 6) {
                document.getElementById("message").textContent = ` Perdu ! Le mot mystère était "${motMystere}".`;
                jeuFini = true;
                boutonRejouer.style.display = "inline-block";
            }
        }
    }
});

// Bouton rejouer
const boutonRejouer = document.getElementById("boutonRejouer");

boutonRejouer.addEventListener("click", () => {
    toutesLesCases.forEach(caseGrille => {
        caseGrille.textContent = "";
        caseGrille.style.backgroundColor = "white";
        caseGrille.style.color = "black";
    });

    ligneActuelle = 0;
    caseActuelle = 0;
    jeuFini = false;

    motMystere = choisirMotMystere(motsPossibles).toUpperCase();
    console.log("Nouveau mot mystère : " + motMystere);

    document.getElementById("message").textContent = "";
    boutonRejouer.style.display = "none";
});