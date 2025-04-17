/* -------------------------- Sélection des éléments ------------------------------- */

const form = document.querySelector(".form-container");
const nomInput = document.querySelector("#nom");

const dateInput = document.querySelector("#date");
const heureInput = document.querySelector("#time");
const erreurHeure = document.querySelector("#erreur-heure");
const erreurCreneau = document.querySelector("#erreur-creneau");

const participantsInput = document.querySelector("#nbParticipants");
const erreurParticipants = document.querySelector("#erreur-participants");

const bouton = document.querySelector("button");

/* -------------------------- Récupérations des rendez-vous ----------------------------*/

const reservations = [];

/* ------------------------- Empêcher le rechargement de la page à chaque clic----------------------------------- */

form.addEventListener("submit", (e) => {
  e.preventDefault(); // empêcher le rechargement de la page
  console.clear(); // supprimer la console à chaque clic

  /*------------------------- Vérification du nom------------------------ */
  const nom = nomInput.value;
  if (nom.length < 3) {
    alert("⚠️ Attention le nom doit contenir au moins 3 lettres.");
    return;
  }

  // Vérifie que le nom ne contient que des lettres
  const regexNom = /^[a-zA-Z\s]+$/;

  if (!regexNom.test(nom)) {
    alert(
      "Le nom ne doit contenir uniquement des lettres (sans chiffres, ni espaces)."
    );
    return;
  }
  console.log("Nom valide : ", nom);

  const heure = heureInput.value;
  erreurHeure.textContent = "";

  /* -------------------------- Vérification de l'heure---------------------------------------------  */
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

  /* ------------------------- Vérification du créneau ---------------------------------- */

  const date = dateInput.value;
  // Enlever l'erreur précédente
  erreurCreneau.textContent = "";

  //Vérifier si un rendez-vous existe déjà pour cette date et cette heure

  for (let i = 0; i < reservations.length; i++) {
    let resa = reservations[i];
    if (resa.date === date && resa.time === heure) {
      erreurCreneau.textContent = "⚠️ Ce créneau est déjà réservé.";
      return;
    }
  }

  /*---------------------------- Ajout du nombre de participants-------------------*/
  erreurParticipants.textContent = "";

  // Récupération du nombre de participants
  const participants = parseInt(participantsInput.value);

  if (isNaN(participants) || participants < 0 || participants > 10) {
    erreurParticipants.textContent =
      "⚠️ Le nombre de participants doit être compris entre 1 et 10.";
    return;
  }
  console.log("Participants valides :", participants);

  /* -------------------------- Ajout de la réservation dans la listef -------------------------- */

  reservations.push({
    name: nom,
    date: date,
    time: heure,
    participants: participants,
  });

  console.log("Votre réservation est enregistrée :", reservations);
});
