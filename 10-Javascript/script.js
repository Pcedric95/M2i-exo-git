// Calculette flexbox fonctionnelle - HTML, CSS et JavaScript

//------------------- Fonctions --------------------------

// Réinitialiser l'écran à zéro
function reinitialiser() {
  ecran.textContent = '0';
}

// Inverser le signe du nombre affiché
function inverserLeSigne() {
  let nombre = parseFloat(ecran.textContent);
  nombre = -nombre;
  ecran.textContent = nombre;
}


// Applique un pourcentage à la valeur
function pourcentage() {
  let nombre = parseFloat(ecran.textContent);
  nombre = nombre / 100;
  ecran.textContent = nombre;
}

// Calcul le résulat
function calculDuResultat() {
  ecran.textContent = eval(ecran.textContent);
}


// Ajoute un chiffre ou un opérateur à l’affichage
function ajouterValeur(valeur) {
  if (ecran.textContent === '0') {
    ecran.textContent = valeur;
  } else {
    ecran.textContent += valeur;
  }
}


// Sélectionner les éléments du DOM
const ecran = document.querySelector(".ecran"); // Sélectionne l'élément avec la classe 'ecran'
const boutons = document.querySelectorAll(".touches div"); // Sélectionne tous les divs à l'intérieur de l'élément avec la classe 'touches'

// Boucle pour chaque boutons
boutons.forEach((boutons) => {
  boutons.addEventListener("click", (e) => {
    let valeur = e.target.textContent; // Récupère le texte du bouton cliqué
    console.log(valeur); // affiche la valeur clicqué dans la console
    if (valeur === "C") return reinitialiser();
    if (valeur === "+/_") return inverserLeSigne();
    if (valeur === "%") return pourcentage();
    if (valeur === "=") return calculDuResultat();

    // ajouter la valeur à l’écran
    return ajouterValeur(valeur);

  });
});
