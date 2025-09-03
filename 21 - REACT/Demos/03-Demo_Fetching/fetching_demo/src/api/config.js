import axios from 'axios';

// Configuration de base 

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // URL de base pour les requêtes API, API de test gratuite
    timeout: 10000, // 10 secondes de délai timeout
    headers: {
        'Content-Type': 'application/json',
    }
})