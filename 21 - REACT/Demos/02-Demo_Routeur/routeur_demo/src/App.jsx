import "./App.css";
import { Link, Routes, Route, Outlet, NavLink, useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

// Définis les données initiales en dehors du composant pour qu'elles ne soient pas recréées à chaque rendu
const initialUsersData = [
    { id: 1, fullName: "John Doe" },
    { id: 2, fullName: "Jane Smith" },
    { id: 3, fullName: "Alice Johnson" },
];

function App() {
  const navigate = useNavigate();

    const [usersData, setUsersData] = useState(initialUsersData);

    const handleRemoveUser = (userId) => {
        setUsersData((state) => state.filter((user) => user.id !== userId));
        navigate("/users");
    };




    return (
        <>
            <h1>Welcome to my first Router with React Router!</h1>
            <Routes>
                {/* La route parent pour le Layout */}
                <Route path="/" element={<Layout />}>
                    {/* Les routes enfants qui seront rendues à l'intérieur */}
                    {/* Index pour la page d'accueil par défaut */}
                    <Route index element={<Home />} />
                    
                    <Route path="users">
                        <Route index element={<Users users={usersData} onRemoveUser={handleRemoveUser} />} />
                        <Route path=":userId" element={<UserDetail users={usersData} />} />
                    </Route>
                    
                    {/* CORRECTION : Les routes about et contact sont maintenant à l'intérieur du Layout */}
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

const Layout = () => {
    const getStyle = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        backgroundColor: isActive ? "#f0f0f0" : "transparent",
    });

    return (
        <>
            <nav>
                <NavLink to="/" style={getStyle}>Home</NavLink>
                {" | "}
                <NavLink to="/users" style={getStyle}>Users</NavLink>
                {" | "}
                <NavLink to="/about" style={getStyle}>About</NavLink>
                {" | "}
                <NavLink to="/contact" style={getStyle}>Contact</NavLink>
            </nav>
            <main
                style={{
                    padding: "1rem",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                }}
            >
                <Outlet />
            </main>
        </>
    );
};

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const NotFound = () => <h2>404 - Page not found</h2>;

const Users = ({ users, onRemoveUser }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const handleSearch = (event) => {
    const name = event.target.value;
    if (name) {
      // CORRECTION : On écrit la valeur dans le paramètre "search"
      setSearchParams({ search: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {users
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.fullName}</Link>
              <button
                type="button"
                onClick={() => onRemoveUser(user.id)}
                style={{ marginLeft: "1em" }}
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

const UserDetail = ({ users }) => {
    const { userId } = useParams();
    const user = users.find((u) => u.id === Number(userId));

    if (!user) {
        return <h2>Utilisateur non trouvé !</h2>;
    }


    return (
        <>
            <div>
                <h2>Détails de l'utilisateur</h2>
                <p>ID : {user.id}</p>
                <p>Nom : {user.fullName}</p>
            </div>
            <Link to={`/users`}>Back to Users</Link>
        </>
    );
};

export default App;