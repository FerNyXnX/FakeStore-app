import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Productos
export const getProducts = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);
export const getCategories = () => api.get('/products/categories');
export const getProductsByCategory = (category) => 
  api.get(`/products/category/${category}`);

// Autenticación
export const login = (credentials) => api.post('/auth/login', credentials);

// Usuarios
export const getUsers = () => api.get('/users');
export const getUser = (id) => api.get(`/users/${id}`);

export default api;