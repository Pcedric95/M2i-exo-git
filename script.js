//Sélection des éléments

const form = document.querySelector('form-container');
const nomInput = document.querySelector('#nom');
const dateInput = document.querySelector('#date');
const heureInput = document.querySelector('#time');
const participantsInput = document.querySelector('#nbParticipants');
const bouton = document.querySelector('button');

// stockage des rendez-vous

const reservations = [];

// empêcher le rechargement de la page à chaque clic
bouton.addEventListener('click', (e) =>
{
    e.preventDefault(); // empêcher le rechargement de la page
    console.clear(); // supprimer la console à chaque clic
    
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
})


