
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import PostForm from '../components/PostForm';

const CreatePostPage = () => {
    const navigate = useNavigate();

    const handleCreatePost = async (postData) => {
        try {
            await createPost(postData)
            navigate("/") // rediriger vers l'acceuil
        }catch (error) {
            console.error("Erreur dans la création de l'article :", error)
        }
    }
    return (
        <div>
            <h2>Créer un nouvel article</h2>
            <PostForm onSubmit={handleCreatePost}/>
        </div>
    );
};

export default CreatePostPage;