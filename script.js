const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// récupérer les éléments HTML
const searchInput = document.getElementById("searchInput"); // Champ de recherche
const searchButton = document.getElementById("searchButton") //Bouton recherche
const infoDiv = document.getElementById("pokemonInfo"); // Div pour afficher les informations du pokémon

// Fonction pour récupérer un pokémon par un nom ou ID

async function getPokemon(info) { 
 try {
    //requête à l'API avec le nom ou l'ID du pokémon en ignorant la casse
    const response = await fetch(BASE_URL + info.toLowerCase());
    //Si la réponse incorrecte > erreur
    if (!response.ok) {
        throw new Error("Pokémon not found");
    }

    // sinon, récupération de la réponse en objet JSON
    const data = await response.json();
    console.log(data); // Voir les données récupérées

    // Affichage des informations du pokémon
    displayPokemon(data);
 }   catch (error){
    // Si erreur, afficher le message d'erreur dans la div
    infoDiv.innerHTML = `<p>${error.message}</p>`; 
    console.error("Erreur Pokémon:", error); // Afficher l'erreur dans la console
 }
}



/* Bouton pour rechercher */

searchButton.addEventListener("click",() => {
    // Récupérer la valeur du champ de recherche et supprimer les espaces inutiles
    const input = searchInput.value.trim();

    //si un texte est tapé, lancer la recherche
    if (input){
        getPokemon(input); // Appel de la fonction pour récupérer le pokémon
    }
})

// Fonction pour afficher les informations du pokémon
function displayPokemon(data) {
    
}