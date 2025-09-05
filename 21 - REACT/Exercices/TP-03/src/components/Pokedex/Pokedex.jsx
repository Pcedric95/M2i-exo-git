// src/components/Pokedex/Pokedex.jsx

import { useState, useEffect } from 'react';
import styles from '../Pokedex/Pokedex.module.css';
import Search from '../Search/Search'; 
import List from '../List/List';

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

const getInitialSearchTerm = () => {
    const storedTerm = localStorage.getItem('searchTerm');
    return storedTerm || 'Pikachu';
};

const Pokedex = () => {
    const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        localStorage.setItem('searchTerm', searchTerm);
    }, [searchTerm]);

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles['pokedex-card']}>
            <h1>Mini Pokédex</h1>
            <Search searchTerm={searchTerm} onSearch={handleSearch} />
            <List list={filteredPokemons} />
            {filteredPokemons.length === 0 && <p>Aucun Pokémon trouvé.</p>}
        </div>
    );
};

export default Pokedex;