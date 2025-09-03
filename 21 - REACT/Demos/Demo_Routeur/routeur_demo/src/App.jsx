import "./App.css";
import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";

function App() {

  const users = () => {
    return [
      { id: 1, fullName: "John Doe" },
      { id: 2, fullName: "Jane Smith" },
      { id: 3, fullName: "Alice Johnson" }
    ];
  };


  return (
    <>
      <h1>Welcome to my first Router with React Router!</h1>

      <Routes>
        
        {/* CORRECTION : Le chemin parent doit avoir un path */}
        {/* Le chemin de toutes les routes ci-dessous commencera par "/" */}
        <Route path="/" element={<Layout />}>
        
          {/* Les routes enfants n'ont pas besoin d'avoir le / dans leur chemin */}
          <Route index path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* AJOUT : Une route d'index pour afficher la Home Page à l'URL de base (/) */}
          <Route index element={<Home />} />

          {/* AJOUT : Une route "catch-all" pour les pages non trouvées (404) */}
          <Route path="*" element={<NotFound />} />
        
        </Route>

      </Routes>
    </>
  );
}

// Le composant Layout rend la mise en page
const Layout = () => {
  // La fonction pour le style est correcte, mais le problème venait d'ailleurs.
  // On peut la définir à l'intérieur du composant.
  const getStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    backgroundColor: isActive ? "#f0f0f0" : "transparent"
  });

  return (
    <>
      <nav>
        {/* On passe la référence de la fonction au style */}
        <NavLink to="/home" style={getStyle}>
          Home
        </NavLink>{" "}
        {" | "}
        <NavLink to="/users" style={getStyle}>
          Users
        </NavLink>{" "}
        {" | "}
        <NavLink to="/about" style={getStyle}>
          About
        </NavLink>{" "}
        {" | "}
        <NavLink to="/contact" style={getStyle}>
          Contact
        </NavLink>
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
const Users = () => <h2>Users Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const NotFound = () => <h2>404 - Page not found</h2>;

export default App;
