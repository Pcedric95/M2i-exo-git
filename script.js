//Sélection des éléments

const form = document.querySelector(".form-container");
const nomInput = document.querySelector("#nom");

const dateInput = document.querySelector("#date");
const heureInput = document.querySelector("#time");
const erreurHeure = document.querySelector("#erreur-heure");
const erreurCreneau = document.querySelector('#erreur-creneau');

const participantsInput = document.querySelector("#nbParticipants");
const bouton = document.querySelector("button");

// stockage des rendez-vous

const reservations = [];

// empêcher le rechargement de la page à chaque clic
form.addEventListener("submit", (e) => {
  e.preventDefault(); // empêcher le rechargement de la page
  console.clear(); // supprimer la console à chaque clic

  /*--------------------------Vérification du nom------------------------ */
  const nom = nomInput.value;
  if (nom.length < 3) {
    alert("⚠️ Attention le nom doit contenir au moins 3 lettres.");
    return;
  }

  // Vérifie que le nom ne contient que des lettres
  const regexNom = /^[a-zA-Z]+$/;

  if (!regexNom.test(nom)) {
    alert(
      "Le nom ne doit contenir uniquement des lettres (sans chiffres, ni espaces)."
    );
    return;
  }
  console.log("Nom valide : ", nom);

  const heure = heureInput.value;
  erreurHeure.textContent = "";


    /* -----------------Vérification de l'heure---------------------------------------------  */
  // Vérifier si une heure est bien choisie
  if (!heure) {
    erreurHeure.textContent = "choisir une heure.";
    return;
  }

  // Séparer l'heure et les minutes
  const [h, m] = heure.split(":").map(Number);
  const heureDecimale = h + m / 60;

  // Vérifier que l'heure choisie est entre 9h00 et 18h00
  if (heureDecimale < 9 || heureDecimale > 18) {
    erreurHeure.textContent =
      "Les rendez-vous ne sont disponbles qu'entre 9h00 et 18h00.";
    return;
  }
  console.log("Heure valide: ", heure);

  /* --------------------------Vérification du créneau ---------------------------------- */

  const date = dateInput.value;
    // Enlever l'erreur précédente
    erreurCreneau.textContent = '';
    
    //Vérifier si un rendez-vous existe déjà pour cette date et cette heure

    const existeDeja = '';

    if (existeDeja) {
        erreurCreneau.textContent = '⚠️Ce créneau est déjà réservé.'
        return;
    }
});
