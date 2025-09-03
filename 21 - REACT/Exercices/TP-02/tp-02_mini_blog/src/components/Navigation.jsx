import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Accueil</Link>
            <Link to="/create">Créer un article</Link>
        </nav>
    );
};

export default Navigation;