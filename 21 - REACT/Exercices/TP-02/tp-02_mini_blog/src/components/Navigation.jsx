import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation-bar">
            <Link to="/">Accueil</Link>
            <Link to="/create">Créer un article</Link>
        </nav>
    );
};

export default Navigation;
