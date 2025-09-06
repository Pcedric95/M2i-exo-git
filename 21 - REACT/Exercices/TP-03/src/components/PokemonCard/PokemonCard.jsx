// src/components/PokemonCard/PokemonCard.jsx
import styles from './PokemonCard.module.css';

const typeColors = {
  electric: '#FFD700',
  grass: '#7CFC00',
  fire: '#FF4500',
  water: '#1E90FF',
  normal: '#A9A9A9',
  rock: '#A0522D',
  fighting: '#8B0000',
  poison: '#9370DB',
  ground: '#D2B48C',
  flying: '#87CEFA',
  psychic: '#FF69B4',
  bug: '#9ACD32',
  ghost: '#7B68EE',
  steel: '#708090',
  ice: '#ADD8E6',
  dragon: '#483D8B',
  dark: '#483D8B',
  fairy: '#FF69B4',
};

const PokemonCard = ({ name, type, isFavorite, toggleFavorite }) => {
  const imageUrl = `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;

  return (
    <div className={styles.card} style={{ backgroundColor: typeColors[type] || '#fff' }}>
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
      <button onClick={() => toggleFavorite({ name, type })} className={styles.favoriteButton}>
        {isFavorite ? '⭐' : '☆'}
      </button>
    </div>
  );
};

export default PokemonCard;
