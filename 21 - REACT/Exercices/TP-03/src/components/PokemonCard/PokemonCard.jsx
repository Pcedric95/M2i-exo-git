// src/components/PokemonCard/PokemonCard.jsx
import styles from './PokemonCard.module.css';

const PokemonCard = ({ name, type }) => {
  // URL pour les images des Pokémon (exemple avec PokeAPI ou images locales)
  const imageUrl = `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;

  // Type par couleur
  const typeColors = {
  Electrik: '#FFD700', // Jaune
  Plante: '#7CFC00',   // Vert
  Feu: '#FF4500',      // Orange
  Eau: '#1E90FF',      // Bleu
  Normal: '#A9A9A9',   // Gris
  Roche: '#A0522D',     // Marron
  Combat: '#8B0000',    // Rouge foncé
};


  return (
    <div className={styles.card} style={{ backgroundColor: typeColors[type] || '#FFFFFF' }}>
      <img src={imageUrl} alt={name} className={styles.image} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Pokémon"; }} />
      <h3>{name}</h3>
      <p className={styles.type}>Type: {type}</p>
    </div>
  );
};

export default PokemonCard;
