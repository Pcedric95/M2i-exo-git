// Fonction pour choisir un mot aléatoire dans une liste
function choisirMotMystere(listeMots) {
    return listeMots[Math.floor(Math.random() * listeMots.length)];
}

// Sélectionner la grille HTML
const grille = document.getElementById("grille");
let jeuFini = false; // Suivre si le jeu est terminé ou non
let toutesLesCases = [];

// La liste des mots possibles
let motsPossibles = [];
let motMystere = "";

// Charger les mots depuis le JSON
fetch("dictionnaireMots.json")
    .then((res) => res.json())
    .then((data) => {
        motsPossibles = data;
        motMystere = choisirMotMystere(motsPossibles).toUpperCase(); // sélection du mot mystère
        console.log("Le mot mystère est : " + motMystere);
        genererGrille(motMystere.length);
        toutesLesCases = document.querySelectorAll(".case");
    });

// Générer dynamiquement la grille
function genererGrille(longueurMot) {
    grille.innerHTML = "";
    for (let ligne = 0; ligne < 6; ligne++) {
        const ligneDiv = document.createElement("div");
        ligneDiv.classList.add("ligne");

        for (let col = 0; col < longueurMot; col++) {
            const caseDiv = document.createElement("div");
            caseDiv.classList.add("case");
            ligneDiv.appendChild(caseDiv);
        }

        grille.appendChild(ligneDiv);
    }
}

// Contrôle clavier et écriture
let ligneActuelle = 0;
let caseActuelle = 0;

document.addEventListener("keydown", (e) => {
    if (jeuFini || !motMystere) return;

    const touches = e.key;

    if (/^[a-zA-Z]$/.test(touches)) {
        if (caseActuelle < motMystere.length) {
            const position = ligneActuelle * motMystere.length + caseActuelle;
            toutesLesCases[position].textContent = touches.toUpperCase();
            caseActuelle++;
        }
    }

    if (touches === "Backspace" && caseActuelle > 0) {
        caseActuelle--;
        const position = ligneActuelle * motMystere.length + caseActuelle;
        toutesLesCases[position].textContent = "";
    }

    if (touches === "Enter" && caseActuelle === motMystere.length) {
        let motTape = "";
        for (let i = 0; i < motMystere.length; i++) {
            const position = ligneActuelle * motMystere.length + i;
            motTape += toutesLesCases[position].textContent;
        }

        console.log("Mot tapé :", motTape);

        for (let i = 0; i < motMystere.length; i++) {
            const lettre = motTape[i];
            const caseGrille = toutesLesCases[ligneActuelle * motMystere.length + i];

            if (lettre === motMystere[i]) {
                caseGrille.style.backgroundColor = "green";
                caseGrille.style.color = "white";
            } else if (motMystere.includes(lettre)) {
                caseGrille.style.backgroundColor = "gold";
                caseGrille.style.color = "black";
            } else {
                caseGrille.style.backgroundColor = "#aaa";
                caseGrille.style.color = "white";
            }
        }

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

// Bouton "Rejouer"
const boutonRejouer = document.getElementById("boutonRejouer");

boutonRejouer.addEventListener("click", () => {
    toutesLesCases.forEach((caseGrille) => {
        caseGrille.textContent = "";
        caseGrille.style.backgroundColor = "white";
        caseGrille.style.color = "black";
    });

    ligneActuelle = 0;
    caseActuelle = 0;
    jeuFini = false;

    motMystere = choisirMotMystere(motsPossibles).toUpperCase();
    console.log("Nouveau mot mystère :", motMystere);
    genererGrille(motMystere.length);
    toutesLesCases = document.querySelectorAll(".case");

    document.getElementById("message").textContent = "";
    boutonRejouer.style.display = "none";
});

// Création du clavier virtuel
const clavierVirtuel = document.getElementById("clavierVirtuel"); // Sélection du clavier virtuel


// alphabet pour les touches
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Fonction pour créer une touche
function creerTouche(contenu, className = "") {
    
    // Créer la touche
    const touche = document.createElement("button");
    touche.textContent = contenu; // Texte de la touche
    touche.classList.add("touche"); // classe pour style de la touche
    
    // si une classe est ajouté on l'ajoute
    if (className) touche.classList.add(className);
    clavierVirtuel.appendChild(touche);

    // Simuler une touche lors d'un clic
    touche.addEventListener("click", () => {
        const eventSimule = new KeyboardEvent("keydown", {
            key: contenu === "↵" ? "Enter" : contenu === "⌫" ? "Backspace" : contenu
        });
        document.dispatchEvent(eventSimule); // simule un clavier physique
    });
}

// Créer les touches A à Z
alphabet.split("").forEach((lettre) => {
    creerTouche(lettre);
});

// Touches spéciales : Entrée et Effacer
creerTouche("↵", "special");
creerTouche("⌫", "special");
