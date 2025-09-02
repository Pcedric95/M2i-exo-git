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
  useEffect(() => {localStorage.setItem('searchTerm', searchTerm);}, [searchTerm]);


  // 4 - Filtrer les Pokémon en fonction du terme de recherche
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const List = ({list}) => {
    return (
      <ul>
        {list.map((item) => (
          <li key={item.name}>
            {item.name} ({item.type})
          </li>
          
        ))}
      </ul>
    );
  };


  return (
    <>
      <h1>Mini Pokédex</h1>

      <Search searchTerm={searchTerm} onSearch={handleSearch} />
    
      {/* Composant de liste */}
      <List list={filteredPokemons} />
      {filteredPokemons.length === 0 && <p>Aucun Pokémon trouvé.</p>}
    </>
  )
}


const Search = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Rechercher un Pokémon :</label>
      <input
        id='search'
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
}

export default App
