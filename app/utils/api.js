import axios from "axios";
const API_BASE = "http://localhost:8080";
export const fetchCategories = () => axios.get(`${API_BASE}/categories`);
export const fetchAllProducts = () => axios.get(`${API_BASE}/inventory`);
export const fetchProductsByCategory = (name) => axios.get(`${API_BASE}/
inventory/category/${name}`);
export const fetchLowStockProducts = () => axios.get(`${API_BASE}/inventory/
low-stock`);
export const searchProducts = (name) => axios.get(`${API_BASE}/inventory/
search`, { params: { name } });
export const fetchProductById = (id) => axios.get(`${API_BASE}/inventory/$
{id}`);