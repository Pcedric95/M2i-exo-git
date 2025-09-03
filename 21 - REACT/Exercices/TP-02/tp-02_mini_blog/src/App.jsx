import { useEffect, useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import { getPosts } from './services/api'
import './App.css'
import PostsPage from '../src/pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import CreatePostPage from './pages/CreatePostPage';
import Navigation from './components/Navigation';

function App() {
  const [posts, setPosts] = useState([]); // état où stocker les articles

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };
    fetchPosts(); // Appel de la fonction pour récupérer les articles
  }, []); // Lancer une seule fois quand composant charge

  return (
    <>
      
      <h1>Mini Blog</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostsPage posts={posts} />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
    </>
  )
}

export default App
