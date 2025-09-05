// src/components/List/List.jsx

const List = ({list}) => {
    return (
      <ul>
        {list.map((item) => ( 
            // Donner une clé unique à chaque élément de la liste
          <li key={item.name}>
            {item.name} ({item.type})
          </li>
        ))}
      </ul>
    );
};
export default List;