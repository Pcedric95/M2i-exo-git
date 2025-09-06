// src/components/Pokedex/Pokedex.jsx
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styles from './Pokedex.module.css';
import Search from '../Search/Search';
import List from '../List/List';

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  // Récupérer les Pokémon depuis l'API
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const results = response.data.results;
        const pokemonsData = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
              name: pokemonDetails.data.name.charAt(0).toUpperCase() + pokemonDetails.data.name.slice(1),
              type: pokemonDetails.data.types[0].type.name,
            };
          })
        );
        setPokemons(pokemonsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  // Charger les favoris depuis localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Sauvegarder les favoris dans localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Utiliser useCallback pour éviter les recréations inutiles de la fonction
  const toggleFavorite = useCallback((pokemon) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.name === pokemon.name);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.name !== pokemon.name);
      } else {
        return [...prevFavorites, pokemon];
      }
    });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className={styles['pokedex-card']}>
        <h1>Mini Pokédex</h1>
        <Search searchTerm={searchTerm} onSearch={handleSearch} />
        {loading ? (
          <p>Chargement des Pokémon...</p>
        ) : filteredPokemons.length === 0 ? (
          <p>Aucun Pokémon trouvé.</p>
        ) : (
          <List list={filteredPokemons} favorites={favorites} toggleFavorite={toggleFavorite} />
        )}
      </div>
      <div>
        <h2>Favoris</h2>
        {favorites.length > 0 ? (
          <List list={favorites} favorites={favorites} toggleFavorite={toggleFavorite} />
        ) : (
          <p>Aucun Pokémon favori.</p>
        )}
      </div>
    </>
  );
};

const getInitialSearchTerm = () => {
  const storedTerm = localStorage.getItem('searchTerm');
  return storedTerm || 'Pikachu';
};

export default Pokedex;
