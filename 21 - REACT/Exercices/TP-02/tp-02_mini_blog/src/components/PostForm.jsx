
import { useState } from 'react';

const PostForm = ({ onSubmit }) => { 
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, body, userId: 1 });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
            <label>
                Titre:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '100%', padding: '8px' }}
                />
            </label>
            <label>
                Contenu:
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{ width: '100%', padding: '8px', minHeight: '100px' }}
                />
            </label>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: 'white', border: 'none' }}>
                Créer l'article
            </button>
        </form>
    );
};

export default PostForm;