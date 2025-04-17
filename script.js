//Sélection des éléments

const form = document.querySelector('.form-container');
const nomInput = document.querySelector('#nom');

const dateInput = document.querySelector('#date');
const heureInput = document.querySelector('#time');
const erreurHeure = document.querySelector('#erreur-heure');

const participantsInput = document.querySelector('#nbParticipants');
const bouton = document.querySelector('button');

// stockage des rendez-vous

const reservations = [];

// empêcher le rechargement de la page à chaque clic
form.addEventListener('submit', (e) =>
{
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
        alert('Le nom ne doit contenir uniquement des lettres (sans chiffres, ni espaces).');
        return;
    }
    console.log("Nom valide : ", nom)

    const heure = heureInput.value;
    erreurHeure.textContent = "";

    // Vérifier si une heure est bien choisie
    if (!heure) {
        erreurHeure.textContent = "choisir une heure.";
        return;
    }

})


