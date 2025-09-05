// src/components/List/List.jsx
import PokemonCard from '../PokemonCard/PokemonCard';

const List = ({ list }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {list.map((item) => (
        <PokemonCard key={item.name} name={item.name} type={item.type} />
      ))}
    </div>
  );
};

export default List;
