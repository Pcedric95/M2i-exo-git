import { useEffect, useState } from 'react'
import {api} from './api/config'

import './App.css'

function App() {

  // etat pour stocker les données reçues
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  // useEffect se déclenche quand le composant est monté
  useEffect(() => {
    console.log ("Composant monté, début du fetch");

    // fonction asynchrone pour récupérer les posts
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await api.get('/posts');

        // Mise à jour de l'état avec les données reçues
        setPosts(response.data);
        setLoading(false);

        console.log("Posts récupérés :", response.data.length);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h2>fetch simples</h2>

      {/* Affichage conditionnel des résultats */}
      {posts.length > 0 ? 
        (<div>
          <p>{posts.length} posts récupérés</p>
          {posts.slice(0, 3).map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <small>User ID: {post.userId}</small>
            </div>
          ))}
        </div>)
        : <p>Chargement des posts...</p>
      }

    </>
  )
}

export default App
