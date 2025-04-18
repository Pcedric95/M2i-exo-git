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