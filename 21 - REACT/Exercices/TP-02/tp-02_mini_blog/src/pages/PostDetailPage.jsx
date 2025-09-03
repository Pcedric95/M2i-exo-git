import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById} from '../services/api'



const PostDetailPage = () => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams(); // Récupérer ID URL

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const postData = await getPostById(id);
          setPost(postData);
          setLoading(false);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération de l'article : ",
            error
          );
        }
      };
      fetchPost();
    }, [id]);

    if (loading) {
        return <div>Chargement de l'article...</div>;
    }

    if (!post) {
        return <div>Article non trouvé</div>;
    }


    return (
        <div>
            <h2> {post.title} </h2>
        </div>
    );
}

export default PostDetailPage