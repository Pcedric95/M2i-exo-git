// src/components/PokemonCard/PokemonCard.jsx
import styles from "./PokemonCard.module.css";
import React, { useState } from "react";

const PokemonCard = ({ name, type }) => {
  const [favorites, setFavorites] = useState([]);
  // URL pour les images des Pokémon (exemple avec PokeAPI ou images locales)
  const imageUrl = `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;

  // Type par couleur
  const typeColors = {
  electric: '#FFD700',  // Jaune
  grass: '#7CFC00',      // Vert
  fire: '#FF4500',       // Orange
  water: '#1E90FF',      // Bleu
  normal: '#ffffffff',     // Gris
  rock: '#A0522D',        // Marron
  fighting: '#8B0000',    // Rouge foncé
  poison: '#9932CC',      // Violet
  ground: '#cc4405ff',      // Marron
  flying: '#87CEEB',      // Bleu ciel
  psychic: '#FF69B4',     // Rose
  bug: '#6cb621ff',         // Vert'
  // Ajoute d'autres types si nécessaire
};


  const toggleFavorite = () => {
  if (favorites.some((fav) => fav.name === name)) {
    setFavorites(favorites.filter((fav) => fav.name !== name));
  } else {
    setFavorites([...favorites, { name, type }]);
  }
};

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: typeColors[type] || "#FFFFFF" }}
    >
      <img
        src={imageUrl}
        alt={name}
        className={styles.image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150?text=Pokémon";
        }}
      />
      <h3>{name}</h3>
      <p className={styles.type}>Type: {type}</p>
      <button onClick={toggleFavorite} className={styles.favoriteButton}>
  {favorites.some((fav) => fav.name === name) ? '⭐' : '☆'}
</button>
    </div>
  );
};

export default PokemonCard;
