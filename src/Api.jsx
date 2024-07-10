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

export const deleteUser = async (id, token) => {
  setAuthToken(token);
  try {
    const response = await apiClient.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Events
export const createEvent = async (eventData) => {
  try {
    const response = await apiClient.post('/events', eventData);
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

export const getEventById = async (id) => {
  try {
    const response = await apiClient.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const response = await apiClient.put(`/events/${id}`, eventData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await apiClient.delete(`/events/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// News
export const createNews = async (newsData) => {
  try {
    const response = await apiClient.post('/news', newsData);
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
  try {
    const response = await apiClient.put(`/news/${id}`, newsData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await apiClient.delete(`/news/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Contacts
export const createContact = async (contactData) => {
  try {
    const response = await apiClient.post('/contacts', contactData);
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
  try {
    const response = await apiClient.get(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateContact = async (id, contactData) => {
  try {
    const response = await apiClient.put(`/contacts/${id}`, contactData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await apiClient.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
