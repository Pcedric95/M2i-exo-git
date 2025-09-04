import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById} from '../services/api'
import './PostDetailPage.css';


const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostById(id);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Chargement de l'article...</div>;
  }

  if (!post) {
    return <div>Article non trouvé.</div>;
  }

  return (
    <div className="post-detail-container">
      <Link to="/" className="back-link">
        ← Retour à la liste
      </Link>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
