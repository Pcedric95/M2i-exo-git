<<<<<<< HEAD
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
=======
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// récupérer les éléments HTML
const searchInput = document.getElementById("searchInput"); // Champ de recherche
const searchButton = document.getElementById("searchButton"); //Bouton recherche
const infoDiv = document.getElementById("pokemonInfo"); // Div pour afficher les informations du pokémon
let pokemonActuel = 1; // ID du pokémon actuel



// Fonction pour récupérer un pokémon par un nom ou ID

async function getPokemon(info) {
  try {
    //requête à l'API avec le nom ou l'ID du pokémon en ignorant la casse
    const response = await fetch(BASE_URL + info); // Récupérer les données de l'API
    //Si la réponse incorrecte > erreur
    if (!response.ok) {
      throw new Error("Pokémon not found");
    }

    // sinon, récupération de la réponse en objet JSON
    const data = await response.json();
    console.log(data); // Voir les données récupérées

    // Affichage des informations du pokémon
    displayPokemon(data);
  } catch (error) {
    // Si erreur, afficher le message d'erreur dans la div
    infoDiv.innerHTML = `<p>${error.message}</p>`;
    console.error("Erreur Pokémon:", error); // Afficher l'erreur dans la console
  }
}

/* Bouton pour rechercher */

searchButton.addEventListener("click", () => {
  // Récupérer la valeur du champ de recherche et supprimer les espaces inutiles
  const input = searchInput.value.trim();

  //si un texte est tapé, lancer la recherche
  if (input) {
    getPokemon(input); // Appel de la fonction pour récupérer le pokémon
  }
});

// Fonction pour afficher les informations du pokémon
function displayPokemon(data) {
  const tailleEnMetres = data.height / 10; // Taille en mètres
  const poidsEnKilos = data.weight / 10; // Poids en kilos

  // Récupérer les types du pokémon et les afficher
  const types = data.types.map((typeInfo) => typeInfo.type.name).join(", ");
  console.log(types); // Afficher les types dans la console

  //Récupérer les capacités du pokémon et les afficher
  const capacites = data.abilities
    .slice(0, 4) // Limiter à 4 capacités
    .map((capaciteObj) => capaciteObj.ability.name) // Récupérer le nom de la capacité
    .join(", "); // transformer le tableau en chaîne de caractères séparée par des virgules
  console.log(capacites); // Afficher les capacités dans la console

  // Afficher les données du nom et ID du pokémon dans la div infoDiv
  infoDiv.innerHTML = `
        <h2>${data.name.toUpperCase()} (#${data.id})</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <ul>
            <li>Types : ${types}</li>
            <li>Capacités : ${capacites}</li>
            <li>Taille : ${tailleEnMetres} m</li>
            <li>Poids : ${poidsEnKilos} kg</li>
        </ul>
    `;
    pokemonActuel = data.id; // Mettre à jour l'ID du pokémon actuel 
}
// Afficher le bouton "Précédent" et "Suivant"
    
    const boutonPrecedent = document.getElementById("prevButton"); // Bouton précédent
    const boutonSuivant = document.getElementById("nextButton"); // Bouton suivant

    // Bouton précédent 
    boutonPrecedent.addEventListener("click", () => {
        if (pokemonActuel > 1) { // Si le pokémon actuel est supérieur à 1
            getPokemon(pokemonActuel - 1); // Revenirau pokémon précédent
        }
    });
    //Bouton suivant
    boutonSuivant.addEventListener("click", () => {
        if (pokemonActuel < 1010) { 
            getPokemon(pokemonActuel + 1 ); //Passer au pokémon suivant
        }
    });
>>>>>>> import-api
