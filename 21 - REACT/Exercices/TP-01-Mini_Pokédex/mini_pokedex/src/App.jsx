import { useState } from 'react'
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
    return storedTerm ? JSON.parse(storedTerm) : pokemons[0];
  }

function App() {

  // 2 - Utiliser l'état pour le créer
  const [searchTerm, setSearchTerm] = useState(getInitialSearchItem());


  return (
    <>
      <h1>Mini Pokédex</h1>
      {/* Composant recherche */}
      {/* Composant de liste */}
    </>
  )
}

export default App
