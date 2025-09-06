// src/components/List/List.jsx
import PokemonCard from '../PokemonCard/PokemonCard';

const List = ({ list, favorites, toggleFavorite }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {list.map((item) => (
        <PokemonCard
          key={item.name}
          name={item.name}
          type={item.type}
          isFavorite={favorites.some((fav) => fav.name === item.name)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default List;
