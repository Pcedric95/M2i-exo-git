import { useState, useEffect } from 'react'
import './App.css'

// 0.1 - Créer un tableau de données Pokémon
const pokemons = [
  {name: 'Pikachu', type: 'Electrik'},
  {name: 'Bulbizarre', type: 'Plante'},
  {name: 'Salamèche', type: 'Feu'},
  {name: 'Carapuce', type: 'Eau'},
  {name: 'Rondoudou', type: 'Normal'},
  {name: 'Chétiflor', type: 'Plante'},
  {name: 'Racaillou', type: 'Roche'},
  {name: 'Machoc', type: 'Combat'},
];

// 1 - Initialiser l'état de recherche
  const getInitialSearchItem = () => {

    // 1.1 - Regarder si valeur stockée dans le navigateur
    const storedTerm = localStorage.getItem('searchItem');
    
    // 1.2 - Si oui, l'utiliser, sinon prendre le premier Pokémon
    return storedTerm || 'Pikachu';
  }

function App() {

  // 2 - Utiliser l'état pour le créer
  const [searchTerm, setSearchTerm] = useState(getInitialSearchItem);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  // 3 - Utiliser un effet pour stocker la valeur dans le navigateur
  // Le Hook useEffect est essentiel pour la persistance des données
  // le tableau [searchTerm] est la "dépendance" qui dit à React de relancer l'effet.
  useEffect(() => {localStorage.setItem('searchTerm', searchTerm);}, [searchTerm]);


  // 4 - Filtrer les Pokémon en fonction du terme de recherche
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // Composant de liste
  const List = ({list}) => {

    return (
      <ul>
        {/*  */}
        {list.map((item) => ( 
          // Donner une clé unique à chaque élément de la liste
          <li key={item.name}>
            {item.name} ({item.type}) {/*Afficher : nom Pokémon + type */}
          </li>
          
        ))}
      </ul>
    );
  };


  return (
    <>
      <div className="pokedex-card">
        <h1>Mini Pokédex</h1>
        <Search searchTerm={searchTerm} onSearch={handleSearch} />
        <List list={filteredPokemons} />
        {filteredPokemons.length === 0 && <p>Aucun Pokémon trouvé.</p>}
    </div>
    </>
  
  )
}

// Composant de recherche responsable de l'affichage de l'input recherche
// N'utilise pas l'état mais les props pour lire la valeur et envoyer les changements
const Search = ({ searchTerm, onSearch }) => {
  return (

    <div>

      {/* Champ de recherche */}
      <label htmlFor="search">Rechercher un Pokémon :</label>
      <input
        id='search'
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={searchTerm}
        onChange={onSearch} // Callback handler
      />
    </div>

  );
}

export default App
