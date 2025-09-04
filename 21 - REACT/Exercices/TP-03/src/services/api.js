import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});


// Récupérer tous les articles
export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

// Récupérer un article par ID
export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};


// Créer un nouvel article

export const createPost = async (postData) => {
    const response = await api.post('/posts', postData);
    return response.data;
}