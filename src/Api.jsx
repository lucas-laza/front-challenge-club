import axios from 'axios';

// Configuration d'Axios
const apiClient = axios.create({
  baseURL: 'http://localhost:3030', // URL de votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction de gestion des erreurs
const handleError = (error) => {
  if (error.response) {
    // Problèmes de réponse de serveur
    console.error('Response error:', error.response.data);
  } else if (error.request) {
    // Problèmes de requête envoyée, mais pas de réponse reçue
    console.error('Request error:', error.request);
  } else {
    // Erreurs diverses lors de la configuration de la requête
    console.error('Error:', error.message);
  }
  throw error;
};

// Auth
export const signup = async (userData) => {
  try {
    const response = await apiClient.post('/auth/signin', userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// Users
export const getAllUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (id, token) => {
  setAuthToken(token);
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (id, userData, token) => {
  setAuthToken(token);
  try {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// News
export const createNews = async (newsData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.post('/news', newsData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getAllNews = async () => {
  try {
    const response = await apiClient.get('/news');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await apiClient.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateNews = async (id, newsData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.put(`/news/${id}`, newsData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteNews = async (id) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.delete(`/news/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Events
export const createEvent = async (eventData) => {
  const token = localStorage.getItem('token'); // Récupérer le token du localStorage
  try {
    const response = await apiClient.post('/events', eventData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Ajouter le token dans le header
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getAllEvents = async () => {
  try {
    const response = await apiClient.get('/events');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateEvent = async (id, eventData) => {
  const token = localStorage.getItem('token'); // Récupérer le token du localStorage
  try {
    const response = await apiClient.put(`/events/${id}`, eventData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Ajouter le token dans le header
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteEvent = async (id) => {
  const token = localStorage.getItem('token');
  if (!id) {
    console.error('ID is undefined');
    throw new Error('ID is required to delete an event');
  }

  try {
    const response = await apiClient.delete(`/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
// Fonction pour inscrire un utilisateur à un événement
export const addUserToEvent = async (eventId, userData) => {
  try {
    const response = await apiClient.post(`/events/addUser`, {
      eventId: eventId,
      user: userData,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Contacts
export const createContact = async (contactData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.post('/contacts', contactData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getAllContacts = async () => {
  try {
    const response = await apiClient.get('/contacts');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getContactById = async (id) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.get(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateContact = async (id, contactData) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.put(`/contacts/${id}`, contactData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteContact = async (id) => {
  const token = localStorage.getItem('token');
  try {
    const response = await apiClient.delete(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
