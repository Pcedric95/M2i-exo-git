// src/components/Search/Search.jsx



// Composant de recherche responsable de l'affichage de l'input recherche
// N'utilise pas l'état mais les props pour lire la valeur et envoyer les changements
const Search = ({ searchTerm, onSearch }) => {
    return (
        <div>

            {/* Champ de recherche */}
            <label htmlFor="search">Rechercher un Pokémon :</label>
            <input
                id='search'
                type="text"
                placeholder="Rechercher un Pokémon..."
                value={searchTerm}
                onChange={onSearch} // Callback handler
            />
        </div>
    );
};
export default Search;