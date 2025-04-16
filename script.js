// Calculette flexbox fonctionnelle - HTML, CSS et JavaScript

//Fonstions

function reinitialiser() {
  ecran.textContent = '0';
}

function inverserLeSigne(valeur) {
  if (valeur === "+/_") {
    let nombre = parseFloat(ecran.textContent);
    nombre = -nombre;
    ecran.textContent = nombre;
    return;
  }
}

function pourcentagevaleur() {
  if (valeur === "%") {
    let nombre = parseFloat(ecran.textContent);
    nombre = nombre / 100;
    ecran.textContent = nombre;
    return;
  }
}

function calculDuResulat(valeur) {
  if (valeur === "=") {
    ecran.textContent = eval(ecran.textContent); // afficher le résultat
  } else if (ecran.textContent === "0") {
    ecran.textContent = valeur;
  } else {
    ecran.textContent += valeur;
  }
}

const ecran = document.querySelector(".ecran"); // Sélectionne l'élément avec la classe 'ecran'
const boutons = document.querySelectorAll(".touches div"); // Sélectionne tous les divs à l'intérieur de l'élément avec la classe 'touches'

// Fonction pour ajouter un chiffre ou un opérateur à l'affichage
boutons.forEach((boutons) => {
  boutons.addEventListener("click", (e) => {
    let valeur = e.target.textContent; // Récupère le texte du bouton cliqué
    if (valeur === "C") return reinitialiser(valeur);
    if (valeur === "+/_") return inverserLeSigne(valeur);
    if (valeur === "%") return pourcentage(valeur);
    if (valeur === "=") return calculDuResulat(valeur);
    // ajouter la valeur à l’écran
    return ajouterValeur(valeur);

    console.log(valeur); // J'affiche la valeur clicqué dans la console
  });
});
