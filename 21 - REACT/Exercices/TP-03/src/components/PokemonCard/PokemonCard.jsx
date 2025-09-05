// src/components/PokemonCard/PokemonCard.jsx
import styles from './PokemonCard.module.css';

const PokemonCard = ({ name, type }) => {
  // URL pour les images des Pokémon (exemple avec PokeAPI ou images locales)
  const imageUrl = `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Pokémon"; }} />
      <h3>{name}</h3>
      <p className={styles.type}>Type: {type}</p>
    </div>
  );
};

export default PokemonCard;
